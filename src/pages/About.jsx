import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'



const values = [
  { t: 'Transparency', d: 'We say what we mean and scope what we say. No surprises in the invoice or the delivery timeline.' },
  { t: 'Technical excellence', d: 'Senior engineers on every project. We hold ourselves to the same standard we would for our own businesses.' },
  { t: 'Accountability', d: 'When something goes wrong — and sometimes it does — we are on the phone, not sending an automated ticket response.' },
  { t: 'Long-term thinking', d: 'We build systems designed to be maintained and extended, not just delivered and forgotten.' },
]

export default function About() {
  return (
    <>
      <PageHero
        label="WHO WE ARE"
        title="Auckland engineers who<br/>deliver what they promise"
        subtitle="Vectra Limited was founded on one principle: clients deserve to work directly with the people building their software."
      />

      {/* Story */}
      <section className="py-20 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">OUR STORY</span>
            <h2 className="font-head font-bold text-white text-3xl leading-tight mb-6">Founded to fix a broken model</h2>
            <div className="flex flex-col gap-4">
              <p className="text-silver-light font-light text-sm leading-relaxed">
                Vectra Limited was founded in Auckland with one conviction: mid-market businesses deserve the same quality of engineering attention that large enterprises take for granted — without the overhead, the account managers, or the handoff to offshore teams.
              </p>
              <p className="text-silver-light font-light text-sm leading-relaxed">
                We operate as a lean, senior team. When you scope a project with us, you are speaking with the same engineers who will architect and build it. That removes a layer of friction that causes most software projects to fail — communication between what was asked for and what gets built.
              </p>
              <p className="text-silver-light font-light text-sm leading-relaxed">
                Eight years and 150+ delivered projects later, that model has proven itself across industries including logistics, financial services, retail, and healthcare across New Zealand.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '150+', l: 'Projects Delivered' },
              { n: '98%', l: 'On-Time Delivery' },
              { n: '8+', l: 'Years in Business' },
              { n: '3', l: 'Countries Served' },
            ].map(s => (
              <div key={s.l} className="bg-navy border border-blue/20 p-8">
                <div className="font-head font-bold text-white text-4xl leading-none mb-2">{s.n}</div>
                <div className="text-muted font-light text-xs tracking-wider">{s.l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">OUR VISION</span>
          <h2 className="font-head font-bold text-white text-3xl leading-tight mb-4">Where we are headed</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {[
              { t: 'Mission', d: 'To give New Zealand businesses access to senior-level technical execution without the complexity of large agency engagement models.' },
              { t: 'Vision', d: 'To be the most trusted technology delivery partner in the Australasian region — measured in client outcomes, not contract value.' },
              { t: 'Focus for 2025+', d: 'Expanding our AI integration and data analytics practice to help clients extract value from the data they already have.' },
            ].map(v => (
              <div key={v.t} className="border-t-2 border-blue pt-6">
                <div className="font-head font-bold text-white text-xl mb-3">{v.t}</div>
                <p className="text-silver-light font-light text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">WHAT DRIVES US</span>
          <h2 className="font-head font-bold text-white text-3xl leading-tight mb-12">Our values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={v.t} className="flex gap-5">
                <div className="font-head font-bold text-blue/25 text-3xl leading-none min-w-[48px]">0{i+1}</div>
                <div className="border-b border-blue/15 pb-6">
                  <div className="font-head font-bold text-white text-lg mb-2">{v.t}</div>
                  <p className="text-silver-light font-light text-sm leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 border-t border-blue/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-head font-bold text-white mb-4 text-3xl">Want to work with us?</h2>
          <p className="text-silver-light font-light text-sm leading-relaxed mb-8">We take on a limited number of new projects each quarter to ensure quality of delivery. Get in touch early.</p>
          <Link to="/contact" className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-10 py-4 btn-skew transition-colors inline-block">
            START A CONVERSATION
          </Link>
        </div>
      </section>
    </>
  )
}
