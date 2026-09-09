import PageHero from '../components/PageHero'
import { partnerLinks } from '../data/site'

export default function LinksPage() {
  return (
    <>
      <PageHero
        image="/images/outreach-hirailers.jpg"
        kicker="The caboose"
        title="Places to visit"
        text="A few websites you might want to check out."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        <div className="space-y-5">
          {partnerLinks.map((link) => (
            <article key={link.name} className="ticket-card p-6">
              <h2 className="font-display text-2xl uppercase tracking-wide">{link.name}</h2>
              <p className="mt-3 leading-7 text-navy/80">{link.text}</p>
              <a href={link.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-barn">
                Visit site →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
