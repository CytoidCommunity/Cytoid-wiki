<template>
<v-btn
  rounded
  dark
  link
  style="text-decoration: none"
  :href="link" target="_blank"
>
  <v-icon>mdi-google-play</v-icon> Google Play
</v-btn>
</template>

<script>
export default {
  name: "PlayStore",
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.play-store-box
    display inline-block
.play-store
    display flex
    justify-content: center;
    align-items: center;
    height: 2rem
    min-height 2rem
    width 9rem
    min-width 9rem
    background-image linear-gradient(90deg,#7695ff,#9cafec)
    padding 1rem
    margin 0.3rem
    border-radius 2rem
    .link, .link:hover, .link:active, .link:visited
        color #fff
        text-decoration none!important
        user-select none
    .icon svg
        height: 2rem
body.darkmode
    .play-store
        background-image linear-gradient(90deg, #7087d7, #444c66)
</style>
