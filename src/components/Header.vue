<template>
  <header class="padding py-4 flex flex-col">
    <noscript class="bg-red-600 text-white text-sm py-1 px-2 w-full rounded-4px mb-2"
      >This site works better with Javascript enabled</noscript
    >
    <div class="flex items-center justify-between">
      <img class="logo h-4" src="../assets/geoxor_logo.svg" />
      <ul class="flex w-full justify-end text-contrast gap-4 items-center uppercase text-sm">
        <SocialMedia title="instagram" link="https://instagram.com/geoxor" />
        <SocialMedia title="youtube" link="https://www.youtube.com/geoxor" />
        <SocialMedia title="twitter" link="https://twitter.com/Geoxor" />
        <SocialMedia title="tank" link="https://geoxor.newgrounds.com" />
        <SocialMedia title="cloud" link="https://soundcloud.com/geoxor" />
        <SocialMedia title="discord" link="https://discord.gg/geoxor" />
        <SocialMedia title="github" link="https://github.com/Geoxor" />
        <li>
          <a target="_blank" href="https://store.geoxor.moe">Merch</a>
        </li>
        <li>
          <router-link :to="{ name: 'minecraft' }">Minecraft</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'downloads' }">Downloads</router-link>
        </li>
        <button
          class="flex items-center text-contrast"
          @click="themeState === 'dark' ? (themeState = 'light') : (themeState = 'dark')"
        >
          <i-fluency-moon />
        </button>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import SocialMedia from "~/components/SocialMedia.vue";
import { switchTheme } from "~/logic";
import { useLocalStorage } from "@vueuse/core";
import { watch } from "@vue/runtime-core";
const themeState = useLocalStorage("theme", "dark");
watch(themeState, () => switchTheme(themeState.value));
</script>

<style scoped lang="postcss">
header {
  @apply;
}

a.router-link-active {
  @apply text-accent;
}

ul > li {
  @apply hover:;
}
</style>
