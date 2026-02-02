<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  block: false,
  type: 'button'
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 border border-transparent shadow-sm'
    case 'secondary':
      return 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 shadow-sm'
    case 'outline':
      return 'bg-transparent text-indigo-600 border border-indigo-200 hover:bg-indigo-50 focus:ring-indigo-500'
    case 'ghost':
      return 'bg-transparent text-gray-500 hover:bg-gray-100 focus:ring-gray-500'
    case 'danger':
      return 'bg-white text-red-600 border border-red-200 hover:bg-red-50 focus:ring-red-500'
    default:
      return 'bg-indigo-600 text-white hover:bg-indigo-700'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs'
    case 'md':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-6 py-3 text-base'
    default:
      return 'px-4 py-2 text-sm'
  }
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :type="type"
    :class="[
      baseClasses, 
      variantClasses, 
      sizeClasses, 
      { 'w-full': block, 'gap-[5px]': !loading && ($slots['icon-left'] || $slots['icon-right']) }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <div v-if="loading" class="mr-2">
      <svg class="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
    <slot name="icon-left" v-if="!loading"></slot>
    <span>
      <slot></slot>
    </span>
    <slot name="icon-right" v-if="!loading"></slot>
  </button>
</template>
