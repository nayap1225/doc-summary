<script setup lang="ts">
import { useAlertStore } from '../stores/alert'
import { storeToRefs } from 'pinia'

const store = useAlertStore()
const { isOpen, title, message, type } = storeToRefs(store)

const close = () => {
  store.close()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" @click.self="close">
        <div class="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden transform transition-all scale-100" role="dialog" aria-modal="true">
          
          <!-- Header (Optional by Type or just Title) -->
          <div class="p-5 pb-3">
             <div class="flex items-center gap-2 mb-2">
                <!-- Icon based on type -->
                <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <svg v-else-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
             </div>
             
             <p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{{ message }}</p>
          </div>

          <!-- Footer Actions -->
          <div class="p-4 bg-gray-50 flex justify-end">
             <button 
               @click="close"
               class="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition active:scale-95"
             >
               확인
             </button>
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
