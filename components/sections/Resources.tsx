import { ExternalLink, Phone } from "lucide-react";
import BurnoutGuideContent from "@/components/sections/BurnoutGuide";

export default function Resources({ onResourcesPage = false }: { onResourcesPage?: boolean }) {
  return (
    <section id="resources" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C4897B" }}>
            Resources
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-normal text-dark mb-3"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Free tools &amp; resources to{" "}
          <span className="italic text-brand">support your journey</span>
        </h2>
        <div className="h-1 w-12 rounded-full mb-4" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

        <p className="text-base text-dark/75 mb-10 max-w-xl">
          {onResourcesPage ? (
            "Trusted, free resources for understanding anxiety, knowing your rights at work, and finding support when you need it."
          ) : (
            <>
              For a full library of mental health resources, recommended apps, and self-care tools,
              visit the{" "}
              <a href="/resources" className="text-brand underline underline-offset-2 hover:text-brand-dark transition-colors">
                Resources page
              </a>
              .
            </>
          )}
        </p>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Card 1 — Free Download (on /resources it moves to the bottom of the page instead) */}
          {!onResourcesPage && (
          <div
            className="p-8 rounded-2xl flex flex-col gap-4"
            style={{ backgroundColor: "#4A7C7E" }}
          >
            <BurnoutGuideContent />
          </div>
          )}

          {/* Card 2 — Crisis Support */}
          <div
            className="p-8 rounded-2xl flex flex-col gap-4"
            style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
              <Phone size={22} style={{ color: "#4A7C7E" }} />
            </div>
            <div>
              <h3
                className="text-2xl font-medium text-dark mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Need Immediate Support?
              </h3>
              <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                If you or someone you know is in crisis, help is available 24/7.
              </p>
              <a
                href="tel:988"
                className="text-3xl font-medium transition-colors hover:text-brand-dark"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#4A7C7E" }}
              >
                Call or Text 988
              </a>
              <p className="text-xs text-dark/60 mt-2 leading-relaxed">
                Suicide &amp; Crisis Lifeline — free, confidential, available 24/7
              </p>
            </div>
          </div>

          {/* Card 3 — Georgia Crisis & Access Line (resources page only) */}
          {onResourcesPage && (
            <div
              className="p-8 rounded-2xl flex flex-col gap-4"
              style={{ backgroundColor: "#FAF7F4", border: "1px solid #E8E2DB" }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,124,126,0.10)" }}>
                <Phone size={22} style={{ color: "#4A7C7E" }} />
              </div>
              <div>
                <h3
                  className="text-2xl font-medium text-dark mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Georgia Crisis &amp; Access Line (GCAL)
                </h3>
                <p className="text-sm text-dark/75 mb-5 leading-relaxed">
                  Free, confidential crisis support for Georgia residents, available 24/7. Call{" "}
                  <a
                    href="tel:18007154225"
                    className="font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                    style={{ color: "#4A7C7E" }}
                  >
                    1-800-715-4225
                  </a>
                  .
                </p>
                <a
                  href="https://dbhdd.georgia.gov/be-dbhdd/988-georgia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 transition-colors hover:text-brand-dark"
                  style={{ color: "#4A7C7E" }}
                >
                  Visit Georgia DBHDD
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
