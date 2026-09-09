import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { layouts } from '../data/site'

export default function LayoutsPage() {
  return (
    <>
      <PageHero
        image="/images/layout-o.jpg"
        kicker="Layouts"
        title="The train layouts at BMRS"
        text="From garden-size G Gauge outside to a whole room of N scale indoors, every railroad at the museum has its own story."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-8">
          {layouts.map((layout, index) => (
            <article key={layout.slug} className={`ticket-card overflow-hidden md:grid md:grid-cols-2 ${index % 2 ? 'md:[&>img]:order-2' : ''}`}>
              <img src={layout.image} alt={layout.name} className="h-64 w-full object-cover md:h-full" />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-barn">{layout.kicker}</p>
                <h2 className="mt-2 font-display text-3xl uppercase tracking-wide">{layout.name}</h2>
                <p className="mt-4 leading-7 text-navy/80">{layout.summary}</p>
                <p className="mt-3 text-sm leading-6 text-navy/70">{layout.description}</p>
                <Link to={`/layouts/${layout.slug}`} className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-barn">
                  Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
