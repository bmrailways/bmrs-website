import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ReviewsSection from '../components/ReviewsSection'
import { site } from '../data/site'

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-03.jpg"
        kicker="All aboard"
        title="A welcome from our president"
        text="Welcome to the Boothe Memorial Railway Society 2026 open house season."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
        <div className="prose-bmrs text-lg leading-8 text-navy/80">
          <p>
            So much has happened over the past year that I’m excited to share with you. BMRS was the recipient of another grant from CT Humanities that has enabled us to add a new acoustical tile ceiling, along with a new lighting system that has greatly brightened our interior, as well as an AED which hopefully we will never have to use.
          </p>
          <p>
            The exterior of the building around the garden railway has had several benches installed for viewing the trains, and plantings have been added to enhance the garden feel. Hoping to see you during our upcoming open house events!
          </p>
          <p className="mt-6 font-semibold text-navy">Paul DeVitto, President, BMRS</p>
        </div>
        <img src="/images/gallery-02.jpg" alt="Visitors at the Railroad Museum" className="h-full max-h-[420px] w-full object-cover" />
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <p className="section-kicker">Since {site.founded}</p>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em]">Boothe Memorial Railway Society</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-navy/80">
            Established in 1999, BMRS has been an integral part of the many offerings at Boothe Memorial Park. BMRS is an all-volunteer, nonprofit charitable 501(c)(3) organization.
          </p>
          <div className="ticket-card mt-8 max-w-3xl p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-barn">Our mission</p>
            <p className="mt-4 text-lg leading-8">{site.mission}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="ticket-card p-6">
              <h3 className="font-display text-2xl uppercase">Volunteers</h3>
              <p className="mt-3 text-sm leading-6 text-navy/75">
                Some have layouts at home, others collect trains, and others just like to work with us on BMRS projects.
              </p>
            </div>
            <div className="ticket-card p-6">
              <h3 className="font-display text-2xl uppercase">Boothe Park</h3>
              <p className="mt-3 text-sm leading-6 text-navy/75">
                We share the 32-acre park with neighbors including the Stratford Veterans Museum, Amateur Radio Club, and Boothe Memorial Astronomical Society.
              </p>
            </div>
            <div className="ticket-card p-6">
              <h3 className="font-display text-2xl uppercase">Always free</h3>
              <p className="mt-3 text-sm leading-6 text-navy/75">
                Admission is always free. Donations keep the trains running.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/join" className="btn-primary">
              Become a member
            </Link>
            <Link to="/outreach" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-barn">
              Community outreach →
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection dark />
    </>
  )
}
