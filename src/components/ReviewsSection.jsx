import { reviews, site } from '../data/site'

function Stars() {
  return (
    <span className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.81.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

export default function ReviewsSection({ dark = false }) {
  return (
    <section className={dark ? 'bg-night py-16 text-cream' : 'bg-parchment py-16'}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={`section-kicker ${dark ? '!text-gold' : ''}`}>Visitor reviews</p>
            <h2 className={`mt-3 font-display text-4xl uppercase tracking-[0.08em] ${dark ? 'text-white' : ''}`}>
              What people say
            </h2>
            <p className={`mt-3 max-w-2xl text-sm ${dark ? 'text-cream/70' : 'text-navy/70'}`}>
              These are the written Google reviews for the museum. Admission is free, and most visitors walk right in.
            </p>
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={dark ? 'text-sm font-semibold uppercase tracking-[0.14em] text-gold' : 'text-sm font-semibold uppercase tracking-[0.14em] text-barn'}
          >
            Read on Google →
          </a>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className={dark ? 'border border-white/10 bg-navy-700 p-6' : 'ticket-card p-6'}>
              <Stars />
              <blockquote className={`mt-4 text-sm leading-7 ${dark ? 'text-cream/90' : 'text-navy/80'}`}>
                “{review.quote}”
              </blockquote>
              <p className={`mt-5 font-display text-lg uppercase tracking-wide ${dark ? 'text-white' : ''}`}>
                {review.name}
              </p>
              <p className={`text-xs uppercase tracking-[0.16em] ${dark ? 'text-cream/50' : 'text-navy/50'}`}>{review.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
