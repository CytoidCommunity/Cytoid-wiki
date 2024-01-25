import type { LocaleSpecificConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme-without-fonts'

export * from './en'
export * from './zh'

export type LocaleConfig =
  LocaleSpecificConfig<DefaultTheme.Config>
  & { label: string, link?: string }
  & {
    search: Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>
  }
  & {
    fallback: string
    outdated: string
  }
