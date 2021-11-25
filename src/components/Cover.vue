<template>
  <div class="cursor-pointer box-content cover overflow-hidden rounded-4px relative w-full h-full">
    <div class="flex gap-2 bg-white text-black">
      <a target="_blank" :href="cover.original">
        <img class="w-full h-full" :src="previewCover" :alt="cover.name" />
      </a>

      <div class="flex flex-col gap-2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Cover } from "~/interfaces";

const props = defineProps<{
  cover: Cover;
}>();

const previewCover = computed(() => {
  if (props.cover.original.includes("discordapp")) {
    return props.cover.original.replace("cdn.discordapp.com", "media.discordapp.net") + "?width=325&height=325";
  }
  return props.cover.original;
});
</script>
