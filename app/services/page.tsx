import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TherapyServices from "@/components/sections/TherapyServices";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Therapy Services | Anxiety & Burnout Therapy for Women in Georgia",
  },
  description:
    "Individual telehealth therapy for anxiety, burnout, perfectionism, and life transitions. Serving high-performing women in Georgia and Florida.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/services" },
  openGraph: {
    title: "Therapy Services | Anxiety & Burnout Therapy for Women in Georgia",
    description:
      "Individual telehealth therapy for anxiety, burnout, perfectionism, and life transitions. Serving high-performing women in Georgia and Florida.",
    url: "https://anxietytherapyforwomen.com/services",
    type: "website",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <TherapyServices pageHeading="Individual Therapy for Anxiety & Burnout" />
        <Programs />
      </main>
      <Footer />
    </>
  );
}
