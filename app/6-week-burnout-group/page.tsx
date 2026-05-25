import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Calendar, Users, Heart, TrendingUp } from "lucide-react";

const included = [
  "6 structured weekly live group sessions via secure telehealth",
  "Small cohort of 6–8 women for an intimate, connected experience",
  "Burnout assessment and personalized insight in week one",
  "Values clarification and identity work",
  "Boundary-setting strategies for real life",
  "Sustainable lifestyle design for the long term",
];

const forYouIf = [
  "You're overwhelmed and ready to move from survival mode to aligned living",
  "You thrive with structure and a clear week-by-week roadmap",
  "You want the support of a small group of women who truly understand",
  "You're committed to showing up for yourself over six weeks",
  "You want lasting change, not just a quick fix",
];

const weeks = [
  { week: "01", title: "Burnout Assessment", description: "Understand your burnout stage and what's driving it." },
  { week: "02", title: "Values Clarification", description: "Reconnect with what actually matters to you." },
  { week: "03", title: "Identity Beyond Work", description: "Rediscover who you are outside of what you do." },
  { week: "04", title: "Boundary Setting", description: "Learn to protect your time and energy without guilt." },
  { week: "05", title: "Sustainable Lifestyle Design", description: "Build rhythms that support your well-being long-term." },
  { week: "06", title: "Your Reset Roadmap", description: "Leave with a concrete plan for the months ahead." },
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
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                6-Week Burnout{" "}
                <span className="italic text-brand">Reset Group</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                Structured Cohort Program for High-Performing Women
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                A structured six-week journey designed to take you from overwhelmed to aligned.
                Each week builds on the last — moving through burnout assessment, values
                clarification, boundary-setting, identity work, and sustainable lifestyle design.
              </p>
              <a
                href="https://fabulous-teacher-7023.kit.com/bd7889084a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Join the Next Cohort
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Week by Week */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-light text-dark mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Your{" "}
              <span className="italic text-brand">six-week journey</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weeks.map(({ week, title, description }) => (
                <div key={week} className="p-6 rounded-2xl bg-cream border border-cream-dark">
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
              Six weeks from now, you could feel{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>completely different.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              Real progress. Real support. Lasting change. You don&rsquo;t have to do this alone.
            </p>
            <a
              href="https://fabulous-teacher-7023.kit.com/bd7889084a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Join the Next Cohort
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
