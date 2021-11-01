const { fs, path } = require('@vuepress/shared-utils')
const localesConfig = require('./locales')

module.exports = ctx => ({
  evergreen: true,
  dest: './wiki-html',
  locales: localesConfig.locales,
  head: [
    ['link', { rel: 'icon', href: `/site-source/pic/cytoid-girl.png` }],
    ['link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/katex@0.7.0/dist/katex.min.css' }],
    // ['link', { rel: "stylesheet", href: "//cdn.jsdelivr.net/github-markdown-css/2.6.0/github-markdown.css" }]
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#7B69C8' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/site-source/pic/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#7B69C8' }],
    ['meta', { name: 'msapplication-TileImage', content: '/site-source/pic/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#7B69C8' }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    repo: 'CytoidCommunity/Cytoid-wiki',
    editLinks: true,
    // docsDir: 'packages/docs/docs',
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress',
    //   algoliaOptions: {
    //     facetFilters: ['tags:v1']
    //   }
    // }) : null,
    smoothScroll: true,
    locales: localesConfig.themeLocales,
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', {
      selector: "img:not(.no-zoom)",
      options: {
        background: "#000000cc"
      }
    }],
    // ['container', {
    //   type: 'vue',
    //   before: '<pre class="vue-container"><code>',
    //   after: '</code></pre>'
    // }],
    // ['container', {
    //   type: 'upgrade',
    //   before: info => `<UpgradePath title="${info}">`,
    //   after: '</UpgradePath>'
    // }],
    // ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-attrs'))
      md.use(require('markdown-it-deflist'))
    },
    lineNumbers: false
  }
})
