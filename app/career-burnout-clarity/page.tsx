import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, BookOpen, Clock, Download, RefreshCw } from "lucide-react";

const included = [
  "Self-paced video modules you can complete on your own schedule",
  "Lifetime access — revisit anytime you need a reset",
  "Downloadable workbooks and reflection guides",
  "Evidence-based burnout recovery frameworks",
  "Career identity and values clarification exercises",
  "Strategies to untangle self-worth from job title",
];

const forYouIf = [
  "You're a high-achieving professional running on empty",
  "You've lost yourself in your career and don't know who you are outside of work",
  "You want to recover from burnout at your own pace, privately",
  "You're questioning whether your career still fits who you are",
  "You want practical tools you can use immediately",
];

const modules = [
  { icon: RefreshCw, title: "Understanding Your Burnout", description: "Identify where you are in the burnout cycle and what got you here." },
  { icon: BookOpen, title: "Reclaiming Your Identity", description: "Rebuild a sense of self that exists beyond your job title and performance." },
  { icon: Clock, title: "Sustainable Boundaries", description: "Learn to protect your time and energy without the guilt." },
  { icon: Download, title: "Your Clarity Roadmap", description: "Create a personalized plan for what comes next — with confidence." },
];

export default function CareerBurnoutClarityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-dusty-light text-dusty-dark border border-dusty mb-6 tracking-widest uppercase">
                Course
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Beyond the{" "}
                <span className="italic text-brand">Strong One</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                Self-Paced Course for Career Burnout &amp; Clarity
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                A self-paced digital course built for the woman who is done being the strong one
                for everyone else. Learn evidence-based burnout recovery strategies, rebuild your
                identity beyond your career, and find clarity about what truly matters — on your
                schedule.
              </p>
              <a
                href="https://fabulous-teacher-7023.kit.com/a2676e1c5d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Explore the Course
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-light text-dark mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What you&rsquo;ll{" "}
              <span className="italic text-brand">work through</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-6 rounded-2xl bg-cream">
                  <div className="w-12 h-12 rounded-full bg-dusty-light flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <h3
                    className="text-xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-dark/75 leading-relaxed">{description}</p>
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
              You are more than{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>your job title.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              Start reclaiming your identity and building a life that feels as good on the inside
              as it looks on the outside.
            </p>
            <a
              href="https://fabulous-teacher-7023.kit.com/a2676e1c5d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Explore the Course
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
