import { defineLocale } from './utils'

export const zh = defineLocale({
  lang: 'zh-CN',
  label: '中文 (简体)',
  fallback: '该页面尚未有 **中文 (简体)** 版本, 现为您提供此页面的 **{fallback}** 版本',
  outdated: '该页面内容可能已过时.',
  search: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        displayDetails: '显示详情',
        resetButtonTitle: '清除查询条件',
        backButtonTitle: '返回上一级',
        noResultsText: '无法找到相关结果',
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
        },
      },
    },
  },

  themeConfig: {
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    editLink: {
      pattern: 'https://github.com/cytoid/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      message: '基于 CC BY-NC-SA 4.0 许可发布',
      copyright: `版权所有 © 2020-${new Date().getFullYear()} Cytoid Wiki Team`,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    // Navbar
    nav: [
      { text: '首页', link: '/zh/home/' },
      {
        text: '指南',
        items: [
          { text: '游玩', link: '/zh/guide/gameplay/download' },
          { text: '制谱', link: '/zh/guide/charting/' },
          { text: '故事板 (Storyboard)', link: '/zh/guide/storyboard' },
        ],
      },
      { text: '活动', link: '/zh/event/cytoid' },
      {
        text: '参考',
        items: [
          { text: '社区', link: '/zh/reference/community/rules' },
          { text: '游戏内元素', link: '/zh/reference/game/setting' },
          { text: '关卡 / 谱面', link: '/zh/reference/chart/cytoidlevel' },
          { text: '故事板', link: '/zh/reference/storyboard/specification' },
        ],
      },
      {
        text: '更新日志',
        items: [
          { text: 'Wiki', link: '/zh/changelog/wiki' },
          { text: '游戏本体', link: '/zh/changelog/game' },
          { text: 'Cytoid.io', link: '/zh/changelog/web' },
        ],
      },
    ],

    // Sidebar
    sidebar: {
      '/zh/home/': [
        {
          text: 'Cytoid Wiki',
          items: [
            { text: '首页', link: '/zh/home/' },
            {
              text: '指南',
              items: [
                { text: '游玩', link: '/zh/guide/gameplay/download' },
                { text: '制谱', link: '/zh/guide/charting/' },
                { text: '故事板 (Storyboard)', link: '/zh/guide/storyboard' },
              ],
            },
            { text: '活动', link: '/zh/event/cytoid' },
            {
              text: '参考',
              items: [
                { text: '社区', link: '/zh/reference/community/rules' },
                { text: '游戏内元素', link: '/zh/reference/game/setting' },
                { text: '关卡 / 谱面', link: '/zh/reference/chart/cytoidlevel' },
                { text: '故事板', link: '/zh/reference/storyboard/specification' },
              ],
            },
          ],
        },
        {
          text: '关于',
          items: [
            { text: 'Wiki', link: '/zh/home/about' },
            { text: 'Cytoid', link: '/zh/home/about-cytoid' },
          ],
        },
      ],
      '/zh/guide/': [
        {
          text: '游玩',
          collapsed: false,
          items: [
            { text: '下载游戏', link: '/zh/guide/gameplay/download' },
            { text: '谱面获取', link: '/zh/guide/gameplay/levels' },
            { text: '游戏玩法', link: '/zh/guide/gameplay/play' },
          ],
        },
        {
          text: '制谱',
          collapsed: false,
          items: [
            {
              text: '开始制谱',
              link: '/zh/guide/charting/',
              collapsed: false,
              items: [
                { text: '引言', link: '/zh/guide/charting/' },
                { text: '音频剪辑', link: '/zh/guide/charting/audio' },
                { text: '谱面编辑器', link: '/zh/guide/charting/editors' },
              ],
            },
            {
              text: '制谱工具',
              link: '/zh/guide/charting/tools/cylheim',
              collapsed: true,
              items: [
                { text: 'Cylheim', link: '/zh/guide/charting/tools/cylheim' },
                { text: 'PCtyx', link: '/zh/guide/charting/tools/pctyx' },
                { text: '移动端编辑器', link: '/zh/guide/charting/tools/mobile' },
                { text: 'Cy2unity', link: '/zh/guide/charting/tools/cy2unity' },
                { text: 'Cyunity', link: '/zh/guide/charting/tools/cyunity' },
                { text: '其他', link: '/zh/guide/charting/tools/other' },
              ],
            },
            {
              text: '测试谱面',
              link: '/zh/guide/charting/packing',
              collapsed: true,
              items: [
                { text: 'level.json', link: '/zh/guide/charting/level-json' },
                { text: '谱面打包', link: '/zh/guide/charting/packing' },
              ],
            },
            {
              text: '上传谱面',
              link: '/zh/guide/charting/upload',
              items: [
                { text: '上传到 Cytoid.io', link: '/zh/guide/charting/upload' },
                { text: '内容规章', link: '/zh/reference/community/content-rule' },
              ],
            },
          ],
        },
        {
          text: '故事板',
          collapsed: false,
          items: [
            { text: '故事板基础', link: '/zh/guide/storyboard' },
            { text: '故事板参考', link: '/zh/reference/storyboard/specification' },
          ],
        },
      ],
      '/zh/event/': [{
        text: '活动',
        collapsed: false,
        items: [
          { text: 'Cytoid 游戏内活动', link: '/zh/event/cytoid' },
          {
            text: 'Cytoid 官方活动',
            link: '/zh/event/official/',
            items: [
              { text: 'Charting Contest', link: '/zh/event/official/charting-contest' },
              { text: 'Octopus 锦标赛', link: '/zh/event/official/octopus' },
            ],
          },
          { text: 'Cytoid 社区活动', link: '/zh/event/community' },
        ],
      }],
      '/zh/reference/': [
        {
          text: '社区',
          collapsed: false,
          items: [
            { text: '社区准则', link: '/zh/reference/community/rules' },
            { text: '内容规章', link: '/zh/reference/community/content-rule' },
          ],
        },
        {
          text: '游戏内元素',
          collapsed: false,
          items: [
            { text: '游戏设置', link: '/zh/reference/game/setting' },
            { text: 'Mods', link: '/zh/reference/game/mods' },
          ],
        },
        {
          text: '关卡 / 谱面',
          collapsed: false,
          items: [
            { text: 'Cytoidlevel 文件', link: '/zh/reference/chart/cytoidlevel' },
            { text: 'level.json 文件', link: '/zh/reference/chart/level-json' },
            { text: 'C1 谱面文件', link: '/zh/reference/chart/c1-format' },
            { text: 'C2 谱面文件', link: '/zh/reference/chart/c2-format' },
            { text: 'Qualified 准则', link: '/zh/reference/chart/qualified' },
          ],
        },
        {
          text: '故事板',
          collapsed: false,
          items: [
            { text: 'Storyboard 参考', link: '/zh/reference/storyboard/specification' },
          ],
        },
      ],
      '/zh/changelog/': [{
        text: '更新日志',
        collapsed: false,
        items: [
          { text: 'Wiki', link: '/zh/changelog/wiki' },
          { text: '游戏', link: '/zh/changelog/game' },
          {
            text: 'Cytoid.io',
            items: [
              { text: '网页', link: '/zh/changelog/website' },
              { text: 'API', link: '/zh/changelog/services' },
            ],
          },
        ],
      }],
    },
  },
})
