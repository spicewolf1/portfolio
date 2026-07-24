import { works } from '../data/works.ts'

function Portfolio() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-display text-3xl font-700 text-ink">Portfolio</h1>
      <p className="mt-2 text-ink/60">作ったものをゆるく置いてます。</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <div
            key={work.id}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={work.imageUrl}
              alt={work.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="font-display text-lg font-600 text-ink">
                {work.title}
              </h2>
              <p className="mt-1 text-sm text-ink/70">{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-600 text-accent transition hover:bg-accent/20"
              >
                詳しく見る →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
