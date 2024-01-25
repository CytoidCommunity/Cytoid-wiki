import { useCookies } from '@vueuse/integrations/useCookies'
import { computed } from 'vue'

export const supportLangs = ['zh', 'en'] as const

export function useLocaleCookie() {
  const name = 'nf_lang'

  const cookie = useCookies([name], {})
  return computed<string>({
    get: () => cookie.get(name) || browserPreferredLang(),
    set: v => cookie.set(
      name,
      supportLangs.includes(v as any)
        ? v // such as 'zh'
        : v.split('-')[0], // such as 'zh-CN'
      {
        path: '/',
        maxAge: 60 * 60 * 24 * 3650, // 10 years
      },
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
