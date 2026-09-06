import { Calendar, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const groupFaqs = [
  {
    id: "group-faq-1",
    question: "Who is this group for?",
    answer:
      "Women who feel like they're constantly “on,” running on empty, and starting to resent the pace they've been keeping — especially high-achieving professionals who've never had a structured way to actually address burnout, not just push through it.",
  },
  {
    id: "group-faq-2",
    question: "How is this different from individual therapy?",
    answer:
      "Individual therapy moves at your pace and goes deep on your specific history. This group gives you a structured 6-week curriculum, a cohort of women facing the same thing, and a clear weekly focus — it's built for momentum, not open-ended exploration.",
  },
  {
    id: "group-faq-3",
    question: "What happens in each session?",
    answer:
      "Each week has a specific focus — from assessing where burnout shows up in your life, to clarifying your values, to setting boundaries that hold. Sessions are live, weekly, and held in a small cohort of 6-8 women.",
  },
  {
    id: "group-faq-4",
    question: "Is this covered by insurance?",
    answer:
      "This is a psychoeducational support group, not group psychotherapy, so it isn't billed to insurance the way individual therapy sessions are. Because it's educational rather than clinical treatment, women can join from any state — you don't need to live in Georgia or Florida to participate.",
  },
  {
    id: "group-faq-5",
    question: "When does the next cohort start?",
    answer:
      "Cohorts run on a rolling basis with limited spots (6-8 women per group). Join the waitlist above and you'll be notified as soon as the next start date is confirmed.",
  },
];

const groupTestimonials = [
  {
    quote:
      "Before this group, I was challenged with not having enough time to complete projects. Afterward, I was able to take care of myself by clearing out what wasn't serving me. My biggest improvements: prioritizing my schedule, learning to say no, and staying in my lane.",
    credit: "Kimberly",
  },
  {
    quote:
      "Before this group, I was challenged with a lack of time and doubt. Afterward, I changed my perspective on a number of issues and found real peace and patience.",
    credit: "Anonymous",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Groups
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-dark max-w-xl"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              A guided space to recover from burnout —{" "}
              <span className="italic text-brand">alongside women who get it</span>
            </h2>
            <div className="h-1 w-12 rounded-full mt-4" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />
          </div>
          <p className="text-dark/75 text-sm max-w-sm">
            Group experiences and self-guided programs designed to complement therapy and
            accelerate your transformation.
          </p>
        </div>

        {/* Low-key mention: not an actively promoted page yet, just ask during consult */}
        <p className="text-center text-sm text-dark/70 mb-10">
          Prefer focused 1:1 work? Ask about a 2-day Burnout Reset Intensive during your free
          consultation.
        </p>

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
            The 6-Week Burnout Reset Group is a small-cohort psychoeducational program for
            high-performing women recovering from burnout, led by Jennifer Walker, LCSW. Over six
            structured weeks, you&apos;ll move from understanding your burnout to actually changing
            how you live — assessing where you are, getting clear on your values, learning to set
            real boundaries, and building a version of your life that doesn&apos;t require running
            on empty.
          </p>
          <p className="text-sm text-dark/70 leading-relaxed mb-6 max-w-2xl">
            This is a psychoeducational group, not group therapy — open to participants
            nationwide.
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

          {/* FAQ */}
          <div className="mt-10 pt-8 border-t border-cream-dark">
            <h4
              className="text-lg md:text-xl font-semibold text-dark mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Common Questions
            </h4>
            <Accordion className="flex flex-col gap-2">
              {groupFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-xl border-l-4 border-l-dusty border border-cream-dark bg-white px-4 md:px-6 not-last:border-b"
                >
                  <AccordionTrigger className="text-base font-medium text-dark text-left py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm text-dark/85 leading-relaxed pb-2">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Testimonials */}
          <div className="mt-10 pt-8 border-t border-cream-dark">
            <h4
              className="text-lg md:text-xl font-semibold text-dark mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What Women Are Saying
            </h4>
            <p className="text-xs text-dark/60 mb-4">
              From a past group workshop with Jennifer Walker, LCSW
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {groupTestimonials.map(({ quote, credit }) => (
                <div key={credit}>
                  <p className="pull-quote text-lg md:text-xl my-0">{quote}</p>
                  <p className="text-xs tracking-wide mt-3" style={{ color: "#6B7E80" }}>
                    — {credit}
                  </p>
                </div>
              ))}
            </div>
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
