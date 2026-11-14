export default function RecognitionSection() {
  return (
    <section id="john-csonka" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-6 lg:py-24">
        <img
          src="/images/john-csonka.jpg"
          alt="John Csonka holding the etched glass plaque presented by Boothe Memorial Railway Society"
          className="w-full object-cover shadow-ticket"
        />
        <div>
          <p className="section-kicker">November 2, 2026</p>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-navy sm:text-5xl">Thank you, John Csonka</h2>
          <p className="mt-5 text-lg leading-8 text-navy/80">
            At a recent meeting, John Csonka was presented with an etched glass plaque to honor and recognize his 27 years of service to BMRS.
          </p>
          <blockquote className="ticket-card mt-6 p-6 leading-7 text-navy/80">
            <p className="font-display text-2xl uppercase tracking-wide text-navy">With our greatest appreciation</p>
            <p className="mt-4">Presented to John Csonka.</p>
            <p className="mt-3">In recognition of 27 years of dedicated service and work and countless contributions.</p>
            <p className="mt-3">Thank you from your friends and colleagues at Boothe Memorial Railway Society.</p>
            <p className="mt-4 font-semibold tracking-wide text-navy">BMRS 2026</p>
          </blockquote>
          <p className="mt-6 text-lg font-semibold text-navy">Congratulations and thank you, John.</p>
        </div>
      </div>
    </section>
  )
}
