import { Calendar, ArrowRight } from "lucide-react";

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Programs
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-dark max-w-xl"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Beyond individual therapy —{" "}
              <span className="italic text-brand">programs built for you</span>
            </h2>
            <div className="h-1 w-12 rounded-full mt-4" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />
          </div>
          <p className="text-dark/75 text-sm max-w-sm">
            Group experiences and self-guided programs designed to complement therapy and
            accelerate your transformation.
          </p>
        </div>

        {/* Featured: 6-Week Burnout Reset Group */}
        <div className="flex flex-col p-6 md:p-10 bg-white border-l-4 border-l-brand border border-cream-dark rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Icon + Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
              <Calendar size={22} className="text-brand" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-moss-light text-brand-dark border-moss-light">
              Group
            </span>
          </div>

          {/* Content */}
          <h3
            className="text-3xl md:text-4xl font-semibold text-dark mb-1"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            6-Week Burnout Reset Group
          </h3>
          <p className="text-base italic mb-4 leading-snug" style={{ color: "#C4897B" }}>
            Structured Cohort Program
          </p>
          <p className="text-sm text-dark/80 leading-relaxed mb-6 max-w-2xl">
            Six weeks, one small group, a clear path forward. You&apos;ll move week by week
            from understanding your burnout to actually changing how you live — assessing where
            you are, getting clear on your values, learning to set real boundaries, and building
            a version of your life that doesn&apos;t require running on empty.
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-2 mb-8">
            {["6 structured weeks", "Small cohort (6–8 women)", "Weekly live sessions"].map(
              (feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs text-dark/75">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  {feature}
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <a
            href="/6-week-burnout-group"
            className="btn-primary px-6 py-3 text-sm self-start"
          >
            Join the Next Cohort
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Bottom note */}
        <p className="mt-12 text-center text-sm text-dark/70">
          Not sure which program is right for you?{" "}
          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-2 hover:text-brand-dark"
          >
            Schedule a free consultation
          </a>{" "}
          and we&apos;ll help you find the right fit.
        </p>
      </div>
    </section>
  );
}
