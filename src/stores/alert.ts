import { ref } from 'vue'
import { defineStore } from 'pinia'

type AlertType = 'info' | 'error' | 'warning' | 'success'

export const useAlertStore = defineStore('alert', () => {
  const isOpen = ref(false)
  const title = ref('')
  const message = ref('')
  const type = ref<AlertType>('info')

  function open(newTitle: string, newMessage: string, newType: AlertType = 'info') {
    title.value = newTitle
    message.value = newMessage
    type.value = newType
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    title,
    message,
    type,
    open,
    close
  }
})
