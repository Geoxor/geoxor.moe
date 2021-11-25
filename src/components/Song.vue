<template>
  <div class="hover:bg-[#eee] rounded-4px overflow-hidden flex flex-col w-full">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <div class="w-24">
          <Cover :cover="cover" />
        </div>
        <div class="flex flex-col w-64">
          <h1 class="text-lg">{{ song.title }}</h1>
          <p class="text-theme-700">{{ song.artists.join(" & ") }}</p>
        </div>
        <p class="text-theme-700 w-32">{{ song.date }}</p>
        <label class="rounded-full border-2 select-none border-accent text-accent h-min px-2 py-0.5">{{ song.type }}</label>
      </div>
      <div class="flex items-center gap-4 px-4">
        <a
          target="_blank"
          :href="song.link"
          class="rounded-full border-2 border-accent select-none bg-accent h-min text-white px-4 py-2"
          >Download</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Song, Cover as ICover } from "~/interfaces";
import Cover from "./Cover.vue";
defineProps<{
  song: Song;
  cover?: ICover;
}>();
</script>
