import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="section-kicker">End of the line</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-wide sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-navy/75">That track doesn’t go anywhere. Head back to the depot.</p>
      <Link to="/" className="btn-primary mt-8">
        Return home
      </Link>
    </section>
  )
}
