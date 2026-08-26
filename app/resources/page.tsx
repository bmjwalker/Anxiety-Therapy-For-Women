import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Resources from "@/components/sections/Resources";

export const metadata: Metadata = {
  title: {
    absolute: "Free Mental Health Resources for Women | Jennifer Walker, LCSW",
  },
  description:
    "Download the free Burnout Reflection Guide and access crisis support resources. Free tools for high-performing women navigating anxiety and burnout — from Jennifer Walker, LCSW.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/resources" },
  openGraph: {
    title: "Free Mental Health Resources for Women | Jennifer Walker, LCSW",
    description:
      "Download the free Burnout Reflection Guide and access crisis support resources for high-performing women navigating anxiety and burnout.",
    url: "https://anxietytherapyforwomen.com/resources",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
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
              Free Resources{" "}
              <span className="italic text-brand">&amp; Tools</span>
            </h1>
          </div>
        </section>
        <Resources />
      </main>
      <Footer />
    </>
  );
}
