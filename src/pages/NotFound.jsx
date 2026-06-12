import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page section">
      <p className="eyebrow">404</p>
      <h1 className="page-title serif">This page wandered off.</h1>
      <p className="page-intro">Let’s get you back to something that exists.</p>
      <Link to="/" className="link link-arrow">Home</Link>
    </div>
  )
}
