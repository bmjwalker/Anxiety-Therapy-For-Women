import { Download, Phone } from "lucide-react";

export default function Resources() {
  return (
    <section id="resources" className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C4897B" }}>
            Resources
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-normal text-dark mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Free tools &amp; resources to{" "}
          <span className="italic text-brand">support your journey</span>
        </h2>

        <p className="text-base text-dark/75 mb-10 max-w-xl">
          For a full library of mental health resources, recommended apps, and self-care tools,
          visit the{" "}
          <a href="/resources" className="text-brand underline underline-offset-2 hover:text-brand-dark transition-colors">
            Resources page
          </a>
          .
        </p>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 — Free Download */}
          <div
            className="p-8 rounded-2xl flex flex-col gap-4"
            style={{ backgroundColor: "#4A7C7E" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
              <Download size={22} className="text-white" />
            </div>
            <div>
              <h3
                className="text-2xl font-medium text-white mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Free Download
              </h3>
              <p className="text-base font-medium mb-3" style={{ color: "#C4897B" }}>
                Burnout Reflection Guide
              </p>
              <p className="text-sm text-white/85 mb-6 leading-relaxed">
                A guided workbook to help you identify burnout patterns, understand your triggers,
                and take your first steps toward recovery — at no cost.
              </p>
              <a
                href="https://fabulous-teacher-7023.kit.com/db3a6274d6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-white/90"
                style={{ backgroundColor: "#FFFFFF", color: "#4A7C7E" }}
              >
                <Download size={14} />
                Get Your Free Guide
              </a>
            </div>
          </div>

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
              <p className="text-xs text-dark/60 mt-2 tracking-wide uppercase">
                Suicide &amp; Crisis Lifeline
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
