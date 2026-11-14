import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    if (window.matchMedia('(min-width: 1280px)').matches) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/95 pt-[env(safe-area-inset-top)] text-cream backdrop-blur">
      <div className="rail-line h-1.5" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-sm bg-barn font-display text-[11px] leading-none tracking-[0.12em] text-white">
            BMRS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-[0.12em] text-white">BMRS</span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-steel-300 sm:block">
              Railroad Museum at Boothe Park
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <div
              key={item.to}
              className="relative shrink-0"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block whitespace-nowrap px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
                    isActive ? 'text-gold' : 'text-cream/85 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full min-w-[180px] border border-white/10 bg-navy py-2 shadow-ticket">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="block px-4 py-2 text-xs uppercase tracking-[0.14em] text-cream/90 hover:bg-white/5 hover:text-gold"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/visit" className="ml-2 shrink-0 btn-gold !whitespace-nowrap !px-3 !py-2 !text-[11px]">
            Open Houses
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center text-white xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-5.25rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-navy px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] xl:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  className="flex min-h-11 items-center py-2 text-sm uppercase tracking-[0.16em] text-cream"
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="mb-2 ml-3 border-l border-white/10 pl-3">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="flex min-h-10 items-center py-1.5 text-xs uppercase tracking-[0.14em] text-steel-300"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/visit" className="mt-2 w-full btn-gold">
              Holiday Open Houses
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost mt-2 w-full">
              Email BMRS
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
