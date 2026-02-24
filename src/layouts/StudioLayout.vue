<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col">
    <Header />
    <!-- Page Content -->
    <main class="flex-1 p-4 md:p-8 pt-10 md:pt-12">
      <div class="max-w-4xl mx-auto">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>
