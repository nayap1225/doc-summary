import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useConfirmStore = defineStore('confirm', () => {
  const isOpen = ref(false);
  const title = ref('');
  const message = ref('');
  let resolvePromise: ((value: boolean) => void) | null = null;

  async function open(newTitle: string, newMessage: string): Promise<boolean> {
    title.value = newTitle;
    message.value = newMessage;
    isOpen.value = true;

    return new Promise((resolve) => {
      resolvePromise = resolve;
    });
  }

  function confirm() {
    isOpen.value = false;
    if (resolvePromise) {
      resolvePromise(true);
      resolvePromise = null;
    }
  }

  function cancel() {
    isOpen.value = false;
    if (resolvePromise) {
      resolvePromise(false);
      resolvePromise = null;
    }
  }

  return {
    isOpen,
    title,
    message,
    open,
    confirm,
    cancel,
  };
});
