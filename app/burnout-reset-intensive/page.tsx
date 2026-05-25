import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Zap, Target, Map, Star } from "lucide-react";

const included = [
  "Two full days of intensive, focused transformation work",
  "1:1 personalized sessions with Jennifer Walker, LCSW",
  "A custom Burnout Reset Plan built around your life",
  "Deep-dive identity and values clarification",
  "Boundary-setting and sustainable lifestyle design",
  "Concrete roadmap for the weeks and months ahead",
];

const forYouIf = [
  "You need transformation fast — not a slow, gradual process",
  "You're at a breaking point and ready for a real reset",
  "You want undivided, personalized attention from an expert",
  "You've tried everything and need a structured, intensive approach",
  "You're ready to invest fully in yourself and your recovery",
];

const outcomes = [
  { icon: Zap, title: "Renewed Energy", description: "Walk away feeling lighter, clearer, and ready to move forward." },
  { icon: Target, title: "Personalized Plan", description: "A burnout reset roadmap built specifically around your life and goals." },
  { icon: Map, title: "Clear Direction", description: "Know exactly what steps to take next — no more spinning your wheels." },
  { icon: Star, title: "Lasting Change", description: "Practical tools and insights you'll use long after the intensive ends." },
];

export default function BurnoutResetIntensivePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-brand-muted text-brand border border-sage mb-6 tracking-widest uppercase">
                Intensive
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                2-Day Burnout Reset{" "}
                <span className="italic text-brand">Intensive</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                Condensed Deep-Dive Workshop
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                For the woman who needs transformation fast. This two-day intensive condenses
                months of work into a powerful, focused experience. You&rsquo;ll walk away with a
                personalized reset plan, renewed clarity, and a concrete roadmap for sustainable
                well-being.
              </p>
              <a
                href="https://fabulous-teacher-7023.kit.com/f8df46e455"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Reserve Your Spot
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-light text-dark mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What you&rsquo;ll walk away{" "}
              <span className="italic text-brand">with</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-6 rounded-2xl bg-cream text-center">
                  <div className="w-12 h-12 rounded-full bg-sage-muted flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <h3
                    className="text-xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included + Who It's For */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-light text-dark mb-8"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  What&rsquo;s{" "}
                  <span className="italic text-brand">included</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                      <p className="text-base text-dark/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2
                  className="text-3xl md:text-4xl font-light text-dark mb-8"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  This is for you{" "}
                  <span className="italic text-brand">if…</span>
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
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ backgroundColor: "#57686B" }}>
          <div className="section-container text-center max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-cream mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Step away. Reset deeply.{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>Return stronger.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              Two focused days can change the trajectory of the next year. You deserve that
              investment in yourself.
            </p>
            <a
              href="https://fabulous-teacher-7023.kit.com/f8df46e455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Reserve Your Spot
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
