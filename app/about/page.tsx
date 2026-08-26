import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: {
    absolute: "About Jennifer Walker, LCSW | Anxiety & Burnout Therapist for Women",
  },
  description:
    "Meet Jennifer Walker, LCSW — a licensed therapist specializing in anxiety, burnout, and life transitions for high-performing women in Georgia and Florida.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/about" },
  openGraph: {
    title: "About Jennifer Walker, LCSW | Anxiety & Burnout Therapist for Women",
    description:
      "Meet Jennifer Walker, LCSW — a licensed therapist specializing in anxiety, burnout, and life transitions for high-performing women in Georgia and Florida.",
    url: "https://anxietytherapyforwomen.com/about",
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
        <section className="bg-cream pt-28 pb-8">
          <div className="section-container">
            <h1
              className="text-5xl md:text-6xl font-light text-dark leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              About{" "}
              <span className="italic text-brand">Jennifer Walker, LCSW</span>
            </h1>
          </div>
        </section>
        <About />
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-dusty" />
              <span className="text-xs tracking-widest uppercase text-dusty font-medium">
                Our Approach
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-normal text-dark mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Approaches We Use{" "}
              <span className="italic text-brand">In Therapy</span>
            </h2>
            <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />
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

        <section className="section-padding" style={{ backgroundColor: "#F2F1EB" }}>
          <div className="section-container">
            <h2
              className="text-3xl md:text-4xl font-normal mb-10"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#57686B" }}
            >
              Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h3
                  className="text-xl md:text-2xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#57686B" }}
                >
                  Licenses &amp; Certifications
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-dark/80 text-sm leading-relaxed marker:text-[#57686B]">
                  <li>Georgia Licensed Clinical Social Worker, #CSW005769</li>
                  <li>Florida Telehealth Provider, #TPSW3544</li>
                  <li>School Social Work Educator Certificate, #873798</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#57686B" }}
                >
                  Specialized Training
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-dark/80 text-sm leading-relaxed marker:text-[#57686B]">
                  <li>Dialectical Behavior Therapy Certification (C-DBT)</li>
                  <li>Certified Anxiety Treatment Professional (CCATP)</li>
                  <li>Certified Clinical Trauma Professional (CCTP)</li>
                  <li>Solution-Focused Brief Therapy (SFBT)</li>
                  <li>Emotional Freedom Technique Practitioner 1 &amp; 2</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
