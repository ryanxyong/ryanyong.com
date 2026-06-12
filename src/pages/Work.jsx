import { Link } from 'react-router-dom'
import { work } from '../data/work'

export default function Work() {
  return (
    <div className="page section">
      <p className="eyebrow">Work</p>
      <h1 className="page-title serif">Selected work</h1>
      <p className="page-intro">
        Engineering outcomes. Stack agnostic.
      </p>
      <div className="preview-list">
        {work.map((w) => (
          <Link key={w.slug} to={`/work/${w.slug}`} className="work-item">
            <h2 className="work-title">{w.title}</h2>
            <p className="work-desc">{w.summary}</p>
            <p className="work-meta">{w.meta}</p>
            <div className="tags">
              {w.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
