<script setup lang="ts">
import { ofetch } from 'ofetch'

import type { ServicesLevel } from '../../types/cytoid/levels'
import { type LevelData, data as cached } from '../../levels.data'
import LevelOffline from './LevelOffline.vue'

const props = defineProps<{
  levelId: string
}>()

const loaded = ref(false)
const data = ref<LevelData | undefined>(undefined)
const error = ref<string | undefined>(undefined)

const target = ref(null)
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (!loaded.value && isIntersecting) {
      loaded.value = true
      const cachedOnly = props.levelId.startsWith('.')
      const onlineOnly = props.levelId.startsWith('!')

      const levelId = cachedOnly || onlineOnly
        ? props.levelId.slice(1)
        : props.levelId

      if (!onlineOnly) {
        cached.forEach((level) => {
          if (level.uid === levelId) {
            data.value = level
          }
        })
        if (data.value) {
          return
        }
        if (cachedOnly) {
          error.value = 'Cache not found'
          return
        }
      }

      ofetch<ServicesLevel>(`https://services.cytoid.io/levels/${levelId}`)
        .then((res) => {
          data.value = res
        })
        .catch((err) => {
          error.value = err.message
          console.error(err)
        })
    }
  },
)
</script>

<template>
  <p v-if="error" v-text="`Failed to load ${props.levelId}: ${error}`" />

  <div v-else ref="target">
    <LevelOffline v-if="data" :level="data" />
  </div>
</template>
