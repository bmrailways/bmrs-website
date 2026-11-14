import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { gallery, twilight } from '../data/site'

export default function TwilightPage() {
  return (
    <>
      <PageHero
        image="/images/hero-twilight.jpg"
        kicker="Look back · September 11, 2026"
        title={twilight.name}
        text={`${twilight.date} · ${twilight.time} · ${twilight.location}`}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/visit" className="btn-gold">
            See the calendar
          </Link>
          <a href="https://maps.google.com/?q=5800+Main+Street+Stratford+CT+06614" className="btn-ghost" target="_blank" rel="noreferrer">
            Get directions
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <p className="section-kicker">The event Stratford talks about all year</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl uppercase tracking-[0.08em] sm:text-4xl">{twilight.headline}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-navy/80">{twilight.summary} Admission is {twilight.admission.toLowerCase()}. Tell a friend!</p>
        <p className="mt-4 max-w-3xl leading-7 text-navy/75">
          This year we’ll have a remote-control tank, portable trains, and a chance to stargaze with the Boothe Memorial Astronomy Society. Seriously folks, this is a premier event at Boothe Park. Don’t miss it.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {twilight.highlights.map((item) => (
            <div key={item} className="ticket-card p-6">
              <p className="font-semibold leading-6">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm italic text-navy/70">{twilight.sponsor}</p>
      </section>

      <section className="bg-night py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-white">Scenes from twilight</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((src) => (
              <img key={src} src={src} alt="Trains at Twilight at Boothe Park" className="h-36 w-full object-cover md:h-44" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
