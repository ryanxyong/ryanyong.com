import { site, social } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-mark serif">
          Let’s talk →{' '}
          <a className="footer-mail" href={`mailto:${site.email}`}>{site.email}</a>
        </span>
        <div className="footer-social">
          {social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
