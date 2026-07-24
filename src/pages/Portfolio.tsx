import { works } from '../data/works.ts'

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.imageUrl} alt={work.title} />
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              詳しく見る
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
