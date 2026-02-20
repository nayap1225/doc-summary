import api from "../api/axios";

export const apiParserService = {
  // 실제 API에서는 파일 업로드 시 파싱이 포함될 수 있으므로,
  // 별도 파싱 단계가 없다면 이 함수는 생략하거나 파일 유효성 검사 등으로 대체 가능
  async parseToText(file: File): Promise<void> {
    // API 연결 시 별도 파싱 호출이 필요하다면 구현
    // 예: await api.post('/parse', formData)
    console.log(`[ApiService] Ready to process ${file.name}`);
  },

  // 1. 시스템 프롬프트가 있을 때: 분석 및 요약
  async analyzeDocument(file: File, systemPrompt: string, signal?: AbortSignal): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    // POST 요청 시 field name 확인 필요 (일단 system_prompt로 가정)
    formData.append("system_prompt", systemPrompt);

    try {
      const response = await api.post("/analyze-file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 300000, // 5 minutes
        signal,
      });
      return response.data.analysis || response.data;
    } catch (error) {
      console.error("[ApiService] Analyze failed:", error);
      throw error;
    }
  },

  // 2. 시스템 프롬프트가 없을 때: 단순 파싱
  async parseDocument(file: File, signal?: AbortSignal): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/parse-file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 300000, // 5 minutes
        signal,
      });
      return response.data.content || response.data;
    } catch (error) {
      console.error("[ApiService] Parse failed:", error);
      throw error;
    }
  },

  // 3. 오디오 파일 처리 (Dialize)
  async dializeFile(file: File, signal?: AbortSignal): Promise<string | any[]> {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/dialize", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 600000, // 10 minutes (Audio processing might take longer)
        signal,
      });

      const resultData = typeof response.data.result === "string" ? JSON.parse(response.data.result) : response.data.result;

      console.log(JSON.parse(response.data.result));

      if (Array.isArray(resultData)) {
        // Helper to parse time string (HH:mm:ss.ms) or number to seconds
        const parseTime = (input: string | number): number => {
          if (typeof input === "number") return input;
          if (!input) return 0;

          const str = input.toString();
          const parts = str.split(":");

          if (parts.length === 3) {
            // Case 1: mm:ss:ms (3 digits) -> Milliseconds
            if (parts[2]?.length === 3) {
              const minutes = parseFloat(parts[0] || "0");
              const seconds = parseFloat(parts[1] || "0");
              const milliseconds = parseFloat(parts[2] || "0");
              return minutes * 60 + seconds + milliseconds / 1000;
            }

            // Case 2: mm:ss:SS (2 digits) -> Centiseconds (1/100s)
            // e.g. "00:04:88" -> 0m 4s 880ms
            const p0 = parseFloat(parts[0] || "0");
            const p1 = parseFloat(parts[1] || "0");
            const p2 = parseFloat(parts[2] || "0");

            // Heuristic: If "seconds" part is >= 60, it's definitely NOT seconds.
            // Also if p0 is 0 and p2 is clearly a fraction.
            // Let's assume XX:XX:XX with 2-digit last part is mm:ss:SS if p2 >= 60 or based on user context.
            // User context suggests "00:04:88" is ~4.88s or 4m 0.88s?
            // Calculated earlier: 00:04:88 -> 4m 880ms fits best.
            // So: minutes : seconds : centiseconds
            if (p2 >= 60) {
              return p0 * 60 + p1 + p2 / 100;
            }

            // Standard HH:mm:ss fallback
            return p0 * 3600 + p1 * 60 + p2;
          }

          if (parts.length === 2) {
            const minutes = parseFloat(parts[0] || "0");
            const seconds = parseFloat(parts[1] || "0");
            return minutes * 60 + seconds;
          }
          return parseFloat(str);
        };

        // Helper to format seconds to HH:mm:ss:ms
        const formatSecondsToTime = (seconds: number): string => {
          const h = Math.floor(seconds / 3600);
          const m = Math.floor((seconds % 3600) / 60);
          const s = Math.floor(seconds % 60);
          const ms = Math.floor((seconds % 1) * 1000);

          return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${ms.toString().padStart(3, "0")}`;
        };

        return resultData.map((item: any) => {
          const startTime = parseTime(item.start_time || item.startTime || item["start-time"] || item.start || 0);
          const endTime = parseTime(item.end_time || item.endTime || item["end-time"] || item.end || 0);

          const durationSeconds = Math.max(0, endTime - startTime);
          const durationStr = formatSecondsToTime(durationSeconds);

          return {
            speaker: item.speaker,
            text: item.text,
            duration: durationStr,
          };
        });
      }

      return response.data.result || response.data;
    } catch (error) {
      console.error("[ApiService] Dialize failed:", error);
      throw error;
    }
  },

  async getSystemPrompt(): Promise<string> {
    try {
      const response = await api.get("/system-prompt", {
        timeout: 60000, // 1 minutes
      });
      // 응답이 { prompt: "..." } 형태라고 가정, 문자열 바로 반환이면 response.data
      return response.data.system_prompt || response.data;
    } catch (error) {
      console.error("[ApiService] Fetch System Prompt failed:", error);
      // 실패 시 빈 문자열 또는 에러 throw
      throw error;
    }
  },

  async saveSystemPrompt(prompt: string): Promise<void> {
    try {
      // 1. Query Parameter로 시도 (FastAPI 등에서 단일 파라미터는 쿼리로 인식하는 경우 많음)
      await api.post("/system-prompt", null, {
        params: { value: prompt },
        timeout: 60000, // 1 minutes
      });
    } catch (error: any) {
      console.error("[ApiService] Save System Prompt failed:", error);
      if (error.response) {
        // 객체 내부 구조(배열 등)를 확실히 보기 위해 JSON 문자열로 출력
        console.error("Error Details:", JSON.stringify(error.response.data, null, 2));
      }
      throw error;
    }
  },

  async judgeSystemPrompt(prompt: string): Promise<string> {
    try {
      const response = await api.get("/judge-system-prompt", {
        params: { prompt },
        timeout: 60000, // 1 minutes
      });
      // 응답 구조가 { evaluation: "..." } 형태라고 가정 (또는 plain text)
      return response.data.response || response.data;
    } catch (error) {
      console.error("[ApiService] Judge System Prompt failed:", error);
      throw error;
    }
  },

  async getExampleSystemPrompt(integer: number): Promise<string> {
    try {
      const response = await api.get("/example-system-prompt", {
        params: { integer },
        timeout: 60000, // 1 minutes
      });
      // 응답 구조가 { example: "..." } 형태라고 가정 (또는 plain text)
      return response.data.prompt || response.data;
    } catch (error) {
      console.error("[ApiService] Get Example System Prompt failed:", error);
      throw error;
    }
  },
};
