import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts.ts'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-ink/70">記事が見つかりませんでした。</p>
        <Link to="/blog" className="mt-4 inline-block text-accent underline">
          ブログ一覧に戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/blog" className="text-sm text-accent hover:underline">
        ← ブログ一覧に戻る
      </Link>
      <p className="mt-4 font-mono text-xs text-accent">{post.date}</p>
      <h1 className="mt-1 font-display text-3xl font-700 text-ink">
        {post.title}
      </h1>
      <p className="mt-6 leading-relaxed text-ink/80">{post.content}</p>
    </div>
  )
}

export default BlogPost
