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

const approaches = [
  {
    name: "Dialectical Behavior Therapy (DBT)",
    description: "Skills for managing intense emotions, improving relationships, and staying grounded in the present moment.",
  },
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    description: "Identifying and reshaping thought patterns that fuel anxiety, perfectionism, and self-doubt.",
  },
  {
    name: "Solution-Focused Brief Therapy",
    description: "Building on your existing strengths to create forward momentum toward clear, achievable goals.",
  },
  {
    name: "Trauma-Informed Care",
    description: "Recognizing how past experiences shape present patterns — approached with compassion, not pathology.",
  },
  {
    name: "Mindfulness-Based Approaches",
    description: "Developing present-moment awareness to interrupt anxiety spirals, overthinking, and emotional reactivity.",
  },
  {
    name: "Motivational Interviewing",
    description: "Exploring ambivalence and building your own internal motivation for meaningful, lasting change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <About />
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-normal text-dark mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Approaches We Use In Therapy
            </h2>
            <p className="text-dark/75 mb-8 max-w-2xl">
              Evidence-based methods combined with culturally responsive, compassionate practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {approaches.map((approach) => (
                <div key={approach.name} className="flex flex-col gap-1 pl-5 border-l-2 border-l-brand">
                  <p
                    className="text-lg font-semibold text-dark"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {approach.name}
                  </p>
                  <p className="text-sm text-dark/75 leading-relaxed">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
