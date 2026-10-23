import { Link } from 'react-router-dom'
import logo from '../assets/vectralogo.png'

export default function Footer() {
  return (
    <footer className="bg-[#080E17] border-t border-blue/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex group">
              <img src={logo} alt="Vectra Limited" className="h-10 w-auto group-hover:brightness-110 transition-all" />
              <div>
                <div className="font-head font-bold text-white tracking-widest text-base leading-none">VECTRA LIMITED</div>
                <div className="font-body font-light text-muted text-[10px] tracking-[0.18em] mt-1">AUCKLAND IT SOLUTIONS</div>
              </div>
            </Link>
            <p className="text-muted font-light text-sm leading-relaxed max-w-xs mb-6">
              Auckland's trusted IT solutions partner. Delivering software, cloud, and consulting services across New Zealand since 2016.
            </p>
            <div className="flex gap-2">
              {[
                {
                  name: 'LinkedIn',
                  href: '#',
                  viewBox: '0 0 448 512',
                  path: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
                },
                {
                  name: 'Twitter',
                  href: '#',
                  viewBox: '0 0 512 512',
                  path: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.582 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
                },
                {
                  name: 'Facebook',
                  href: '#',
                  viewBox: '0 0 320 512',
                  path: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
                },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 border border-blue/30 flex items-center justify-center text-muted hover:border-blue hover:text-blue-light transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox={s.viewBox} fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-head font-bold text-xs tracking-[0.2em] text-silver mb-5">SERVICES</div>
            <ul className="flex flex-col gap-3">
              {['Software Development','Cloud Solutions','Web & Mobile Apps','Cybersecurity','Data Analytics','IT Consulting'].map(s => (
                <li key={s}><Link to="/services" className="text-muted text-sm font-light hover:text-blue-light transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-head font-bold text-xs tracking-[0.2em] text-silver mb-5">COMPANY</div>
            <ul className="flex flex-col gap-3">
              {[['About','about'],['Blog','blog'],['Contact','contact']].map(([l,p]) => (
                <li key={p}><Link to={`/${p}`} className="text-muted text-sm font-light hover:text-blue-light transition-colors">{l}</Link></li>
              ))}
            </ul>
            <div className="font-head font-bold text-xs tracking-[0.2em] text-silver mt-8 mb-4">CONTACT</div>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@vectraltd.co.nz" className="text-muted text-sm font-light hover:text-blue-light transition-colors">info@vectraltd.co.nz</a>
              <span className="text-muted text-sm font-light">(+64) 22 555 7076</span>
              <span className="text-muted text-sm font-light">Auckland, New Zealand</span>
            </div>
          </div>
        </div>

        <div className="border-t border-blue/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted text-xs font-light">© {new Date().getFullYear()} Vectra Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted text-xs font-light hover:text-silver transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted text-xs font-light hover:text-silver transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
