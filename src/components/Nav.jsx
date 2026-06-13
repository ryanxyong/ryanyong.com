import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site, nav } from '../data/site'
import Logo from './Logo'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="wordmark" aria-label={`${site.name} — home`}>
          <Logo className="nav-logo" />
          <span className="wordmark-text">{site.wordmark}</span>
        </Link>
        <button
          type="button"
          className={open ? 'nav-toggle is-open' : 'nav-toggle'}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
        <nav
          id="primary-nav"
          className={open ? 'nav-links open' : 'nav-links'}
          aria-label="Primary"
        >
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
