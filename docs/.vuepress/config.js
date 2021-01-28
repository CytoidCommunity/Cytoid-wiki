const { fs, path } = require('@vuepress/shared-utils')

module.exports = () => ({
  dest: './wiki-html',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Cytoid Wiki',
      description: 'A wiki for Cytoid and powered by community.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Cytoid Wiki',
      description: '社区驱动的Cytoid Wiki'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/site-source/pic/cytoid-girl.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#7B69C8' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    // repo: 'vuejs/vuepress',
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
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/guide/': [
            {
              title: "Home",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'start',
                '../about/'
              ]
            }
          ],
          '/en/gameplay/': [
            {
              title: "Gameplay",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'general',
                'mechanism'
              ]
            }
          ],
          '/en/charting/': [
            {
              title: "Charting ABC",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'level.json',
                'packing',
                'charting-and-you'
              ]
            },
            {
              title: "Charting with C2 format",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'c2/',
                'c2/cylheim',
                'c2/pctyx',
                'c2/cy2unity',
                'c2/mobile',
                'c2/other'
              ]
            },
            {
              title: "Charting with C1 format",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'c1/',
                'c1/pctyx',
                'c1/cyunity',
                'c1/cylheim'
              ]
            }
          ],
          '/en/storyboard/': [
            {
              title: "StroyBoard",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'specification'
              ]
            }
          ],
          '/en/events/': [
            {
              title: "Events",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'other'
              ]
            }
          ],
          '/en/about/': [
            {
              title: "About",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'cytoid'
              ]
            }
          ]
        }
      }
    }
  },
  // plugins: [
  //   ['@vuepress/back-to-top', true],
  //   ['@vuepress/pwa', {
  //     serviceWorker: true,
  //     updatePopup: true
  //   }],
  //   ['@vuepress/medium-zoom', true],
  //   // ['@vuepress/google-analytics', {
  //   //   ga: 'UA-128189152-1'
  //   // }],
  //   ['container', {
  //     type: 'vue',
  //     before: '<pre class="vue-container"><code>',
  //     after: '</code></pre>'
  //   }],
  //   ['container', {
  //     type: 'upgrade',
  //     before: info => `<UpgradePath title="${info}">`,
  //     after: '</UpgradePath>'
  //   }],
  //   ['flowchart']
  // ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]
})
