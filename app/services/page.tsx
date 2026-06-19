import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TherapyServices from "@/components/sections/TherapyServices";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Therapy Services for Women in Atlanta, GA | Jennifer Walker, LCSW",
  },
  description:
    "Telehealth therapy services for high-performing women in Georgia and Florida — burnout recovery, anxiety therapy, career clarity, life transitions, and more.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/services" },
  openGraph: {
    title: "Therapy Services for Women in Atlanta, GA | Jennifer Walker, LCSW",
    description:
      "Telehealth therapy for high-performing women in Georgia and Florida — burnout recovery, anxiety, career clarity, and life transitions.",
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
