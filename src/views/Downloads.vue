<template>
  <div class="flex flex-col h-full gap-2 padding items-center justify-start">
    <div class="flex md:flex-row flex-col gap-2 w-full">
      <DownloadCategory category="songs" desc="Download 320kbps mp3s of my songs">
        <i-fluency-bass-clef />
      </DownloadCategory>
      <DownloadCategory category="covers" desc="High quality covers from my songs">
        <i-fluency-cover />
      </DownloadCategory>
      <DownloadCategory category="assets" desc="Miscellaneous assets such as logos etc">
        <i-fluency-assets />
      </DownloadCategory>
    </div>

    <div v-if="activeRoute == 'songs'" class="flex flex-col gap-2 w-full">
      <input
        class="rounded-4px p-2 border-2 border-transparent bg-theme-300 focus:border-accent"
        v-model="coverSearch"
        type="text"
        placeholder="Search for a song..."
      />
      <div class="flex flex-col" v-for="song in sortSongs(songResults)">
        <Song :song="song" :cover="covers.find((cover) => cover.name === song.cover)" />
        <div class="w-full h-1px mt-2 bg-theme-500"></div>
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
import { computed, ref } from "vue";

const coverSearch = ref("");

const route = useRoute();
const activeRoute = computed(() => route.params.category);
const covers = Object.values(import.meta.globEager("../assets/covers/*.json")) as ICover[];
const songs = Object.values(import.meta.globEager("../assets/songs/*.json")) as ISong[];

const songToString = (song: ISong): string =>
  [song.title, song.type, song.artists.join(" "), song.is_remix ? "remix" : undefined].join(" ").toLowerCase();

const sortSongs = (songs: ISong[]): ISong[] =>
  songs.sort((a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1));

const songResults = computed(() => {
  if (coverSearch.value) {
    const lowercase = coverSearch.value.toLowerCase();

    return songs.filter((song) => {
      if (songToString(song).includes(lowercase)) return song;
    });
  }
  return songs;
});
</script>

<style lang="postcss"></style>
