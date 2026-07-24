import { Link } from 'react-router-dom'
import { posts } from '../data/posts.ts'

function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-display text-3xl font-700 text-ink">Blog</h1>
      <p className="mt-2 text-ink/60">思ったことをゆるく書いていきます。</p>

      <ul className="mt-8 space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.slug}`}
              className="block rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-mono text-xs text-accent">{post.date}</p>
              <h2 className="mt-1 font-display text-lg font-600 text-ink">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-ink/70">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
