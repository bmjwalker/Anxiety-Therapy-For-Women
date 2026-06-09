"use client";

import { useState } from "react";
import {
  Brain,
  Briefcase,
  RefreshCw,
  Globe,
  CheckCircle2,
  ArrowRight,
  Leaf,
} from "lucide-react";

/* ── Data ── */

const specialtyMap: { [key: string]: string[] } = {
  Anxiety: [
    "Lying awake overanalyzing every conversation",
    "Stuck in comparison traps and self-doubt",
  ],
  Burnout: [
    "Exhausted from being strong for everyone else",
    "Difficulty setting healthy boundaries without guilt",
    "Overwhelmed by major life transitions and uncertainty",
  ],
  Perfectionism: [
    "Feeling like an imposter despite your external success",
    "Stuck in comparison traps and self-doubt",
  ],
  "Imposter Syndrome": [
    "Feeling like an imposter despite your external success",
    "Lying awake overanalyzing every conversation",
  ],
  "Major Life Transitions": [
    "Overwhelmed by major life transitions and uncertainty",
    "Exhausted from being strong for everyone else",
  ],
};

const struggles = [
  "Lying awake overanalyzing every conversation",
  "Feeling like an imposter despite your external success",
  "Exhausted from being strong for everyone else",
  "Stuck in comparison traps and self-doubt",
  "Difficulty setting healthy boundaries without guilt",
  "Overwhelmed by major life transitions and uncertainty",
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

const approaches = [
  "Dialectical Behavior Therapy (DBT)",
  "Cognitive Behavioral Therapy (CBT)",
  "Solution-Focused Brief Therapy",
  "Trauma-Informed Care",
  "Mindfulness-Based Approaches",
  "Motivational Interviewing",
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
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const displayedStruggles = selectedSpecialty
    ? specialtyMap[selectedSpecialty] || struggles
    : struggles;

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
          className="text-4xl md:text-5xl font-semibold text-dark mb-16"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Therapy designed for{" "}
          <span className="italic text-brand">women like you</span>
        </h2>

        {/* ── Sub-section 1: Who We Help ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-1">
            <h3
              className="text-3xl md:text-4xl font-light text-dark"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Who We Help
            </h3>
          </div>
          <div className="h-px w-12 bg-sage mb-3" />
          <p className="text-dark/75 mb-6 max-w-2xl">
            You may look successful on the outside, but inside you&apos;re exhausted from carrying
            responsibilities, expectations, and pressure that never seem to end. This section is
            designed to help you quickly recognize whether this kind of support fits what you&apos;re
            experiencing right now.
          </p>

          {/* Specialties - Now Clickable */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSpecialty === null
                  ? "bg-brand text-cream"
                  : "border-2 border-brand text-brand hover:bg-brand-muted"
              }`}
            >
              All
            </button>
            {["Anxiety", "Burnout", "Perfectionism", "Imposter Syndrome", "Major Life Transitions"].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSpecialty(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSpecialty === s
                    ? "bg-brand text-cream"
                    : "border-2 border-brand text-brand hover:bg-brand-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 mb-10 items-start">
            <article className="border-l-4 border-l-dusty pl-7 pb-4">
              <p className="text-xs uppercase tracking-[0.25em] text-dusty font-medium mb-2">
                Why this matters
              </p>
              <h4
                className="text-2xl md:text-3xl font-normal text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                You do not need to be in crisis to deserve support.
              </h4>
              <p className="text-sm text-dark/80 leading-relaxed mb-5">
                If you&apos;re carrying too much, second-guessing yourself, or feeling emotionally
                depleted despite doing everything right, this work is designed for you.
              </p>
              <ul className="space-y-3 text-sm text-dark/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-dusty shrink-0" />
                  High-achieving women who feel exhausted but still keep showing up
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-dusty shrink-0" />
                  Women navigating pressure, perfectionism, and constant overthinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-dusty shrink-0" />
                  People ready for practical support, not just more self-criticism
                </li>
              </ul>
            </article>

            <div className="flex flex-col gap-5">
              {displayedStruggles.map((struggle) => (
                <div
                  key={struggle}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-dusty shrink-0 mt-0.5" />
                  <p className="text-sm text-dark/85 leading-snug">{struggle}</p>
                </div>
              ))}
            </div>
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
          <h3
            className="text-3xl md:text-4xl font-normal text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Areas We Can Help You Overcome
          </h3>
          <p className="text-dark/75 mb-10 max-w-2xl">
            Every service is tailored to the unique experience of high-performing women
            navigating complex lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {services.map(({ icon: Icon, title, tagline, description, bullets, href }) => (
              <div
                key={title}
                className="flex flex-col gap-4 pl-7 py-6 border-l-4 border-l-dusty"
              >
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center">
                  <Icon size={20} className="text-brand" />
                </div>
                <div className="flex flex-col flex-1 gap-0">
                  <h4
                    className="text-xl font-medium text-dark mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {title}
                  </h4>
                  <p className="text-sm italic text-brand/80 mb-3 leading-snug">{tagline}</p>
                  <p className="text-sm text-dark/80 leading-relaxed mb-4">{description}</p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-dusty shrink-0 mt-0.5" />
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

        {/* ── Sub-section 3: Approaches ── */}
        <div className="mb-20">
          <h3
            className="text-3xl md:text-4xl font-normal text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Approaches We Use In Therapy
          </h3>
          <p className="text-dark/75 mb-8 max-w-2xl">
            Evidence-based methods combined with culturally responsive, compassionate practice.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {approaches.map((approach) => (
              <span key={approach} className="approach-pill">
                {approach}
              </span>
            ))}
          </div>

          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Book Your Free Consult
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Sub-section 4: How To Get Started ── */}
        <div id="contact" className="scroll-mt-24">
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
                  className="block text-5xl font-light text-brand/25 leading-none select-none mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
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
