export default function PageHero({ kicker, title, text, image, children }) {
  return (
    <section className="relative overflow-hidden bg-night text-cream">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-navy/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-28">
        {kicker && <p className="section-kicker !text-gold">{kicker}</p>}
        <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/85">{text}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
