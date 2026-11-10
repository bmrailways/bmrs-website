import { Link } from 'react-router-dom'
import NewsletterForm from '../components/NewsletterForm'
import PageHero from '../components/PageHero'
import ReviewsSection from '../components/ReviewsSection'
import { calendar, upcomingOpenHouses } from '../data/site'

export default function VisitPage() {
  return (
    <>
      <PageHero
        image="/images/outreach-holiday.jpg"
        kicker="Holiday season"
        title="All aboard for the holidays"
        text="November 21 and December 19, Saturdays from 1 to 4 pm. Admission is free. Donations are appreciated."
      >
        <p className="text-cream/80">{calendar.hours}</p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          {upcomingOpenHouses.map((event) => (
            <article key={event.date} className="ticket-card overflow-hidden bg-night text-cream md:grid md:grid-cols-2">
              <img src={event.image} alt={event.title} className="h-48 w-full object-cover md:h-full" />
              <div className="p-6">
                <p className="section-kicker !text-gold">{event.weekday}</p>
                <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-white">{event.title}</h2>
                <p className="mt-2">
                  {event.date} · {event.time}
                </p>
                <p className="mt-3 text-sm leading-6 text-cream/80">{event.text}</p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-[0.08em]">2026 open house schedule</h2>
        <div className="mt-6 divide-y divide-parchment border border-parchment bg-white">
          {calendar.season.map((row) => (
            <div
              key={row.when}
              className={`grid gap-2 px-5 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline ${row.past ? 'bg-parchment/50 text-navy/45' : ''}`}
            >
              <p className={`font-semibold ${row.past ? 'text-navy/40' : 'text-barn'}`}>{row.when}</p>
              <p className={row.past ? 'text-navy/45' : 'text-navy/80'}>
                {row.what}
                {row.past ? ' (passed)' : ''}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-navy/70">{calendar.note}</p>
        <p className="mt-3 text-sm text-navy/70">
          Looking back:{' '}
          <Link to="/twilight" className="font-semibold text-barn">
            Trains at Twilight 5
          </Link>{' '}
          was held Friday, September 11, 2026.
        </p>
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
              From November to April we open the 3rd Saturday of the month, weather permitting. Remaining 2026 dates are November 21 and December 19.
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
