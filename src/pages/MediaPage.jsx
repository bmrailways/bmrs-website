import PageHero from '../components/PageHero'
import { gallery, site, videos } from '../data/site'

export default function MediaPage() {
  return (
    <>
      <PageHero
        image="/images/video-drone.jpg"
        kicker="Videos & pics"
        title="A different perspective on the Railroad Museum"
        text="Watch drone footage, ride the O Gauge layout from the cab, and browse photos from open houses and Trains at Twilight."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-10">
          {videos.map((video) => (
            <article key={video.youtubeId} className="ticket-card min-w-0 overflow-hidden lg:grid lg:grid-cols-2">
              <div className="aspect-video min-w-0 bg-night">
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  className="h-full w-full max-w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-8">
                <h2 className="font-display text-3xl uppercase tracking-wide">{video.title}</h2>
                <p className="mt-4 leading-7 text-navy/80">{video.text}</p>
                <a href={video.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-barn">
                  Watch on YouTube →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-night py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker !text-gold">Photo gallery</p>
              <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-white">The museum’s best pictures</h2>
            </div>
            <a href={site.social.flickr} target="_blank" rel="noreferrer" className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Full Flickr albums →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((src) => (
              <img key={src} src={src} alt="BMRS photo" className="h-36 w-full object-cover md:h-44" />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={site.social.youtubeLive} target="_blank" rel="noreferrer" className="btn-gold">
              Live cameras on YouTube
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="btn-ghost">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
