import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Therapy FAQs | Jennifer Walker, LCSW | Atlanta, GA",
  },
  description:
    "Common questions about therapy with Jennifer Walker, LCSW in Atlanta, GA: telehealth, fees, insurance, and what to expect.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/faqs" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Therapy FAQs | Jennifer Walker, LCSW | Atlanta, GA",
    description:
      "Common questions about therapy with Jennifer Walker, LCSW in Atlanta, GA: telehealth, fees, insurance, and what to expect.",
    url: "https://anxietytherapyforwomen.com/faqs",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
  },
};

export default function FaqsPage() {
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
              Frequently Asked{" "}
              <span className="italic text-brand">Questions</span>
            </h1>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
