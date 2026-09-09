import NewsletterForm from '../components/NewsletterForm'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function ContactPage() {
  const mail = `mailto:${site.email}`

  return (
    <>
      <PageHero
        image="/images/park-map.jpg"
        kicker="Questions or info"
        title="Find us at Boothe Park"
        text={site.address}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-wide">Get in touch</h2>
          <p className="mt-4 leading-7 text-navy/80">{site.phoneNote}</p>
          <div className="mt-6 space-y-4 text-navy/80">
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-barn">Email</span>
              <a className="font-semibold" href={mail}>
                {site.email}
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-barn">Museum</span>
              {site.address}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-barn">Mailing address</span>
              {site.mailingAddress}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mail} className="btn-primary">
              Email BMRS
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-barn">
              Open in Google Maps →
            </a>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em]">Mailing list</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="overflow-hidden border border-parchment bg-white">
          <iframe title="Map to Boothe Memorial Park" src={site.mapsEmbed} className="h-[420px] w-full border-0" loading="lazy" />
        </div>
      </section>
    </>
  )
}
