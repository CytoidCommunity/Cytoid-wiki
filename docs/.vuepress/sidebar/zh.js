module.exports = {
  '/zh/guide/': [
    {
      title: "主页",
      sidebarDepth: 3,
      collapsable: false,
      children: [
        '',
        'start',
        '../about/wiki'
      ]
    }
  ],
  '/zh/gameplay/': [
    {
      title: "游玩",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        '',
        'installation',
        'play',
        'mods'
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
        'charting-and-you',
        'chart-json'
      ]
    }
  ],
  '/zh/storyboard/': [
    {
      title: "Storyboard",
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
        'wiki',
        'cytoid'
      ]
    }
  ]
}