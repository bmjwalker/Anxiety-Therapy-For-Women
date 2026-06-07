import { ArrowRight, Users, BookOpen, Zap, Calendar } from "lucide-react";

// bgPos crops each quadrant from the 2×2 composite programs.png
const programs = [
  {
    icon: Users,
    badge: "Membership",
    badgeColor: "bg-mist-light text-brand border-mist",
    title: "The Reset Circle",
    subtitle: "Ongoing Community Program",
    description:
      "An ongoing group community for high-performing women ready to break free from burnout cycles. Connect with like-minded women, gain weekly accountability, and access powerful tools — all in a supportive, confidential environment.",
    features: ["Weekly group sessions", "Community support", "Ongoing enrollment"],
    cta: "Join the Circle",
    href: "https://fabulous-teacher-7023.kit.com/resetcircle",
    bg: "bg-white",
    bgPos: "0% 0%",
  },
  {
    icon: BookOpen,
    badge: "Course",
    badgeColor: "bg-dusty-light text-dusty-dark border-dusty",
    title: "Self-Paced Course for Career Burnout & Clarity",
    subtitle: "Beyond the Strong One Course",
    description:
      "A self-paced digital course built for the woman who is done being the strong one for everyone else. Learn evidence-based burnout recovery strategies, rebuild your identity beyond your career, and find clarity about what truly matters — on your schedule.",
    features: ["Self-paced modules", "Lifetime access", "Downloadable resources"],
    cta: "Explore the Course",
    href: "https://fabulous-teacher-7023.kit.com/a2676e1c5d",
    bg: "bg-cream",
    bgPos: "100% 0%",
  },
  {
    icon: Zap,
    badge: "Intensive",
    badgeColor: "bg-brand-muted text-brand border-sage",
    title: "2-Day Burnout Reset Intensive",
    subtitle: "Condensed Deep-Dive Workshop",
    description:
      "For the woman who needs transformation fast. This two-day intensive condenses months of work into a powerful, focused experience. You'll walk away with a personalized reset plan, renewed clarity, and a concrete roadmap for sustainable well-being.",
    features: ["2-day format", "1:1 intensive", "Personalized reset plan"],
    cta: "Reserve Your Spot",
    href: "https://fabulous-teacher-7023.kit.com/f8df46e455",
    bg: "bg-white",
    bgPos: "0% 100%",
  },
  {
    icon: Calendar,
    badge: "Group",
    badgeColor: "bg-moss-light text-brand-dark border-moss-light",
    title: "6-Week Burnout Reset Group",
    subtitle: "Structured Cohort Program",
    description:
      "A structured six-week journey designed to take you from overwhelmed to aligned. Each week builds on the last — moving through burnout assessment, values clarification, boundary-setting, identity work, and sustainable lifestyle design.",
    features: ["6 structured weeks", "Small cohort (6-8 women)", "Weekly live sessions"],
    cta: "Join the Next Cohort",
    href: "https://fabulous-teacher-7023.kit.com/bd7889084a",
    bg: "bg-cream",
    bgPos: "100% 100%",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-cream section-padding">
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
              className="text-4xl md:text-5xl font-normal text-dark max-w-xl pb-4 border-b-2 border-b-dusty"
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

        {/* Program cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className={`flex flex-col p-8 border-l-4 border-l-dusty ${program.bg}`}
              >
                {/* Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${program.badgeColor}`}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-medium text-dark mb-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {program.title}
                </h3>
                <p className="text-xs text-dusty font-medium mb-4 tracking-wide">
                  {program.subtitle}
                </p>
                <p className="text-sm text-dark/80 leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-1.5 mb-8">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-dark/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={program.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 text-sm self-start"
                >
                  {program.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-dark/50">
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
