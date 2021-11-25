<template>
  <div class="flex flex-col items-center justify-start">
    <div class="flex gap-4">
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
