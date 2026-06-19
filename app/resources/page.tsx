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
