<template>
  <div class="flex flex-col h-full gap-2 padding items-center justify-start">
    <div class="flex md:flex-row flex-col gap-2 w-full">
      <DownloadCategory category="music" desc="Download 320kbps mp3s of my music">
        <i-fluency-bass-clef />
      </DownloadCategory>
      <DownloadCategory category="covers" desc="High quality covers from my music">
        <i-fluency-cover />
      </DownloadCategory>
      <DownloadCategory category="assets" desc="Miscellaneous assets such as logos etc">
        <i-fluency-assets />
      </DownloadCategory>
    </div>

    <div v-if="activeRoute == 'music'" class="flex flex-col gap-2 w-full">
      <div v-for="song in songs">
        <Song :song="song" :cover="covers.find((cover) => cover.name === song.title)" />
        <div class="w-full h-1px bg-theme-[#eee]"></div>
      </div>
    </div>

    <div v-if="activeRoute == 'covers'" class="covers grid gap-2 grid-cols-2 md:grid-cols-5">
      <Cover v-for="cover of covers" :cover="cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadCategory from "~/components/DownloadCategory.vue";
import Cover from "~/components/Cover.vue";
import Song from "~/components/Song.vue";
import { Cover as ICover } from "~/interfaces";
import { Song as ISong } from "~/interfaces";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const activeRoute = computed(() => route.params.category);
const covers = Object.values(import.meta.globEager("../assets/covers/*.json")) as ICover[];
const songs = Object.values(import.meta.globEager("../assets/songs/*.json")) as ISong[];
</script>

<style lang="postcss"></style>
