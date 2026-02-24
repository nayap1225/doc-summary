<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useParserStore } from '../stores/parser';
import { dbService, type SavedSession } from '../services/db';
import { Clock, FileText, Trash2, CalendarDays, Loader2, Star, Pencil, Check, X } from 'lucide-vue-next';
import BaseButton from '../components/common/BaseButton.vue';
import { useConfirmStore } from '../stores/confirm';

const router = useRouter();
const store = useParserStore();
const sessions = ref<SavedSession[]>([]);
const isLoading = ref(true);

const editingSessionId = ref<string | null>(null);
const editingTitle = ref('');

const confirmStore = useConfirmStore();

const startEditing = (session: SavedSession) => {
  editingSessionId.value = session.id;
  editingTitle.value = session.title || '';
};

const cancelEditing = () => {
  editingSessionId.value = null;
  editingTitle.value = '';
};

const saveTitle = async (sessionId: string) => {
  if (!editingTitle.value.trim()) {
    alert('제목을 입력해주세요.');
    return;
  }
  const success = await store.updateSessionTitle(sessionId, editingTitle.value.trim());
  if (success) {
    editingSessionId.value = null;
    await loadSessions();
  }
};

const formatDate = (timestamp: number) => {
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(timestamp));
};

const loadSessions = async () => {
  isLoading.value = true;
  try {
    const list = await dbService.getAllSessions();
    console.log('[SessionList] Raw sessions from DB:', list);

    // Filter and sort: Show sessions that have at least one file with ANY processing result
    sessions.value = list
      .filter((s) => s.files && s.files.length > 0 && s.files.some((f) => f.resultType))
      .sort((a, b) => {
        if (a.isStarred && !b.isStarred) return -1;
        if (!a.isStarred && b.isStarred) return 1;
        return b.updatedAt - a.updatedAt;
      });

    console.log('[SessionList] Filtered sessions:', sessions.value);
  } catch (e) {
    console.error('Failed to load sessions', e);
  } finally {
    isLoading.value = false;
  }
};

const handleLoadSession = async (sessionId: string) => {
  // Confirm logic could go here
  const success = await store.loadSession(sessionId);
  if (success) {
    router.push({ name: 'parser-setup' }); // Main page
  }
};

const handleDeleteSession = async (sessionId: string) => {
  const isConfirm = await confirmStore.open('', '정말 이 작업 기록을 삭제하시겠습니까?');
  if (!isConfirm) return;

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

const handleClearAll = async () => {
  const isConfirm = await confirmStore.open('', '모든 작업 기록을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.');
  if (!isConfirm) return;

  await dbService.clearAll();
  // 현재 로드된 세션이 있다면 스토어도 초기화
  store.clearAll();
  await loadSessions(); // 목록 갱신
};

onMounted(() => {
  loadSessions();
});
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <div class="flex items-end justify-between flex-wrap gap-2">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Clock class="w-7 h-7 text-indigo-500" />
          작업 기록
        </h1>
        <p class="text-gray-500 dark:text-gray-400 mt-1">저장된 이전 작업들을 불러오거나 관리할 수 있습니다.</p>
      </div>
      <div class="flex gap-2 ml-auto">
        <BaseButton v-if="sessions.length > 0" @click="handleClearAll" variant="danger"> 전체 삭제 </BaseButton>
        <BaseButton @click="handleNewSession" variant="primary"> + 새 작업 시작 </BaseButton>
      </div>
    </div>

    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 text-gray-400">
      <Loader2 class="w-10 h-10 animate-spin mb-3" />
      <p>기록을 불러오는 중...</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="sessions.length === 0" class="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center border border-dashed border-gray-300 dark:border-gray-700">
      <CalendarDays class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-200">데이터를 찾을 수 없습니다</h3>
      <p class="text-gray-500 dark:text-gray-400 mt-1 pb-2">파일을 업로드하고 <span class="text-indigo-600 font-bold dark:text-indigo-400">요약을 하나라도 완료</span>해야 목록에 표시됩니다.</p>
      <BaseButton size="sm" variant="secondary" @click="handleNewSession" class="mt-4"> 문서 요약하러 가기 </BaseButton>
    </div>

    <!-- Session List -->
    <div v-else class="grid gap-4">
      <div v-for="session in sessions" :key="session.id" class="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        <div class="flex items-start justify-between">
          <div class="flex-1 min-w-0 cursor-pointer" @click="handleLoadSession(session.id)">
            <div class="flex justify-between gap-2">
              <!-- Title / Date -->
              <div class="flex flex-col items-start gap-2 mb-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 ring-1 ring-inset ring-indigo-500/10 dark:ring-indigo-400/20"> {{ session.files.filter((f) => f.resultType).length }}개의 분석 완료 </span>
                <span class="text-xs font-medium text-gray-400 dark:text-gray-500">
                  {{ formatDate(session.updatedAt) }}
                  <span v-if="session.createdAt !== session.updatedAt" class="ml-1 text-gray-300 dark:text-gray-600">• 수정됨</span>
                </span>
              </div>
              <!-- Actions -->
              <div class="flex flex-none items-start gap-1 group-hover:opacity-100 transition-opacity duration-300" :class="{ 'opacity-100': session.isStarred }">
                <button @click.stop="handleToggleStar(session)" class="p-2 rounded-lg transition-all duration-200" :class="session.isStarred ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-700'" title="중요 표시 토글">
                  <Star class="w-4 h-4" :class="{ 'fill-current': session.isStarred }" />
                </button>
                <!-- <BaseButton size="sm" variant="secondary" @click="handleLoadSession(session.id)"> 불러오기 </BaseButton> -->
                <button @click.stop="handleDeleteSession(session.id)" class="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="삭제">
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Content Preview -->
            <div class="flex items-center gap-1 group/title">
              <template v-if="editingSessionId === session.id">
                <input v-model="editingTitle" @click.stop @keyup.enter="saveTitle(session.id)" @keyup.esc="cancelEditing" class="flex-1 w-full bg-white dark:bg-gray-700 border-2 border-indigo-500 rounded-lg px-3 py-1 text-lg font-bold text-gray-900 dark:text-white focus:outline-none" autofocus />
                <button @click.stop="saveTitle(session.id)" class="p-1.5 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors">
                  <Check class="w-4 h-4" />
                </button>
                <button @click.stop="cancelEditing" class="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <X class="w-4 h-4" />
                </button>
              </template>
              <template v-else>
                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span v-if="session.title" class="w-full block text-ellipsis overflow-hidden whitespace-nowrap">{{ session.title }}</span>
                  <span v-else-if="session.files?.filter((f) => f.resultType).length > 0" class="w-full block text-ellipsis overflow-hidden whitespace-nowrap">
                    {{ session.files.find((f) => f.resultType)?.fileName }}
                    <span v-if="session.files.filter((f) => f.resultType).length > 1" class="font-normal text-gray-500 text-base"> 외 {{ session.files.filter((f) => f.resultType).length - 1 }}건 </span>
                  </span>
                  <span v-else class="text-gray-400 italic font-normal">빈 작업 공간</span>
                </h3>
                <button @click.stop="startEditing(session)" class="p-1 text-gray-400 hover:text-indigo-500 group-hover/title:opacity-100 transition-all" title="제목 수정">
                  <!-- <button @click.stop="startEditing(session)" class="p-1 text-gray-400 hover:text-indigo-500 opacity-0 group-hover/title:opacity-100 transition-all" title="제목 수정"> -->
                  <Pencil class="w-4 h-4" />
                </button>
              </template>
            </div>

            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-1 flex items-center gap-1.5">
              <span v-if="session.files.some((f) => f.resultType)" class="flex items-center gap-1.5">
                <FileText class="w-3.5 h-3.5 text-indigo-500" />
                <span class="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">분석 결과가 저장되어 있습니다.</span>
              </span>
              <span v-else> 작업 내역이 저장되었습니다. </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
