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
              {['Li','Tw','Gh','Fb'].map(s => (
                <a key={s} href="#" className="w-8 h-8 border border-blue/30 flex items-center justify-center text-muted hover:border-blue hover:text-blue-light transition-colors text-xs font-head font-bold">{s}</a>
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
