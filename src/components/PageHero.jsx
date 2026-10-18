export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(#2472B3 1px,transparent 1px),linear-gradient(90deg,#2472B3 1px,transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(36,114,179,0.18) 0%, transparent 70%)' }}>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <span className="block text-blue-light font-head font-semibold text-xs tracking-[0.22em] mb-3">{label}</span>
        <h1 className="font-head font-bold text-white leading-[0.96] mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
          dangerouslySetInnerHTML={{ __html: title }}>
        </h1>
        {subtitle && <p className="text-silver-light font-light text-base leading-relaxed max-w-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
