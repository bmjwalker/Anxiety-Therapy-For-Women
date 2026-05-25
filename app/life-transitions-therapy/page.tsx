import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const transitions = [
  "Divorce or the end of a long-term relationship",
  "Becoming a mother — or navigating an empty nest",
  "A career pivot, layoff, or unexpected job change",
  "Moving to a new city or leaving a life you built",
  "Loss of a parent, partner, or close friend",
  "A health diagnosis that changes everything",
  "A shift in identity — who you are after achieving everything you set out to do",
];

const workOnTogether = [
  "Process grief, fear, and the emotions that come with major change",
  "Rebuild your sense of identity when life looks nothing like it did before",
  "Find your footing without forcing yourself to \"be okay\" too soon",
  "Move from surviving the transition to actively shaping what comes next",
  "Build confidence and clarity about who you are on the other side",
  "Reconnect with yourself — your values, your needs, your direction",
];

export default function LifeTransitionsTherapyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-6 tracking-widest uppercase">
                Therapy Service
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Life Transitions{" "}
                <span className="italic text-brand">Therapy</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                For High-Performing Women in Georgia &amp; Florida
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                Change doesn&rsquo;t have to mean crisis. Life Transitions Therapy helps you
                move through the hardest chapters of your life without losing yourself in the
                process — and emerge stronger on the other side.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Transitions Section */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Are you navigating{" "}
                <span className="italic text-brand">a major life change?</span>
              </h2>
              <p className="text-base text-dark/70 mb-10 leading-relaxed">
                Some transitions we choose. Some are thrust upon us. Either way, they shake
                the ground beneath us — and for high-performing women who are used to having
                everything under control, that instability can feel overwhelming.
              </p>
              <p className="text-base text-dark/70 mb-8 leading-relaxed">
                Life Transitions Therapy is for women moving through:
              </p>
              <div className="flex flex-col gap-4">
                {transitions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Therapy */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                You don&rsquo;t have to white-knuckle{" "}
                <span className="italic text-brand">through this alone</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                High-achieving women are often the ones everyone else leans on during hard times
                — which means there&rsquo;s rarely space for them to fall apart, be uncertain, or
                grieve. You may have mastered the art of holding it together on the outside.
              </p>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Therapy gives you a place to stop holding it together for a little while. A
                confidential, judgment-free space where you can be honest about how hard this
                actually is — and get real support for moving through it.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                Transitions are also growth. Jennifer helps you not just survive the change,
                but discover who you&rsquo;re becoming in the process.
              </p>
            </div>
          </div>
        </section>

        {/* What We Work On */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-10"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What we work on{" "}
                <span className="italic text-brand">together</span>
              </h2>
              <div className="flex flex-col gap-4">
                {workOnTogether.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
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
              The other side of this{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>exists.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              You don&rsquo;t have to know exactly where you&rsquo;re going. You just have to
              be willing to take the first step. Let&rsquo;s navigate this together.
            </p>
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
