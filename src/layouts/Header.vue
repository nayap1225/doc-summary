<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Clock } from 'lucide-vue-next';
import ThemeToggle from '../components/ThemeToggle.vue';
import { useParserStore } from '../stores/parser';

const route = useRoute();
const router = useRouter();
const store = useParserStore();

const handleLogoClick = async () => {
  await store.createNewSession();
  router.push({ name: 'parser-setup' });
};
</script>

<template>
  <!-- Header -->
  <header class="sticky top-0 left-0 right-0 h-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-md dark:shadow-gray-700/20 z-50 flex items-center justify-between px-4 md:px-8 transition-colors duration-300 support-[backdrop-filter]:bg-white/50 gap-2">
    <div class="flex items-center gap-8">
      <!-- Logo -->
      <h1 @click="handleLogoClick" class="flex items-center gap-2 text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary dark:from-white dark:to-white cursor-pointer select-none hover:opacity-85 transition-opacity">
        <i class="block w-6 h-6 [mask-image:url(/src/assets/logo.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain] bg-primary dark:bg-white"></i>
        DOCBARO
      </h1>
    </div>
    <nav class="flex items-center gap-2 ml-auto">
      <router-link :to="{ name: 'session-list' }" class="flex items-center justify-center gap-2 px-1 py-1 rounded-lg transition-all duration-200 w-10 h-10 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-primary dark:text-white">
        <Clock class="w-5 h-5" />
        <span class="sr-only">작업 기록</span>
        <!-- <span class="text-sm">작업 기록</span> -->
      </router-link>
    </nav>
    <ThemeToggle />
  </header>
</template>

<style scoped></style>
