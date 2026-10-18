import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Programs from "@/components/sections/Programs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Burnout Recovery Group | Psychoeducational Support for Women | Jennifer Walker, LCSW",
  },
  description:
    "Structured burnout recovery groups for high-performing women. Small cohorts and weekly virtual sessions, led from Atlanta, GA. Open to women in any state.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/groups" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Burnout Recovery Group for Women | Jennifer Walker, LCSW | Atlanta, GA",
    description:
      "Structured burnout recovery groups for high-performing women. Small cohorts and weekly virtual sessions, led from Atlanta, GA. Open to women in any state.",
    url: "https://anxietytherapyforwomen.com/groups",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
  },
};

export default function GroupsPage() {
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
              Burnout Recovery Support{" "}
              <span className="italic text-brand">Group</span>
            </h1>
          </div>
        </section>
        <Programs />
      </main>
      <Footer />
    </>
  );
}
