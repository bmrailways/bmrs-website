import { site } from '../data/site'

export default function NewsletterForm({ dark = false }) {
  const action = `mailto:${site.email}?subject=${encodeURIComponent('Please add me to the BMRS mailing list')}`

  return (
    <form action={action} method="GET" className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="body"
        required
        placeholder="Your email address"
        className={`min-h-12 w-full min-w-0 flex-1 rounded-sm border px-4 text-base outline-none ring-gold/40 focus:ring-2 sm:text-sm ${
          dark ? 'border-white/20 bg-white/10 text-white placeholder:text-white/50' : 'border-parchment bg-white text-navy'
        }`}
      />
      <button type="submit" className={`${dark ? 'btn-gold' : 'btn-primary'} w-full sm:w-auto`}>
        Keep me posted
      </button>
    </form>
  )
}
