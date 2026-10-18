import React from 'react'
import { Link } from 'react-router-dom'
import CircuitCanvas from '../components/CircuitCanvas.jsx'
import logo from '../assets/vectralogo.png'

// ── Terminal animation component ──
const LINES = [
  { delay: 500,  type: 'cmd',   text: 'vectra@auckland % ./deploy --project=client-portal' },
  { delay: 1000, type: 'ok',    text: '✔ Connecting to AWS us-east-1...' },
  { delay: 1600, type: 'ok',    text: '✔ Running security audit...' },
  { delay: 2200, type: 'ok',    text: '✔ Building Docker containers...' },
  { delay: 2800, type: 'arrow', text: '→ Deploying to Kubernetes cluster...' },
  { delay: 3400, type: 'ok',    text: '✔ Health checks passed (3/3)' },
  { delay: 3900, type: 'ok',    text: '✔ SSL certificates renewed' },
  { delay: 4400, type: 'ok',    text: '✔ CDN cache invalidated globally' },
  { delay: 5000, type: 'success',text: 'SUCCESS  Deployed in 2m 14s — Zero downtime ✓' },
  { delay: 5600, type: 'cursor', text: 'vectra@auckland %' },
]

function TerminalWindow() {
  const [visible, setVisible] = React.useState([])

  React.useEffect(() => {
    const timers = LINES.map((l, i) =>
      setTimeout(() => setVisible(v => [...v, i]), l.delay)
    )
    // restart loop
    const loop = setTimeout(() => setVisible([]), 8000)
    return () => { timers.forEach(clearTimeout); clearTimeout(loop) }
  }, [visible.length === 0 ? 0 : undefined])

  // re-trigger loop when reset
  React.useEffect(() => {
    if (visible.length !== 0) return
    const timers = LINES.map((l, i) =>
      setTimeout(() => setVisible(v => [...v, i]), l.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [visible.length])

  const color = (type) => {
    if (type === 'cmd')     return 'text-[#E8EAF0]'
    if (type === 'ok')      return 'text-[#4CAF50]'
    if (type === 'arrow')   return 'text-[#FFD700]'
    if (type === 'success') return 'text-[#4CAF50] font-semibold'
    if (type === 'cursor')  return 'text-[#E8EAF0]'
    return 'text-silver-light'
  }

  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden border border-blue/30"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(36,114,179,0.1)' }}>
      {/* Title bar */}
      <div className="bg-navy-mid px-4 py-2.5 flex items-center gap-2 border-b border-blue/20">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
        <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
        <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
        <span className="ml-auto font-mono text-[10px] text-muted">vectra@auckland ~ %</span>
      </div>
      {/* Body */}
      <div className="bg-[#0d1a2e] px-5 py-4 font-mono text-[11px] leading-relaxed min-h-[200px]">
        {LINES.map((l, i) => (
          <div key={i}
            className={`transition-all duration-300 ${visible.includes(i) ? 'opacity-100' : 'opacity-0'} ${color(l.type)}`}>
            {l.type === 'cmd' && (
              <span><span className="text-blue-light font-bold">vectra@auckland</span> % {l.text.split('%')[1]}</span>
            )}
            {l.type === 'cursor' && (
              <span>
                <span className="text-blue-light font-bold">vectra@auckland</span>
                <span> % </span>
                <span className="inline-block w-2 h-3.5 bg-blue-light align-middle animate-[blink_1s_step-end_infinite]"></span>
              </span>
            )}
            {!['cmd','cursor'].includes(l.type) && l.text}
          </div>
        ))}
      </div>
    </div>
  )
}

const services = [
  { icon: '⬡', name: 'Custom Software',    desc: 'Purpose-built applications designed around your workflows.' },
  { icon: '☁', name: 'Cloud Solutions',    desc: 'Secure migrations and managed infrastructure on AWS, Azure, GCP.' },
  { icon: '⬢', name: 'Web & Mobile Apps',  desc: 'Fast, scalable apps built with modern frameworks.' },
  { icon: '⬟', name: 'Cybersecurity',      desc: 'Audits, penetration testing, and compliance frameworks.' },
  { icon: '◈', name: 'Data Analytics',     desc: 'Dashboards and pipelines that turn data into decisions.' },
  { icon: '◉', name: 'IT Consulting',      desc: 'Independent technical advice from senior engineers.' },
  { icon: '📣', name: 'Digital Marketing', desc: 'SEO, paid campaigns, and content marketing that drives measurable ROI.' },
  { icon: '🤖', name: 'AI Automation',     desc: 'Automate workflows, integrate LLMs, and deploy intelligent agents.' },
]

const testimonials = [
  { q: 'Vectra rebuilt our internal ops platform in three months. The team was direct, technically excellent, and actually delivered what they said.', name: 'James Mitchell', role: 'Operations Director, Auckland Logistics', init: 'JM' },
  { q: 'Our cloud migration was handled end-to-end with zero downtime. Their documentation made it easy for our team to take over.', name: 'Sarah Rowe', role: 'CTO, Meridian Financial Services', init: 'SR' },
  { q: 'When we had a critical issue three weeks after launch, Vishal and the team were on a call within the hour. That accountability is rare.', name: 'Thomas Kirwan', role: 'Managing Director, KirwanGroup NZ', init: 'TK' },
]

const marqueeItems = ['SOFTWARE DEVELOPMENT','CLOUD INFRASTRUCTURE','DIGITAL TRANSFORMATION','IT CONSULTING','CYBERSECURITY','WEB & MOBILE APPS','DATA ANALYTICS']

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 px-6 lg:px-10 overflow-hidden bg-navy">
        <CircuitCanvas />

        {/* Glow blobs */}
        <div className="absolute top-[-120px] right-[-80px] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(36,114,179,0.22) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(36,114,179,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-[fadeUpIn_0.8s_ease_both]">
            <span className="block font-head font-semibold text-blue-light text-xs tracking-[0.22em] mb-5">
              AUCKLAND BASED · EST. NEW ZEALAND
            </span>
            <h1 className="font-head font-bold text-white leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}>
              Software that<br />
              <span className="text-blue-light">moves your</span><br />
              business forward
            </h1>
            <p className="text-silver-light font-light text-sm sm:text-base leading-relaxed max-w-md mb-8 sm:mb-10">
              Vectra Limited delivers enterprise-grade IT solutions built for the way New Zealand businesses actually work — from custom software to cloud infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
              <Link to="/services"
                className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-6 sm:px-8 py-3.5 btn-skew transition-colors duration-200">
                OUR SERVICES
              </Link>
              <Link to="/contact"
                className="border border-silver/40 hover:border-blue-light text-silver-light hover:text-blue-light font-head font-semibold text-xs tracking-widest px-6 sm:px-8 py-3.5 btn-skew transition-colors duration-200">
                TALK TO US
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-blue/20 pt-8">
              {[['150+','PROJECTS DELIVERED'],['98%','CLIENT RETENTION'],['8+','YEARS OPERATING']].map(([n,l]) => (
                <div key={l}>
                  <div className="font-head font-bold text-white text-xl sm:text-2xl leading-none mb-1">{n}</div>
                  <div className="text-muted font-light text-[8px] sm:text-[10px] tracking-wider leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Orbiting Logo + Terminal */}
          <div className="hidden lg:flex flex-col gap-5 items-center justify-center">

            {/* Orbiting Logo */}
            <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>
              {/* Orbit ring 1 */}
              <div className="absolute rounded-full border border-blue/30 animate-[spin_9s_linear_infinite]"
                style={{ width: 220, height: 220 }}>
                <div className="absolute w-2 h-2 rounded-full bg-blue-light top-[-4px] left-1/2 -translate-x-1/2"
                  style={{ boxShadow: '0 0 10px #3A8FD4, 0 0 20px rgba(58,143,212,0.4)' }} />
              </div>
              {/* Orbit ring 2 */}
              <div className="absolute rounded-full border border-dashed border-blue/20 animate-[spin_16s_linear_infinite_reverse]"
                style={{ width: 265, height: 265 }}>
                <div className="absolute w-2 h-2 rounded-full bg-blue bottom-[-4px] left-1/2 -translate-x-1/2"
                  style={{ boxShadow: '0 0 10px #2472B3' }} />
              </div>
              {/* Orbit ring 3 */}
              <div className="absolute rounded-full border border-blue/10 animate-[spin_24s_linear_infinite]"
                style={{ width: 295, height: 295 }}>
                <div className="absolute w-1.5 h-1.5 rounded-full top-[-3px] left-1/2 -translate-x-1/2"
                  style={{ background: '#1B5C99', boxShadow: '0 0 8px #1B5C99' }} />
              </div>
              {/* Logo */}
              <img src={logo} alt="Vectra Limited"
                className="relative z-10 object-contain"
                style={{
                  width: 165, height: 165,
                  animation: 'logoPulse 3.5s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 28px rgba(36,114,179,0.55))',
                }} />
              {/* Tech badges */}
              {[
                { label: 'CLOUD',     cls: 'top-2 right-4' },
                { label: 'AI & DATA', cls: 'bottom-10 right-0' },
                { label: 'SECURITY',  cls: 'bottom-4 left-2' },
                { label: 'SOFTWARE',  cls: 'top-10 left-0' },
              ].map((b, i) => (
                <div key={b.label}
                  className={`absolute ${b.cls} bg-navy/90 border border-blue/55 backdrop-blur-sm
                    font-head font-bold text-[8px] tracking-widest text-blue-light px-2.5 py-1
                    z-10 whitespace-nowrap`}
                  style={{
                    clipPath: 'polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)',
                    animation: `badgeFloat ${3.2 + i * 0.6}s ease-in-out ${i * 0.4}s infinite`,
                  }}>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Terminal Window */}
            <TerminalWindow />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-blue/20 bg-navy-mid/50 py-3.5 overflow-hidden">
        <div className="flex gap-14 w-max marquee-run">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className={`font-head font-semibold text-xs tracking-[0.2em] whitespace-nowrap ${i % 2 === 1 ? 'text-blue' : 'text-silver'}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">WHAT WE DO</span>
              <h2 className="font-head font-bold text-white leading-tight" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                IT services built<br />for modern businesses
              </h2>
            </div>
            <p className="text-silver-light font-light text-sm leading-relaxed">
              From the first line of code to full-scale deployment, we handle every phase of your digital journey with deep technical expertise and a direct, no-overhead delivery model.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-blue/10">
            {services.map(s => (
              <div key={s.name}
                className="bg-navy-mid hover:bg-steel/40 border border-blue/15 hover:border-blue/40 p-10 transition-all duration-200 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-blue-light text-3xl mb-6">{s.icon}</div>
                <div className="font-head font-bold text-white text-lg tracking-wide mb-3">{s.name}</div>
                <p className="text-silver-light font-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services"
              className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-8 py-3.5 btn-skew transition-colors inline-block">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY VECTRA ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">WHY VECTRA</span>
            <h2 className="font-head font-bold text-white leading-tight mb-10" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
              We treat your project<br />like it's our own
            </h2>
            <div className="flex flex-col gap-8">
              {[
                ['Direct access to senior engineers','The people you meet during scoping are the people who build your product.'],
                ['Fixed-scope, transparent pricing','We scope thoroughly upfront. No surprise invoices, no scope creep without your approval.'],
                ['Built for New Zealand business','Auckland-based, operating across NZ. We understand local compliance and market conditions.'],
                ['Long-term support included','Every engagement includes a structured handover and ongoing support so your team never gets stuck.'],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-5 pb-8 border-b border-blue/15 last:border-0 last:pb-0">
                  <div className="font-head font-bold text-blue/25 text-3xl leading-none min-w-[48px]">0{i+1}</div>
                  <div>
                    <div className="font-head font-semibold text-white text-base mb-1.5">{t}</div>
                    <p className="text-silver-light font-light text-sm leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy-mid border border-blue/20 p-10">
            {[
              { val: '98%', label: 'ON-TIME DELIVERY RATE', w: 98 },
              { val: '96%', label: 'CLIENT SATISFACTION',   w: 96 },
              { val: '92%', label: 'PROJECTS UNDER BUDGET', w: 92 },
              { val: '150+',label: 'DEPLOYMENTS',           w: 85 },
            ].map(m => (
              <div key={m.label} className="mb-8 last:mb-0">
                <div className="font-head font-bold text-white text-3xl leading-none mb-1">{m.val}</div>
                <div className="text-muted font-semibold text-[10px] tracking-[0.14em] mb-3">{m.label}</div>
                <div className="h-[3px] bg-white/5 rounded-full">
                  <div className="h-full bg-gradient-to-r from-blue to-blue-light rounded-full transition-all duration-700"
                    style={{ width: `${m.w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">CLIENT FEEDBACK</span>
          <h2 className="font-head font-bold text-white leading-tight mb-12" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
            What clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.init} className="bg-navy border border-blue/20 p-8">
                <div className="text-blue/60 font-serif text-5xl leading-none mb-4">"</div>
                <p className="text-silver-light font-light text-sm leading-relaxed italic mb-6">{t.q}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-steel flex items-center justify-center font-head font-bold text-white text-xs">
                    {t.init}
                  </div>
                  <div>
                    <div className="font-head font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-muted text-xs font-light">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-10 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #152338 0%, #1B3A5C 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#3A8FD4 1px,transparent 1px),linear-gradient(90deg,#3A8FD4 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-head font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)' }}>
            Ready to start your next project?
          </h2>
          <p className="text-silver-light font-light text-sm leading-relaxed mb-8">
            Tell us what you need and we'll come back with a clear plan, a fixed scope, and a team ready to build it.
          </p>
          <Link to="/contact"
            className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-sm tracking-widest px-10 py-4 btn-skew transition-colors inline-block">
            START A CONVERSATION
          </Link>
        </div>
      </section>
    </>
  )
}
