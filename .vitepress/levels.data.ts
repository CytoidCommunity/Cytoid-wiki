import fs from 'node:fs'
import { defineLoader } from 'vitepress'
import { filename } from 'pathe/utils'

declare const data: LevelData[]
export { data }

export default defineLoader({
  // 类型检查加载器选项
  watch: ['./levels/**/*.*.json'],
  load(watchedFiles): LevelData[] {
    return watchedFiles
      .map((f) => {
        const data = JSON.parse(
          fs.readFileSync(f, 'utf-8'),
        ) as LevelData
        if (!data.uid) {
          const name = filename(f)
          const uid = name.replace(/\.json$/, '')
          data.uid = uid
        }
        return data
      })
  },
})

export interface LevelData {
  uid?: string
  metadata: {
    title: string
    artist: {
      name: string
    }
    charter: {
      name: string
    }
    illustrator?: {
      name: string
    }
    storyboarder?: {
      name: string
    }
  }
  category?: string[]
  charts: {
    type: 'easy' | 'hard' | 'extreme'
    name?: string
    difficulty: number
  }[]
  cover?: {
    thumbnail: string
  }
  owner?: {
    uid: string
    name?: string
    avatar: {
      small: string
    }
  }
}
