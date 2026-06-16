import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Jennifer Walker, LCSW | Anxiety Therapist for Women",
  description:
    "Meet Jennifer Walker, LCSW — a licensed therapist with 20+ years of experience helping high-performing women in Georgia and Florida overcome burnout, anxiety, and life transitions.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/about" },
  openGraph: {
    title: "About Jennifer Walker, LCSW",
    description:
      "20+ years supporting high-performing women through burnout, anxiety, and life transitions. Licensed in Georgia & Florida. Telehealth.",
    url: "https://anxietytherapyforwomen.com/about",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Jennifer Walker, LCSW — Anxiety Therapist for Women",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <About />
      </main>
      <Footer />
    </>
  );
}
