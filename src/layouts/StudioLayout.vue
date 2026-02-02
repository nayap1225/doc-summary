<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen bg-gray-50 text-gray-900">
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header (Mobile) -->
      <header class="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:hidden">
        <h1 class="text-lg font-bold">DOCIFY</h1>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-auto p-4 tb:p-8">
        <div class="max-w-7xl mx-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
