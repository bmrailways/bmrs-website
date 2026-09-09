import { Link } from 'react-router-dom'
import NewsletterForm from '../components/NewsletterForm'
import ReviewsSection from '../components/ReviewsSection'
import { gallery, layouts, site, twilight } from '../data/site'

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-night text-cream">
        <img src="/images/hero-twilight.jpg" alt="Trains at Twilight at Boothe Park" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/45 to-night/85" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 lg:px-6">
          <p className="section-kicker !text-gold">Stratford, Connecticut · Admission always free</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-none tracking-[0.06em] text-white sm:text-6xl lg:text-7xl">
            The Railroad Museum at Boothe Park
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/90">
            Indoor and outdoor model railroads, volunteer-built scenery, and a nighttime event Stratford talks about all year long.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/twilight" className="btn-gold">
              Trains at Twilight · {twilight.shortDate}
            </Link>
            <Link to="/visit" className="btn-ghost">
              Open house calendar
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-4">
          <a href={site.social.facebook} target="_blank" rel="noreferrer" className="bg-navy-700 px-6 py-8 transition hover:bg-navy-500">
            <p className="font-display text-2xl tracking-wide text-white">Facebook</p>
            <p className="mt-2 text-sm text-cream/75">Catch up on the latest news about BMRS.</p>
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer" className="bg-navy-700 px-6 py-8 transition hover:bg-navy-500">
            <p className="font-display text-2xl tracking-wide text-white">Instagram</p>
            <p className="mt-2 text-sm text-cream/75">We’re on Instagram too. Follow along.</p>
          </a>
          <a href={site.social.youtubeLive} target="_blank" rel="noreferrer" className="bg-navy-700 px-6 py-8 transition hover:bg-navy-500">
            <p className="font-display text-2xl tracking-wide text-white">Live on YouTube</p>
            <p className="mt-2 text-sm text-cream/75">Videos and live cameras. Click the red LIVE label.</p>
          </a>
          <Link to="/visit" className="bg-navy-700 px-6 py-8 transition hover:bg-navy-500">
            <p className="font-display text-2xl tracking-wide text-white">2026 Open Houses</p>
            <p className="mt-2 text-sm text-cream/75">Saturdays 1–4 pm · Sep 19, Oct 17, Nov 21, Dec 19</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
        <div>
          <p className="section-kicker">This Friday</p>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-navy sm:text-5xl">{twilight.name}</h2>
          <p className="mt-4 text-lg leading-8 text-navy/80">{twilight.summary}</p>
          <ul className="mt-6 grid gap-2 text-sm text-navy/80 sm:grid-cols-2">
            {twilight.highlights.map((item) => (
              <li key={item} className="border-l-2 border-gold pl-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/twilight" className="btn-primary">
              Event details
            </Link>
            <Link to="/visit" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-barn">
              Full calendar →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/gallery-01.jpg" alt="Trains at Twilight crowd and museum building" className="h-56 w-full object-cover md:h-72" />
          <img src="/images/gallery-09.jpg" alt="Nighttime trains at Boothe Park" className="mt-8 h-56 w-full object-cover md:h-72" />
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">The layouts</p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em]">Six railroads under one roof</h2>
            </div>
            <Link to="/layouts" className="text-sm font-semibold uppercase tracking-[0.14em] text-barn">
              Explore every layout →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {layouts.map((layout) => (
              <Link key={layout.slug} to={`/layouts/${layout.slug}`} className="ticket-card group overflow-hidden">
                <img src={layout.image} alt={layout.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-barn">{layout.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl uppercase tracking-wide">{layout.shortName}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/75">{layout.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-6 lg:py-24">
        <div>
          <p className="section-kicker">About BMRS</p>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em]">An all-volunteer museum since 1999</h2>
          <p className="mt-5 text-lg leading-8 text-navy/80">
            Established in 1999, BMRS has been an integral part of the many offerings at Boothe Memorial Park. We are a nonprofit charitable 501(c)(3) organization.
          </p>
          <p className="mt-4 leading-7 text-navy/75">{site.mission}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="btn-primary">
              Our story
            </Link>
            <Link to="/join" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-barn">
              Join the crew →
            </Link>
          </div>
        </div>
        <img src="/images/park-map.jpg" alt="Map to BMRS at Boothe Memorial Park" className="w-full border border-parchment bg-white object-contain p-3" />
      </section>

      <ReviewsSection />

      <section className="bg-night py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker !text-gold">From the park</p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-white">Lights, trains, and twilight</h2>
            </div>
            <Link to="/media" className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Videos & pics →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 8).map((src) => (
              <img key={src} src={src} alt="BMRS event photo" className="h-36 w-full object-cover md:h-44" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-barn py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">Upcoming events</p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide">Get notices of special openings</h2>
            <p className="mt-2 max-w-xl text-white/80">We will not use your email for other purposes.</p>
          </div>
          <NewsletterForm dark />
        </div>
      </section>
    </>
  )
}
