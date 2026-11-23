import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="page-intro page-intro--not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page isn’t here.</h1>
      <p className="page-intro__description">The address may have changed, or the page may not exist.</p>
      <Link className="button-link" to="/">Return home</Link>
    </section>
  )
}
