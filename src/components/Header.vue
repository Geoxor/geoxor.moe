<template>
  <header class="flex xl:px-10/100 md:px-5/100 px-4/100 py-4 items-center justify-between">
    <img class="h-4" src="../assets/geoxor_logo.svg" />
    <ul class="flex w-full justify-end text-theme-700 gap-4 items-center uppercase text-sm">
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
        <router-link :to="{ name: 'downloads', params: { category: 'music' } }">Downloads</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import SocialMedia from "~/components/SocialMedia.vue";
</script>

<style scoped lang="postcss">
header {
  @apply;
}

a.router-link-active {
  @apply text-accent;
}

ul > li {
  @apply hover:text-black;
}
</style>
