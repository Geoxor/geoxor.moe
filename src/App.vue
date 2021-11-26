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
*::-webkit-scrollbar {
  width: 6px;
  left: -100px;
}
*::-webkit-scrollbar-track,
*::-webkit-scrollbar-corner {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  @apply bg-theme-900;
  border-radius: 20px;
  border: transparent;
}

:root {
  --accent-color: 148, 72, 255;
  --theme-100: 12, 13, 15;
  --theme-200: 17, 18, 21;
  --theme-300: 23, 25, 30;
  --theme-400: 29, 32, 38;
  --theme-500: 42, 45, 52;
  --theme-600: 62, 65, 71;
  --theme-700: 109, 110, 114;
  --theme-800: 160, 160, 160;
  --theme-900: 185, 185, 185;
}

* {
  @apply !outline-none fill-current;
  font-family: "Shippori Antique", sans-serif;
}

/* Style aliases */
.padding {
  @apply xl:px-10/100 md:px-5/100 px-4/100;
}
.scrollable {
  overflow-y: overlay;
  overflow-x: initial;
}
</style>
