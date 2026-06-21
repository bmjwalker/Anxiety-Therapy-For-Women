import { Calendar, ArrowRight } from "lucide-react";

const otherOffers = [
  {
    question: "Want community?",
    description:
      "The Reset Circle is an ongoing membership for women who want consistent support and connection between bigger commitments.",
    linkText: "Learn more",
    href: "/reset-circle",
    external: false,
  },
  {
    question: "Want it fast?",
    description:
      "The 2-Day Intensive is a concentrated, focused experience for women who need clarity now and don't want to wait on a multi-week format.",
    linkText: "Learn more",
    href: "/burnout-reset-intensive",
    external: false,
  },
  {
    question: "Want to go at your own pace?",
    description:
      "Beyond the Strong One is a self-paced course you can move through on your own timeline, whenever you have the space for it.",
    linkText: "Learn more",
    href: "https://fabulous-teacher-7023.kit.com/a2676e1c5d",
    external: true,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
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
          </div>
          <p className="text-dark/75 text-sm max-w-sm">
            Group experiences and self-guided programs designed to complement therapy and
            accelerate your transformation.
          </p>
        </div>

        {/* Featured: 6-Week Burnout Reset Group */}
        <div className="flex flex-col p-6 md:p-10 bg-white border-l-4 border-l-brand rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
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
            href="https://fabulous-teacher-7023.kit.com/bd7889084a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 text-sm self-start"
          >
            Join the Next Cohort
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Other Ways to Work With Me */}
        <div className="mt-14">
          <h3
            className="text-lg font-medium text-dark/60 mb-8 tracking-wide uppercase text-xs"
            style={{ letterSpacing: "0.1em" }}
          >
            Other Ways to Work With Me
          </h3>
          <div className="flex flex-col gap-7">
            {otherOffers.map((offer) => (
              <div key={offer.question} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="text-sm text-dark/80 leading-relaxed">
                  <span className="font-semibold text-dark">{offer.question}</span>{" "}
                  {offer.description}
                </p>
                <a
                  href={offer.href}
                  target={offer.external ? "_blank" : undefined}
                  rel={offer.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-sm text-brand hover:text-brand-dark transition-colors whitespace-nowrap shrink-0 font-medium"
                >
                  {offer.linkText} <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
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
