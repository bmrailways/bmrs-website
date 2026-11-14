import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        image="/images/g-garden-4.jpg"
        kicker="Upcoming workshop"
        title="No workshops scheduled currently"
        text="When a workshop is on the calendar, it will appear here. Work nights continue on the 2nd and 4th Wednesday of each month."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <div className="ticket-card p-5 sm:p-8">
          <p className="leading-8 text-navy/80">
            Work nights are a good time for adult visitors and model train hobbyists to see behind the scenes. Layouts may be under repair, and many trains may not be running.
          </p>
          <Link to="/visit" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-barn">
            See hours & work nights →
          </Link>
        </div>
      </section>
    </>
  )
}
