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
  @apply h-full w-full bg-theme-100 text-contrast;
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
  @apply bg-contrast;
  border-radius: 20px;
  border: transparent;
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
