import { Link } from 'react-router-dom'
import { hero, about } from '../data/site'
import { work } from '../data/work'
import { posts } from '../data/writing'
import { photos } from '../data/photos'
import { places } from '../data/eating'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <div className="page">

      <section className="hero hero-rise">
        <p className="status"><span className="status-dot" aria-hidden="true" />{hero.status}</p>
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-lead">{hero.lead}</p>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="head">
          <p className="eyebrow">Selected work</p>
          <Link to="/work" className="link link-arrow">All work</Link>
        </div>
        <div className="preview-list">
          {work.map((w) => (
            <Link key={w.slug} to={`/work/${w.slug}`} className="work-item">
              <h3 className="work-title">{w.title}</h3>
              <p className="work-desc">{w.summary}</p>
              <div className="tags">
                {w.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="section">
        <div className="head">
          <p className="eyebrow">Writing</p>
          <Link to="/writing" className="link link-arrow">All posts</Link>
        </div>
        {posts.slice(0, 3).map((p) => (
          <Link key={p.slug} to={`/writing/${p.slug}`} className="post-row">
            <span className="post-row-title">{p.title}</span>
            <span className="post-row-date">{p.date}</span>
          </Link>
        ))}
      </section>

      {/* Photography */}
      <section className="section">
        <div className="head">
          <p className="eyebrow">Photography</p>
          <Link to="/photography" className="link link-arrow">View gallery</Link>
        </div>
        <Gallery items={photos.slice(0, 3)} />
      </section>

      {/* Eating */}
      <section className="section">
        <div className="head">
          <p className="eyebrow">Eating</p>
          <Link to="/eating" className="link link-arrow">The full list</Link>
        </div>
        {places.slice(0, 3).map((p) => (
          <div className="eat-item" key={p.name}>
            <div className="eat-head">
              <h3 className="eat-name">{p.name}</h3>
              <span className="eat-area">{p.area}</span>
            </div>
            <p className="eat-note">{p.note}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="section">
        <p className="eyebrow">About</p>
        <div className="measure">
          {about.paragraphs.map((para, i) => (
            <p key={i} style={{ color: 'var(--text-soft)', marginTop: i ? '1.1rem' : 0 }}>{para}</p>
          ))}
          <p className="about-now">{about.now}</p>
        </div>
      </section>

    </div>
  )
}
