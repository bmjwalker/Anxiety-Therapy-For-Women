import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TherapyServices from "@/components/sections/TherapyServices";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: "Therapy Services | Anxiety, Burnout & Life Transitions",
  description:
    "Explore therapy services for high-performing women in Georgia and Florida — burnout recovery, anxiety therapy, career clarity, life transitions, and more via telehealth.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/services" },
  openGraph: {
    title: "Therapy Services | Jennifer Walker, LCSW",
    description:
      "Burnout recovery, anxiety therapy, career clarity, and life transitions support for high-performing women. Telehealth in Georgia & Florida.",
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
