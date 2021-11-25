<template>
  <router-link
    :to="{ name: 'downloads', params: { category } }"
    class="
      category
      border-2
      text-theme-600
      border-transparent
      hover:border-theme-700 hover:text-theme-700
      flex
      py-4
      px-6
      gap-4
      rounded-4px
    "
  >
    <div class="h-full flex items-center text-4xl">
      <slot />
    </div>
    <div class="flex gap-1 flex-col">
      <h1 class="capitalize">{{ category }}</h1>
      <p class="text-sm">{{ desc }}</p>
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
  @apply bg-white text-black border-transparent;
}
</style>
