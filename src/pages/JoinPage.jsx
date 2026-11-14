import NewsletterForm from '../components/NewsletterForm'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function JoinPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-01.jpg"
        kicker="All volunteer"
        title="Join us"
        text="If you have trains, or are interested in learning about and operating model trains, you’re invited."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-wide">New members welcome</h2>
          <p className="mt-4 text-lg leading-8 text-navy/80">
            We welcome new members to join our all-volunteer organization. For info, send an email to{' '}
            <a className="font-semibold text-barn" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <p className="mt-4 leading-7 text-navy/75">
            Work nights are typically the 2nd and 4th Wednesday of each month from 6:30–8:30 pm. Adult visitors and hobbyists are informally invited.
          </p>
          <a href={site.membershipPdf} className="btn-primary mt-8 w-full sm:w-auto" download>
            Download the membership application
          </a>
        </div>
        <div className="ticket-card p-5 sm:p-8">
          <h3 className="font-display text-2xl uppercase">Email for upcoming events</h3>
          <p className="mt-3 text-sm leading-6 text-navy/70">
            Submit your email and we’ll let you know about upcoming events. We will not use your email for other purposes.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
