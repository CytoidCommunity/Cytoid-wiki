export interface ServicesLevel {
  id: number
  version: number
  uid: string
  title: string
  metadata: {
    title: string
    artist: {
      url: string
      name: string
      localized_name: string
    }
    charter: {
      name: string
    }
    storyboarder?: {
      name: string
    }
    illustrator: {
      url: string
      name: string
    }
    title_localized: string
  }
  duration: number
  size: number
  description: string
  censored?: string
  tags: Array<string>
  category: Array<string>
  ownerId: string
  creationDate: string
  modificationDate: string
  charts: Array<{
    id: number
    name?: string
    type: 'easy' | 'hard' | 'extreme'
    difficulty: number
    notesCount: number
  }>
  owner: {
    id: string
    uid: string
    name: string
    role: string
    active: boolean
    avatar: {
      original: string
      small: string
      medium: string
      large: string
    }
  }
  state: string
  cover: {
    original: string
    thumbnail: string
    cover: string
    stripe: string
  }
  music: string
  musicPreview: string
}
