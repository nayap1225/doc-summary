<script setup lang="ts">
import CommonAlert from './components/CommonAlert.vue';
import CommonConfirm from './components/CommonConfirm.vue';
</script>

<template>
  <CommonAlert />
  <CommonConfirm />
  <router-view />
</template>
