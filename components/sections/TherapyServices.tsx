import {
  Brain,
  Briefcase,
  RefreshCw,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* ── Data ── */

const struggles = [
  {
    name: "Lying awake overanalyzing every conversation",
    description: "Racing thoughts keep you up at night, replaying moments and worrying about what comes next.",
  },
  {
    name: "Feeling like an imposter despite your external success",
    description: "No matter what you achieve, a quiet voice says it's only a matter of time before people find out.",
  },
  {
    name: "Exhausted from being strong for everyone else",
    description: "You're the one everyone leans on — and there's no one left to hold you up.",
  },
  {
    name: "Stuck in comparison traps and self-doubt",
    description: "You measure your worth against everyone around you and always seem to come up short.",
  },
  {
    name: "Difficulty setting healthy boundaries without guilt",
    description: "Saying no feels selfish. Saying yes leaves you depleted. There doesn't seem to be a third option.",
  },
  {
    name: "Overwhelmed by major life transitions and uncertainty",
    description: "Change is supposed to be exciting — so why does it feel like the ground is constantly shifting?",
  },
];

const services = [
  {
    icon: Brain,
    title: "Burnout Recovery & Anxiety Therapy",
    tagline: "You've been strong for too long. Let's help you feel like yourself again.",
    description:
      "For high-performing women, burnout rarely looks like collapse. It looks like pushing harder, doing more, and feeling less every month.",
    bullets: [
      "Break the burnout cycle",
      "Quiet the anxiety spiral",
      "Create boundaries that actually hold",
    ],
    href: "/burnout-anxiety-therapy",
  },
  {
    icon: RefreshCw,
    title: "Life Transitions Therapy",
    tagline: "Change doesn't have to mean crisis.",
    description:
      "Major life transitions shake the ground beneath us. You'll move through change without losing yourself in the process.",
    bullets: [
      "Process grief and identity shifts",
      "Find your footing when everything feels unstable",
      "Discover who you're becoming",
    ],
    href: "/life-transitions-therapy",
  },
  {
    icon: Briefcase,
    title: "Career Clarity Therapy",
    tagline: "You've built a successful career. So why does it feel so wrong?",
    description:
      "Untangle your identity from your job title and find a path forward that actually fits your values.",
    bullets: [
      "Separate your self-worth from productivity",
      "Identify what you truly want",
      "Step into aligned, meaningful work",
      "Navigate a performance review, HR process, or restructuring without losing yourself",
      "Return to work — or leave it — on your own terms",
    ],
    href: "/career-clarity-therapy",
  },
  {
    icon: Globe,
    title: "High-Performing Women Therapy",
    tagline: "You take care of everything. Who is taking care of you?",
    description:
      "You meet every expectation and carry every responsibility. There's a quiet exhaustion underneath that no amount of productivity can fix.",
    bullets: [
      "Break free from perfectionism",
      "Untangle people-pleasing from your identity",
      "Let someone finally take care of you",
    ],
    href: "/high-performing-women-therapy",
  },
];


const steps = [
  {
    number: "01",
    title: "Book a Free Consultation",
    description:
      "Schedule your complimentary 15-minute call to see if we're a good fit. No commitment required.",
  },
  {
    number: "02",
    title: "Complete Your Intake",
    description:
      "Complete a brief intake form so Jennifer can understand your goals and prepare for your first session.",
  },
  {
    number: "03",
    title: "Begin Your Transformation",
    description:
      "Start weekly sessions via secure telehealth — actionable insights you can apply between appointments.",
  },
];

/* ── Component ── */

export default function TherapyServices() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Therapy Services
          </span>
        </div>
        <h2
          className="text-4xl md:text-5xl font-semibold text-dark mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Therapy designed for{" "}
          <span className="italic text-brand">women like you</span>
        </h2>
        <div className="h-1 w-14 rounded-full mb-12" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

        {/* ── Sub-section 1: Who We Help ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-dusty" />
            <span className="text-xs tracking-widest uppercase text-dusty font-medium">
              Common Struggles
            </span>
          </div>
          <h3
            className="text-4xl md:text-5xl font-semibold text-dark mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Who <span className="italic text-brand">We Help</span>
          </h3>
          <div className="h-1 w-14 rounded-full mb-12" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />
          <p className="text-dark/75 mb-8 max-w-2xl">
            You may look successful on the outside, but inside you&apos;re exhausted from carrying
            responsibilities, expectations, and pressure that never seem to end.
          </p>

          {/* Callout line */}
          <p
            className="text-2xl md:text-3xl font-light italic mb-10 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#4A7C7E" }}
          >
            You do not need to be in crisis to deserve support.
          </p>

          {/* Symptom card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:[grid-auto-rows:1fr]">
            {struggles.map((struggle) => (
              <div
                key={struggle.name}
                className="flex flex-col gap-2 p-4 md:p-6 bg-white border-l-4 border-l-brand rounded-xl shadow-md"
              >
                <p
                  className="text-xl font-semibold text-dark leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {struggle.name}
                </p>
                <p className="text-sm text-dark/75 leading-relaxed">{struggle.description}</p>
              </div>
            ))}
          </div>

          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Book a Free Consultation
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Sub-section 2: Areas We Can Help ── */}
        <div className="mb-20 py-16 px-6 md:px-10 bg-[#F7F3EE]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-dusty" />
            <span className="text-xs tracking-widest uppercase text-dusty font-medium">
              Our Services
            </span>
          </div>
          <h3
            className="text-5xl md:text-6xl font-semibold text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Areas We Can{" "}
            <span className="italic text-brand">Help You Overcome</span>
          </h3>
          <div className="h-1 w-14 rounded-full mb-10" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />
          <p className="text-dark/75 mb-10 max-w-2xl">
            Every service is tailored to the unique experience of high-performing women
            navigating complex lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 md:[grid-auto-rows:1fr]">
            {services.map(({ icon: Icon, title, tagline, description, bullets, href }) => (
              <div
                key={title}
                className="flex flex-col gap-5 p-4 md:p-6 bg-white border-l-4 border-l-brand border border-cream-dark rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand" />
                </div>
                <div className="flex flex-col flex-1 gap-0">
                  <h4
                    className="text-2xl font-semibold text-dark mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-base italic mb-3 leading-snug"
                    style={{ color: "#C4897B" }}
                  >
                    {tagline}
                  </p>
                  <p className="text-sm text-dark/80 leading-relaxed mb-4">{description}</p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm text-brand font-medium hover:text-brand-dark transition-colors mt-auto"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Schedule a Consultation
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Sub-section 3: How We Work Together ── */}
        <div className="mb-20">
          <h3
            className="text-3xl md:text-4xl font-normal text-dark mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            How We Work Together
          </h3>
          <p className="text-dark/75 mb-10 max-w-2xl leading-relaxed">
            Our work draws on approaches like DBT, CBT, trauma-informed care, and solution-focused
            therapy — grounded in what actually helps: managing the intensity of anxiety, untangling
            the thought patterns that fuel perfectionism, and building a life that doesn&apos;t
            require running on empty.
          </p>

          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Book Your Free Consult
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* ── Full-width divider ── */}
      <div className="h-14 md:h-20 bg-sage" aria-hidden="true" />

      <div className="section-container">
        {/* ── Sub-section 4: How To Get Started ── */}
        <div id="contact" className="scroll-mt-24 pt-20 md:pt-24">
          <h3
            className="text-3xl md:text-4xl font-normal text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            How To Get Started
          </h3>
          <p className="text-dark/75 mb-12 max-w-2xl">
            Taking the first step is the hardest part. Here&apos;s how simple it is to begin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="pt-2 pl-8 border-l-4 border-l-brand"
              >
                <span
                  className="block text-5xl font-light leading-none select-none mb-4"
                  style={{ color: "#C4897B", fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {step.number}
                </span>
                <h4
                  className="text-xl font-medium text-dark mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-dark/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Book a Free Consultation
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
