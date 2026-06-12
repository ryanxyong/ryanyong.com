import { useParams, Link, Navigate } from 'react-router-dom'
import { getWork, nextWork } from '../data/work'

export default function CaseStudy() {
  const { slug } = useParams()
  const study = getWork(slug)
  if (!study) return <Navigate to="/work" replace />

  const next = nextWork(slug)

  return (
    <article className="page section">
      <Link to="/work" className="back">Work</Link>
      <h1 className="longform-title">{study.title}</h1>
      <p className="longform-meta">{study.meta}</p>
      <div className="tags" style={{ marginBottom: '1.8rem' }}>
        {study.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="longform-body">
        {study.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>

      <div className="next-link">
        <Link to={`/work/${next.slug}`} className="link">
          Next: {next.title} →
        </Link>
      </div>
    </article>
  )
}
