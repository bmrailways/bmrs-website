import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const cards = [
  {
    to: '/visit',
    title: 'Calendar of events',
    text: 'During the summer we are open on Saturdays from 1 pm to 4 pm. From November to April we open the 3rd Saturday of the month, weather permitting.',
  },
  {
    to: '/caboose/links',
    title: 'Links',
    text: 'Websites of other organizations and places of interest, from the New Jersey HiRailers to our neighbors at Boothe Park.',
  },
  {
    to: '/caboose/faqs',
    title: 'FAQs',
    text: 'We’ve compiled answers to common questions about admission, hours, layouts, and joining the club.',
  },
  {
    to: '/caboose/funding',
    title: 'Funding',
    text: 'As a nonprofit charitable organization, funding our museum is challenging. Admission is always free. Donations keep our trains running.',
  },
  {
    to: '/caboose/stem',
    title: 'STEM',
    text: 'Resources for students and parents from Chapel School STEAM night, including Arduino and micro:bit links.',
  },
  {
    to: '/caboose/workshop',
    title: 'Workshop',
    text: 'Check here for upcoming workshops. None are scheduled currently.',
  },
]

export default function CaboosePage() {
  return (
    <>
      <PageHero
        image="/images/gallery-10.jpg"
        kicker="Traditionally…"
        title="The caboose"
        text="A train’s caboose is the conductor’s office, a workplace at the end of a freight train that the conductor uses to do paperwork, coordinate operations, and keep an eye on the rest of the train. Our virtual caboose is where important information is available to our visitors."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.to} to={card.to} className="ticket-card p-7 transition hover:-translate-y-0.5">
              <h2 className="font-display text-2xl uppercase tracking-wide">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-navy/75">{card.text}</p>
              <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-barn">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
