<script setup lang="ts">
import { ref } from 'vue'
import { useAlertStore } from '../../stores/alert'
import { UploadCloud } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'files-uploaded', files: FileList): void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

// 파일 유효성 검사 함수
const validateFiles = (fileList: FileList): File[] => {
  const allowedExtensions = ['txt', 'docx', 'pdf', 'hwp']
  const validFiles: File[] = []
  const invalidFiles: string[] = []

  Array.from(fileList).forEach(file => {
    const extension = file.name.split('.').pop()?.toLowerCase()
    if (extension && allowedExtensions.includes(extension)) {
      validFiles.push(file)
    } else {
      invalidFiles.push(file.name)
    }
  })

  if (invalidFiles.length > 0) {
    const alertStore = useAlertStore()
    alertStore.open(
      '지원하지 않는 파일',
      `다음 파일은 업로드할 수 없습니다:\n${invalidFiles.join('\n')}\n(지원 형식: TXT, DOCX, PDF, HWP)`,
      'error'
    )
  }

  return validFiles
}

// 파일 업로드 핸들러
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    const validFiles = validateFiles(target.files)
    if (validFiles.length > 0) {
      // DataTransfer 객체를 사용하여 FileList 생성 (Array -> FileList 변환 Trick)
      const dataTransfer = new DataTransfer()
      validFiles.forEach(file => dataTransfer.items.add(file))
      emit('files-uploaded', dataTransfer.files)
    }
    target.value = '' // 입력 초기화
  }
}

const onDrop = (event: DragEvent) => {
  isDragging.value = false
  if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
    const validFiles = validateFiles(event.dataTransfer.files)
    if (validFiles.length > 0) {
       const dataTransfer = new DataTransfer()
       validFiles.forEach(file => dataTransfer.items.add(file))
       emit('files-uploaded', dataTransfer.files)
    }
  }
}
</script>

<template>
  <div 
    class="border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer"
    :class="isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 bg-white'"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @drop.prevent="onDrop"
    @click="fileInput?.click()"
  >
    <input type="file" ref="fileInput" class="hidden" multiple @change="handleFileUpload" accept=".txt,.docx,.pdf,.hwp" />
    <div class="flex flex-col items-center justify-center gap-2 text-gray-500">
      <div class="flex items-center gap-2">
        <UploadCloud class="w-6 h-6" />
        <span class="font-medium">여기를 클릭하거나 파일을 드래그해서 업로드하세요.</span>
      </div>
      <p class="text-sm text-gray-500 mt-1">
        지원하는 포멧: <span class="font-semibold text-indigo-600">TXT, DOCX, PDF, HWP</span>
      </p>
    </div>
  </div>
</template>
