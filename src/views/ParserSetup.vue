<script setup lang="ts">
import { ref } from 'vue';
import { useParserStore } from '../stores/parser';
import SystemPromptModal from '../components/SystemPromptModal.vue';
import FileUpload from '../components/parser/FileUpload.vue';
import DocumentList from '../components/parser/DocumentList.vue';
import BaseButton from '../components/common/BaseButton.vue';
import { Settings, RotateCcw, ChevronDown, Plus, Star } from 'lucide-vue-next';

const store = useParserStore();
const isModalOpen = ref(false);
const isLabOpen = ref(false); // Default to open as per user usage context

// 컴포넌트 마운트 시 시스템 프롬프트 조회
store.fetchSystemPrompt();

// 파일 추가 핸들러
const onFilesUploaded = (files: FileList) => {
  store.addFiles(files);
};

// 시스템 프롬프트 저장 핸들러
const saveSystemPrompt = async (newPrompt: string) => {
  await store.updateSystemPrompt(newPrompt);
  isModalOpen.value = false;
  await store.fetchSystemPrompt();
};

// --- Temporary API Testing Logic ---
import { apiParserService } from '../services/apiParserService';
import { useAlertStore } from '../stores/alert';

const alertStore = useAlertStore();
const evaluationResult = ref<string>('');
const exampleResult = ref<string>('');
const isJudging = ref(false);
const isFetchingExample = ref(false);

// Input states
const judgeInput = ref('');
const exampleInput = ref<number | ''>('');

const handleJudgePrompt = async () => {
  if (!judgeInput.value.trim()) {
    alertStore.open('입력 오류', '프롬프트를 입력해주세요.', 'warning');
    return;
  }
  isJudging.value = true;
  try {
    evaluationResult.value = await apiParserService.judgeSystemPrompt(judgeInput.value);
  } catch (error) {
    evaluationResult.value = 'Failed to evaluate prompt.';
  } finally {
    isJudging.value = false;
  }
};

const clearJudgeResult = () => {
  judgeInput.value = '';
  evaluationResult.value = '';
};

const clearExampleResult = () => {
  exampleInput.value = '';
  exampleResult.value = '';
};

const handleGetExample = async () => {
  if (typeof exampleInput.value !== 'number') {
    alertStore.open('입력 오류', '숫자를 입력해주세요.', 'warning');
    return;
  }
  isFetchingExample.value = true;
  try {
    exampleResult.value = await apiParserService.getExampleSystemPrompt(exampleInput.value);
  } catch (error) {
    exampleResult.value = 'Failed to fetch example.';
  } finally {
    isFetchingExample.value = false;
  }
};

// -----------------------------------
</script>

<template>
  <div class="h-full flex flex-col gap-12">
    <section>
      <!-- Header Area -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <div class="">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">파일 업로드</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm">파일을 업로드 하고 요약해 보세요.</p>
        </div>

        <div class="flex gap-3 self-end md:self-auto">
          <BaseButton variant="primary" @click="store.createNewSession()">
            <template #icon-left>
              <Plus class="w-4 h-4" />
            </template>
            새 작업
          </BaseButton>
          <!-- <BaseButton :variant="store.isStarred ? 'primary' : 'secondary'" @click="store.toggleSessionStar()">
            <template #icon-left>
              <Star class="w-4 h-4" :class="{ 'fill-current': store.isStarred }" />
            </template>
            {{ store.isStarred ? '중요함' : '중요 표시' }}
          </BaseButton> -->
          <BaseButton variant="secondary" @click="isModalOpen = true">
            <template #icon-left>
              <Settings class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </template>
            프롬프트 설정
          </BaseButton>
        </div>
      </div>

      <!-- File Upload Component -->
      <FileUpload @files-uploaded="onFilesUploaded" />
    </section>

    <section>
      <!-- Document List Component -->
      <DocumentList />
    </section>

    <!-- Temporary API Testing Section -->
    <div class="border-t-2 border-dashed border-gray-200 dark:border-gray-700 pt-8 hidden">
      <button @click="isLabOpen = !isLabOpen" class="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        <span>🧪 실험실 (Temporary)</span>
        <ChevronDown class="w-6 h-6 transition-transform duration-200" :class="{ 'rotate-180': isLabOpen }" />
      </button>

      <div v-show="isLabOpen" class="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
        <!-- Prompt Evaluation -->
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-semibold text-gray-700 dark:text-gray-300">프롬프트 평가</h4>
          </div>
          <div class="flex gap-2 mb-2 items-center">
            <input v-model="judgeInput" type="text" placeholder="평가할 프롬프트 입력" class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full bg-white dark:bg-gray-700 dark:text-gray-100" @keyup.enter="handleJudgePrompt" />
            <BaseButton class="flex-none" size="md" variant="outline" :loading="isJudging" @click="handleJudgePrompt" :disabled="!judgeInput.trim()"> 호출 </BaseButton>
            <button @click="clearJudgeResult" class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition" title="초기화">
              <RotateCcw class="w-4 h-4" />
            </button>
          </div>
          <div v-if="evaluationResult" class="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 h-24 overflow-y-auto text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
            {{ evaluationResult }}
          </div>
        </div>

        <!-- Prompt Example -->
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-semibold text-gray-700 dark:text-gray-300">프롬프트 예시</h4>
          </div>
          <div class="flex gap-2 mb-2 items-center">
            <input v-model.number="exampleInput" type="number" placeholder="숫자 입력" class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full bg-white dark:bg-gray-700 dark:text-gray-100" @keyup.enter="handleGetExample" />
            <BaseButton class="flex-none" size="md" variant="outline" :loading="isFetchingExample" @click="handleGetExample" :disabled="exampleInput === ''"> 호출 </BaseButton>
            <button @click="clearExampleResult" class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition" title="초기화">
              <RotateCcw class="w-4 h-4" />
            </button>
          </div>

          <div v-if="exampleResult" class="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 h-24 overflow-y-auto text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
            {{ exampleResult }}
          </div>
        </div>
      </div>
    </div>

    <!-- System Prompt Modal -->
    <SystemPromptModal :is-open="isModalOpen" :initial-prompt="store.systemPrompt" @close="isModalOpen = false" @save="saveSystemPrompt" />
  </div>
</template>
