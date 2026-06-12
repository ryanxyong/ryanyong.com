import { Link } from 'react-router-dom'
import { posts } from '../data/writing'

export default function Writing() {
  return (
    <div className="page section">
      <p className="eyebrow">Writing</p>
      <h1 className="page-title serif">Notes</h1>
      <p className="page-intro">
        Occasional writing on AI, building, and the work behind it.
      </p>
      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-soft)' }}>First post coming soon.</p>
      ) : (
        posts.map((p) => (
          <Link key={p.slug} to={`/writing/${p.slug}`} className="post-row">
            <span className="post-row-title">{p.title}</span>
            <span className="post-row-date">{p.date}</span>
          </Link>
        ))
      )}
    </div>
  )
}
