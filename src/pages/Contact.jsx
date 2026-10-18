import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.fname} ${form.lname}`.trim(),
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        label="GET IN TOUCH"
        title="Start a conversation<br/>about your project"
        subtitle="Tell us what you need. We'll respond within one business day with a clear outline of how we can help."
      />

      <section className="py-16 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-6">CONTACT DETAILS</span>
              <div className="flex flex-col gap-6">
                {[
                  { icon: '📍', label: 'OFFICE', val: 'Auckland, New Zealand' },
                  { icon: '📞', label: 'PHONE', val: '(+64) 22 555 7076\n(+64) 22 457 7076', href: 'tel:+64225557076' },
                  { icon: '✉', label: 'EMAIL', val: 'info@vectraltd.co.nz', href: 'mailto:info@vectraltd.co.nz' },
                  { icon: '🌐', label: 'WEBSITE', val: 'www.vectraltd.co.nz', href: 'https://www.vectraltd.co.nz' },
                  { icon: '👤', label: 'CONTACT', val: 'Vishal Pandya' },
                ].map(c => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 min-w-[40px] border border-blue/25 flex items-center justify-center text-sm">
                      {c.icon}
                    </div>
                    <div>
                      <div className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted mb-1">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-white hover:text-blue-light transition-colors font-light text-sm whitespace-pre-line leading-relaxed block">
                          {c.val}
                        </a>
                      ) : (
                        <div className="text-white font-light text-sm whitespace-pre-line leading-relaxed">{c.val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-blue/20 pt-8">
              <div className="font-head font-semibold text-xs tracking-[0.18em] text-silver mb-4">OFFICE HOURS</div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-silver-light font-light">Monday – Friday</span>
                  <span className="text-muted font-light">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-silver-light font-light">Saturday</span>
                  <span className="text-muted font-light">By appointment</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-silver-light font-light">Sunday</span>
                  <span className="text-muted font-light">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-blue/40 bg-blue/10 p-12 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-head font-bold text-white text-xl mb-3">Message received</h3>
                <p className="text-silver-light font-light text-sm leading-relaxed">We will be in touch within one business day. If your need is urgent, call us directly at (+64) 22 555 7076.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted">FIRST NAME</label>
                    <input name="fname" value={form.fname} onChange={handle} required placeholder="James"
                      className="bg-navy border border-blue/25 focus:border-blue px-4 py-3 text-white font-body text-sm font-light outline-none placeholder:text-muted/50 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted">LAST NAME</label>
                    <input name="lname" value={form.lname} onChange={handle} required placeholder="Mitchell"
                      className="bg-navy border border-blue/25 focus:border-blue px-4 py-3 text-white font-body text-sm font-light outline-none placeholder:text-muted/50 transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted">EMAIL ADDRESS</label>
                  <input name="email" type="email" value={form.email} onChange={handle} required placeholder="james@company.co.nz"
                    className="bg-navy border border-blue/25 focus:border-blue px-4 py-3 text-white font-body text-sm font-light outline-none placeholder:text-muted/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted">PHONE (OPTIONAL)</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+64 9 xxx xxxx"
                    className="bg-navy border border-blue/25 focus:border-blue px-4 py-3 text-white font-body text-sm font-light outline-none placeholder:text-muted/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted">SERVICE INTEREST</label>
                  <select name="service" value={form.service} onChange={handle}
                    className="bg-navy border border-blue/25 focus:border-blue px-4 py-3 text-white font-body text-sm font-light outline-none transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select a service</option>
                    {['Custom Software Development','Cloud Solutions & Migration','Web & Mobile Applications','Cybersecurity & Compliance','Data Analytics & BI','IT Consulting & Strategy'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-head font-semibold text-[10px] tracking-[0.16em] text-muted">TELL US ABOUT YOUR PROJECT</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5}
                    placeholder="Brief overview of what you need, your timeline, and any constraints..."
                    className="bg-navy border border-blue/25 focus:border-blue px-4 py-3 text-white font-body text-sm font-light outline-none placeholder:text-muted/50 transition-colors resize-y" />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={loading}
                  className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-8 py-4 btn-skew transition-colors self-start disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="border border-blue/20 bg-navy-mid h-48 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'linear-gradient(#2472B3 1px,transparent 1px),linear-gradient(90deg,#2472B3 1px,transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <div className="relative text-center">
              <div className="font-head font-bold text-white text-lg mb-1">Auckland, New Zealand</div>
              <div className="text-muted font-light text-sm">Serving clients across NZ and the Australasia region</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}