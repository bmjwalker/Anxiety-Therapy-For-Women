import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Group Therapy Programs for Women | Jennifer Walker, LCSW | Atlanta, GA",
  },
  description:
    "Structured burnout recovery group programs for high-performing women. Small cohorts, weekly telehealth sessions, led by Jennifer Walker, LCSW in Georgia & Florida.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/groups" },
  openGraph: {
    title: "Group Therapy Programs for Women | Jennifer Walker, LCSW | Atlanta, GA",
    description:
      "Structured burnout recovery programs for high-performing women — small cohorts, weekly telehealth sessions in Georgia & Florida.",
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
              Group Therapy{" "}
              <span className="italic text-brand">Programs</span>
            </h1>
          </div>
        </section>
        <Programs />
      </main>
      <Footer />
    </>
  );
}
