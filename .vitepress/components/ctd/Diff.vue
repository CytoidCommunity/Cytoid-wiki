<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type: 'easy' | 'hard' | 'extreme' | 'ex'
    diff?: string | number
    name?: string
    labelLv?: boolean
    labelName?: boolean
  }>(),
  {
    diff: 0,
    labelLv: false,
    labelName: false,
  },
)

const type = computed(() => {
  switch (props.type) {
    case 'easy':
      return 'easy'
    case 'hard':
      return 'hard'
    case 'extreme':
    case 'ex':
      return 'extreme'
  }
})

const diff = computed(() => {
  const value = typeof props.diff === 'number' ? props.diff : Number.parseInt(props.diff)
  if (Number.isNaN(value)) {
    return props.diff.toString()
  }
  return value.toString()
})

const name = computed(() => {
  if (props.name) {
    return props.name
  }
  switch (props.type) {
    case 'easy':
      return 'Easy'
    case 'hard':
      return 'Hard'
    case 'extreme':
    case 'ex':
      return 'EX'
  }
})
</script>

<template>
  <div
    class="tw-w-min tw-max-w-xs tw-rounded-full tw-text-white tw-inline-block tw-mx-1"
    :style="{
      easy: 'background: linear-gradient(to bottom right, #4ca2cd, #67B26F);',
      hard: 'background: linear-gradient(to top left, #B06AB3, #4568DC);',
      extreme: 'background: linear-gradient(to top left, #6f0000, #200122)',
    }[type]"
  >
    <div
      class="tw-h-8 tw-flex tw-justify-center tw-items-center"
      :class="{
        'tw-aspect-square': !props.labelLv && !props.labelName,
        'tw-px-3': props.labelLv || props.labelName,
      }"
    >
      <span v-if="props.labelName" class="tw-truncate tw-mr-2">{{ name }}</span>
      <span v-if="props.labelLv">Lv.</span>
      {{ diff }}
    </div>
  </div>
</template>
