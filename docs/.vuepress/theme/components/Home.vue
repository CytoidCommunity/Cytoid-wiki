<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <div style="z-index: 1;">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        >

        <h1
          v-if="data.heroText !== null"
          id="main-title"
        >
          <span>
            {{ data.heroText || $title || 'Hello' }}
            <small>
              {{ data.heroVersion || '' }}
            </small>
          </span>
        </h1>

        <p
          v-if="data.tagline !== null"
          class="description"
        >
          {{ data.tagline || $description || 'Let\'s shape the music world together.' }}
        </p>

        <div
          class = "guide-btn-box"
        >
          <div
            v-if="data.subactionText && data.subactionLink"
            class="action"
          >
            <NavLink
              class="subaction-button"
              :item="subactionLink"
            />
          </div>

          <div
            v-if="data.actionText && data.actionLink"
            class="action"
          >
            <NavLink
              class="action-button"
              :item="actionLink"
            />
          </div>
        </div>

      </div>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
    <div class="background-img"> 123
    </div>
    <div class="background-dim"> 123
    </div>

  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    subactionLink () {
      return {
        link: this.data.subactionLink,
        text: this.data.subactionText
      }
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
html
  height 100%
body
  height 100%
  #app
    height 100%
.theme-container
  height 100%
  //background url("/site-source/pic/backgrounds/palescreen.jpg") center center / cover
.background-img
  background url("/./site-source/pic/background.jpg") center center / cover
  position fixed
  width 100vw
  height 100vh
  top 0
  right 0
  z-index -2
.background-dim
  position fixed
  background #ffffff
  opacity 0.7
  width 100vw
  height 100vh
  top 0
  right 0
  z-index -1
.home
  padding 15% 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display grid
  text-align center
  background #fffc
  position relative
  z-index 0
  .hero
    text-align center
    img
      max-width: 130px
      max-height 100%
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
      small
        font-size: 1rem;
        position : absolute;
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 20%)
    .guide-btn-box
      max-width 400px
      margin auto
      display inline-flex
    .subaction-button
      display inline-block
      margin 1em
      font-size 1.2rem
      color $accentColor
      background-color #fff
      padding 0.8rem 1.6rem
      border-radius 2rem
      transition background-color .1s ease
      box-sizing border-box
      border 2px solid darken($accentColor, 10%)
      &:hover
        color darken($accentColor, 50%)
    .action-button
      display inline-block
      margin 1em
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 2rem
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .subaction-button
        font-size 1rem
        padding 0.6rem 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
