import PageHero from '../components/PageHero'
import { sponsors } from '../data/site'

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        image="/images/sponsors-cover.jpg"
        kicker="Keeping our trains running"
        title="Our sponsors are the best"
        text="Our sponsors provide BMRS with the funds to keep our website and live video up and running. Please let them know you appreciate their help by supporting these businesses."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {sponsors.map((sponsor) => (
            <article key={sponsor.name} className="ticket-card p-6">
              <h2 className="font-display text-2xl uppercase tracking-wide">{sponsor.name}</h2>
              {sponsor.detail && <p className="mt-3 text-sm leading-6 text-navy/75">{sponsor.detail}</p>}
              <div className="mt-4 space-y-1 break-words text-sm text-navy/80">
                {sponsor.contact && <p>{sponsor.contact}</p>}
                {sponsor.phone && <p>{sponsor.phone}</p>}
                {sponsor.href && (
                  <a href={sponsor.href} target="_blank" rel="noreferrer" className="font-semibold text-barn">
                    {sponsor.href.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl leading-7 text-navy/80">
          Please consider adding your business to our list of sponsors. Our visitors appreciate your support for our all-volunteer museum. Email{' '}
          <a className="font-semibold text-barn" href="mailto:bmrailways@gmail.com">
            bmrailways@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  )
}
