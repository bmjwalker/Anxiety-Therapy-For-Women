import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Rates & Insurance | Anxiety Therapy for Women",
  },
  description:
    "Clear, upfront therapy pricing for Georgia and Florida clients, plus accepted insurance plans and SuperBill reimbursement info for out-of-network coverage.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/rates-insurance" },
  openGraph: {
    title: "Rates & Insurance | Anxiety Therapy for Women",
    description:
      "Clear, upfront therapy pricing for Georgia and Florida clients, plus accepted insurance plans and SuperBill reimbursement info for out-of-network coverage.",
    url: "https://anxietytherapyforwomen.com/rates-insurance",
  },
};

const paymentMethods = ["Credit Cards", "Health Savings Account (HSA)", "Flexible Spending Account (FSA)", "Insurance"];

const insuranceAccepted = [
  "Carelon Behavioral Health",
  "Quest Behavioral Health",
  "Aetna (Meritain, Nippon Life Benefits, Chapman Boone, and GEHA)",
  "Anthem Blue Cross and Blue Shield of Georgia",
  "Oxford (Optum)",
  "United Healthcare (Optum)",
  "Cigna",
];

const superbillIncludes = [
  "Date(s) of service",
  "Amount paid",
  "CPT codes (Intake: 90791, Individual Therapy: 90837)",
  "Diagnostic code",
];

const insuranceQuestions = [
  "If I submit a SuperBill, will I be reimbursed for therapy sessions?",
  "What percentage of the fee is reimbursable, and how long is the processing time?",
  "Do I need to meet an out-of-network deductible before reimbursement begins?",
];

const selfPayBenefits = [
  {
    name: "Greater Privacy",
    description: "Keep your mental health records confidential and off insurance files.",
  },
  {
    name: "More Therapist Options",
    description: "Select any therapist, including specialists outside your insurance network.",
  },
  {
    name: "Flexible Treatment Plans",
    description: "Customize the duration and frequency of your sessions without restrictions.",
  },
  {
    name: "Immediate Access",
    description: "Start therapy right away without waiting for insurance approvals.",
  },
  {
    name: "Uninterrupted Care",
    description: "Maintain consistent therapy even if your insurance changes.",
  },
];

export default function RatesInsurancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-6 tracking-widest uppercase">
                Rates &amp; Insurance
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Investing in{" "}
                <span className="italic text-brand">Your Care</span>
              </h1>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                Clear, straightforward pricing and insurance information so you can make the
                choice that&rsquo;s right for you.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Self-Pay Rates */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-10"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Self-Pay{" "}
                <span className="italic text-brand">Rates</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex flex-col gap-2 p-6 bg-white border-l-4 border-l-brand border border-cream-dark rounded-xl shadow-md">
                  <p className="text-sm text-dark/60">Individual Therapy Session (53 minutes)</p>
                  <p
                    className="text-3xl font-semibold text-dark"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    $175.00
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-6 bg-white border-l-4 border-l-brand border border-cream-dark rounded-xl shadow-md">
                  <p className="text-sm text-dark/60">First Visit / Intake (60 minutes)</p>
                  <p
                    className="text-3xl font-semibold text-dark"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    $225.00
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium text-dark/70 mb-3 tracking-wide uppercase">
                Methods of Payment Accepted
              </p>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method) => (
                  <span key={method} className="approach-pill">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Accepted — Mist Blue callout */}
        <section className="section-padding" style={{ backgroundColor: "#B8C6C7" }}>
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Insurance{" "}
                <span className="italic" style={{ color: "#57686B" }}>Accepted</span>
              </h2>
              <p className="text-sm text-dark/70 mb-8">Georgia residents only.</p>

              <div className="flex flex-col gap-3 mb-8">
                {insuranceAccepted.map((insurer) => (
                  <div key={insurer} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: "#57686B" }} />
                    <p className="text-base text-dark/85">{insurer}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://care.headway.co/providers/jennifer-walker-6#cost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sm font-medium hover:bg-cream transition-colors duration-200 shadow-md"
                style={{ color: "#57686B" }}
              >
                Get an instant price estimate
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Out-of-Network Insurance */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Out-of-Network{" "}
                <span className="italic text-brand">Insurance</span>
              </h2>
              <p className="text-base text-dark/70 mb-8 leading-relaxed">
                For Florida residents, and anyone whose insurance isn&rsquo;t listed above, you
                may still be able to use your out-of-network benefits through a{" "}
                <strong className="font-semibold text-dark">SuperBill</strong> — a detailed
                receipt you submit to your insurance company for possible reimbursement. A
                SuperBill includes:
              </p>

              <div className="flex flex-col gap-3 mb-10">
                {superbillIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm font-medium text-dark/70 mb-4 tracking-wide uppercase">
                Questions to Ask Your Insurance Company
              </p>
              <div className="flex flex-col gap-4">
                {insuranceQuestions.map((question, i) => (
                  <div key={question} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand/10 text-brand text-sm font-medium flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-base text-dark/80 pt-0.5">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Self-Pay */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-10"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Why Choose{" "}
                <span className="italic text-brand">Self-Pay</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:[grid-auto-rows:1fr]">
                {selfPayBenefits.map((benefit) => (
                  <div
                    key={benefit.name}
                    className="flex flex-col gap-2 p-4 md:p-6 bg-white border-l-4 border-l-brand rounded-xl shadow-md"
                  >
                    <p
                      className="text-xl font-semibold text-dark leading-snug"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {benefit.name}
                    </p>
                    <p className="text-sm text-dark/75 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-2xl md:text-3xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Cancellation Policy
              </h2>
              <p className="text-base text-dark/70 leading-relaxed">
                If you are unable to attend a session, please cancel at least 24 hours
                beforehand. Otherwise, you will be charged the full rate of the session.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding" style={{ backgroundColor: "#57686B" }}>
          <div className="section-container text-center max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-cream mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Have Questions About{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>Rates or Insurance?</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              Jennifer is happy to answer them during your free 15-minute consultation.
            </p>
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
