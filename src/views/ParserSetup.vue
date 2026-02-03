<script setup lang="ts">
import { ref } from "vue";
import { useParserStore } from "../stores/parser";
import SystemPromptModal from "../components/SystemPromptModal.vue";
import FileUpload from "../components/parser/FileUpload.vue";
import DocumentList from "../components/parser/DocumentList.vue";
import BaseButton from "../components/common/BaseButton.vue";
import { Settings, RotateCcw, ChevronDown } from "lucide-vue-next";

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
import { apiParserService } from "../services/apiParserService";

const evaluationResult = ref<string>("");
const exampleResult = ref<string>("");
const isJudging = ref(false);
const isFetchingExample = ref(false);

// Input states
const judgeInput = ref("");
const exampleInput = ref<number | "">("");

const handleJudgePrompt = async () => {
  if (!judgeInput.value.trim()) {
    alert("프롬프트를 입력해주세요.");
    return;
  }
  isJudging.value = true;
  try {
    evaluationResult.value = await apiParserService.judgeSystemPrompt(
      judgeInput.value,
    );
  } catch (error) {
    evaluationResult.value = "Failed to evaluate prompt.";
  } finally {
    isJudging.value = false;
  }
};

const clearJudgeResult = () => {
  judgeInput.value = "";
  evaluationResult.value = "";
};

const clearExampleResult = () => {
  exampleInput.value = "";
  exampleResult.value = "";
};

const handleGetExample = async () => {
  if (typeof exampleInput.value !== "number") {
    alert("숫자를 입력해주세요.");
    return;
  }
  isFetchingExample.value = true;
  try {
    exampleResult.value = await apiParserService.getExampleSystemPrompt(
      exampleInput.value,
    );
  } catch (error) {
    exampleResult.value = "Failed to fetch example.";
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
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center gap-4"
      >
        <div class="mb-4">
          <h2 class="text-2xl font-bold text-gray-800">파일 업로드</h2>
          <p class="text-gray-500 text-sm">파일을 업로드 하고 요약해 보세요.</p>
        </div>

        <div class="flex gap-3 self-end md:self-auto">
          <BaseButton variant="secondary" @click="isModalOpen = true">
            <template #icon-left>
              <Settings class="w-4 h-4 text-gray-500" />
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
    <div class="border-t-2 border-dashed border-gray-200 pt-8">
      <button
        @click="isLabOpen = !isLabOpen"
        class="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4 hover:text-indigo-600 transition-colors"
      >
        <span>🧪 실험실 (Temporary)</span>
        <ChevronDown
          class="w-6 h-6 transition-transform duration-200"
          :class="{ 'rotate-180': !isLabOpen }"
        />
      </button>

      <div
        v-show="isLabOpen"
        class="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300"
      >
        <!-- Prompt Evaluation -->
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-semibold text-gray-700">프롬프트 평가</h4>
          </div>
          <div class="flex gap-2 mb-2 items-center">
            <input
              v-model="judgeInput"
              type="text"
              placeholder="평가할 프롬프트 입력"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full"
              @keyup.enter="handleJudgePrompt"
            />
            <BaseButton
              class="flex-none"
              size="md"
              variant="outline"
              :loading="isJudging"
              @click="handleJudgePrompt"
              :disabled="!judgeInput.trim()"
            >
              호출
            </BaseButton>
            <button
              @click="clearJudgeResult"
              class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition"
              title="초기화"
            >
              <RotateCcw class="w-4 h-4" />
            </button>
          </div>
          <div
            class="bg-white p-4 rounded-lg border border-gray-200 h-24 overflow-y-auto text-sm text-gray-600 whitespace-pre-wrap"
          >
            {{ evaluationResult || "평가 결과가 여기에 표시됩니다." }}
          </div>
        </div>

        <!-- Prompt Example -->
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-semibold text-gray-700">프롬프트 예시</h4>
          </div>
          <div class="flex gap-2 mb-2 items-center">
            <input
              v-model.number="exampleInput"
              type="number"
              placeholder="숫자 입력"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full"
              @keyup.enter="handleGetExample"
            />
            <BaseButton
              class="flex-none"
              size="md"
              variant="outline"
              :loading="isFetchingExample"
              @click="handleGetExample"
              :disabled="exampleInput === ''"
            >
              호출
            </BaseButton>
            <button
              @click="clearExampleResult"
              class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition"
              title="초기화"
            >
              <RotateCcw class="w-4 h-4" />
            </button>
          </div>
          <div
            class="bg-white p-4 rounded-lg border border-gray-200 h-24 overflow-y-auto text-sm text-gray-600 whitespace-pre-wrap"
          >
            {{ exampleResult || "프롬프트 예시가 여기에 표시됩니다." }}
          </div>
        </div>
      </div>
    </div>

    <!-- System Prompt Modal -->
    <SystemPromptModal
      :is-open="isModalOpen"
      :initial-prompt="store.systemPrompt"
      @close="isModalOpen = false"
      @save="saveSystemPrompt"
    />
  </div>
</template>
