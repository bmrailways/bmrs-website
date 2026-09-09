import PageHero from '../components/PageHero'
import { stemLinks } from '../data/site'

export default function StemPage() {
  return (
    <>
      <PageHero
        image="/images/outreach-school.jpg"
        kicker="Chapel School links"
        title="STEM"
        text="The links below are for students and parents who visited the Chapel School STEAM night displays. Thanks for your interest. You’re always welcome at a BMRS open house."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <div className="grid gap-4">
          {stemLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="ticket-card flex items-center justify-between p-5 transition hover:-translate-y-0.5"
            >
              <span className="font-display text-xl uppercase tracking-wide">{link.name}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-barn">Open →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
