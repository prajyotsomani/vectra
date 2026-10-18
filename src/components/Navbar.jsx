import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/vectralogo.png'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-blue/20
        ${scrolled ? 'bg-navy/97 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-navy/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 sm:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
            <img src={logo} alt="Vectra Limited" className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
            <div>
              <div className="font-head font-bold text-white text-xs sm:text-base tracking-widest leading-none">VECTRA LIMITED</div>
              <div className="font-body font-light text-muted text-[8px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.18em] mt-0.5 sm:mt-1">AUCKLAND IT SOLUTIONS</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-xs font-medium tracking-widest transition-all py-1.5 relative ${
                      isActive ? 'text-blue-light font-semibold' : 'text-silver hover:text-white'
                    }`
                  }>
                  {({ isActive }) => (
                    <>
                      {l.label.toUpperCase()}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-light rounded-full shadow-[0_0_8px_#3A8FD4]" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact"
            className="hidden md:inline-block bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-5 py-2.5 btn-skew transition-colors duration-200">
            GET IN TOUCH
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 p-2 text-silver-light focus:outline-none"
            aria-label="Toggle menu">
            <span className={`block h-0.5 bg-silver-light rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px] w-6' : 'w-5'}`}></span>
            <span className={`block h-0.5 bg-silver-light rounded transition-all duration-300 ${open ? 'opacity-0 w-0' : 'w-5'}`}></span>
            <span className={`block h-0.5 bg-silver-light rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px] w-6' : 'w-5'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute top-16 left-0 right-0 bg-[#0B1524] border-b border-blue/30 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 px-3 rounded font-head font-semibold text-base tracking-widest transition-colors ${
                    isActive ? 'text-blue-light bg-blue/15 font-bold' : 'text-silver-light hover:text-white'
                  }`
                }>
                {l.label.toUpperCase()}
                <span className="text-blue/50 text-sm">›</span>
              </NavLink>
            ))}

            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-5 bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest py-3.5 btn-skew text-center transition-colors block">
              GET IN TOUCH
            </Link>

            {/* Contact info in mobile menu */}
            <div className="mt-6 pt-4 border-t border-blue/15 flex flex-col gap-2">
              <p className="text-muted text-xs font-light">📍 Auckland, New Zealand</p>
              <a href="tel:+64225557076" className="text-muted text-xs font-light hover:text-blue-light transition-colors">📞 (+64) 22 555 7076</a>
              <a href="mailto:info@vectraltd.co.nz" className="text-muted text-xs font-light hover:text-blue-light transition-colors">✉ info@vectraltd.co.nz</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
