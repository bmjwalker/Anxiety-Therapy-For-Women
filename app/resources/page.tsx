import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Resources from "@/components/sections/Resources";

export const metadata: Metadata = {
  title: "Mental Health Resources | Free Tools & Guides for Women",
  description:
    "Free mental health resources for high-performing women — the Burnout Reflection Guide, crisis support, and a full library of self-care and anxiety tools from Jennifer Walker, LCSW.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/resources" },
  openGraph: {
    title: "Mental Health Resources | Jennifer Walker, LCSW",
    description:
      "Free downloads, burnout guides, and crisis support resources for high-performing women navigating anxiety and burnout.",
    url: "https://anxietytherapyforwomen.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Resources />
      </main>
      <Footer />
    </>
  );
}
