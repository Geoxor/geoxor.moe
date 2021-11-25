<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <router-view />
  </div>
</template>

<style lang="postcss">
body,
html,
#app {
  @apply h-full w-full;
}

:root {
  --accent-color: #9448ff;
  --theme-100: #0c0d0f;
  --theme-200: #111215;
  --theme-300: #17191e;
  --theme-400: #1d2026;
  --theme-500: #2a2d34;
  --theme-600: #3e4147;
  --theme-700: #6d6e72;
  --theme-800: #a0a0a0;
  --theme-900: #b9b9b9;
}

* {
  @apply !outline-none fill-current;
  font-family: "Shippori Antique", sans-serif;
}
</style>
