import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const recognizeThis = [
  "You hold everything together — and no one sees how heavy it is",
  "You set the bar impossibly high for yourself, then feel like a failure when you fall short",
  "Saying no feels selfish, so you keep saying yes until you're running on empty",
  "Your identity is so wrapped up in being capable and strong that you don't know who you are without it",
  "Family and cultural expectations shape your choices more than your own desires do",
  "You're burned out — but admitting it feels like failure",
  "You've spent so long taking care of everyone else, you've forgotten how to take care of yourself",
];

const areas = [
  {
    title: "Perfectionism",
    body: "The relentless pursuit of perfect isn't ambition — it's armor. Therapy helps you understand what you're protecting yourself from, and build confidence that doesn't depend on getting everything right.",
  },
  {
    title: "People-Pleasing",
    body: "When your worth feels tied to being agreeable, helpful, and liked, boundaries become almost impossible. We'll work on untangling your needs from your need to be needed.",
  },
  {
    title: "Being the Strong One",
    body: "Being the person everyone leans on is an identity — and a burden. Therapy creates a space where you can finally set that down and receive support instead of always giving it.",
  },
  {
    title: "Identity",
    body: "Who are you when you're not performing? Not succeeding? Not needed? Reconnecting with your authentic self — beyond roles and achievements — is often the most transformative work we do.",
  },
  {
    title: "Expectations",
    body: "Whether they come from family, culture, or your own inner critic, the expectations you carry shape everything. Therapy helps you examine which ones are truly yours — and release the ones that aren't.",
  },
  {
    title: "Family & Cultural Pressures",
    body: "The messages you received growing up about success, sacrifice, and what a woman is supposed to be don't disappear in adulthood. We'll work through them in a culturally sensitive, judgment-free space.",
  },
  {
    title: "Burnout",
    body: "Burnout is what happens when high-performing women go too long without being honest about their limits. If you're here, you're probably there. Let's talk about what recovery actually looks like.",
  },
];

export default function HighPerformingWomenTherapyPage() {
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
                High-Performing{" "}
                <span className="italic text-brand">Women Therapy</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                For Women in Georgia &amp; Florida Who Give Everything to Everyone
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                You take care of everything. Who is taking care of you? This is a space
                built for the woman who has spent too long carrying it all — and is finally
                ready to put some of it down.
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

        {/* Do You Recognize This */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Do you{" "}
                <span className="italic text-brand">recognize this?</span>
              </h2>
              <p className="text-base text-dark/70 mb-10 leading-relaxed">
                High-performing women are often the last to ask for help — because they&rsquo;ve
                built their identity around not needing it. But there&rsquo;s a difference
                between being capable and carrying too much. If any of this sounds familiar,
                you&rsquo;re in the right place.
              </p>
              <div className="flex flex-col gap-4">
                {recognizeThis.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Explore */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-light text-dark mb-4 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What we{" "}
              <span className="italic text-brand">work through together</span>
            </h2>
            <p className="text-base text-dark/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every woman who walks through these (virtual) doors carries her own unique
              combination of pressures, patterns, and history. Here are the areas we most
              often explore:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {areas.map(({ title, body }) => (
                <div key={title} className="p-6 rounded-2xl bg-white border border-cream-dark">
                  <h3
                    className="text-xl font-medium text-dark mb-3"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-dark/70 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culturally Responsive Note */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                A space that sees{" "}
                <span className="italic text-brand">your whole story</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Jennifer Walker works with women from all backgrounds and brings a
                culturally responsive lens to every session. Whether you&rsquo;re navigating
                family expectations rooted in culture, the pressure of being a first-generation
                professional, or the invisible labor of code-switching through every space you
                enter — this is a place where all of that is recognized, not minimized.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                You don&rsquo;t have to explain your context. You can just be honest about
                where you are.
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
              You&rsquo;ve taken care of everyone else.{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>Now it&rsquo;s your turn.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              Book a free 15-minute consultation and let&rsquo;s talk about what support
              could look like for you — no commitment, no pressure.
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
