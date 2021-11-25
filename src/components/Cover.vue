<template>
  <div class="cursor-pointer cover overflow-hidden rounded-4px w-full h-full">
    <img class="w-full h-full" :src="link" :alt="name" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  name: string;
}>();
</script>
