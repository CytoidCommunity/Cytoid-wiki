const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  evergreen: true,
  dest: './wiki-html',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Cytoid Wiki',
      description: 'A wiki for Cytoid and powered by community.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Cytoid Wiki',
      description: 'A wiki for Cytoid and powered by community.'
    },
    '/zh/': {
      lang: 'zh-Hans',
      title: 'Cytoid Wiki',
      description: '社区驱动的 Cytoid Wiki.'
    },
    '/vi/': {
      lang: 'vi',
      title: 'Cytoid Wiki',
      description: 'A wiki for Cytoid and powered by community.'
    }
  },
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
    locales: {
      '/':{
        label: 'Auto',
        selectText: '',
        ariaLabel: '',
        editLinkText: '',
        lastUpdated: ''
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Update',
        author: 'Author',
        notFinish: 'Hmm... Something went wrong? Please wait... We have not done yet :(',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span>
                  <span>Written by Discord Community and Localizers.</span>
                  <span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/en'),
        sidebar: require('./sidebar/en')
      },
      '/zh/': {
        label: '中文',
        selectText: '语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑',
        lastUpdated: '上次编辑',
        author: '作者',
        notFinish: '还没做完, 再咕咕咕一会(',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span>
                  <span>Written by Discord Community and Localizers.</span>
                  <span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh')
      },
      '/vi/': {
        label: 'Tiếng Việt',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        author: 'Author',
        notFinish: 'Under Construction',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span>
                  <span>Written by Discord Community and Localizers.</span>
                  <span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/vi'),
        sidebar: require('./sidebar/vi')
      }
    }
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
    ['image'],
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-128189152-1'
    // }],
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
      md.use(require('markdown-it-image-lazy-loading'))
    },
    lineNumbers: false
  }
})
