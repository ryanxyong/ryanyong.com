import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

// Scrolls to top whenever the route changes (hash router doesn't do this for us).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
