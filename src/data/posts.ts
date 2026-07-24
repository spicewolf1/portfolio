export interface Post {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'first-post',
    title: '最初の記事',
    date: '2026-07-01',
    excerpt: 'これは最初のブログ記事の要約です。',
    content: 'ここに記事の本文が入ります。もっと詳しい内容をここに書きます。',
  },
  {
    id: 2,
    slug: 'second-post',
    title: '2つ目の記事',
    date: '2026-07-10',
    excerpt: 'これは2つ目のブログ記事の要約です。',
    content: 'こちらも本文サンプルです。自由に書き換えてください。',
  },
]
