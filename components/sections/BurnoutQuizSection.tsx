import { ArrowRight, Sparkles } from "lucide-react";

export default function BurnoutQuizSection() {
  return (
    <section className="pt-16 pb-14 md:pb-20 bg-brand">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Sparkles size={16} className="text-dusty" style={{ color: "#CAAF99" }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#CAAF99" }}>
              Free Assessment
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-normal mb-3 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FFFFFF" }}
          >
            Which Survival Role Is{" "}
            <span className="italic" style={{ color: "#C4897B" }}>Keeping You Stuck?</span>
          </h2>
          <div className="h-1 w-12 rounded-full mx-auto mb-4" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

          <p className="text-base md:text-lg mb-3 leading-relaxed" style={{ color: "rgba(242,241,235,0.93)" }}>
            Take the 2-minute Survival Role Quiz to find out how you&rsquo;ve learned to keep
            functioning — and what your recovery actually needs to look like.
          </p>
          <p className="text-sm mb-10" style={{ color: "rgba(242,241,235,0.78)" }}>
            Free &bull; Confidential &bull; Results in under 2 minutes
          </p>

          <a
            href="https://w48bpx2y2ic.typeform.com/to/zBGT9y6e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
            style={{ backgroundColor: "#FFFFFF", color: "#2D5F61" }}
          >
            Find My Survival Role
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
