<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useParserStore } from "../stores/parser";
import { dbService, type SavedSession } from "../services/db";
import { Clock, FileText, Trash2, CalendarDays, Loader2, Star } from "lucide-vue-next";
import BaseButton from "../components/common/BaseButton.vue";

const router = useRouter();
const store = useParserStore();
const sessions = ref<SavedSession[]>([]);
const isLoading = ref(true);

const formatDate = (timestamp: number) => {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(timestamp));
};

const loadSessions = async () => {
  isLoading.value = true;
  try {
    const list = await dbService.getAllSessions();
    // Sort by updatedAt desc and filter out empty sessions
    sessions.value = list
      .filter(s => s.files && s.files.length > 0)
      .sort((a, b) => {
        // 1. Starred first
        if (a.isStarred && !b.isStarred) return -1;
        if (!a.isStarred && b.isStarred) return 1;
        // 2. UpdatedAt desc
        return b.updatedAt - a.updatedAt;
      });
  } catch (e) {
    console.error("Failed to load sessions", e);
  } finally {
    isLoading.value = false;
  }
};

const handleLoadSession = async (sessionId: string) => {
    // Confirm logic could go here
    const success = await store.loadSession(sessionId);
    if(success) {
        router.push({ name: 'parser-setup' }); // Main page
    }
};

const handleDeleteSession = async (sessionId: string) => {
    if(!confirm("정말 이 작업 기록을 삭제하시겠습니까?")) return;
    
    await store.removeSession(sessionId);
    await loadSessions(); // Refresh list
};

const handleToggleStar = async (session: SavedSession) => {
    await store.toggleSessionListItemStar(session.id);
    await loadSessions();
};

const handleNewSession = async () => {
    await store.createNewSession();
    router.push({ name: 'parser-setup' });
};

onMounted(() => {
  loadSessions();
});
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Clock class="w-7 h-7 text-indigo-500" />
          작업 기록
        </h1>
        <p class="text-gray-500 dark:text-gray-400 mt-1">
          저장된 이전 작업들을 불러오거나 관리할 수 있습니다.
        </p>
      </div>
      <BaseButton @click="handleNewSession" variant="primary">
        + 새 작업 시작
      </BaseButton>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 text-gray-400">
        <Loader2 class="w-10 h-10 animate-spin mb-3" />
        <p>기록을 불러오는 중...</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="sessions.length === 0" class="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center border border-dashed border-gray-300 dark:border-gray-700">
      <CalendarDays class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-200">저장된 작업이 없습니다</h3>
      <p class="text-gray-500 dark:text-gray-400 mt-1">파일을 업로드하고 요약을 시작하면 자동으로 저장됩니다.</p>
    </div>

    <!-- Session List -->
    <div v-else class="grid gap-4">
      <div 
        v-for="session in sessions" 
        :key="session.id"
        class="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1 min-w-0 cursor-pointer" @click="handleLoadSession(session.id)">
            <!-- Title / Date -->
            <div class="flex items-center gap-3 mb-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 ring-1 ring-inset ring-indigo-500/10 dark:ring-indigo-400/20">
                    {{ session.files.length }}개의 파일
                </span>
                <span class="text-xs font-medium text-gray-400 dark:text-gray-500">
                    {{ formatDate(session.updatedAt) }} 
                    <span v-if="session.createdAt !== session.updatedAt" class="ml-1 text-gray-300 dark:text-gray-600">• 수정됨</span>
                </span>
            </div>

            <!-- Content Preview -->
            <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <span v-if="session.title">{{ session.title }}</span>
                <span v-else-if="session.files?.length > 0">{{ session.files[0]?.fileName }} <span v-if="session.files.length > 1" class="font-normal text-gray-500 text-base">외 {{ session.files.length - 1 }}건</span></span>
                <span v-else class="text-gray-400 italic font-normal">빈 작업 공간</span>
            </h3>
            
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-1 flex items-center gap-1.5">
                <span v-if="session.files.some(f => f.summary)" class="flex items-center gap-1.5">
                    <FileText class="w-3.5 h-3.5 text-indigo-500"/>
                    <span class="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">요약 완료된 파일이 있습니다.</span>
                </span>
                <span v-else>
                    작업 내역이 저장되었습니다.
                </span>
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="{ 'opacity-100': session.isStarred }">
            <button 
                @click.stop="handleToggleStar(session)"
                class="p-2 rounded-lg transition-all duration-200"
                :class="session.isStarred ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-700'"
                title="중요 표시 토글"
            >
                <Star class="w-5 h-5" :class="{ 'fill-current': session.isStarred }" />
            </button>
            <BaseButton size="sm" variant="secondary" @click="handleLoadSession(session.id)">
                불러오기
            </BaseButton>
            <button 
                @click.stop="handleDeleteSession(session.id)"
                class="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                title="삭제"
            >
                <Trash2 class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
