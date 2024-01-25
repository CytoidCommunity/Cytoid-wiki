<script setup lang="ts">
import type { LevelData } from '../../levels.data'
import Diff from './Diff.vue'

defineProps<{
  level: LevelData
}>()

const [DefineBody, Body] = createReusableTemplate()
</script>

<template>
  <DefineBody>
    <div class="tw-card tw-card-compact tw-bg-base-100 tw-shadow tw-image-full before:!tw-bg-black before:!tw-opacity-50 before:dark:!tw-opacity-75">
      <figure v-if="level.cover?.thumbnail">
        <div
          class="tw-w-full tw-h-full tw-bg-cover tw-bg-center"
          :style="`background-image: url(${level.cover.thumbnail});`"
        />
      </figure>
      <div class="tw-card-body">
        <div class="tw-flex tw-flex-col-reverse sm:tw-flex-row">
          <!-- Onwer -->
          <div class="tw-flex tw-justify-start">
            <span v-if="level.owner" class="tw-flex tw-items-center tw-justify-center">
              <img
                class="tw-rounded-full tw-w-8 tw-h-8 tw-object-cover"
                :src="level.owner.avatar.small"
                :alt="level.owner.name ?? level.owner.uid"
              >
              <span class="tw-ml-2 tw-text-base tw-font-bold">
                {{ level.owner.name ?? level.owner.uid }}
              </span>
            </span>
          </div>
          <div class="tw-flex tw-flex-1 tw-items-center tw-justify-end tw-gap-2">
            <!-- Category -->
            <span
              v-for="category in level.category ?? []" :key="category"
              class="tw-badge tw-badge-lg tw-h-8 tw-font-bold tw-border-none tw-text-white tw-bg-gradient-to-br"
              :class="{
                featured: 'tw-order-1 tw-from-[#df3090] tw-to-[#f953c6]',
                qualified: 'tw-order-2 tw-from-[#1D976C] tw-to-[#1cb068]',
              }[category] ?? 'tw-hidden'"
            >
              {{ category }}
            </span>
          </div>
        </div>
        <div>
          <div class="tw-card-title">
            <!-- Title -->
            {{ level.metadata.title }}
          </div>
          <div class=" tw-text-lg">
            <!-- Artist -->
            {{ level.metadata.artist.name }}
          </div>
          <div>
            <span>
              Charter: {{ level.metadata.charter.name }}
            </span>
            <template v-if="level.metadata.storyboarder">
              / <span>Storyboarder: {{ level.metadata.storyboarder?.name }}</span>
            </template>
            <template v-if="level.metadata.illustrator">
              / <span>BG: {{ level.metadata.illustrator?.name }}</span>
            </template>
          </div>
        </div>
        <div>
          <Diff
            v-for="chart in level.charts"
            :key="chart.type"
            :type="chart.type"
            :diff="chart.difficulty"
            :label-name="true"
          />
        </div>
      </div>
    </div>
  </DefineBody>

  <div class="tw-my-1">
    <a
      v-if="level.uid"
      :href="`https://cytoid.io/levels/${level.uid}`"
      class="!tw-no-underline"
      target="_blank"
    >
      <Body />
    </a>
    <Body v-else />
  </div>
</template>
