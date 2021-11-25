<template>
  <div class="flex flex-col h-full gap-2 xl:px-10/100 md:px-5/100 px-4/100 items-center justify-start">
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

    <div class="covers grid gap-2 grid-cols-2 md:grid-cols-5">
      <Cover
        link="https://cdn.discordapp.com/attachments/755597803102928966/913312347261653032/artworks-GVEYc8cVrbdBgyx8-dbUR2Q-t500x500.png"
        name="Heal Her"
      />
      <Cover
        link="https://cdn.discordapp.com/attachments/755597803102928966/913312347261653032/artworks-GVEYc8cVrbdBgyx8-dbUR2Q-t500x500.png"
        name="Heal Her"
      />
      <Cover
        link="https://cdn.discordapp.com/attachments/755597803102928966/913312347261653032/artworks-GVEYc8cVrbdBgyx8-dbUR2Q-t500x500.png"
        name="Heal Her"
      />
      <Cover
        link="https://cdn.discordapp.com/attachments/755597803102928966/913312347261653032/artworks-GVEYc8cVrbdBgyx8-dbUR2Q-t500x500.png"
        name="Heal Her"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadCategory from "~/components/DownloadCategory.vue";
import Cover from "~/components/Cover.vue";
</script>

<style lang="postcss"></style>
