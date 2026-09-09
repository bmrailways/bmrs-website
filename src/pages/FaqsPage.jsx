import PageHero from '../components/PageHero'
import { faqs } from '../data/site'

export default function FaqsPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-08.jpg"
        kicker="The caboose"
        title="Frequently asked questions"
        text="A few answers before you roll into Boothe Park."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <div className="space-y-4">
          {faqs.map((item) => (
            <article key={item.q} className="ticket-card p-6">
              <h2 className="font-display text-2xl uppercase tracking-wide">{item.q}</h2>
              <p className="mt-3 leading-7 text-navy/80">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
