import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { mockParserService } from '../services/mockParserService'
import { apiParserService } from '../services/apiParserService'

export interface FileItem {
  id: string
  file: File
  status: 'idle' | 'parsing' | 'done' | 'error'
  resultType?: 'extraction' | 'summary'
  summary?: string
}

export const useParserStore = defineStore('parser', () => {
  const files = ref<FileItem[]>([])

  // 전역 프로세싱 상태 (하나라도 파싱 중이면 true)
  const isGlobalProcessing = computed(() => files.value.some(f => f.status === 'parsing'))

  // AbortController for cancellation
  const abortController = ref<AbortController | null>(null)

  // 초기값: LocalStorage에 저장된 값이 있으면 사용, 없으면 기본값
  const savedPrompt = localStorage.getItem('systemPrompt')
  const systemPrompt = ref<string>(savedPrompt || '당신은 유용한 문서 요약 도우미입니다. 문서를 명확하고 간결하게 요약해주세요.')

  // 파일 목록 추가
  function addFiles(newFiles: FileList | File[]) {
    const fileArray = Array.isArray(newFiles) ? newFiles : Array.from(newFiles)
    fileArray.forEach(file => {
      files.value.push({
        id: crypto.randomUUID(),
        file,
        status: 'idle'
      })
    })
  }

  // 시스템 프롬프트 업데이트 (사용자 수정)
  async function updateSystemPrompt(newPrompt: string) {
    // 1. 낙관적 업데이트 (UI 먼저 반영)
    systemPrompt.value = newPrompt
    localStorage.setItem('systemPrompt', newPrompt)

    // 2. 서버 저장
    try {
      await apiParserService.saveSystemPrompt(newPrompt)
    } catch (error) {
      console.error('Failed to save system prompt to server:', error)
      // 필요 시 에러 처리 (예: 원복하거나 알림 표시)
    }
  }

  // 시스템 프롬프트 조회 (API)
  async function fetchSystemPrompt() {
    try {
      const prompt = await apiParserService.getSystemPrompt()
      if (prompt) {
        systemPrompt.value = prompt
        localStorage.setItem('systemPrompt', prompt)
      }
    } catch (error) {
      console.warn('Failed to fetch system prompt, using existing value.', error)
      // API 실패 시 기존 값(LocalStorage or Default) 유지
    }
  }

  // Controller Helper
  function ensureController() {
    if (!abortController.value || abortController.value.signal.aborted) {
      abortController.value = new AbortController()
    }
    return abortController.value
  }

  // Cleanup Helper
  function checkCleanup() {
    // If no files are analyzing, we can reset the controller
    if (!files.value.some(f => f.status === 'parsing')) {
      abortController.value = null
    }
  }

  // 개별 파일 요약 실행 (Analyze)
  async function summarizeFile(fileId: string, signal?: AbortSignal) {
    const item = files.value.find(f => f.id === fileId)
    if (!item) return

    // If signal not provided (individual click), attach to global controller
    const activeSignal = signal || ensureController().signal

    item.status = 'parsing'
    try {
      // Analyze 실행 (시스템 프롬프트 사용)
      console.log('[Store] Analyzing document...')
      const result = await apiParserService.analyzeDocument(item.file, systemPrompt.value, activeSignal)

      item.summary = result
      item.resultType = 'summary'
      item.status = 'done'
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log('Summarize canceled')
        item.status = 'idle' // Revert to idle on cancel
      } else {
        console.error('Analyze error:', error)
        item.status = 'error'
        item.summary = '요약 중 오류가 발생했습니다.'
      }
    } finally {
      if (!signal) checkCleanup()
    }
  }

  // 개별 파일 텍스트 추출 실행 (Parse)
  async function parseFile(fileId: string, signal?: AbortSignal) {
    const item = files.value.find(f => f.id === fileId)
    if (!item) return

    // If signal not provided (individual click), attach to global controller
    const activeSignal = signal || ensureController().signal

    item.status = 'parsing'
    try {
      // Parse 실행 (시스템 프롬프트 미사용)
      console.log('[Store] Extracting text...')
      const result = await apiParserService.parseDocument(item.file, activeSignal)

      item.summary = result
      item.resultType = 'extraction'
      item.status = 'done'
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log('Parse canceled')
        item.status = 'idle' // Revert to idle on cancel
      } else {
        console.error('Parse error:', error)
        item.status = 'error'
        item.summary = '텍스트 추출 중 오류가 발생했습니다.'
      }
    } finally {
      if (!signal) checkCleanup()
    }
  }

  // 전체 텍스트 추출 실행 (순차 처리)
  async function parseAll() {
    const targetFiles = files.value.filter(f => f.status === 'idle' || f.status === 'error')
    if (targetFiles.length === 0) return

    // 1. Mark all as parsing (Visual Feedback & Lock)
    targetFiles.forEach(f => f.status = 'parsing')

    // Init controller (shared)
    const controller = ensureController()

    try {
      for (const file of targetFiles) {
        // Check cancellation before start
        if (controller.signal.aborted) break

        await parseFile(file.id, controller.signal)
      }
    } finally {
      // Cleanup: If any are still 'parsing' (due to abort), reset them
      targetFiles.forEach(f => {
        if (f.status === 'parsing') f.status = 'idle'
      })
      checkCleanup()
    }
  }

  // 전체 요약 실행 (순차 처리)
  async function summarizeAll() {
    const targetFiles = files.value.filter(f => f.status === 'idle' || f.status === 'error')
    if (targetFiles.length === 0) return

    // 1. Mark all as parsing (Visual Feedback & Lock)
    targetFiles.forEach(f => f.status = 'parsing')

    // Init controller (shared)
    const controller = ensureController()

    try {
      for (const file of targetFiles) {
        // Check cancellation before start
        if (controller.signal.aborted) break

        await summarizeFile(file.id, controller.signal)
      }
    } finally {
      // Cleanup: If any are still 'parsing' (due to abort), reset them
      targetFiles.forEach(f => {
        if (f.status === 'parsing') f.status = 'idle'
      })
      checkCleanup()
    }
  }

  // 초기화 (Reset)
  function clearAll() {
    files.value = []
  }

  // 작업 취소 (전체 중단)
  function cancelProcessing() {
    if (abortController.value) {
      abortController.value.abort()
      // Do not nullify here, let checkCleanup handle it
    }
  }

  // 개별 파일 삭제
  function removeFile(fileId: string) {
    files.value = files.value.filter(f => f.id !== fileId)
  }

  return {
    files,
    systemPrompt,
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
    cancelProcessing
  }
})
