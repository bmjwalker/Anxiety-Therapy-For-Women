"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Brain,
  Briefcase,
  RefreshCw,
  Globe,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/* ── Data ── */

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
      "If you wake up exhausted before the day even begins — if your mind races at 2am replaying every email, every conversation, every mistake — you're not broken. You're burned out. For high-performing women, burnout rarely looks like collapse. It looks like pushing harder, doing more, and feeling less with every passing month.",
    bullets: [
      "Understand what's driving your burnout — and break the cycle",
      "Quiet the anxiety spiral and feel present again",
      "Rebuild your energy without sacrificing your ambition",
      "Create boundaries that actually hold",
    ],
    href: "/burnout-anxiety-therapy",
  },
  {
    icon: RefreshCw,
    title: "Life Transitions Therapy",
    tagline: "Change doesn't have to mean crisis.",
    description:
      "Divorce. A new baby. A career pivot. Moving across the country. Losing someone you love. Major life transitions shake the ground beneath us — even the ones we chose. Life Transitions Therapy helps you move through change without losing yourself in the process. You don't have to figure it out alone.",
    bullets: [
      "Process grief, uncertainty, and identity shifts with support",
      "Find your footing when everything feels unstable",
      "Rebuild clarity and confidence on the other side of change",
      "Discover who you're becoming — not just who you were",
    ],
    href: "/life-transitions-therapy",
  },
  {
    icon: Briefcase,
    title: "Career Clarity Therapy",
    tagline: "You've built a successful career. So why does it feel so wrong?",
    description:
      "Maybe you've achieved everything you set out to — the title, the salary, the respect — but something still feels off. Career Clarity Therapy is for the woman who has tied her worth to her performance for so long that she's lost sight of who she is outside of work. Together, we'll untangle your identity from your job title and find a path forward that actually fits.",
    bullets: [
      "Separate your self-worth from your productivity",
      "Identify what you actually want — not what looks good on paper",
      "Navigate career pivots, workplace stress, and burnout",
      "Step into work that aligns with your values, not just your résumé",
    ],
    href: "/career-clarity-therapy",
  },
  {
    icon: Globe,
    title: "High-Performing Women Therapy",
    tagline: "You take care of everything. Who is taking care of you?",
    description:
      "You are the one everyone relies on — at work, at home, in your family, in your community. You meet every expectation, carry every responsibility, and still find ways to show up for others. But underneath all of that, there's a quiet exhaustion that no amount of productivity can fix.",
    bullets: [
      "Break free from perfectionism and the pressure to have it all together",
      "Untangle people-pleasing from your sense of self and relationships",
      "Explore identity, family expectations, and cultural pressures",
      "Finally let someone take care of you for a change",
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

/* ── Contact form schema ── */

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormState = "idle" | "submitting" | "success" | "error";

/* ── Component ── */

export default function TherapyServices() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormState("success");
        reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Therapy Services
          </span>
        </div>
        <h2
          className="text-4xl md:text-5xl font-light text-dark mb-16"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Therapy designed for{" "}
          <span className="italic text-brand">women like you</span>
        </h2>

        {/* ── Sub-section 1: Who We Help ── */}
        <div className="mb-20">
          <h3
            className="text-3xl md:text-4xl font-light text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Who We Help
          </h3>
          <p className="text-dark/60 mb-8 max-w-2xl">
            You might be a high-achieving professional who has it all together on the outside —
            but inside, you&apos;re running on empty. Sound familiar?
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Anxiety", "Burnout", "Perfectionism", "Imposter Syndrome", "Major Life Transitions"].map((s) => (
              <span key={s} className="approach-pill">
                {s}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {struggles.map((struggle) => (
              <div
                key={struggle}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-cream-dark card-hover"
              >
                <CheckCircle2 size={18} className="text-dusty shrink-0 mt-0.5" />
                <p className="text-sm text-dark/80 leading-snug">{struggle}</p>
              </div>
            ))}
          </div>

          <a
            href="https://jennifer-walker7285.clientsecure.me/sign-in"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            See If We&apos;re a Good Fit
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Sub-section 2: Areas We Can Help ── */}
        <div className="mb-20 py-16 px-6 md:px-10 rounded-3xl bg-sage-muted">
          <h3
            className="text-3xl md:text-4xl font-light text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Areas We Can Help You Overcome
          </h3>
          <p className="text-dark/60 mb-10 max-w-2xl">
            Every service is tailored to the unique experience of high-performing women
            navigating complex lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {services.map(({ icon: Icon, title, tagline, description, bullets, href }) => (
              <div
                key={title}
                className="flex flex-col gap-5 p-7 rounded-2xl bg-white card-hover"
              >
                <div className="w-10 h-10 rounded-full bg-mist-light flex items-center justify-center">
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
                  <p className="text-sm text-dark/70 leading-relaxed mb-4">{description}</p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-dusty shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/70">{b}</span>
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            Schedule a Consultation
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Sub-section 3: Approaches ── */}
        <div className="mb-20">
          <h3
            className="text-3xl md:text-4xl font-light text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Approaches We Use In Therapy
          </h3>
          <p className="text-dark/60 mb-8 max-w-2xl">
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-brand text-brand text-sm font-medium hover:bg-brand-muted transition-colors"
          >
            Book Your Free Consult
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Sub-section 4: How To Get Started ── */}
        <div id="contact" className="scroll-mt-24">
          <h3
            className="text-3xl md:text-4xl font-light text-dark mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            How To Get Started
          </h3>
          <p className="text-dark/60 mb-12 max-w-2xl">
            Taking the first step is the hardest part. Here&apos;s how simple it is to begin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-2xl bg-white border border-cream-dark"
              >
                <span
                  className="block text-5xl font-light text-brand/20 leading-none select-none mb-4"
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
                <p className="text-sm text-dark/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h4
                className="text-2xl md:text-3xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Send Us a Message
              </h4>
              <p className="text-dark/60 mb-2 text-sm leading-relaxed">
                Ready to take the first step? Fill out the form and Jennifer will be in touch
                within one business day.
              </p>
              <p className="text-dark/50 text-xs">
                All inquiries are confidential. Telehealth available for Georgia &amp; Florida residents.
              </p>
            </div>

            <div>
              {formState === "success" ? (
                <div className="p-8 rounded-2xl bg-sage-muted border border-sage-light text-center">
                  <CheckCircle2 size={40} className="text-brand mx-auto mb-4" />
                  <h4
                    className="text-2xl font-light text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Message Received!
                  </h4>
                  <p className="text-sm text-dark/70">
                    Thank you for reaching out. Jennifer will respond within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Your name"
                      className="bg-white border-cream-dark"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Email Address *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="you@email.com"
                      className="bg-white border-cream-dark"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Phone Number (optional)
                    </label>
                    <Input
                      {...register("phone")}
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="bg-white border-cream-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      What brings you here? *
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Share a little about what you're experiencing and what kind of support you're looking for…"
                      rows={5}
                      className="bg-white border-cream-dark resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {formState === "error" && (
                    <p className="text-xs text-red-500">
                      Something went wrong. Please try again or email directly at{" "}
                      <a href="https://jennifer-walker7285.clientsecure.me/sign-in" className="underline">
                        jennifer@anxietytherapyforwomen.com
                      </a>
                      .
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="self-start px-7 py-3 rounded-full bg-brand hover:bg-brand-dark text-cream font-medium gap-2"
                  >
                    <Send size={15} />
                    {formState === "submitting" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
