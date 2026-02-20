export interface ParsedDocument {
  name: string
  summary: string
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockParserService = {
  // 모의 파싱 (파일 내용을 텍스트로 추출했다고 가정)
  async parseToText(file: File): Promise<void> {
    console.log(`[MockService] Parsing text from ${file.name}...`)
    await delay(500) // 짧은 딜레이
  },

  // 모의 요약 (System Prompt를 반영한다고 가정)
  async summarizeDocument(file: File, systemPrompt: string): Promise<string> {
    console.log(`[MockService] Summarizing ${file.name} with prompt length: ${systemPrompt.length}...`)
    await delay(2000) // 2초 딜레이 (요약 생성 시간 시뮬레이션)

    return `
# 요약 결과: ${file.name}

이 문서는 사용자가 업로드한 파일에 대한 자동 요약 결과입니다. 
System Prompt 설정에 따라 요약의 톤(Tone)과 매너(Manner)가 달라질 수 있습니다.

## 핵심 내용
- ${file.name} 파일은 문서요약 프로젝트의 테스트 데이터입니다.
- 현재 시스템 프롬프트 길이: ${systemPrompt.length}자
- 파싱 엔진은 텍스트를 추출하고 LLM이 이를 분석하여 이 결과를 생성했습니다.

## 결론
이 문서는 성공적으로 처리되었으며, 추가적인 분석이 가능합니다.
    `.trim()
  }
}
