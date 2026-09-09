import { Link } from 'react-router-dom'
import NewsletterForm from '../components/NewsletterForm'
import PageHero from '../components/PageHero'
import ReviewsSection from '../components/ReviewsSection'
import { calendar, twilight } from '../data/site'

export default function VisitPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-07.jpg"
        kicker="Calendar"
        title="Visit the Railroad Museum"
        text="We welcome all visitors to BMRS open house events. Admission is free. Donations are appreciated."
      >
        <p className="text-cream/80">{calendar.hours}</p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="ticket-card overflow-hidden bg-night text-cream md:grid md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8">
            <p className="section-kicker !text-gold">Featured night</p>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide text-white">{twilight.name}</h2>
            <p className="mt-3 text-lg">
              {twilight.date} · {twilight.time}
            </p>
            <p className="mt-4 text-cream/80">{twilight.headline}. Admission is always free. Tell a friend!</p>
            <Link to="/twilight" className="btn-gold mt-6">
              Event page
            </Link>
          </div>
          <img src="/images/hero-twilight.jpg" alt="Trains at Twilight at the red museum building" className="h-64 w-full object-cover md:h-full" />
        </div>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-[0.08em]">2026 open house schedule</h2>
        <div className="mt-6 divide-y divide-parchment border border-parchment bg-white">
          {calendar.season.map((row) => (
            <div key={row.when} className="grid gap-2 px-5 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline">
              <p className="font-semibold text-barn">{row.when}</p>
              <p className="text-navy/80">{row.what}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-navy/70">{calendar.note}</p>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
          <div>
            <p className="section-kicker">Work nights</p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-wide">2nd & 4th Wednesdays</h2>
            <p className="mt-4 leading-7 text-navy/80">{calendar.workNights}</p>
          </div>
          <div>
            <p className="section-kicker">Winter hours</p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-wide">November to April</h2>
            <p className="mt-4 leading-7 text-navy/80">
              From November to April we open the 3rd Saturday of the month, weather permitting. Post-season 2026 dates are September 19, October 17, November 21, and December 19.
            </p>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em]">Email for upcoming events</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection dark />
    </>
  )
}
