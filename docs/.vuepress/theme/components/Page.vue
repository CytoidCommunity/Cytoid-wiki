<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />
    <div class="not-finish" v-if="isnotFinish">
      <p><strong>⚠</strong><strong>{{notFinishMsg}}</strong></p>
    </div>
    <PageNav v-bind="{ sidebarItems }" />
    <SideImage />

    <slot name="bottom" />
    <div
      v-if="footer"
      class="page-footer"
    >
      <div
        v-html="footer"
        class="inner"
      >
      </div>
    </div>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import SideImage from '@theme/components/SideImage.vue'

export default {
  components: { PageEdit, PageNav,
    SideImage },
  props: ['sidebarItems'],

  computed: {
    footer () {
      if (typeof this.$themeLocaleConfig.footer === 'string') {
        return this.$themeLocaleConfig.footer
      }
      if (typeof this.$site.themeConfig.footer === 'string') {
        return this.$site.themeConfig.footer
      }
      return ''

    },
    notFinishMsg () {
      const notFinishMsg = this.$themeLocaleConfig.notFinish
      return notFinishMsg
    },
    isnotFinish () {
      return !(this.$page.frontmatter.finish || false)
    }
  },
  updated () {
    function updateSideImg(){
      const floatIMG = document.querySelectorAll(".side-img")
      // console.log(floatIMG.length)
      const length = floatIMG.length
      for (let img = 0; img < length; img++ ) {
        // console.log(floatIMG[img])
        let oldImg = floatIMG[img]
        let src = oldImg.src;
        let info = oldImg.alt;

        let newItemIMG = document.createElement("img");
        newItemIMG.src = src;
        newItemIMG.setAttribute('data-orgain',src);
        newItemIMG.className = 'img-side medium-zoom-image';
        newItemIMG.alt = info;

        let newItemP = document.createElement("p");
        newItemP.innerHTML = info;

        let newItem = document.createElement("div");
        newItem.className = "img-side";

        newItem.appendChild(newItemIMG);
        newItem.appendChild(newItemP);
        // console.log(newItem)

        oldImg.before(newItem)
        floatIMG[img].style.display = "none"
        floatIMG[img].className = ''
      }
    }
    updateSideImg()
  },
  mounted () {
    function updateSideImg(){
      const floatIMG = document.querySelectorAll(".side-img")
      // console.log(floatIMG.length)
      for (let img = 0; img < floatIMG.length; img++ ) {
        // console.log(floatIMG[img])
        let oldImg = floatIMG[img]
        let src = oldImg.src;
        let info = oldImg.alt;

        let newItemIMG = document.createElement("img");
        newItemIMG.src = src;
        newItemIMG.setAttribute('data-orgain',src);
        newItemIMG.className = 'img-side medium-zoom-image';
        newItemIMG.alt = info;

        let newItemP = document.createElement("p");
        newItemP.innerHTML = info;

        let newItem = document.createElement("div");
        newItem.className = "img-side";

        newItem.appendChild(newItemIMG);
        newItem.appendChild(newItemP);
        // console.log(newItem)

        oldImg.before(newItem)
        floatIMG[img].style.display = "none"
        floatIMG[img].className = ''
      }
    }
    updateSideImg()
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
.page-footer
  @extend $wrapper
  padding-top 0
  padding-bottom 0
  .inner
    margin-top 0
    padding-top 1rem
    opacity 1
    border-top 1px solid $borderColor

.not-finish
  max-width 720px
  margin auto
  padding .1rem 1.5rem
  border-left-width .5rem
  border-left-style solid
  background-color rgba(255,229,100,.3)
  border-color darken(#ffe564, 35%)
  color darken(#ffe564, 70%)
  .custom-block-title
    color darken(#ffe564, 50%)
  a
    color $textColor
  strong
    margin 0 0.5rem


body.darkmode
  .page-footer
    .inner
      border-top 1px solid $borderDarkColor
  .not-finish
    background-color $indexBGDarkColor
    border-color darken($customBlocksWarnDarkColor, 35%)
    color darken($customBlocksWarnDarkColor, 50%)
    strong
      color $darken($customBlocksWarnDarkColor, 50%)

</style>
