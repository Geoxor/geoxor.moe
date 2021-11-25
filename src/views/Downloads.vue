<template>
  <div class="flex flex-col h-full xl:px-10/100 md:px-5/100 px-4/100 items-center justify-start">
    <div class="flex md:flex-row flex-col gap-4 w-full">
      <DownloadCategory category="music" desc="Download 320kbps mp3s of my music">
        <i-fluency-bass-clef />
      </DownloadCategory>
      <DownloadCategory category="covers" desc="High quality covers from my muisic">
        <i-fluency-cover />
      </DownloadCategory>
      <DownloadCategory category="assets" desc="Miscellaneous assets such as logos etc">
        <i-fluency-assets />
      </DownloadCategory>
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadCategory from "~/components/DownloadCategory.vue";
</script>

<style scoped lang="postcss"></style>
