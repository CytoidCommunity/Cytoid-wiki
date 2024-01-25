<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'
import mediumZoom from 'medium-zoom'

import { useLocaleStorage } from '../composables/locale'

const route = useRoute()
function initPlugins() {
  // init side-img
  document
    .querySelectorAll<HTMLImageElement>('img.side-img:not(.side-img--loaded)')
    .forEach((img) => {
      const parent = img.parentElement
      const alt = img.alt
      if (parent) {
        const wrapper = document.createElement('div')
        wrapper.classList.add('side-img-wrapper')

        const info = document.createElement('span')
        info.textContent = alt

        img.classList.add('side-img--loaded')

        parent.replaceChild(wrapper, img)
        wrapper.appendChild(img)
        wrapper.appendChild(info)
      }
    })

  // init medium-zoom
  mediumZoom('.main img:not(.no-zoom)', {
    background: 'oklch(var(--b1) / 0.75)',
  })
}
onMounted(() => {
  initPlugins()
})
watch(
  () => route.path,
  () => nextTick(() => {
    initPlugins()
  }),
)

const { lang } = useData()
const localeCookie = useLocaleStorage()
watchEffect(() => {
  if (inBrowser && route.path !== '/') {
    localeCookie.value = lang.value
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
