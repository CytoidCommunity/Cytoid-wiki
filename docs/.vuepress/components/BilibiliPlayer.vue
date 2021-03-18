<template>
<div class="bili-player">
  <div class="player-box" allowfullscreen="true">
    <iframe class="player"  :src=getVideoURL frameborder="no" scrolling="no" allowfullscreen="true">
    </iframe>
  </div>
  <div class="source">
    <a :href="getSourceURL" target="_blank">
      Bilibli: {{this.bvid}}
      <span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span>
    </a>
  </div>
</div>
</template>

<script>

export default {
  name: "BilibiliPlayer",

  components: { },

  props: {
    bvid: {
      type: String,
      required: true
    },
    aid: {
      type: String,
      required: true
    },
    cid: {
      type: String,
      required: true
    },
  },

  computed: {
    getVideoURL() {
      const url = `https://player.bilibili.com/player.html?aid=${this.aid}&bvid=${this.bvid}&cid=${this.cid}&page=1&as_wide=1&high_quality=1&danmaku=0`
      return url
    },
    getSourceURL() {
      const url = `https://www.bilibili.com/video/${this.bvid}?zw`
      return url
    }
  },
  mounted() {
  },
};
</script>

<style lang="stylus">
.bili-player
  border-radius 6px
  background #6e6e6e1d
  padding 0rem 0rem 0.01rem 0rem
  .player-box
    position relative
    padding 30% 45%
    border-radius 6px
    .player
      position absolute
      border-radius 6px
      width 100%
      height 100%
      left 0
      top 0
  .source
    margin 1rem
</style>
