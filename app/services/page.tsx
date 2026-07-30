import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TherapyServices from "@/components/sections/TherapyServices";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Therapy Services for Anxiety & Burnout | Anxiety Therapy",
  },
  description:
    "Individual therapy for high-achieving women dealing with anxiety, burnout, and major life transitions. Find the right fit for where you are.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/services" },
  openGraph: {
    title: "Therapy Services for Anxiety & Burnout | Anxiety Therapy",
    description:
      "Individual therapy for high-achieving women dealing with anxiety, burnout, and major life transitions. Find the right fit for where you are.",
    url: "https://anxietytherapyforwomen.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <TherapyServices />
        <Programs />
      </main>
      <Footer />
    </>
  );
}
