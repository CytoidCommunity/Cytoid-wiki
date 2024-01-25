---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Cytoid Wiki
  text: Community-driven music game
  tagline: Cytoid is a music game where you can create, share and play your own levels!
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/gameplay/download
    - theme: alt
      text: Cytoid.io
      link: https://cytoid.io
---

<script setup>
import { onMounted } from 'vue'
import { useLocaleCookie } from '../.vitepress/composables/locale'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  const prefer = useLocaleCookie()
  router.go(`/${prefer.value}/`)
})
</script>
