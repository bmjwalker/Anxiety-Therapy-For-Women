import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Briefcase, CalendarDays, ExternalLink, Heart, Scale, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Resources from "@/components/sections/Resources";
import BurnoutGuideContent from "@/components/sections/BurnoutGuide";

export const metadata: Metadata = {
  title: {
    absolute: "Free Mental Health Resources for Women | Jennifer Walker, LCSW",
  },
  description:
    "Free, trusted resources for women in Atlanta, GA: 24/7 crisis support, your mental health rights at work, and clear, research-based information on anxiety.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/resources" },
  openGraph: {
    title: "Free Mental Health Resources for Women | Jennifer Walker, LCSW",
    description:
      "Free, trusted resources for women in Atlanta, GA: 24/7 crisis support, your mental health rights at work, and clear, research-based information on anxiety.",
    url: "https://anxietytherapyforwomen.com/resources",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mental Health Resources for Women | Jennifer Walker, LCSW",
    description:
      "Free, trusted resources for women in Atlanta, GA: 24/7 crisis support, your mental health rights at work, and clear, research-based information on anxiety.",
    images: ["/headshot.jpg"],
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-cream pt-28 pb-8">
          <div className="section-container">
            <h1
              className="text-5xl md:text-6xl font-light text-dark leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Free Mental Health Resources{" "}
              <span className="italic text-brand">for Women</span>
            </h1>
          </div>
        </section>
        <Resources onResourcesPage />

        {/* Workplace Rights & Accommodations */}
        <section className="section-padding bg-cream">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-dusty" />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C4897B" }}>
                Work &amp; Your Rights
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-normal text-dark mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Workplace Rights{" "}
              <span className="italic text-brand">&amp; Accommodations</span>
            </h2>
            <div className="h-1 w-12 rounded-full mb-10" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

              {/* Card — Department of Labor */}
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                  <Briefcase size={22} style={{ color: "#4A7C7E" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Mental Health at Work — U.S. Department of Labor
                  </h3>
                  <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                    Federal resources on mental health in the workplace, including your legal rights,
                    accommodation ideas, and guidance on what a supportive work environment looks like.
                  </p>
                  <a
                    href="https://beta.dol.gov/programs-initiatives/mental-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    Visit the Department of Labor
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Card — ADA.gov */}
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                  <Scale size={22} style={{ color: "#4A7C7E" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Introduction to the ADA — ADA.gov
                  </h3>
                  <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                    A plain-language overview of the Americans with Disabilities Act, including how it
                    can protect people with mental health conditions at work.
                  </p>
                  <a
                    href="https://www.ada.gov/topics/intro-to-ada/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    Visit ADA.gov
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Card — EEOC */}
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                  <ShieldCheck size={22} style={{ color: "#4A7C7E" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Mental Health Conditions in the Workplace: Your Legal Rights — U.S. EEOC
                  </h3>
                  <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                    A clear Q&amp;A on your rights at work if you&apos;re living with anxiety, depression, or
                    another mental health condition, including privacy, protection from discrimination, and
                    how to request accommodations.
                  </p>
                  <a
                    href="https://www.eeoc.gov/laws/guidance/depression-ptsd-other-mental-health-conditions-workplace-your-legal-rights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    Visit the EEOC
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Card — FMLA */}
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                  <CalendarDays size={22} style={{ color: "#4A7C7E" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Family and Medical Leave Act (FMLA) — U.S. Department of Labor
                  </h3>
                  <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                    Explains who qualifies for job-protected leave, including leave for your own health
                    condition, and how intermittent or reduced-schedule leave works.
                  </p>
                  <a
                    href="https://www.dol.gov/agencies/whd/fmla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    Learn about FMLA
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>

            <p className="text-sm text-dark/75 mt-8">
              Related reading:{" "}
              <Link
                href="/blog/the-benefits-youre-not-using"
                className="font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                style={{ color: "#4A7C7E" }}
              >
                The Benefits You&apos;re Not Using
              </Link>
            </p>
          </div>
        </section>

        {/* Understanding Anxiety */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-dusty" />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C4897B" }}>
                Learn More
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-normal text-dark mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Understanding{" "}
              <span className="italic text-brand">Anxiety</span>
            </h2>
            <div className="h-1 w-12 rounded-full mb-10" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

              {/* Card — NIMH */}
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                  <BookOpen size={22} style={{ color: "#4A7C7E" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Anxiety Disorders — National Institute of Mental Health
                  </h3>
                  <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                    Research-based information on how anxiety disorders differ from everyday worry, common
                    symptoms, and treatment options.
                  </p>
                  <a
                    href="https://www.nimh.nih.gov/health/topics/anxiety-disorders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    Read about anxiety disorders
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Card — NIMH Caring for Your Mental Health */}
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                  <Heart size={22} style={{ color: "#4A7C7E" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Caring for Your Mental Health — National Institute of Mental Health
                  </h3>
                  <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                    Practical guidance on self-care, the signs that it&apos;s time to reach out for
                    professional support, and how to find it.
                  </p>
                  <a
                    href="https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    Read NIMH&apos;s self-care guide
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>

            <p className="text-sm text-dark/75 mt-8">
              Related reading:{" "}
              <Link
                href="/blog/why-high-performing-women-overthink"
                className="font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                style={{ color: "#4A7C7E" }}
              >
                Why High-Performing Women Overthink
              </Link>
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="section-padding bg-cream">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-dusty" />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C4897B" }}>
                Next Steps
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-normal text-dark mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              When It&apos;s Time for{" "}
              <span className="italic text-brand">More Support</span>
            </h2>
            <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

            <p className="text-base text-dark/75 mb-8 max-w-xl leading-relaxed">
              Anxiety and burnout rarely announce themselves. For many high-performing women, they show
              up as trouble sleeping, a shorter fuse, or the feeling that you&apos;re running on empty even
              after time off. The resources above can help you understand what&apos;s happening and know
              your rights at work. If these patterns have lasted more than a few weeks, or they&apos;re
              starting to affect your work, health, or relationships, it may be time to talk with a
              therapist. I offer online therapy from Atlanta, GA for women across Georgia and Florida.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/#contact" className="btn-primary px-6 py-3 rounded-md text-sm">
                Book a Free Consultation
              </Link>
              <Link
                href="/burnout-anxiety-therapy"
                className="text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                style={{ color: "#4A7C7E" }}
              >
                Burnout &amp; Anxiety Therapy
              </Link>
              <Link
                href="/high-performing-women-therapy"
                className="text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                style={{ color: "#4A7C7E" }}
              >
                Therapy for High-Performing Women
              </Link>
            </div>
          </div>
        </section>

        {/* Free Download — Burnout Reflection Guide */}
        <section className="section-padding" style={{ backgroundColor: "#4A7C7E" }}>
          <div className="section-container">
            <div className="max-w-xl mx-auto flex flex-col items-center gap-4 text-center">
              <BurnoutGuideContent headingLevel="h2" heading="Free Burnout Reflection Guide" showSubtitle={false} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
