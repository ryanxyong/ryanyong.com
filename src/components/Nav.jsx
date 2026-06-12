import { NavLink, Link } from 'react-router-dom'
import { site, nav } from '../data/site'
import Logo from './Logo'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="wordmark" aria-label={`${site.name} — home`}>
          <Logo className="nav-logo" />
          <span className="wordmark-text">{site.wordmark}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="nav-cta" href={`mailto:${site.email}`}>Say hello</a>
        </nav>
      </div>
    </header>
  )
}
