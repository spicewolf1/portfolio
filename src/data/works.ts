export interface Work {
  id: number
  title: string
  description: string
  imageUrl: string
  link: string
}

export const works: Work[] = [
  {
    id: 1,
    title: 'サンプル作品1',
    description: 'ここに作品の説明を書きます。',
    imageUrl: 'https://placehold.co/400x300',
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'サンプル作品2',
    description: 'ここに作品の説明を書きます。',
    imageUrl: 'https://placehold.co/400x300',
    link: 'https://example.com',
  },
]
