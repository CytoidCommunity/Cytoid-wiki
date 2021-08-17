<template>
<div class="app-store-box">
    <div class="app-store">
        <a :href="link" target="_blank" class="link">
        <span class="icon">
            <svg t="1629093633594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" data-spm-anchor-id="a313x.7781069.0.i0" width="32" height="32"><path d="M844.710861 895.760011c-42.655239 63.982858-89.576001 123.700192-157.824383 127.965716s-89.576001-42.655239-166.35543-42.655239-102.372573 38.389715-166.355431 42.655239c-68.248382 4.265524-119.434668-68.248382-162.089907-127.965716-85.310477-127.965716-153.558859-362.569528-63.982858-516.128387 42.655239-76.77943 123.700192-123.700192 209.01067-127.965716 63.982858 0 127.965716 42.655239 166.35543 42.655238s115.169144-55.45181 196.214098-46.920762c72.513906 4.265524 145.027811 38.389715 187.68305 102.372573-68.248382 42.655239-110.90362 115.169144-110.903621 196.214097 0 89.576001 55.45181 170.620954 136.496764 204.745146-12.796572 51.186286-38.389715 102.372573-68.248382 145.027811M554.655239 76.77943c38.389715-42.655239 93.841525-72.513906 149.293335-76.77943 4.265524 59.717334-12.796572 119.434668-51.186287 162.089907-34.124191 46.920762-93.841525 72.513906-149.293335 72.513905-8.531048-55.45181 12.796572-115.169144 51.186287-157.824382z" p-id="1222"></path></svg>
        </span>
        <span>App Store</span>
        </a>
</div>
</div>
</template>

<script>
export default {
  name: "AppStore",
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.app-store-box
    display inline-block
.app-store
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
        fill #fff
        height: 2rem
body.darkmode
    .app-store
        background-image linear-gradient(90deg, #7087d7, #444c66)
</style>
