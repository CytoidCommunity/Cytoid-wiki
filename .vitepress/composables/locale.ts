import { computed } from 'vue'

export const supportLangs = ['zh', 'en'] as const

export function useLocaleStorage() {
  const name = 'locale_cytoid_wiki'

  return computed<string>({
    get: () => localStorage.getItem(name) || browserPreferredLang(),
    set: v => localStorage.setItem(
      name,
      supportLangs.includes(v as any)
        ? v // such as 'zh'
        : v.split('-')[0], // such as 'zh-CN'
    ),
  })
}
function browserPreferredLang(): typeof supportLangs[number] {
  const langs = navigator.languages
  for (const lang of langs) {
    const langPrefix = lang.split('-')[0]
    if (supportLangs.includes(langPrefix as any)) {
      return langPrefix as any
    }
  }
  return 'en'
}
