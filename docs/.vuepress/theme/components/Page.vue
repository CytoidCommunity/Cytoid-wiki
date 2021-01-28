<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

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

export default {
  components: { PageEdit, PageNav },
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

    }
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
    border-top 1px solid #eaecef
</style>
