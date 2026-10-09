const TESTIMONIALS = [
  {
    quote: 'Set it up on my lunch break at the office. Was making calls before I got back to my desk.',
    name: 'Tomi A.',
    place: 'Lagos',
  },
  {
    quote: 'Call quality inside my apartment is genuinely better than my old line. Data rollover actually adds up too.',
    name: 'Chidera N.',
    place: 'Abuja',
  },
  {
    quote: 'I run dual eSIM — Nextel for data, my old number just for a few contacts. Switching plans in the app takes seconds.',
    name: 'Efe O.',
    place: 'Port Harcourt',
    span: true,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">From subscribers</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
          What people notice first.
        </h2>
      </div>

      <div className="mt-10 md:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className={`bg-white rounded-2xl p-7 border border-ink/5 ${t.span ? 'sm:col-span-2 md:col-span-1' : ''}`}
          >
            <p className="text-ink/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 text-sm">
              <div className="font-display font-semibold">{t.name}</div>
              <div className="text-ink/40">{t.place}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
