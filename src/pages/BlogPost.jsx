import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts.js'

export default function BlogPost() {
  const { id } = useParams()

  // Match by id or slug
  const post = blogPosts.find(p => String(p.id) === id || p.slug === id)

  if (!post) {
    return (
      <div className="pt-36 pb-24 px-6 text-center max-w-xl mx-auto">
        <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-4">
          ARTICLE NOT FOUND
        </span>
        <h1 className="font-head font-bold text-white text-3xl mb-6">
          The requested article could not be found
        </h1>
        <p className="text-silver-light font-light text-sm mb-8">
          The article you are looking for may have been moved or updated.
        </p>
        <Link
          to="/blog"
          className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-8 py-3.5 btn-skew transition-colors inline-block"
        >
          ← BACK TO ALL ARTICLES
        </Link>
      </div>
    )
  }

  // Related articles
  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 2)

  return (
    <article className="pt-28 pb-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">

        {/* Back button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-blue-light text-xs font-head font-semibold tracking-widest transition-colors"
          >
            ← BACK TO ALL ARTICLES
          </Link>
        </div>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-blue/20 border border-blue/40 text-blue-light font-head font-semibold text-[11px] tracking-[0.2em] px-3 py-1 btn-skew-sm">
            {post.cat.toUpperCase()}
          </span>
          <span className="text-muted text-xs">·</span>
          <span className="text-silver font-light text-xs">{post.date}</span>
          <span className="text-muted text-xs">·</span>
          <span className="text-silver font-light text-xs">{post.read}</span>
        </div>

        {/* Title */}
        <h1
          className="font-head font-bold text-white leading-[1.08] mb-8"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
        >
          {post.title}
        </h1>

        {/* Author box */}
        <div className="flex items-center gap-4 py-6 border-y border-blue/20 mb-12">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-steel flex items-center justify-center font-head font-bold text-white text-sm shadow-[0_0_15px_rgba(36,114,179,0.3)]">
            {post.author.init}
          </div>
          <div>
            <div className="font-head font-semibold text-white text-base leading-snug">
              {post.author.name}
            </div>
            <div className="text-muted text-xs font-light tracking-wide">
              {post.author.role} · Vectra Limited
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-8 text-silver-light font-light text-base leading-relaxed">
          {post.content.map((block, idx) => {
            if (block.type === 'intro') {
              return (
                <p key={idx} className="text-white text-lg font-normal leading-relaxed border-l-2 border-blue-light pl-5 py-1">
                  {block.text}
                </p>
              )
            }

            if (block.type === 'callout') {
              return (
                <div key={idx} className="bg-navy-mid border-l-4 border-blue-light p-6 my-2 text-white font-medium text-sm leading-relaxed rounded-r shadow-lg shadow-black/20">
                  {block.text}
                </div>
              )
            }

            if (block.type === 'section' || block.type === 'conclusion') {
              return (
                <div key={idx} className="flex flex-col gap-4">
                  {block.heading && (
                    <h2 className="font-head font-bold text-white text-2xl tracking-wide pt-4">
                      {block.heading}
                    </h2>
                  )}
                  {block.body && <p>{block.body}</p>}
                  {block.bullets && (
                    <ul className="flex flex-col gap-2.5 my-2 pl-2">
                      {block.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="text-blue-light text-sm mt-1">▸</span>
                          <span className="text-silver-light">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            }

            return null
          })}
        </div>

        {/* Help CTA Box */}
        <div className="mt-16 p-8 sm:p-10 bg-navy-mid border border-blue/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-2xl pointer-events-none" />
          <span className="block text-blue-light font-head font-semibold text-xs tracking-[0.22em] mb-2">
            AUCKLAND IT CONSULTING
          </span>
          <h3 className="font-head font-bold text-white text-xl sm:text-2xl mb-3">
            Need tailored advice on your software or cloud infrastructure?
          </h3>
          <p className="text-silver-light text-sm font-light leading-relaxed mb-6 max-w-xl">
            Our senior engineers can audit your current architecture and map out a practical, high-impact plan with fixed-scope pricing.
          </p>
          <Link
            to="/contact"
            className="bg-blue hover:bg-blue-light text-white font-head font-semibold text-xs tracking-widest px-8 py-3.5 btn-skew transition-colors inline-block"
          >
            BOOK A TECHNICAL CONSULTATION
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-blue/20">
            <span className="block text-blue font-head font-semibold text-xs tracking-[0.22em] mb-6">
              MORE ARTICLES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(r => (
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                  className="bg-navy-mid border border-blue/20 hover:border-blue/50 p-6 transition-all duration-200 group block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue font-head font-semibold text-[10px] tracking-[0.16em]">
                      {r.cat.toUpperCase()}
                    </span>
                    <span className="text-muted text-xs">·</span>
                    <span className="text-muted text-xs font-light">{r.read}</span>
                  </div>
                  <h4 className="font-head font-bold text-white text-base group-hover:text-blue-light transition-colors mb-2">
                    {r.title}
                  </h4>
                  <span className="text-blue-light font-head font-semibold text-xs tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    READ ARTICLE →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  )
}

