const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
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
    ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
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
        lastUpdated: 'Last Updated',
        notFinish: 'Under Construction',
        footer: '<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span><br><span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span><br><span>Written by Discord Community and Localizers.</span><br><span>Published with <a href="https://github.com/vuejs/vuepress" target="_blank"><strong>VuePress</strong></a>. </span><span>Powered by <a href="https://vercel.com/" target="_blank"><strong>Vercel</strong></a>. </span>',
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
              sidebarDepth: 2,
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/en/charting/': [
            {
              title: "Getting Start",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'abc',
              ]
            },
            {
              title: "Charting Tools",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'tools/cylheim',
                'tools/pctyx',
                'tools/mobile',
                'tools/cy2unity',
                'tools/cyunity',
                'tools/other'
              ]
            },
            {
              title: "Testing with Cytoid",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'cytoid/level.json',
                'cytoid/packing'
              ]
            },
            {
              title: "Share on Cytoid IO",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'cytoidio/rules',
                'cytoidio/upload'
              ]
            },
            {
              title: "More",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'charting-and-you'
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
                'official',
                'community'
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
      },
      '/zh/': {
        label: '中文',
        selectText: '语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑',
        lastUpdated: '上次编辑',
        notFinish: '施工中',
        footer: '<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span><br><span>本页面是 <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> 的社区wiki. Cytoid 是由 <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> 和 <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a> 制作的社区节奏游戏.</span><br><span>由 Discord 社区及其他本地化人员编写.</span><br><span>使用 <a href="https://github.com/vuejs/vuepress" target="_blank"><strong>VuePress</strong></a> 为框架. </span><span>使用 <a href="https://vercel.com/" target="_blank"><strong>Vercel</strong></a> 发布. </span>',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/guide/': [
            {
              title: "主页",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'start',
                '../about/'
              ]
            }
          ],
          '/zh/gameplay/': [
            {
              title: "游玩",
              sidebarDepth: 2,
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/zh/charting/': [
            {
              title: "开始制谱",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'abc',
              ]
            },
            {
              title: "制谱工具",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'tools/cylheim',
                'tools/pctyx',
                'tools/mobile',
                'tools/cy2unity',
                'tools/cyunity',
                'tools/other'
              ]
            },
            {
              title: "使用 Cytoid 测试谱面",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'cytoid/level.json',
                'cytoid/packing'
              ]
            },
            {
              title: "在 Cytoid IO 分享谱面",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'cytoidio/rules',
                'cytoidio/upload'
              ]
            },
            {
              title: "更多",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'charting-and-you'
              ]
            }
          ],
          '/zh/storyboard/': [
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
          '/zh/events/': [
            {
              title: "活动",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'official',
                'community'
              ]
            }
          ],
          '/zh/about/': [
            {
              title: "关于",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'cytoid'
              ]
            }
          ]
        }
      },
      '/vi/': {
        label: 'Tiếng Việt',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        notFinish: 'Under Construction',
        footer: '<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span><br><span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span><br><span>Written by Discord Community and Localizers.</span><br><span>Published with <a href="https://github.com/vuejs/vuepress" target="_blank"><strong>VuePress</strong></a>. </span><span>Powered by <a href="https://vercel.com/" target="_blank"><strong>Vercel</strong></a>. </span>',
        nav: require('./nav/vi'),
        sidebar: {
          '/vi/guide/': [
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
          '/vi/gameplay/': [
            {
              title: "Gameplay",
              sidebarDepth: 2,
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/vi/charting/': [
            {
              title: "Getting Start",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'abc',
              ]
            },
            {
              title: "Charting Tools",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'tools/cylheim',
                'tools/pctyx',
                'tools/mobile',
                'tools/cy2unity',
                'tools/cyunity',
                'tools/other'
              ]
            },
            {
              title: "Testing with Cytoid",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'cytoid/level.json',
                'cytoid/packing'
              ]
            },
            {
              title: "Share on Cytoid IO",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'cytoidio/rules',
                'cytoidio/upload'
              ]
            },
            {
              title: "More",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                'charting-and-you'
              ]
            }
          ],
          '/vi/storyboard/': [
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
          '/vi/events/': [
            {
              title: "Events",
              sidebarDepth: 3,
              collapsable: false,
              children: [
                '',
                'official',
                'community'
              ]
            }
          ],
          '/vi/about/': [
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
  //   ['@vuepress/google-analytics', {
  //     ga: 'UA-128189152-1'
  //   }],
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
