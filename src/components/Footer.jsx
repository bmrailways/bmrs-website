import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-night text-cream">
      <div className="rail-line h-1.5" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-6">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-[0.12em] text-white">BMRS</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-cream/75">
            {site.name} is an all-volunteer, nonprofit 501(c)(3) railroad museum at Boothe Memorial Park in Stratford, Connecticut.
          </p>
          <blockquote className="mt-6 border-l-2 border-gold pl-4 text-sm italic text-cream/80">
            “Sitting outside on the benches watching the garden railway was a real treat.”
            <span className="mt-2 block not-italic text-cream/50">Mr. E., Google review</span>
          </blockquote>
        </div>
        <div>
          <p className="section-kicker !text-gold">Visit</p>
          <p className="mt-3 text-sm leading-6 text-cream/80">{site.address}</p>
          <p className="mt-3 text-sm leading-6 text-cream/70">
            Mailing address
            <br />
            {site.mailingAddress}
          </p>
        </div>
        <div>
          <p className="section-kicker !text-gold">Connect</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a className="hover:text-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="hover:text-gold" href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="hover:text-gold" href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-gold" href={site.social.youtubeLive} target="_blank" rel="noreferrer">
              YouTube live cameras
            </a>
            <Link className="hover:text-gold" to="/contact">
              Contact
            </Link>
            <Link className="hover:text-gold" to="/join">
              Become a member
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs uppercase tracking-[0.16em] text-cream/50">
        © {new Date().getFullYear()} {site.shortName}. {site.name}, Inc.
      </div>
    </footer>
  )
}
