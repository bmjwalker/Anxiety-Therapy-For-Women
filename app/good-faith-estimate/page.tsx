import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Good Faith Estimate Notice | Jennifer Walker, LCSW",
  },
  description:
    "Good Faith Estimate notice for uninsured and self-pay clients under the No Surprises Act, including your right to dispute a bill through the federal Patient-Provider Dispute Resolution Process.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/good-faith-estimate" },
  openGraph: {
    title: "Good Faith Estimate Notice | Jennifer Walker, LCSW",
    description:
      "Good Faith Estimate notice for uninsured and self-pay clients under the No Surprises Act.",
    url: "https://anxietytherapyforwomen.com/good-faith-estimate",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
  },
};

const disputeSteps = [
  "Contact the provider to discuss the charges.",
  "Request an updated bill that reflects the Good Faith Estimate.",
  "Ask to negotiate the bill.",
  "Ask whether financial assistance is available.",
  "Initiate the federal Patient-Provider Dispute Resolution Process.",
];

export default function GoodFaithEstimatePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="section-padding pt-24 pb-16" style={{ backgroundColor: "#F2F1EB" }}>
          <div className="section-container max-w-3xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-8 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#57686B" }}
            >
              Good Faith Estimate{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>
                Notice
              </span>
            </h1>

            <div
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "#57686B" }}
            >
              <p>
                Jennifer Walker, LCSW is committed to transparency regarding the cost of services
                and compliance with the No Surprises Act.
              </p>
              <p>
                Under the No Surprises Act, health care providers are required to provide
                uninsured and self-pay clients with a Good Faith Estimate of expected charges for
                health care services.
              </p>
              <p>
                The Good Faith Estimate shows the costs of items and services that are reasonably
                expected for your health care needs. The estimate is based on information known at
                the time it is created and does not include any unknown or unexpected costs that
                may arise during treatment. Actual charges may differ if your treatment needs
                change or if additional services become necessary.
              </p>
              <p>
                If you receive a bill that is at least $400 more than your Good Faith Estimate,
                you have the right to dispute the bill through the Patient-Provider Dispute
                Resolution Process established by the U.S. Department of Health and Human Services
                (HHS).
              </p>

              <h2
                className="text-2xl md:text-3xl font-light mt-4 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#57686B" }}
              >
                If you are billed more than your Good Faith Estimate, you may:
              </h2>

              <ul className="list-disc pl-5 flex flex-col gap-2" style={{ color: "#8D9778" }}>
                {disputeSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>

              <p>
                If you choose to use the dispute resolution process, you must start the process
                within 120 calendar days of receiving the original bill.
              </p>
              <p>
                For the most current information about your rights under the No Surprises Act,
                including dispute resolution procedures and any applicable fees, visit{" "}
                <a
                  href="https://www.cms.gov/nosurprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: "#CAAF99" }}
                >
                  www.cms.gov/nosurprises
                </a>{" "}
                or call{" "}
                <a
                  href="tel:18009853059"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: "#CAAF99" }}
                >
                  1-800-985-3059
                </a>
                .
              </p>
              <p>
                Please keep a copy of your Good Faith Estimate for your records. You may need it
                if you are billed a higher amount than expected.
              </p>
              <p>
                This Good Faith Estimate is not a contract and does not require you to obtain
                services from this provider. Actual treatment recommendations, services provided,
                and associated charges may differ based on your individual needs and clinical
                circumstances.
              </p>
            </div>

            <p className="text-xs mt-12 pt-6 border-t" style={{ color: "#8D9778", borderColor: "#8D9778" }}>
              © 2026 JK Walker, LLC.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
