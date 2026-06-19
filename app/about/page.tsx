import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: {
    absolute: "About Jennifer Walker, LCSW | Atlanta Anxiety & Burnout Therapist",
  },
  description:
    "Jennifer Walker is a Licensed Clinical Social Worker with 20+ years helping high-performing women in Georgia and Florida recover from burnout and anxiety via telehealth.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/about" },
  openGraph: {
    title: "About Jennifer Walker, LCSW | Atlanta Anxiety & Burnout Therapist",
    description:
      "Jennifer Walker is a Licensed Clinical Social Worker with 20+ years helping high-performing women in Georgia and Florida recover from burnout and anxiety via telehealth.",
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
