export default function Credibility() {
  return (
    <section className="bg-mist-light section-padding">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            You Don't Have to Figure This Out Alone
          </span>
        </div>

        <div className="bg-white rounded-[2rem] border border-cream-dark shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            For more than 20 years, I&apos;ve helped high-performing women navigate anxiety,
            burnout, perfectionism, life transitions, and career uncertainty.
          </h2>
          <p className="text-base md:text-lg text-dark/70 leading-relaxed mb-4">
            Together, we&apos;ll create practical, evidence-based strategies that help you move from
            survival mode into a life that feels more balanced, meaningful, and sustainable.
          </p>
          <p className="text-sm text-dusty font-medium tracking-wide">
            This work is about more than coping. It&apos;s about reclaiming your energy, clarity, and
            confidence so you can feel grounded inside and show up fully in the life you want.
          </p>
        </div>
      </div>
    </section>
  );
}
