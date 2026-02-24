<script setup lang="ts">
import { useConfirmStore } from '../stores/confirm';
import { storeToRefs } from 'pinia';
import BaseButton from './common/BaseButton.vue';

const store = useConfirmStore();
const { isOpen, title, message } = storeToRefs(store);

const handleConfirm = () => {
  store.confirm();
};

const handleCancel = () => {
  store.cancel();
};
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" @click.self="handleCancel">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-sm overflow-hidden transform transition-all scale-100" role="dialog" aria-modal="true">
          <!-- Header (Optional title) -->
          <div class="p-5 pb-3">
            <div v-if="title" class="flex items-center gap-2 mb-2">
              <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">{{ title }}</h3>
            </div>

            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{{ message }}</p>
          </div>

          <!-- Footer Actions -->
          <div class="p-4 bg-gray-50 dark:bg-gray-700 flex justify-end gap-2">
            <BaseButton variant="secondary" @click="handleCancel">취소</BaseButton>
            <BaseButton variant="primary" @click="handleConfirm">확인</BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
