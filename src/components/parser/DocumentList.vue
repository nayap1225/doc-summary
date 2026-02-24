<script setup lang="ts">
import { ref } from 'vue';
import { useParserStore } from '../../stores/parser';
import BaseButton from '../common/BaseButton.vue';
import { formatFileSize } from '../../utils/formatters';
import { useAlertStore } from '../../stores/alert';
import { useConfirmStore } from '../../stores/confirm';
import {
  FileText,
  FileOutput,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  Files,
  FileBox, // fallback or other icons
  Trash2,
  Minimize2,
  Square,
  Maximize2,
  FileAudio,
  Mic,
  Star,
} from 'lucide-vue-next';

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
  store.files.forEach((f: any) => {
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
const confirm = useConfirmStore();

async function allDeleteHandler() {
  const isConfirmed = await confirm.open('전체 삭제', '정말 모든 파일을 삭제하시겠습니까?');
  if (isConfirmed) {
    store.clearAll();
  }
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Actions Bar -->
    <div v-if="store.files.length > 0" class="flex flex-col md:flex-row justify-between md:items-center pb-4 gap-2">
      <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
        <Files class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        파일 목록 ({{ store.files.length }})
      </h3>
      <div class="flex gap-1 ml-auto md:mx-0 items-center">
        <template v-if="store.files.length > 0">
          <!-- Toggle Expand/Collapse All -->
          <BaseButton @click="toggleExpandAll" variant="secondary" size="sm" :title="expandedItems.size > 0 ? '전체닫기' : '전체열기'" :disabled="store.isGlobalProcessing" text-class="hidden md:block">
            <template #icon-left>
              <component :is="expandedItems.size > 0 ? Minimize2 : Maximize2" class="w-4 h-4" />
            </template>
            {{ expandedItems.size > 0 ? '전체닫기' : '전체열기' }}
          </BaseButton>

          <!-- Delete All -->
          <BaseButton @click="allDeleteHandler" variant="danger" size="sm" title="전체 삭제" :disabled="store.isGlobalProcessing" text-class="hidden md:block">
            <template #icon-left>
              <Trash2 class="w-4 h-4" />
            </template>
            전체삭제
          </BaseButton>

          <span class="w-[2px] bg-gray-200 dark:bg-gray-700 h-[16px] mx-2"></span>
        </template>

        <template v-if="!store.isGlobalProcessing">
          <BaseButton variant="secondary" size="sm" @click="store.parseAll()" :disabled="store.isGlobalProcessing" text-class="hidden md:block">
            <template #icon-left>
              <FileText class="w-4 h-4" />
            </template>
            전체추출
          </BaseButton>
          <BaseButton variant="primary" size="sm" @click="store.summarizeAll()" :disabled="store.isGlobalProcessing" text-class="hidden md:block">
            <template #icon-left>
              <FileOutput class="w-4 h-4" />
            </template>
            전체요약
          </BaseButton>
        </template>
        <template v-else>
          <BaseButton variant="danger" size="sm" @click="store.cancelProcessing()">
            <template #icon-left>
              <Square class="w-4 h-4 fill-current" />
            </template>
            작업중단
          </BaseButton>
        </template>
      </div>
    </div>

    <!-- File List Section -->
    <div class="flex-1 space-y-2">
      <!-- Empty State -->
      <div v-if="store.files.length === 0" class="flex flex-col items-center justify-center h-64 text-gray-400">
        <FileBox class="w-12 h-12 mb-3 opacity-50" />
        <p>파일을 업로드 해주세요.</p>
      </div>

      <!-- File Cards -->
      <transition-group name="list">
        <div v-for="item in store.files" :key="item.id" class="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition duration-300">
          <!-- Card Header / Actions -->
          <div class="p-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <!-- Icon based on status or type -->
              <div v-if="item.status === 'idle'" class="w-9 h-9 rounded-2xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-500 transition-colors duration-300 flex-none">
                <!-- File Type Icon -->
                <FileAudio v-if="item.fileType === 'audio'" class="w-5 h-5" />
                <FileText v-else class="w-5 h-5" />
              </div>
              <div v-else-if="item.status === 'parsing'" class="w-9 h-9 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 flex items-center justify-center text-blue-500 flex-none">
                <Loader2 class="w-5 h-5 animate-spin" />
              </div>
              <div v-else-if="item.status === 'done'" class="w-9 h-9 rounded-2xl bg-green-50/50 dark:bg-green-900/10 flex items-center justify-center text-green-500 flex-none">
                <CheckCircle2 class="w-5 h-5" />
              </div>
              <div v-else class="w-9 h-9 rounded-2xl bg-red-50/50 dark:bg-red-900/10 flex items-center justify-center text-red-500">
                <AlertCircle class="w-5 h-5" />
              </div>

              <div>
                <span v-if="item.status === 'done'" class="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" :class="item.resultType === 'summary' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'">
                    {{ item.resultType !== 'summary' ? '텍스트' : item.fileType === 'audio' ? '오디오' : '문서요약' }}
                  </span>
                </span>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{{ item.file.name }}</h4>
                <p class="text-xs font-medium text-gray-400 mt-0.5 flex items-center gap-2">
                  <span>{{ formatFileSize(item.size || (item.file && item.file.size) || 0) }}</span>
                  <span v-if="item.status === 'done'" class="text-green-500 flex items-center gap-0.5"> <CheckCircle2 class="w-3 h-3" /> 완료됨 </span>
                </p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-1 items-center">
              <button v-if="item.status === 'done'" @click="store.toggleFileStar(item.id)" class="p-1.5 rounded-lg transition-colors" :class="item.isStarred ? 'text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20' : 'text-gray-300 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'" title="중요 파일 표시">
                <Star class="w-4 h-4" :class="{ 'fill-current': item.isStarred }" />
              </button>

              <!-- Delete Button -->
              <button @click="store.removeFile(item.id)" class="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed" :disabled="item.status === 'parsing' || store.isGlobalProcessing" title="Remove file">
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div v-if="item.status === 'idle'" class="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
            <BaseButton v-if="item.fileType !== 'audio'" variant="secondary" size="sm" @click="store.parseFile(item.id)">
              <template #icon-left>
                <FileText class="w-3.5 h-3.5" />
              </template>
              문자추출
            </BaseButton>
            <BaseButton variant="outline" size="sm" @click="store.summarizeFile(item.id)">
              <template #icon-left>
                <Mic v-if="item.fileType === 'audio'" class="w-3.5 h-3.5" />
                <FileOutput v-else class="w-3.5 h-3.5" />
              </template>
              {{ item.fileType === 'audio' ? '오디오' : '문서요약' }}
            </BaseButton>
          </div>

          <!-- Summary Result -->
          <!-- Summary Result -->
          <!-- Summary Result -->
          <div v-if="item.summary && item.status !== 'error'" class="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
            <div class="cursor-pointer p-4" @click="toggleExpand(item.id)">
              <div class="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 select-none">
                <span>펼쳐보기</span>
                <ChevronDown class="w-4 h-4 ml-2 transition-transform" :class="{ 'rotate-180': expandedItems.has(item.id) }" />
              </div>
            </div>

            <div v-show="expandedItems.has(item.id)" class="mt-3 prose prose-sm max-w-none bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-y-auto max-h-[500px]">
              <div v-if="Array.isArray(item.summary)" class="-m-4">
                <div v-for="(line, index) in item.summary" :key="index" class="flex gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0 bg-white dark:bg-gray-800 odd:bg-gray-100 dark:odd:bg-gray-700/50">
                  <span class="font-bold text-gray-800 dark:text-gray-200 flex-none">{{ line.speaker }} :</span>
                  <span class="text-gray-700 dark:text-gray-300 flex-1">{{ line.text }}</span>
                  <!-- <span class="text-xs text-gray-400 ml-2 whitespace-nowrap">({{ line.duration }})</span> -->
                </div>
              </div>
              <div v-else class="whitespace-pre-wrap leading-relaxed text-gray-700 dark:text-gray-300">
                {{ item.summary }}
              </div>
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
