<template>
<div class="play-store-box">
    <div class="play-store">
        <a :href="link" target="_blank" class="link">
        <span class="icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-google-play fa-w-16"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" class=""></path></svg>
        </span>
        <span>Google Play</span>
        </a>
</div>
</div>
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
