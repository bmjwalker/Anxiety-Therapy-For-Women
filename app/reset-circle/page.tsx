import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Users, Heart, Shield, Zap } from "lucide-react";

const included = [
  "Weekly live group sessions via secure telehealth",
  "A supportive community of high-performing women",
  "Weekly accountability check-ins",
  "Evidence-based burnout recovery tools and resources",
  "Ongoing enrollment — join when you're ready",
  "Confidential, judgment-free space",
];

const forYouIf = [
  "You're exhausted from being the strong one for everyone else",
  "You crave community with women who truly get it",
  "You want ongoing support, not just a one-time workshop",
  "You're ready to break free from burnout cycles — together",
  "You want accountability to keep showing up for yourself",
];

const pillars = [
  { icon: Users, title: "Community", description: "Connect with like-minded high-performing women on the same journey." },
  { icon: Heart, title: "Support", description: "A safe, confidential space to be honest about what you're really going through." },
  { icon: Shield, title: "Accountability", description: "Weekly check-ins to keep you moving forward between sessions." },
  { icon: Zap, title: "Tools", description: "Practical, evidence-based strategies you can apply to your real life." },
];

export default function ResetCirclePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-6 tracking-widest uppercase">
                Membership
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The Reset{" "}
                <span className="italic text-brand">Circle</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                Ongoing Community Program for High-Performing Women
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                An ongoing group community for high-performing women ready to break free from
                burnout cycles. Connect with like-minded women, gain weekly accountability, and
                access powerful tools — all in a supportive, confidential environment.
              </p>
              <a
                href="https://fabulous-teacher-7023.kit.com/resetcircle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Join the Circle
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-light text-dark mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What the Circle is{" "}
              <span className="italic text-brand">built on</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-6 rounded-2xl bg-cream text-center">
                  <div className="w-12 h-12 rounded-full bg-mist-light flex items-center justify-center mx-auto mb-4">
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
              Ready to stop doing this{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>alone?</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              Join a community of high-performing women who are choosing to heal, grow, and
              thrive — together.
            </p>
            <a
              href="https://fabulous-teacher-7023.kit.com/resetcircle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Join the Circle
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
