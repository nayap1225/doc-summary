import axios from 'axios';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { apiParserService } from '../services/apiParserService';
import { dbService, type SavedDocument } from '../services/db';

export interface FileItem {
  id: string;
  file: File;
  status: 'idle' | 'parsing' | 'done' | 'error';
  resultType?: 'extraction' | 'summary';
  summary?: string | any[];
  fileType: 'audio' | 'document';
  size: number;
  isStarred?: boolean;
}

export const useParserStore = defineStore('parser', () => {
  const files = ref<FileItem[]>([]);
  const sessionId = ref<string>('');
  const isStarred = ref(false);
  const isPersisting = ref(false); // DB 저장 중 여부
  const persistQueue = ref<Promise<void>>(Promise.resolve());

  // 전역 프로세싱 상태 (하나라도 파싱 중이면 true)
  const isGlobalProcessing = computed(() => files.value.some((f) => f.status === 'parsing'));

  // AbortController for cancellation
  const abortController = ref<AbortController | null>(null);

  // 초기값: LocalStorage에 저장된 값이 있으면 사용, 없으면 기본값
  const savedPrompt = localStorage.getItem('systemPrompt');
  const systemPrompt = ref<string>(savedPrompt || '당신은 유용한 문서 요약 도우미입니다. 문서를 명확하고 간결하게 요약해주세요.');

  // 내부 함수: DB에 현재 세션 저장
  const persistSession = async () => {
    const currentSessionId = sessionId.value;
    if (!currentSessionId) {
      console.warn('[Store] No sessionId, skipping persist.');
      return;
    }

    // 순차 저장 보장 (Promise chaining)
    persistQueue.value = persistQueue.value.then(async () => {
      try {
        isPersisting.value = true;

        // 현재 메모리 상태 캡처
        const currentFiles = files.value;
        const currentStarred = isStarred.value;

        // DB에서 기존 세션 조회 (파일들의 최초 생성일 등을 유지하기 위함)
        const existingSession = await dbService.getSession(currentSessionId);
        const existingFilesMap = new Map((existingSession?.files || []).map((f) => [f.id, f]));

        const savedDocs: SavedDocument[] = currentFiles.map((f) => {
          const existing = existingFilesMap.get(f.id);

          return {
            id: f.id,
            fileName: f.file.name,
            fileType: f.fileType,
            fileSize: f.size || existing?.fileSize || f.file.size || 0,
            // 최근 작업한 resultType이 있으면 그걸 쓰고, 아니면 기존 것 유지
            resultType: f.resultType || existing?.resultType,
            // extraction 결과 보존
            content: f.resultType === 'extraction' ? (typeof f.summary === 'string' ? f.summary : JSON.stringify(f.summary)) : existing?.content, // 기존 content 유지
            // summary 결과 보존
            summary: f.resultType === 'summary' ? f.summary : existing?.summary, // 기존 summary 유지
            isStarred: f.isStarred || existing?.isStarred,
            createdAt: existing?.createdAt || Date.now(),
            updatedAt: Date.now(),
          };
        });

        // 로그 및 검증
        const analysisCount = savedDocs.filter((d) => d.resultType).length;
        console.log(`[Store] Attempting to save session: ${currentSessionId}`);
        console.log(`[Store] Total files: ${savedDocs.length}, Processed: ${analysisCount}`);

        if (savedDocs.length > 0) {
          console.table(
            savedDocs.map((d) => ({
              name: d.fileName,
              type: d.resultType,
              hasContent: !!d.content,
              hasSummary: !!d.summary,
            })),
          );
        }

        const sessionData = {
          id: currentSessionId,
          files: savedDocs,
          isStarred: currentStarred,
          updatedAt: Date.now(),
          createdAt: existingSession ? existingSession.createdAt : Date.now(),
        };

        // [Fix] DataCloneError: Vue Proxies cannot be cloned to IndexedDB.
        // Use JSON.parse(JSON.stringify()) to ensure a clean, non-reactive object.
        const cleanSessionData = JSON.parse(JSON.stringify(sessionData));

        await dbService.saveSession(cleanSessionData);

        console.log('[Store] Session persistence successful.');
      } catch (error) {
        console.error('[Store] Fatal persistence error:', error);
      } finally {
        isPersisting.value = false;
      }
    });

    return persistQueue.value;
  };

  // 초기 로드: 세션 확인 및 복원
  (async () => {
    try {
      // 1. SessionStorage에서 ID 확인
      const storedSessionId = sessionStorage.getItem('parser_session_id');

      if (storedSessionId) {
        // 기존 세션 복원 시도
        sessionId.value = storedSessionId;
        const session = await dbService.getSession(storedSessionId);

        if (session && session.files.length > 0) {
          files.value = session.files.map((doc) => ({
            id: doc.id,
            file: new File([''], doc.fileName, { type: doc.fileType === 'audio' ? 'audio/mp3' : 'text/plain' }),
            status: doc.resultType ? 'done' : doc.summary ? 'error' : 'idle',
            resultType: doc.resultType,
            summary: doc.resultType === 'summary' ? doc.summary : doc.content,
            fileType: doc.fileType,
            size: doc.fileSize || 0,
          }));
        }
      } else {
        // 새 세션 생성
        const newId = crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              const r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
              return v.toString(16);
            });
        sessionId.value = newId;
        sessionStorage.setItem('parser_session_id', newId);
        // 빈 세션은 아직 DB에 저장하지 않음 (Lazy Save)
      }
    } catch (e) {
      console.error('Failed to init session:', e);
    }
  })();

  // 파일 목록 추가
  function addFiles(newFiles: FileList | File[]) {
    const fileArray = Array.isArray(newFiles) ? newFiles : Array.from(newFiles);
    fileArray.forEach((file) => {
      const id = crypto.randomUUID
        ? crypto.randomUUID()
        : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
              v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });
      // Store state 추가
      files.value.push({
        id,
        file,
        status: 'idle',
        fileType: detectFileType(file),
        size: file.size,
      });

      // DB 저장 (기본 정보)
      // dbService.saveDocument({ // This is now handled by persistSession
      //   id,
      //   fileName: file.name,
      //   fileType: detectFileType(file),
      //   fileSize: file.size,
      //   createdAt: Date.now(),
      //   updatedAt: Date.now(),
      // }).catch(err => console.error("DB Save Error:", err));
    });
    // DB 저장
    persistSession();
  }

  // 시스템 프롬프트 업데이트 (사용자 수정)
  async function updateSystemPrompt(newPrompt: string) {
    // 1. 낙관적 업데이트 (UI 먼저 반영)
    systemPrompt.value = newPrompt;
    localStorage.setItem('systemPrompt', newPrompt);

    // 2. 서버 저장
    try {
      await apiParserService.saveSystemPrompt(newPrompt);
    } catch (error) {
      console.error('Failed to save system prompt to server:', error);
    }
  }

  // 시스템 프롬프트 조회 (API)
  async function fetchSystemPrompt() {
    try {
      const prompt = await apiParserService.getSystemPrompt();
      if (prompt) {
        systemPrompt.value = prompt;
        localStorage.setItem('systemPrompt', prompt);
      }
    } catch (error) {
      console.warn('Failed to fetch system prompt, using existing value.', error);
    }
  }

  // Controller Helper
  function ensureController() {
    if (!abortController.value || abortController.value.signal.aborted) {
      abortController.value = new AbortController();
    }
    return abortController.value;
  }

  // Cleanup Helper
  function checkCleanup() {
    if (!files.value.some((f) => f.status === 'parsing')) {
      abortController.value = null;
    }
  }

  // 개별 파일 요약 실행 (Analyze)
  async function summarizeFile(fileId: string, signal?: AbortSignal) {
    const item = files.value.find((f) => f.id === fileId);
    if (!item) return;

    const activeSignal = signal || ensureController().signal;

    item.status = 'parsing';
    try {
      console.log(`[Store] Analyzing ${item.fileType}...`);

      let result: string | any[];
      if (item.fileType === 'audio') {
        result = await apiParserService.dializeFile(item.file, activeSignal);
      } else {
        result = await apiParserService.analyzeDocument(item.file, systemPrompt.value, activeSignal);
      }

      item.summary = result;
      item.resultType = 'summary';
      item.status = 'done';

      // DB 업데이트
      // const existingDoc = await dbService.getDocument(item.id); // This is now handled by persistSession
      // if (existingDoc) {
      //   await dbService.saveDocument({
      //     ...existingDoc,
      //     summary: result,
      //     resultType: "summary",
      //     updatedAt: Date.now(),
      //   });
      // }
      persistSession();
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log('Summarize canceled');
        item.status = 'idle';
      } else {
        console.error('Analyze error:', error);
        item.status = 'error';
        item.summary = '요약 중 오류가 발생했습니다.';
        await persistSession(); // 에러 상태(메시지)를 저장하여 새로고침 후에도 유지되게 함
      }
    } finally {
      if (!signal) checkCleanup();
    }
  }

  // 개별 파일 텍스트 추출 실행 (Parse)
  async function parseFile(fileId: string, signal?: AbortSignal) {
    const item = files.value.find((f) => f.id === fileId);
    if (!item) return;

    const activeSignal = signal || ensureController().signal;

    item.status = 'parsing';
    try {
      console.log(`[Store] Extracting text (Type: ${item.fileType})...`);

      let result: string | any[];
      if (item.fileType === 'audio') {
        result = await apiParserService.dializeFile(item.file, activeSignal);
      } else {
        result = await apiParserService.parseDocument(item.file, activeSignal);
      }

      item.summary = result;
      item.resultType = 'extraction';
      item.status = 'done';

      // DB 업데이트
      // const existingDoc = await dbService.getDocument(item.id); // This is now handled by persistSession
      // if (existingDoc) {
      //   await dbService.saveDocument({
      //     ...existingDoc,
      //     content: typeof result === 'string' ? result : JSON.stringify(result),
      //     resultType: "extraction",
      //     updatedAt: Date.now(),
      //   });
      // }
      persistSession();
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log('Parse canceled');
        item.status = 'idle';
      } else {
        console.error('Parse error:', error);
        item.status = 'error';
        item.summary = '텍스트 추출 중 오류가 발생했습니다.';
        await persistSession(); // 에러 상태를 저장하여 새로고침 후에도 유지되게 함
      }
    } finally {
      if (!signal) checkCleanup();
    }
  }

  // 전체 텍스트 추출 실행 (순차 처리)
  async function parseAll() {
    const targetFiles = files.value.filter((f) => f.status === 'idle' || f.status === 'error');
    if (targetFiles.length === 0) return;

    targetFiles.forEach((f) => (f.status = 'parsing'));
    const controller = ensureController();

    try {
      for (const file of targetFiles) {
        if (controller.signal.aborted) break;
        await parseFile(file.id, controller.signal);
      }
    } finally {
      targetFiles.forEach((f) => {
        if (f.status === 'parsing') f.status = 'idle';
      });
      checkCleanup();
    }
  }

  // 전체 요약 실행 (순차 처리)
  async function summarizeAll() {
    const targetFiles = files.value.filter((f) => f.status === 'idle' || f.status === 'error');
    if (targetFiles.length === 0) return;

    targetFiles.forEach((f) => (f.status = 'parsing'));
    const controller = ensureController();

    try {
      for (const file of targetFiles) {
        if (controller.signal.aborted) break;
        await summarizeFile(file.id, controller.signal);
      }
    } finally {
      targetFiles.forEach((f) => {
        if (f.status === 'parsing') f.status = 'idle';
      });
      checkCleanup();
    }
  }

  // 초기화 (Reset - 메모리만)
  function clearAll() {
    files.value = [];
    // dbService.clearAll(); // DB도 초기화 // This is now handled by persistSession for the current session
    persistSession(); // 빈 배열로 저장 (세션 내용 비우기)
  }

  // 작업 취소 (전체 중단)
  function cancelProcessing() {
    if (abortController.value) {
      abortController.value.abort();
    }
  }

  // 개별 파일 삭제
  function removeFile(fileId: string) {
    files.value = files.value.filter((f) => f.id !== fileId);
    // dbService.deleteDocument(fileId); // DB에서도 삭제 // This is now handled by persistSession
    persistSession(); // 삭제된 상태 반영
  }

  // 세션 불러오기 (Load)
  async function loadSession(targetSessionId: string) {
    try {
      const session = await dbService.getSession(targetSessionId);
      if (session) {
        // 현재 세션 ID 교체
        sessionId.value = session.id;
        sessionStorage.setItem('parser_session_id', session.id);
        isStarred.value = session.isStarred || false;

        // 파일 목록 복원 (처리 완료된 파일만)
        files.value = session.files
          .filter((doc) => doc.resultType) // 요약 또는 추출이 완료된 파일만 필터링
          .map((doc) => ({
            id: doc.id,
            file: new File([''], doc.fileName, { type: doc.fileType === 'audio' ? 'audio/mp3' : 'text/plain' }),
            status: 'done', // 필터링을 거쳤으므로 무조건 done 상태
            resultType: doc.resultType,
            summary: doc.resultType === 'summary' ? doc.summary : doc.content,
            fileType: doc.fileType,
            isStarred: doc.isStarred,
            size: doc.fileSize,
          }));

        return true;
      }
    } catch (e) {
      console.error('Failed to load session:', e);
    }
    return false;
  }

  // 세션 삭제
  async function removeSession(targetSessionId: string) {
    await dbService.deleteSession(targetSessionId);
    // 만약 현재 보고 있는 세션을 삭제했다면 초기화
    if (sessionId.value === targetSessionId) {
      clearAll();
      // 새 세션 생성 로직 (초기화와 동일)
      const newId = crypto.randomUUID();
      sessionId.value = newId;
      sessionStorage.setItem('parser_session_id', newId);
      persistSession();
    }
  }

  // 새 세션 생성 (초기화)
  async function createNewSession() {
    // clearAll()을 호출하면 현재 세션을 비워버리고 저장하므로,
    // 저장하지 않고 상태만 초기화해야 함.
    files.value = [];
    isStarred.value = false;
    // systemPrompt.value = ... (필요 시 초기화)

    // 새 아이디 발급
    const newId = crypto.randomUUID
      ? crypto.randomUUID()
      : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
    sessionId.value = newId;
    sessionStorage.setItem('parser_session_id', newId);

    // DB에 빈 세션 저장하지 않음 (Lazy Save: 파일 추가 시 저장됨)
    // DB에 빈 세션 저장하지 않음 (Lazy Save: 파일 추가 시 저장됨)
  }

  // 중요 표시 토글
  async function toggleSessionStar() {
    isStarred.value = !isStarred.value;
    await persistSession();
  }

  // 파일 중요 표시 토글
  async function toggleFileStar(fileId: string) {
    const file = files.value.find((f) => f.id === fileId);
    if (file) {
      file.isStarred = !file.isStarred;
      await persistSession();
    }
  }

  // 목록에서 세션 중요 표시 토글 (로드하지 않음)
  async function toggleSessionListItemStar(targetSessionId: string) {
    const session = await dbService.getSession(targetSessionId);
    if (session) {
      // Toggle
      session.isStarred = !session.isStarred;
      // [Fix] Safety wrap to prevent DataCloneError
      await dbService.saveSession(JSON.parse(JSON.stringify(session)));

      // 만약 현재 보고 있는 세션이라면 상태 동기화
      if (sessionId.value === targetSessionId) {
        isStarred.value = session.isStarred;
      }
    }
  }

  // 세션 제목 업데이트
  async function updateSessionTitle(targetSessionId: string, newTitle: string) {
    const session = await dbService.getSession(targetSessionId);
    if (session) {
      session.title = newTitle;
      session.updatedAt = Date.now();
      await dbService.saveSession(JSON.parse(JSON.stringify(session)));
      return true;
    }
    return false;
  }

  return {
    files,
    systemPrompt,
    isStarred,
    isGlobalProcessing,
    addFiles,
    updateSystemPrompt,
    fetchSystemPrompt,
    summarizeFile,
    parseFile,
    summarizeAll,
    parseAll,
    clearAll,
    removeFile,
    cancelProcessing,
    loadSession,
    removeSession,
    createNewSession,
    toggleSessionStar,
    toggleFileStar,
    toggleSessionListItemStar,
    updateSessionTitle,
  };
});

function detectFileType(file: File): 'audio' | 'document' {
  if (file.type.startsWith('audio/')) return 'audio';
  if (/\.(mp3|wav|m4a|ogg|wma|aac|flac)$/i.test(file.name)) return 'audio';
  return 'document';
}
