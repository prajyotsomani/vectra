import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const services = [
  {
    icon: '⬡', name: 'Custom Software Development',
    desc: 'Purpose-built applications designed around your workflows. We work with your team to deliver software that fits — not software you fit around.',
    points: ['Requirements analysis & scoping','Architecture design','Agile iterative development','Testing, QA & deployment','Documentation & handover'],
  },
  {
    icon: '☁', name: 'Cloud Solutions & Migration',
    desc: 'Move your infrastructure to the cloud securely and without downtime. We plan, migrate, and manage cloud environments across AWS, Azure, and Google Cloud.',
    points: ['Cloud readiness assessment','Migration planning & execution','Zero-downtime migrations','Cost optimisation','Ongoing managed services'],
  },
  {
    icon: '⬢', name: 'Web & Mobile Applications',
    desc: 'Fast, accessible, and scalable web and mobile apps. Built with modern frameworks and tested across real-world conditions before a single user sees them.',
    points: ['React, Next.js, Vue front-ends','React Native & Flutter mobile','RESTful & GraphQL APIs','Performance optimisation','Cross-platform compatibility'],
  },
  {
    icon: '⬟', name: 'Cybersecurity & Compliance',
    desc: 'Security audits, penetration testing, and compliance frameworks that protect your data and give your clients confidence.',
    points: ['Security audits & gap analysis','Penetration testing','ISO 27001 / SOC 2 readiness','Employee security training','Incident response planning'],
  },
  {
    icon: '◈', name: 'Data Analytics & BI',
    desc: 'Turn raw data into decisions. We build dashboards, pipelines, and reporting systems that give your leadership team a live view of what matters.',
    points: ['Data warehouse design','ETL pipeline development','Power BI / Tableau dashboards','Predictive analytics','Real-time reporting'],
  },
  {
    icon: '◉', name: 'IT Consulting & Strategy',
    desc: 'Independent advice from engineers, not salespeople. We assess your technology landscape and map out the changes that actually move the needle.',
    points: ['Technology audits','Digital transformation roadmaps','Vendor evaluation & selection','CTO-as-a-service','Team augmentation'],
  },
  {
    icon: '📣', name: 'Digital Marketing',
    desc: 'SEO, paid campaigns, social media strategy, and content marketing that drives qualified traffic and delivers measurable ROI for your business.',
    points: ['Search engine optimisation (SEO)','Google & Meta paid ads','Social media strategy','Content marketing & copywriting','Analytics & conversion tracking'],
  },
  {
    icon: '🤖', name: 'AI Automation',
    desc: 'Automate repetitive workflows, integrate large language models into your products, and deploy intelligent agents that save your team hours every single day.',
    points: ['Workflow automation (n8n, Zapier)','LLM integration (GPT-4, Claude)','Custom AI agent development','Document processing & extraction','Chatbot & virtual assistant builds'],
  },
  {
    icon: '👥', name: 'CRM (Customer Relationship Management)',
    desc: 'Customer relationship management solutions to manage customer data, leads, sales pipelines, interactions, and customer relationships efficiently.',
    points: ['Lead capture & pipeline management','Customer data & interaction history','Sales automation & deal tracking','Customer support & contact analytics','Custom CRM integrations & reporting'],
  },
  {
    icon: '💳', name: 'POS (Point of Sale System)',
    desc: 'Point of Sale solutions to manage billing, sales transactions, inventory, and business operations efficiently.',
    points: ['Fast checkout & multi-tender billing','Real-time inventory & stock tracking','Sales reporting & operational analytics','Multi-location register management','Payment terminal & hardware integration'],
  },
  {
    icon: '🛒', name: 'Ecommerce Marketing',
    desc: 'End-to-end ecommerce growth strategies that drive qualified traffic, increase conversion rates, and maximise customer lifetime value.',
    points: ['Multi-channel funnel optimisation','Product feed & marketplace management','Cart abandonment recovery','Conversion rate optimisation (CRO)','Retention & email automation'],
  },
  {
    icon: '🔍', name: 'SEO (Search Engine Optimization)',
    desc: 'Comprehensive organic search strategies to improve rankings, drive high-intent organic traffic, and secure long-term search visibility.',
    points: ['Technical SEO audits & fixes','On-page content & keyword optimisation','Authoritative link building','Site speed & Core Web Vitals','Keyword research & competitor tracking'],
  },
  {
    icon: '📱', name: 'SMM (Social Media Marketing)',
    desc: 'Strategic social media campaigns across major platforms to build brand awareness, engage your audience, and drive customer acquisition.',
    points: ['Content planning & creative production','Meta, LinkedIn & TikTok ads','Community management & engagement','Influencer & brand partnerships','Social listening & performance reporting'],
  },
  {
    icon: '🎯', name: 'SEM (Search Engine Marketing)',
    desc: 'Targeted paid search campaigns on Google and Bing that capture active buyers, minimise cost-per-click, and deliver measurable ROI.',
    points: ['Google Ads search & display campaigns','Bidding strategy & budget optimisation','High-converting landing page alignment','Ad copy & creative A/B testing','Remarketing & audience targeting'],
  },
  {
    icon: '📍', name: 'Local SEO',
    desc: 'Hyper-local search engine optimisation to dominate local map packs, attract nearby customers, and drive foot traffic to your physical locations.',
    points: ['Google Business Profile optimisation','Local citation building & audit','Geotargeted keyword strategy','Review generation & management','Localised landing page creation'],
  },
  {
    icon: '✍', name: 'Content Marketing',
    desc: 'Compelling, research-backed content strategies that position your brand as an industry authority, educate prospects, and fuel inbound leads.',
    points: ['Content strategy & editorial calendars','Blog writing, whitepapers & case studies','SEO-optimised copy & storytelling','Lead magnets & downloadable guides','Distribution & content syndication'],
  },
  {
    icon: '💻', name: 'WordPress Website Design',
    desc: 'Custom, secure, and fast WordPress websites tailored to your brand identity, business workflows, and conversion goals.',
    points: ['Custom theme design & development','WooCommerce store integration','Mobile responsiveness & speed tuning','Plugin architecture & security hardening','Easy-to-use CMS editor training'],
  },
  {
    icon: '🛠', name: 'Website Maintenance & Support',
    desc: 'Keep your website secure, updated, and running smoothly with reliable maintenance, performance monitoring, and ongoing technical support.',
    points: ['Regular website updates and backups','Security monitoring and malware protection','Website speed and performance optimisation','Bug fixes and technical troubleshooting','Ongoing support and content updates'],
  },
]

const process = [
  { n: '01', t: 'Discovery', d: 'We sit with your team to understand the real problem before we touch any technology.' },
  { n: '02', t: 'Architecture', d: 'Engineers design the technical approach. You approve before development begins.' },
  { n: '03', t: 'Build & Test', d: 'Iterative development with regular demos — you see progress throughout.' },
  { n: '04', t: 'Deploy & Support', d: 'Structured launch, full documentation, and ongoing support options.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        label="WHAT WE DO"
        title="IT services built for<br/>modern businesses"
        subtitle="From the first line of code to full-scale deployment, we handle every phase of your digital journey with a direct, no-overhead delivery model."
      />

      {/* Services grid */}
      <section className="py-16 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-blue/10">
          {services.map(s => (
            <div key={s.name} className="bg-navy-mid border border-blue/15 hover:border-blue/40 p-10 group transition-all duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-blue-light text-3xl mb-5">{s.icon}</div>
              <div className="font-head font-bold text-white text-xl tracking-wide mb-3">{s.name}</div>
              <p className="text-silver-light font-light text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-2.5 text-muted text-xs font-light">
                    <span className="text-blue mt-0.5 text-[10px]">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">HOW WE WORK</span>
          <h2 className="font-head font-bold text-white leading-tight mb-14" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>From brief to build in four stages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(p => (
              <div key={p.n} className="relative">
                <div className="w-14 h-14 rounded-full border border-blue flex items-center justify-center font-head font-bold text-blue-light mb-6">
                  {p.n}
                </div>
                <div className="font-head font-bold text-white text-lg mb-2">{p.t}</div>
                <p className="text-silver-light font-light text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-head font-bold text-white mb-4 text-3xl">Ready to discuss your project?</h2>
          <p className="text-silver-light font-light text-sm leading-relaxed mb-8">Get a clear scoping session, fixed pricing, and a delivery timeline before you commit to anything.</p>
          <Link to="/contact" className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-10 py-4 btn-skew transition-colors inline-block">
            GET A FREE CONSULTATION
          </Link>
        </div>
      </section>
    </>
  )
}
