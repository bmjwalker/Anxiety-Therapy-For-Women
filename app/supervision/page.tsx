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
  "Wants real feedback on case conceptualization, not just a signature on a form",
  "Preparing for (or thinking ahead to) the LCSW exam",
  "Curious about private practice, even if you're not sure yet what that looks like for you",
];

const whatsIncluded = [
  "Individual supervision, biweekly, and group supervision, weekly, with a small cohort of your peers",
  "Case conceptualization skill-building, worked through with real cases from your own work",
  "LCSW exam prep support as you get closer to sitting for licensure",
  "A structured competency framework so you always know where you stand, not just informal feedback",
  "For those interested in private practice: business mentorship covering marketing, filling a caseload, and setting up your own professional presence",
  "Support building and running your own therapy group as part of the role",
];

const eligibility = [
  "Active LMSW license in Georgia, in good standing",
  "Completed MSW from an accredited program",
  "Comfortable working in a fully telehealth setting",
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
                Building your clinical foundation as you work toward licensure.
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-6 max-w-2xl leading-relaxed">
                I remember what it felt like to be newly licensed and unsure how any of this
                actually worked — how to trust my case conceptualization, how to prepare for an
                exam that felt impossibly broad, how to eventually think about building
                something of my own. Supervision, for me, isn&rsquo;t just signing off on hours.
                It&rsquo;s helping you build real clinical skill and confidence, at whatever
                pace gets you there.
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                If you&rsquo;re an LMSW in Georgia working toward LCSW licensure, this is a
                space to grow real clinical skill — not just clock hours.
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

        {/* Is This You */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
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
          </div>
        </section>

        {/* What Is Clinical Supervision */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What Is{" "}
                <span className="italic text-brand">Clinical Supervision?</span>
              </h2>
              <p className="text-base text-dark/70 leading-relaxed">
                Clinical supervision is the guided relationship that gets you from an LMSW to a
                fully licensed LCSW — working alongside an experienced clinician to build the
                clinical skill, ethical grounding, and confidence that licensure requires.
                It&rsquo;s where the theory you learned in school meets the reality of sitting
                across from an actual client.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach — How Supervision Works */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-dusty" />
                <span className="text-xs tracking-widest uppercase text-dusty font-medium">
                  Our Approach
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-normal text-dark mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                How Supervision{" "}
                <span className="italic text-brand">Works</span>
              </h2>
              <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />
              <p className="text-dark/75 mb-8 italic">
                A developmental approach to how you grow as a clinician.
              </p>
              <div className="max-w-md pl-5 border-l-2 border-l-brand">
                <p
                  className="text-lg font-semibold text-dark mb-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Integrative Developmental Model (IDM)
                </p>
                <p className="text-sm text-dark/75 leading-relaxed">
                  Supervision grows with you — from building foundational skills with more
                  structure and direct feedback, to full clinical autonomy and confidence,
                  tracked across the specific competencies that matter for your license.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grounded in Social Work Values & Ethics */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Grounded in Social Work{" "}
                <span className="italic text-brand">Values &amp; Ethics</span>
              </h2>
              <p className="text-base text-dark/70 leading-relaxed">
                Everything in our work together is anchored in the NASW Code of Ethics —
                informed consent, confidentiality and boundaries, cultural responsiveness, scope
                of practice, and professional conduct aren&rsquo;t a separate unit we cover
                once. They&rsquo;re the lens we use to work through every real case you bring.
              </p>
            </div>
          </div>
        </section>

        {/* Self-Care Is Part of the Work */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Self-Care Is{" "}
                <span className="italic text-brand">Part of the Work</span>
              </h2>
              <p className="text-base text-dark/70 leading-relaxed">
                I won&rsquo;t just supervise your clinical skills — sustainability is part of
                how I train you to practice. Burnt-out clinicians don&rsquo;t serve clients
                well, and building good self-regulation habits now is part of building a career
                that lasts.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What&rsquo;s{" "}
                <span className="italic text-brand">Included</span>
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
        </section>

        {/* Eligibility & Requirements */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Eligibility &amp;{" "}
                <span className="italic text-brand">Requirements</span>
              </h2>
              <div className="flex flex-col gap-4">
                {eligibility.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spots limited callout */}
        <section className="bg-cream pt-10 pb-2">
          <div className="section-container">
            <div className="max-w-xl mx-auto border border-dusty/40 rounded-xl px-6 py-4 text-center">
              <p className="text-sm text-dark/70">
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
              If this sounds like the direction you want to grow in, book a free consultation
              and we&rsquo;ll talk through the details.
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
