// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import Layout from './Layout.vue'

import './tailwind.postcss'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app }) {
    // auto import components
    const components = import.meta.glob<{ default: Component }>('../components/**/*.vue')
    await Promise.all(Object.entries(components).map(async ([path, m]) => {
      const name = path.match(/\.\/components\/(.*)\.vue$/)?.[1]
        .replace(/\//g, '')
        .replace(/^[a-z]/, s => s.toUpperCase())
      if (name) {
        const component = (await m()).default
        app.component(name, component)
      }
    }))
  },
} satisfies Theme
