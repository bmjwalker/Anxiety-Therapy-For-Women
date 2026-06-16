import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Therapy with Jennifer Walker, LCSW",
  description:
    "Answers to common questions about working with Jennifer Walker, LCSW — therapy format, fees, insurance, telehealth, and what to expect from your first session.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/faqs" },
  openGraph: {
    title: "Therapy FAQs | Jennifer Walker, LCSW",
    description:
      "Everything you need to know before starting therapy — fees, insurance, telehealth, and what to expect.",
    url: "https://anxietytherapyforwomen.com/faqs",
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
