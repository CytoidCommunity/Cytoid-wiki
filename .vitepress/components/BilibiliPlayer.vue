<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bvid: string
    aid: string
    cid: string
    p?: string
  }>(),
  {
    p: '1',
  },
)

const videoUrl = computed(() =>
  `https://player.bilibili.com/player.html?aid=${props.aid}&bvid=${props.bvid}&cid=${props.cid}&p=${props.p}&autoplay=0`,
)

const sourceUrl = computed(() =>
  `https://www.bilibili.com/video/${props.bvid}?zw`,
)
</script>

<template>
  <div class="tw-card tw-card-compact tw-shadow tw-bg-base-100 tw-my-4">
    <figure class="tw-aspect-video">
      <iframe
        class="tw-w-full tw-h-full"
        :src="videoUrl"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      />
    </figure>
    <div class="tw-card-body">
      <a class="!tw-no-underline" :href="sourceUrl" target="_blank">
        Bilibli: {{ bvid }}
      </a>
    </div>
  </div>
</template>
