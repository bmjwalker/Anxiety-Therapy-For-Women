import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KitEmbedForm from "@/components/KitEmbedForm";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: {
    absolute: "6-Week Burnout Reset Group | Anxiety Therapy for Women",
  },
  description:
    "A structured 6-week small-group program for high-achieving women ready to understand their burnout and build a life that doesn't require running on empty.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/6-week-burnout-group" },
  openGraph: {
    title: "6-Week Burnout Reset Group | Anxiety Therapy for Women",
    description:
      "A structured 6-week small-group program for high-achieving women ready to understand their burnout and build a life that doesn't require running on empty.",
    url: "https://anxietytherapyforwomen.com/6-week-burnout-group",
  },
};

const heroFacts = [
  { icon: Calendar, text: "6 structured weeks" },
  { icon: Clock, text: "Weekly 90-minute live sessions" },
  { icon: Users, text: "Small cohort of 8–10 women" },
  { icon: Calendar, text: "Starts September 15, 2026" },
];

const weeks = [
  {
    week: "01",
    title: "Assess Where You Actually Are",
    description:
      "Most women in burnout have normalized how bad it's gotten. This week starts with an honest, structured look at where you are — not where you think you should be.",
  },
  {
    week: "02",
    title: "Get Clear on What Matters",
    description:
      "Burnout often comes from years of saying yes to things that pulled you away from what you actually value. You'll identify what genuinely matters to you — not in the abstract, but in the actual decisions you make every week.",
  },
  {
    week: "03",
    title: "Understand the Pattern",
    description:
      "You'll look at how you got here — the specific patterns (perfectionism, people-pleasing, chronic over-functioning) that made burnout inevitable. Understanding the pattern is what makes changing it possible.",
  },
  {
    week: "04",
    title: "Set Boundaries That Hold",
    description:
      "Not the concept of boundaries — the actual practice of them. What gets in the way, what it costs you not to have them, and how to start building them in your specific context.",
  },
  {
    week: "05",
    title: "Redefine What Enough Looks Like",
    description:
      "For high-achieving women, “enough” is rarely a natural stopping point. This week focuses on recalibrating your internal standard away from performance and toward what actually sustains you.",
  },
  {
    week: "06",
    title: "Build a Life That Holds",
    description:
      "The last week focuses on real structure for daily life — something that doesn't collapse the moment things get busy again. You leave with a concrete plan, not just insight.",
  },
];

const forYouIf = [
  "You're high-achieving and exhausted, and tired of pretending you're fine",
  "You've tried pushing through burnout before, and it didn't work",
  "You want real structure and accountability, not just another self-help resource",
  "You're ready to look honestly at what needs to change, even if that's uncomfortable",
  "You're craving a small, supportive group instead of doing this alone",
];

const faqs = [
  {
    id: "faq-1",
    question: "Is this individual therapy or something different?",
    answer:
      "This is a structured therapy group, not individual treatment. You'll get the support and clinical guidance of working with a licensed therapist, alongside the perspective and accountability of a small group of women going through the same thing.",
  },
  {
    id: "faq-2",
    question: "What if I have to miss a week?",
    answer:
      "Life happens. If you need to miss a session, you'll have a way to stay connected to the material so you don't fall behind the group.",
  },
  {
    id: "faq-3",
    question: "How do I know if this is the right fit for me?",
    answer:
      "After you sign up, you'll hear from me directly to talk through where you're at and whether this group is the right next step. This isn't automatic enrollment — it's a conversation first.",
  },
];

export default function SixWeekBurnoutGroupPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-6 tracking-widest uppercase">
                Group
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Six Weeks to Stop{" "}
                <span className="italic text-brand">Running on Empty</span>
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                {heroFacts.map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-2 text-sm text-dark/75">
                    <Icon size={15} className="text-dusty" />
                    {text}
                  </span>
                ))}
                <span className="text-sm font-medium text-dusty">Investment: $597</span>
              </div>
              <a
                href="#signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Reserve My Spot
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-dark/75 mb-6 leading-relaxed">
                You&rsquo;re exhausted from holding everything together. The 6-Week Burnout Reset
                Group is a structured small-group program for high-achieving women ready to
                understand their burnout and actually change how they live — not just push
                through it.
              </p>
              <p className="text-base md:text-lg text-dark/75 leading-relaxed">
                Each week, you&rsquo;ll move through a clear, guided path: assessing where you
                are right now, getting honest about your values, learning to set boundaries that
                hold, and building a version of life that doesn&rsquo;t require running on empty.
              </p>
            </div>
          </div>
        </section>

        {/* What the six weeks look like */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-light text-dark mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What the six weeks{" "}
              <span className="italic text-brand">look like</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weeks.map(({ week, title, description }) => (
                <div key={week} className="p-6 rounded-2xl bg-white border border-cream-dark">
                  <span
                    className="block text-5xl font-light text-brand/20 leading-none mb-4 select-none"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {week}
                  </span>
                  <h3
                    className="text-xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Week {parseInt(week, 10)} — {title}
                  </h3>
                  <p className="text-sm text-dark/75 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A note on this cohort */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                A note on{" "}
                <span className="italic text-brand">this cohort</span>
              </h2>
              <p className="text-base text-dark/75 mb-8 leading-relaxed">
                This is a small founding group. Because of that, spots are intentionally limited
                to 8–10 women, and I&rsquo;ll be personally involved in every session. If
                you&rsquo;ve been waiting for the right time to actually address what&rsquo;s
                driving the exhaustion — not just manage it — this is a meaningful place to
                start.
              </p>
              <blockquote className="pull-quote">
                &ldquo;I&rsquo;ve spent years working with high-achieving women in burnout as a
                licensed therapist and university faculty. This group brings that clinical depth
                into a format that&rsquo;s structured, specific, and small enough to actually
                matter.&rdquo;
                <footer className="not-italic text-base text-dark/70 mt-3">
                  — Jennifer Walker, LCSW
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Is This Group Right For You */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-8 text-center"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Is This Group{" "}
                <span className="italic text-brand">Right For You?</span>
              </h2>
              <div className="flex flex-col gap-4">
                {forYouIf.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-8 text-center"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Questions,{" "}
                <span className="italic text-brand">answered</span>
              </h2>
              <Accordion className="flex flex-col gap-2">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="rounded-xl border-l-4 border-l-dusty border border-cream-dark bg-cream px-6 not-last:border-b"
                  >
                    <AccordionTrigger className="text-base font-medium text-dark text-left py-5">
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
          </div>
        </section>

        {/* Signup */}
        <section id="signup" className="scroll-mt-24 section-padding" style={{ backgroundColor: "#57686B" }}>
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2
                className="text-4xl md:text-5xl font-light text-cream mb-5"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Reserve{" "}
                <span className="italic" style={{ color: "#CAAF99" }}>My Spot</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(242,241,235,0.8)" }}>
                What happens after I sign up? You&rsquo;ll get a confirmation right away, and
                I&rsquo;ll personally follow up within 2 business days to set up a short call and
                answer any questions before you commit.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-cream rounded-2xl p-6 md:p-10 shadow-lg">
              <KitEmbedForm
                dataUid="2ef7a65500"
                src="https://fabulous-teacher-7023.kit.com/2ef7a65500/index.js"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
