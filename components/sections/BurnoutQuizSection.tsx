import { ArrowRight, Sparkles } from "lucide-react";

export default function BurnoutQuizSection() {
  return (
    <section className="section-padding bg-brand">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Sparkles size={16} className="text-dusty" style={{ color: "#CAAF99" }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#CAAF99" }}>
              Free Assessment
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-normal text-cream mb-4 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Not Sure If You&rsquo;re{" "}
            <span className="italic" style={{ color: "#CAAF99" }}>Burned Out?</span>
          </h2>

          <p className="text-base md:text-lg mb-3 leading-relaxed" style={{ color: "rgba(242,241,235,0.93)" }}>
            Take the 2-minute Burnout Recovery Assessment to identify your current burnout stage
            and discover your next steps toward healing.
          </p>
          <p className="text-sm mb-10" style={{ color: "rgba(242,241,235,0.78)" }}>
            Free &bull; Confidential &bull; Results in under 2 minutes
          </p>

          <a
            href="https://w48bpx2y2ic.typeform.com/to/G8yK8j8J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
            style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
          >
            Take the Burnout Quiz
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
