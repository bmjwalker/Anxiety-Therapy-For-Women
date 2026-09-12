import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Clinical Supervision for LMSWs | Jennifer Walker, LCSW",
  },
  description:
    "Clinical supervision for LMSWs in Georgia working toward LCSW licensure. Build a real caseload, get business coaching, and grow into independent practice.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/supervision" },
  openGraph: {
    title: "Clinical Supervision for LMSWs | Jennifer Walker, LCSW",
    description:
      "Supervision for LMSWs in Georgia working toward LCSW licensure — build a real caseload, not just clock hours.",
    url: "https://anxietytherapyforwomen.com/supervision",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
  },
};

const isThisYou = [
  "Active LMSW license in Georgia",
  "Comfortable working in a fully telehealth practice",
  "Interested in building your own caseload in your own specialty, not taking overflow clients",
  "Open to eventually creating and facilitating your own therapy group",
  "Ready to invest in the business side of practice, not just the clinical side",
];

const whatsIncluded = [
  "Individual supervision, biweekly, and group supervision, weekly, with a small cohort of your peers",
  "A structured competency framework so you always know where you stand, not just informal feedback",
  "Business coaching — marketing yourself, filling your caseload, setting up your own website and professional presence",
  "Support building and running your own therapy group as part of the role",
];

export default function SupervisionPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-6 tracking-widest uppercase">
                Clinical Supervision
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Clinical Supervision{" "}
                <span className="italic text-brand">for LMSWs</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                Building your caseload while you build your license.
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                I remember what it felt like to be newly licensed and unsure how any of this
                actually worked — how to find clients, how to price myself, how to trust that I
                was ready. Supervision, for me, isn&rsquo;t just signing off on hours.
                It&rsquo;s helping you build the skills and the practice you actually want,
                before you&rsquo;re doing it alone.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Is This You / What's Included */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <p className="text-base text-dark/70 mb-10 max-w-3xl leading-relaxed">
              If you&rsquo;re an LMSW in Georgia working toward LCSW licensure, and
              you&rsquo;re ready to build a real caseload — not just clock hours — this might be
              a fit.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-light text-dark mb-8"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Is this{" "}
                  <span className="italic text-brand">you?</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {isThisYou.map((item) => (
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
                  What&rsquo;s{" "}
                  <span className="italic text-brand">included</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {whatsIncluded.map((item) => (
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

        {/* How It Works */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                How it{" "}
                <span className="italic text-brand">works</span>
              </h2>
              <p className="text-base text-dark/70 leading-relaxed mb-4">
                You&rsquo;ll start with paid supervision, which counts toward the hours you need
                regardless of where you get them. Once you&rsquo;re ready, you move into
                building your own caseload. From there, you keep 70% of your session fees, with
                supervision billed separately and ongoing at $100/hour. Supervision is a
                relationship, not a transaction — if it&rsquo;s not the right fit for either of
                us, we can part ways; there&rsquo;s no long-term obligation on either side.
              </p>
              <p className="text-sm text-dark/60 italic">
                Spots are limited. Each cohort is capped to keep group supervision genuinely
                useful, not crowded.
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
              Let&rsquo;s build{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>what&rsquo;s next.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              If this sounds like the kind of supervision you&rsquo;ve been looking for,
              let&rsquo;s talk.
            </p>
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
            <p className="text-sm mt-3" style={{ color: "rgba(242,241,235,0.75)" }}>
              Select the 30-Minute Phone Consultation — Clinical Position at Anxiety Therapy for
              Women option.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
