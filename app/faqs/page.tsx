import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: {
    absolute:
      "Therapy FAQs | Jennifer Walker, LCSW | Telehealth in Georgia & Florida",
  },
  description:
    "Common questions about working with Jennifer Walker, LCSW — telehealth format, session fees, insurance, and what to expect from anxiety and burnout therapy in Georgia and Florida.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/faqs" },
  openGraph: {
    title: "Therapy FAQs | Jennifer Walker, LCSW | Telehealth in Georgia & Florida",
    description:
      "Common questions about telehealth format, session fees, insurance, and what to expect from therapy with Jennifer Walker, LCSW.",
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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
