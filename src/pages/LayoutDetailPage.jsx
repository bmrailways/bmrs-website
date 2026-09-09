import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { layouts } from '../data/site'

export default function LayoutDetailPage() {
  const { slug } = useParams()
  const layout = layouts.find((item) => item.slug === slug)

  if (!layout) return <Navigate to="/layouts" replace />

  return (
    <>
      <PageHero image={layout.image} kicker="Layouts" title={layout.name} text={layout.summary} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-6">
        <div>
          <p className="text-lg leading-8 text-navy/80">{layout.description}</p>
          {layout.notes && (
            <ul className="mt-6 space-y-2 text-sm text-navy/75">
              {layout.notes.map((note) => (
                <li key={note} className="border-l-2 border-gold pl-3">
                  {note}
                </li>
              ))}
            </ul>
          )}
          <Link to="/layouts" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-barn">
            ← All layouts
          </Link>
        </div>
        <div className="ticket-card p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-barn">{layout.factsTitle}</p>
          <p className="mt-4 leading-7 text-navy/80">{layout.facts}</p>
        </div>
      </section>
      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-3xl uppercase tracking-wide">From the layout</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {layout.gallery.map((src) => (
              <img key={src} src={src} alt={`${layout.name} at BMRS`} className="h-52 w-full object-cover" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
