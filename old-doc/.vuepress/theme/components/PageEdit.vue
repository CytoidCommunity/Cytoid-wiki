<template>
  <footer class="page-edit">
    <div
      v-if="editLink"
      class="edit-link"
    >
      <a
        :href="editLink"
        target="_blank"
        rel="noopener noreferrer"
      >{{ editLinkText }}</a>
      <OutboundLink />
    </div>

    <div
      v-if="lastUpdated"
      class="last-updated"
    >
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div><div class="empty"><br></div>
    <div
      v-if="author"
      class="author"
    >
      <span class="prefix">{{ authorText }}:</span>
      <span class="name">{{ author }}</span>
    </div>
  </footer>
</template>

<script>
import isNil from 'lodash/isNil'
import { endingSlashRE, outboundRE } from '../util'

export default {
  name: 'PageEdit',

  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    author () {
      return this.$page.frontmatter.author
    },

    authorText () {
      if (typeof this.$themeLocaleConfig.author === 'string') {
        return this.$themeLocaleConfig.author
      }
      if (typeof this.$site.themeConfig.author === 'string') {
        return this.$site.themeConfig.author
      }
      return 'author'
    },

    editLink () {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink

      const {
        repo,
        docsDir = 'docs',
        docsBranch = 'main',
        docsRepo = repo
      } = this.$site.themeConfig

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        )
      }
      return null
    },

    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText
        || this.$site.themeConfig.editLinkText
        || `Edit this page`
      )
    }
  },

  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(docsRepo)) {
        const base = docsRepo
        return (
          base.replace(endingSlashRE, '')
          + `/src`
          + `/${docsBranch}/`
          + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
          + path
          + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const gitlab = /gitlab.com/
      if (gitlab.test(docsRepo)) {
        const base = docsRepo
        return (
          base.replace(endingSlashRE, '')
          + `/-/edit`
          + `/${docsBranch}/`
          + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
          + path
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
        + '/edit'
        + `/${docsBranch}/`
        + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
        + path
      )
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto

  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color $pageEditColor
  .author
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .name
      font-weight 400
      color $pageEditColor

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom 0.5rem
    .last-updated
      font-size 0.8em
      float none
      text-align left
    .author
      font-size 0.8em
      float none
      text-align left
    .empty
      br
        display none


body.darkmode
  .page-edit
    .edit-link
      a
        color lighten($textDarkColor, 25%)
    .last-updated
      .prefix
        color lighten($textDarkColor, 25%)
      .time
        color $pageEditDarkColor
    .author
      .prefix
        color lighten($textDarkColor, 25%)
      .name
        color $pageEditDarkColor
</style>
