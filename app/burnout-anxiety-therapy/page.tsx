import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const survivalSigns = [
  "Waking up already exhausted before the day even begins",
  "A constant low hum of anxiety you can't quite turn off",
  "Dreading Monday by Saturday afternoon",
  "Feeling disconnected from the life you worked so hard to build",
  "Running on caffeine, willpower, and the fear of falling behind",
  "Snapping at the people you love, then feeling guilty about it",
  "Wondering if this is just \"how it is\" now",
];

const workOnTogether = [
  "Understand the root causes of your burnout — not just the symptoms",
  "Break the anxiety spiral and learn to quiet your nervous system",
  "Reconnect with what actually matters to you",
  "Set boundaries that hold — without guilt, shame, or overexplaining",
  "Rebuild sustainable energy and reclaim your sense of self",
  "Create a life that feels as good on the inside as it looks on the outside",
];

export default function BurnoutAnxietyTherapyPage() {
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
                Burnout Recovery &amp;{" "}
                <span className="italic text-brand">Anxiety Therapy</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                For High-Performing Women in Georgia &amp; Florida
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                You&rsquo;ve been the strong one for so long that surviving has become your
                default setting. Therapy can help you stop white-knuckling through your
                days — and start actually living them.
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

        {/* Signs of Survival Mode */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Are you living in{" "}
                <span className="italic text-brand">survival mode?</span>
              </h2>
              <p className="text-base text-dark/70 mb-10 leading-relaxed">
                Survival mode is sneaky. It doesn&rsquo;t always look like a breakdown. For
                high-performing women, it often looks like pushing through, keeping up, and
                holding it all together — while quietly falling apart inside.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {survivalSigns.map((sign) => (
                  <div key={sign} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{sign}</p>
                  </div>
                ))}
              </div>
              <p className="text-base text-dark/70 leading-relaxed italic">
                If any of these feel familiar, you&rsquo;re not weak. You&rsquo;re exhausted.
                And there&rsquo;s a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Therapy Beyond Coping */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Therapy that goes{" "}
                <span className="italic text-brand">beyond coping skills</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                You don&rsquo;t need another breathing exercise or a productivity hack. You need
                someone who will actually help you understand why you keep ending up here — and
                what it would take to finally stop.
              </p>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Burnout Recovery &amp; Anxiety Therapy with Jennifer Walker is a space to slow
                down, get honest, and do the deeper work. Using evidence-based approaches
                like CBT, DBT, and trauma-informed care, Jennifer works with you to identify
                the patterns that keep you stuck — and build something sustainable in their
                place.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                This isn&rsquo;t about fixing what&rsquo;s wrong with you. It&rsquo;s about
                understanding yourself well enough to create a life that actually works.
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

        {/* Imagine Section */}
        <section className="section-padding" style={{ backgroundColor: "#F5F0EA" }}>
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Imagine what life could{" "}
                <span className="italic text-brand">feel like</span>
              </h2>
              <p className="text-base text-dark/70 mb-5 leading-relaxed">
                Waking up with enough energy for the day. Saying no without a spiral of guilt.
                Feeling present in your own life — not just going through the motions.
                Knowing what you want, and believing you deserve it.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                That&rsquo;s not a fantasy. That&rsquo;s what recovery can look like. And it
                starts with one conversation.
              </p>
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
              You don&rsquo;t have to wait until{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>you hit a wall.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              You&rsquo;ve already been surviving. Let&rsquo;s work together so you can start
              thriving. Book a free 15-minute consultation — no commitment, no pressure.
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
