<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Clock } from "lucide-vue-next";
import ThemeToggle from "../components/ThemeToggle.vue";
import { useParserStore } from "../stores/parser";

const route = useRoute();
const router = useRouter();
const store = useParserStore();

const handleLogoClick = async () => {
  await store.createNewSession();
  router.push({ name: "parser-setup" });
};
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col"
  >
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 h-16 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 z-50 flex items-center justify-between px-4 md:px-8 transition-colors duration-300 support-[backdrop-filter]:bg-white/50"
    >
      <div class="flex items-center gap-8">
        <!-- Logo -->
        <h1
          @click="handleLogoClick"
          class="flex items-center gap-2 text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400 cursor-pointer select-none hover:opacity-80 transition-opacity"
        >
          <i
            class="block w-6 h-6 bg-[url(/src/assets/logo.svg)] bg-no-repeat bg-center bg-contain"
          ></i>
          DOCBARO
        </h1>
      </div>
      <nav class="flex items-center gap-2 ml-auto">
        <router-link
          :to="{ name: 'session-list' }"
          class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
          :class="[
            route.name === 'session-list'
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 font-semibold shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50',
          ]"
        >
          <Clock class="w-4 h-4" />
          <span class="sr-only">작업 기록</span>
          <!-- <span class="text-sm">작업 기록</span> -->
        </router-link>
      </nav>
      <ThemeToggle />
    </header>

    <!-- Page Content -->
    <main class="flex-1 p-4 md:p-8 pt-20 md:pt-24">
      <div class="max-w-7xl mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>
