import fs from 'node:fs/promises'
import glob from 'fast-glob'
import { dirname, relative, resolve } from 'pathe'
import { fallbackOrder } from '../.vitepress/locales/fallback'
import * as localesConfig from '../.vitepress/locales'

export default {
  async paths(): Promise<Returning[]> {
    const locales = Object.keys(localesConfig) as Array<keyof typeof localesConfig>

    const allArticles = new Set<string>()

    const localePaths = {
      ...(
        await Promise.all(locales.map(async (locale) => {
          const files = (await glob(resolve(__dirname, locale, './**/*.md')))
            .map(file => relative(resolve(__dirname, locale), file))

          files.forEach(file => allArticles.add(file))
          return {
            [locale]: new Set<string>(files),
          }
        }))
      ).reduce((prev, curr) => ({ ...prev, ...curr }), {}),
    } as Record<keyof typeof localesConfig, Set<string>>

    const localeFallback: Record<keyof typeof localesConfig, string[]> = {
      ...locales.reduce((obj, locale) => {
        obj[locale] = [...allArticles]
          .filter(article => !localePaths[locale].has(article))
        return obj
      }, {} as Record<keyof typeof localesConfig, string[]>),
    }

    const getFallbackFrom = (article: string) => {
      for (const fallbackLocale of fallbackOrder) {
        if (localePaths[fallbackLocale].has(article)) {
          return fallbackLocale
        }
      }
      throw new Error(`Cannot find fallback ${article}`)
    }

    const fallbacks: Returning[] = []

    for (const locale of fallbackOrder) {
      const files = localeFallback[locale]
      if (!files) {
        continue
      }
      fallbacks.push(...(await Promise.all(
        files.map(async (file) => {
          const fallbackFrom = getFallbackFrom(file)

          const content = await fs.readFile(resolve(__dirname, fallbackFrom, file), 'utf-8')

          const regex = /^---\r?\n([\s\S]+?)\r?\n---\r?\n/m
          const frontmatter = content.match(regex)
          const withoutFrontmatter = content.replace(regex, '')

          return {
            params: { path: `${locale}/${file.replace(/\.md$/, '')}` },
            content: [
              ...(frontmatter ? [frontmatter[0]] : []),
              [
                `::: tip`,
                localesConfig[locale].fallback.replace(/\{fallback\}/g, localesConfig[fallbackFrom].label),
                `:::`,
              ].join('\n'),
              withoutFrontmatter
                .replace( // fix image path
                  /!\[(.*?)\]\((.*?)\)/g,
                  (org, alt, src) => {
                    return src.startsWith('http') || src.startsWith('/')
                      ? org
                      : `![${alt}](/${
                          relative(
                            resolve(__dirname),
                            resolve(__dirname, fallbackFrom, dirname(file), src),
                          )
                        })`
                  },
                ),
            ].join('\n\n'),
          }
        }),
      )))
    }

    return fallbacks
  },
}

interface Returning {
  params: { path: string }
  content?: string
}
