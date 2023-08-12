<template>
  <li class="hidden md:flex">
    <a class="flex items-center" target="_blank" :href="link">
      <i-fluency-instagram v-if="link.includes('instagram')" />
      <i-fluency-youtube v-if="link.includes('youtube')" />
      <i-fluency-twitter v-if="link.includes('twitter')" />
      <i-fluency-tank v-if="link.includes('newgrounds')" />
      <i-fluency-cloud v-if="link.includes('soundcloud')" />
      <i-fluency-discord v-if="link.includes('discord')" />
      <i-fluency-github v-if="link.includes('github')" />
      <i-fluency-bandcamp v-if="link.includes('bandcamp')" />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  title: string;
}>();
</script>

<style scoped lang="postcss"></style>
