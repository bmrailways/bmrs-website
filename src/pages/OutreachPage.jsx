import PageHero from '../components/PageHero'
import { outreachEvents } from '../data/site'

export default function OutreachPage() {
  return (
    <>
      <PageHero
        image="/images/outreach-connjam.jpg"
        kicker="Rails on the road"
        title="Community outreach"
        text="BMRS members take their trains on the road. Using a portable (or modular) layout, we’re able to bring the fun and excitement of model railroading to community locations and events. We’ve downsized our layouts, but may be available for a visit to your event."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outreachEvents.map((event) => (
            <article key={event.title} className="ticket-card overflow-hidden">
              <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-display text-2xl uppercase tracking-wide">{event.title}</h2>
                <p className="mt-3 text-sm leading-6 text-navy/75">{event.text}</p>
                {event.href && (
                  <a href={event.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-barn">
                    Learn about the NJ HiRailers →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-6 text-navy/70">
          Invite BMRS to your school, festival, or community event: email{' '}
          <a className="font-semibold text-barn" href="mailto:bmrailways@gmail.com">
            bmrailways@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  )
}
