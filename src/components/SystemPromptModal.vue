<script setup lang="ts">
import { ref, watch } from "vue";
import BaseButton from "./common/BaseButton.vue";
import { X } from "lucide-vue-next";

const props = defineProps<{
  initialPrompt: string;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", prompt: string): void;
}>();

const localPrompt = ref(props.initialPrompt);

watch(
  () => props.initialPrompt,
  (newVal) => {
    localPrompt.value = newVal;
  },
  { immediate: true },
);

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      localPrompt.value = props.initialPrompt;
    }
  },
);
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="emit('close')"
    ></div>

    <!-- Modal Content -->
    <div
      class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all"
    >
      <!-- Header -->
      <div
        class="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-600"
      >
        <div>
          <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">요약 도우미</h3>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Agent의 응답 방식을 맞춤설정해서 사용해 보세요.
          </p>
        </div>
        <button
          @click="emit('close')"
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Body -->
      <div class="p-6">
        <textarea
          v-model="localPrompt"
          class="w-full h-64 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm leading-relaxed bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          placeholder="System Prompt를 입력하세요..."
        ></textarea>
        <div class="text-right text-xs text-gray-400">
          {{ localPrompt.length }}자 입력
        </div>
      </div>

      <!-- Footer -->
      <div
        class="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-end gap-2 border-t border-gray-100 dark:border-gray-600"
      >
        <BaseButton variant="secondary" @click="emit('close')">
          취소
        </BaseButton>
        <BaseButton variant="primary" @click="emit('save', localPrompt)">
          저장
        </BaseButton>
      </div>
    </div>
  </div>
</template>
