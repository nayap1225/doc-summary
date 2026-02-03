<script setup lang="ts">
import { ref } from "vue";
import { useParserStore } from "../../stores/parser";
import BaseButton from "../common/BaseButton.vue";
import {
  FileText,
  FileOutput,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Circle,
  ChevronDown,
  Files,
  FileBox, // fallback or other icons
  Trash2,
  Minimize2,
  Square,
  Maximize2,
} from "lucide-vue-next";

const store = useParserStore();
const expandedItems = ref<Set<string>>(new Set());

const toggleExpand = (id: string) => {
  if (expandedItems.value.has(id)) {
    expandedItems.value.delete(id);
  } else {
    expandedItems.value.add(id);
  }
};

const collapseAll = () => {
  expandedItems.value.clear();
};

const expandAll = () => {
  store.files.forEach((f) => {
    if (f.summary) expandedItems.value.add(f.id);
  });
};

const toggleExpandAll = () => {
  if (expandedItems.value.size > 0) {
    collapseAll();
  } else {
    expandAll();
  }
};
</script>

<template>
  <div class="flex flex-col">
    <!-- Actions Bar -->
    <div
      v-if="store.files.length > 0"
      class="flex flex-col md:flex-row justify-between md:items-center pb-4 gap-2"
    >
      <h3 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
        <Files class="w-5 h-5 text-gray-500" />
        파일 목록 ({{ store.files.length }})
      </h3>
      <div class="flex gap-1 ml-auto md:mx-0 items-center">
        <template v-if="store.files.length > 0">
          <!-- Toggle Expand/Collapse All -->
          <BaseButton
            @click="toggleExpandAll"
            variant="secondary"
            size="sm"
            :title="expandedItems.size > 0 ? '전체닫기' : '전체열기'"
            :disabled="store.isGlobalProcessing"
          >
            <template #icon-left>
              <component
                :is="expandedItems.size > 0 ? Minimize2 : Maximize2"
                class="w-4 h-4"
              />
            </template>
            {{ expandedItems.size > 0 ? "전체닫기" : "전체열기" }}
          </BaseButton>

          <!-- Delete All -->
          <BaseButton
            @click="store.clearAll()"
            variant="danger"
            size="sm"
            title="전체 삭제"
            :disabled="store.isGlobalProcessing"
          >
            <template #icon-left>
              <Trash2 class="w-4 h-4" />
            </template>
            전체삭제
          </BaseButton>

          <span class="w-[2px] bg-gray-200 h-[16px] mx-2"></span>
        </template>

        <template v-if="!store.isGlobalProcessing">
          <BaseButton
            variant="secondary"
            size="sm"
            @click="store.parseAll()"
            :disabled="store.isGlobalProcessing"
          >
            <template #icon-left>
              <FileText class="w-4 h-4" />
            </template>
            전체추출
          </BaseButton>
          <BaseButton
            variant="primary"
            size="sm"
            @click="store.summarizeAll()"
            :disabled="store.isGlobalProcessing"
          >
            <template #icon-left>
              <FileOutput class="w-4 h-4" />
            </template>
            전체요약
          </BaseButton>
        </template>
        <template v-else>
          <BaseButton
            variant="danger"
            size="sm"
            @click="store.cancelProcessing()"
          >
            <template #icon-left>
              <Square class="w-4 h-4 fill-current" />
            </template>
            작업중단
          </BaseButton>
        </template>
      </div>
    </div>

    <!-- File List Section -->
    <div class="flex-1 overflow-y-auto space-y-2">
      <!-- Empty State -->
      <div
        v-if="store.files.length === 0"
        class="flex flex-col items-center justify-center h-64 text-gray-400"
      >
        <FileBox class="w-12 h-12 mb-3 opacity-50" />
        <p>파일을 업로드 해주세요.</p>
      </div>

      <!-- File Cards -->
      <transition-group name="list">
        <div
          v-for="item in store.files"
          :key="item.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <!-- Card Header / Actions -->
          <div class="p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <!-- Icon based on status -->
              <div
                v-if="item.status === 'idle'"
                class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
              >
                <Circle class="w-5 h-5" />
              </div>
              <div
                v-else-if="item.status === 'parsing'"
                class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"
              >
                <Loader2 class="w-5 h-5 animate-spin" />
              </div>
              <div
                v-else-if="item.status === 'done'"
                class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"
              >
                <CheckCircle2 class="w-5 h-5" />
              </div>
              <div
                v-else
                class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500"
              >
                <AlertCircle class="w-5 h-5" />
              </div>

              <div>
                <h4 class="font-medium text-gray-800">{{ item.file.name }}</h4>
                <p class="text-xs text-gray-400">
                  {{ (item.file.size / 1024).toFixed(1) }} KB
                </p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-1 items-center">
              <BaseButton
                v-if="item.status === 'idle'"
                variant="secondary"
                size="sm"
                @click="store.parseFile(item.id)"
              >
                <template #icon-left>
                  <FileText class="w-3.5 h-3.5" />
                </template>
                추출
              </BaseButton>
              <BaseButton
                v-if="item.status === 'idle'"
                variant="outline"
                size="sm"
                @click="store.summarizeFile(item.id)"
              >
                <template #icon-left>
                  <FileOutput class="w-3.5 h-3.5" />
                </template>
                요약
              </BaseButton>

              <span
                v-if="item.status === 'done'"
                class="flex items-center gap-2 text-sm text-green-600 font-medium"
              >
                <span
                  class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                  :class="
                    item.resultType === 'summary'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-gray-100 text-gray-800'
                  "
                >
                  {{ item.resultType === "summary" ? "요약" : "텍스트" }}
                </span>
              </span>

              <!-- Delete Button -->
              <button
                @click="store.removeFile(item.id)"
                class="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                :disabled="
                  item.status === 'parsing' || store.isGlobalProcessing
                "
                title="Remove file"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Summary Result -->
          <!-- Summary Result -->
          <!-- Summary Result -->
          <div
            v-if="item.summary && item.status !== 'error'"
            class="bg-gray-50 border-t border-gray-100 p-4"
          >
            <div class="cursor-pointer" @click="toggleExpand(item.id)">
              <div
                class="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-blue-600 select-none"
              >
                <span>펼쳐보기</span>
                <ChevronDown
                  class="w-4 h-4 ml-2 transition-transform"
                  :class="{ 'rotate-180': expandedItems.has(item.id) }"
                />
              </div>
            </div>

            <div
              v-show="expandedItems.has(item.id)"
              class="mt-3 prose prose-sm max-w-none bg-white p-4 rounded border border-gray-200 shadow-sm whitespace-pre-wrap max-h-[450px] overflow-y-auto"
            >
              {{ item.summary }}
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
