import { defineConfigWithTheme } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme-without-fonts'
import { resolve } from 'pathe'

import Unfonts from 'unplugin-fonts/vite'
import AutoImport from 'unplugin-auto-import/vite'
import * as locales from './locales'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<DefaultTheme.Config>({
  title: 'Cytoid Wiki',
  description: 'Cytoid is a music game where you can create, share and play your own levels!',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        locales: getSearchLocales(),
      },
    },

    logo: { src: '/pic/cytoid-girl.png', alt: 'Cytoid' },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/cytoid' },
      { icon: 'x', link: 'https://x.com/cytoidio' },
      { icon: 'github', link: 'https://github.com/cytoid' },
    ],

    // override by locales settings
    nav: [
      { text: 'English', link: '/en/' },
      { text: '中文 (简体)', link: '/zh/' },
    ],
  },
  locales,

  head: [
    ['link', { rel: 'icon', href: '/pic/cytoid-girl.png' }],
  ],

  appearance: {
    onChanged: async (isDark, defaultHandler, mode) => {
      defaultHandler(mode)
      try {
        document.querySelector('html')?.classList[isDark ? 'add' : 'remove']('tw-dark')
        document.querySelector('html')?.setAttribute('data-theme', isDark ? 'dark' : 'light')
      }
      catch (e) {
        // ignore
      }
    },
  },

  lastUpdated: true,
  markdown: {
    math: true,
  },

  cleanUrls: true,
  srcDir: 'docs',
  sitemap: {
    hostname: 'https://wiki.cytoid.io',
  },

  vite: {
    publicDir: '../public',
    plugins: [
      Unfonts({
        google: {
          families: [
            ...[
              'Nunito',
              'Noto Sans',
              'Noto Sans SC',
              'Noto Sans TC',
              'Noto Sans JP',
              'Noto Sans KR',
            ].map(name => ({
              name,
              styles: 'ital,wght@0,400;0,700;1,400;1,700',
              defer: true,
            })),
          ],
          display: 'swap',
        },
      }),
      AutoImport({
        imports: [
          'vue',
          'vitepress',
          {
            vitepress: ['inBrowser'],
          },
          '@vueuse/core',
        ],
        dts: resolve(__dirname, './types/auto-imports.generated.d.ts'),
      }),
    ],
  },
})

function getSearchLocales() {
  const searchLocales = {}
  for (const locale in locales) {
    searchLocales[locale] = locales[locale].search
  }
  return searchLocales
}
