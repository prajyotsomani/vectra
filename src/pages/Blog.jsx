import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { blogPosts } from '../data/blogPosts.js'

const cats = ['All', 'AI & LLMs', 'DevOps & CI/CD', 'Cloud', 'Software Dev', 'Security', 'Data']

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.cat === active)

  return (
    <>
      <PageHero
        label="INSIGHTS"
        title="Technical thinking<br/>from the Vectra team"
        subtitle="Practical articles on software delivery, cloud infrastructure, security, and running technology in New Zealand businesses."
      />

      <section className="py-16 px-6 lg:px-10 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`font-head font-semibold text-xs tracking-widest px-4 sm:px-5 py-2 btn-skew-sm transition-colors shrink-0 whitespace-nowrap ${
                  active === c ? 'bg-blue text-white' : 'border border-blue/30 text-muted hover:border-blue hover:text-silver'
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <article key={p.id} className="bg-navy border border-blue/20 hover:border-blue/50 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="h-1 bg-gradient-to-r from-blue to-blue-light w-0 group-hover:w-full transition-all duration-300"></div>
                  <div className="p-8 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-blue font-head font-semibold text-[10px] tracking-[0.18em]">{p.cat.toUpperCase()}</span>
                      <span className="text-muted text-xs">·</span>
                      <span className="text-muted font-light text-xs">{p.date}</span>
                      <span className="text-muted text-xs ml-auto font-light text-xs">{p.read}</span>
                    </div>
                    <Link to={`/blog/${p.id}`} className="block">
                      <h3 className="font-head font-bold text-white text-lg leading-tight mb-3 group-hover:text-blue-light transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-silver-light font-light text-sm leading-relaxed mb-6">{p.excerpt}</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    to={`/blog/${p.id}`}
                    className="inline-flex items-center gap-1.5 text-blue-light font-head font-semibold text-xs tracking-widest hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    READ ARTICLE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-3">STAY UPDATED</span>
          <h2 className="font-head font-bold text-white text-3xl leading-tight mb-4">Get new articles delivered</h2>
          <p className="text-silver-light font-light text-sm leading-relaxed mb-8">One email when we publish. No marketing, no newsletters about newsletters.</p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email" placeholder="your@email.com"
              className="flex-1 bg-navy-mid border border-blue/30 px-4 py-3 text-white font-body text-sm font-light outline-none focus:border-blue placeholder:text-muted"
            />
            <button className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-6 py-3 transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
