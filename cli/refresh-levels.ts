import fs from 'node:fs'
import { ofetch } from 'ofetch'
import glob from 'fast-glob'
import { resolve } from 'pathe'

import type { ServicesLevel } from '../.vitepress/types/cytoid/levels.d.ts'

// @ts-expect-error __dirname
const __dirname = import.meta.dirname;

(async () => {
  const args = process.argv.slice(2)

  const reloadAll = args.includes('--reload-all')

  log('Collecting levels...')
  const levelIds = await collect('docs/**/*.md')
  log(`Found ${levelIds.length} levels.`)

  const cache = reloadAll
    ? new Map<string, { path: string, content: string }>()
    : await getCache()

  // create dir
  const dir = resolve(__dirname, './.vitepress/levels/cache')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  levelIds.forEach((levelId) => {
    if (cache.has(levelId)) {
      log(`Level ${levelId} already cached.`)
      return
    }
    log(`Fetching level ${levelId}...`)
    getLevel(levelId).then((level) => {
      if (!level) {
        return
      }
      const path = resolve(__dirname, `./.vitepress/levels/cache/${level.uid}.json`)
      log(`Writing level ${level.uid} to ${path}...`)
      fs.writeFileSync(path, JSON.stringify(level, null, 2))
    })
  })
})()

async function collect(path: string): Promise<string[]> {
  const levelIds = new Set<string>()
  const files = await glob(path)
  const reg = /levelId="([a-z0-9_]+([-_.][a-z0-9_]+)+)"/g
  files.map(file => fs.readFileSync(file, 'utf8'))
    .map(content => content.matchAll(reg))
    .forEach((match) => {
      for (const m of match) {
        levelIds.add(m[1])
      }
    })
  return [...levelIds]
}

async function getCache() {
  const cache = new Map<string, { path: string, content: string }>()
  const files = await glob(resolve(__dirname, './.vitepress/levels/cache/*.json'))

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8')
    try {
      const level = JSON.parse(content) as ServicesLevel
      cache.set(level.uid, { path: file, content })
    }
    catch (error) {
      log(`Failed to parse ${file}: ${error}`)
    }
  })

  return cache
}

async function getLevel(levelId: string): Promise<ServicesLevel | null> {
  try {
    return await ofetch<ServicesLevel>(`https://services.cytoid.io/levels/${levelId}`)
  }
  catch (e) {
    log(`Failed to fetch level ${levelId}: ${e}`)
    return null
  }
}

function log(...args: any[]) {
  // eslint-disable-next-line no-console
  console.log('[refresh-levels]', ...args)
}
