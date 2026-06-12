import { about } from '../data/site'

export default function About() {
  return (
    <div className="page section">
      <p className="eyebrow">About</p>
      <div className="measure">
        {about.paragraphs.map((para, i) => (
          <p key={i} className="serif-lead" style={{ color: 'var(--text-soft)', fontSize: 'var(--step-lead)', marginTop: i ? '1.2rem' : 0 }}>
            {para}
          </p>
        ))}
        <p className="about-now">{about.now}</p>
      </div>
    </div>
  )
}
