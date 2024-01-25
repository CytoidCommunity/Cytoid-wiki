import type * as locales from '.'

export const fallbackOrder = [
  'en',
  'zh',
] satisfies (keyof typeof locales)[]
