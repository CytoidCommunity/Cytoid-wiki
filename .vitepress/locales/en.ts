import { defineLocale } from './utils'

export const en = defineLocale({
  lang: 'en-US',
  label: 'English',
  fallback: 'This page has no **English** version yet, displaying the **{fallback}** version for your convenience.',
  outdated: 'This page may be outdated.',
  search: {},

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/cytoid/wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the CC BY-NC-SA 4.0 DEED.',
      copyright: `Copyright © 2020-${new Date().getFullYear()} Cytoid Wiki Team`,
    },

    // Navbar
    nav: [
      { text: 'Home', link: '/en/home/' },
      {
        text: 'Guide',
        items: [
          { text: 'Gameplay', link: '/en/guide/gameplay/download' },
          { text: 'Charting', link: '/en/guide/charting/' },
          { text: 'Storyboard', link: '/en/guide/storyboard' },
        ],
      },
      { text: 'Event', link: '/en/event/cytoid' },
      {
        text: 'Reference',
        items: [
          { text: 'Community', link: '/en/reference/community/rules' },
          { text: 'In-game', link: '/en/reference/game/setting' },
          { text: 'Level / Chart', link: '/en/reference/chart/cytoidlevel' },
          { text: 'Storyboard', link: '/en/reference/storyboard/specification' },
        ],
      },
      {
        text: 'Changelog',
        items: [
          { text: 'Wiki', link: '/en/changelog/wiki' },
          { text: 'Game', link: '/en/changelog/game' },
          { text: 'Cytoid.io', link: '/en/changelog/web' },
        ],
      },
    ],

    // Sidebar
    sidebar: {
      '/en/home/': [
        {
          text: 'Cytoid Wiki',
          items: [
            { text: 'Home', link: '/en/home/' },
            {
              text: 'Guide',
              items: [
                { text: 'Gameplay', link: '/en/guide/gameplay/download' },
                { text: 'Charting', link: '/en/guide/charting/' },
                { text: 'Storyboard', link: '/en/guide/storyboard' },
              ],
            },
            { text: 'Event', link: '/en/event/cytoid' },
            {
              text: 'Reference',
              items: [
                { text: 'Community', link: '/en/reference/community/rules' },
                { text: 'In-game', link: '/en/reference/game/setting' },
                { text: 'Level / Chart', link: '/en/reference/chart/cytoidlevel' },
                { text: 'Storyboard', link: '/en/reference/storyboard/specification' },
              ],
            },
          ],
        },
        {
          text: 'About',
          collapsed: true,
          items: [
            { text: 'Wiki', link: '/en/home/about' },
            { text: 'Cytoid', link: '/en/home/about-cytoid' },
          ],
        },
      ],
      '/en/guide/': [
        {
          text: 'Ganmeplay',
          collapsed: false,
          items: [
            { text: 'Installing Cytoid', link: '/en/guide/gameplay/download' },
            { text: 'Getting levels', link: '/en/guide/gameplay/levels' },
            { text: 'Gameplay', link: '/en/guide/gameplay/play' },
          ],
        },
        {
          text: 'Charting',
          collapsed: false,
          items: [
            {
              text: 'Getting started',
              link: '/en/guide/charting/',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/guide/charting/' },
                { text: 'Audio editing', link: '/en/guide/charting/audio' },
                { text: 'Chart editors', link: '/en/guide/charting/editors' },
              ],
            },
            {
              text: 'Charting tools',
              link: '/en/guide/charting/tools/cylheim',
              collapsed: true,
              items: [
                { text: 'Cylheim', link: '/en/guide/charting/tools/cylheim' },
                { text: 'PCtyx', link: '/en/guide/charting/tools/pctyx' },
                { text: 'Mobile Chart Editor', link: '/en/guide/charting/tools/mobile' },
                { text: 'Cy2unity', link: '/en/guide/charting/tools/cy2unity' },
                { text: 'Cyunity', link: '/en/guide/charting/tools/cyunity' },
                { text: 'Other', link: '/en/guide/charting/tools/other' },
              ],
            },
            {
              text: 'Finishing your levels',
              link: '/en/guide/charting/packing',
              collapsed: true,
              items: [
                { text: 'Building a level.json file', link: '/en/guide/charting/level-json' },
                { text: 'Packing into a .cytoidlevel file', link: '/en/guide/charting/packing' },
              ],
            },
            {
              text: 'Sharing on Cytoid.io',
              link: '/en/guide/charting/upload',
              items: [
                { text: 'Upload level', link: '/en/guide/charting/upload' },
                { text: 'Content rule', link: '/en/reference/community/content-rule' },
              ],
            },
          ],
        },
        {
          text: 'Storyboard',
          collapsed: false,
          items: [
            { text: 'Storyboard basic', link: '/en/guide/storyboard' },
            { text: 'Storyboard specification', link: '/en/reference/storyboard/specification' },
          ],
        },
      ],
      '/en/event/': [{
        text: 'Events',
        collapsed: false,
        items: [
          { text: 'Cytoid events', link: '/en/event/cytoid' },
          {
            text: 'Official events',
            link: '/en/event/official/',
            items: [
              { text: 'Charting Contest', link: '/en/event/official/charting-contest' },
              { text: 'Octopus Tournament', link: '/en/event/official/octopus' },
            ],
          },
          { text: 'Community events', link: '/en/event/community' },
        ],
      }],
      '/en/reference/': [
        {
          text: 'Community',
          collapsed: false,
          items: [
            { text: 'Community rules', link: '/en/reference/community/rules' },
            { text: 'Content rule', link: '/en/reference/community/content-rule' },
          ],
        },
        {
          text: 'In-game',
          collapsed: false,
          items: [
            { text: 'Game settings', link: '/en/reference/game/setting' },
            { text: 'Mods', link: '/en/reference/game/mods' },
          ],
        },
        {
          text: 'Level / Chart',
          collapsed: false,
          items: [
            { text: 'Cytoidlevel file', link: '/en/reference/chart/cytoidlevel' },
            { text: 'level.json file', link: '/en/reference/chart/level-json' },
            { text: 'C1 chart format', link: '/en/reference/chart/c1-format' },
            { text: 'C2 chart format', link: '/en/reference/chart/c2-format' },
            { text: 'Qualified rules', link: '/en/reference/chart/qualified' },
          ],
        },
        {
          text: 'Storyboard',
          collapsed: false,
          items: [
            { text: 'Storyboard specification', link: '/en/reference/storyboard/specification' },
          ],
        },
      ],
      '/en/changelog/': [{
        text: 'Changelog',
        collapsed: false,
        items: [
          { text: 'Wiki', link: '/en/changelog/wiki' },
          { text: 'Game', link: '/en/changelog/game' },
          {
            text: 'Cytoid.io',
            items: [
              { text: 'Website', link: '/en/changelog/website' },
              { text: 'API', link: '/en/changelog/services' },
            ],
          },
        ],
      }],
    },
  },
})
