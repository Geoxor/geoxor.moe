<template>
  <router-link
    :to="{ name: 'downloads', params: { category } }"
    class="category w-full border-2 text-contrast border-transparent hover:border-accent hover:text-accent text-center sm:text-left sm:flex-row flex-col flex py-4 px-6 sm:gap-4 gap-1 rounded-4px"
  >
    <div class="h-full flex sm:justify-start justify-center items-center text-xl md:text-4xl">
      <slot />
    </div>
    <div class="flex gap-1 flex-col">
      <h1 class="capitalize">{{ category }}</h1>
      <p class="hidden md:flex text-sm">{{ desc }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  category: string;
  desc: string;
}>();
</script>

<style scoped lang="postcss">
.category.router-link-active {
  @apply bg-contrast text-text border-transparent;
}
</style>
