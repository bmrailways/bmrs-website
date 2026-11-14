import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function FundingPage() {
  return (
    <>
      <PageHero
        image="/images/g-garden-1.jpg"
        kicker="The caboose"
        title="How does BMRS keep the trains running?"
        text="That’s a great question. Donations play a major role in funding our all-volunteer museum."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <div className="ticket-card p-5 sm:p-8">
          <p className="leading-8 text-navy/80">
            BMRS is a nonprofit charitable 501(c)(3) organization. Admission to every open house, including Trains at Twilight, is always free. We appreciate donations that keep layouts maintained, live video running, and community outreach on the road.
          </p>
          <p className="mt-4 leading-8 text-navy/80">
            Our sponsors help fund the website and cameras. Members donate time on work nights. Visitors who can contribute financially help the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}?subject=${encodeURIComponent('Donation / funding question')}`} className="btn-primary">
              Email about donations
            </a>
            <Link to="/sponsors" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-barn">
              See our sponsors →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
