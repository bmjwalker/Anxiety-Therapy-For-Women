import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="relative bg-brand section-padding overflow-hidden">
      {/* Top wave — mirrors the hero divider */}
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8C96 16 192 32 288 36C384 40 480 32 576 28C672 24 768 24 864 30C960 36 1056 48 1152 52C1248 56 1344 52 1392 50L1440 48V0H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-xs tracking-widest uppercase text-white/60 font-medium">
              Begin Your Journey
            </span>
            <div className="h-px w-12 bg-white/40" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-normal text-white mb-3 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            What Would You Like Your Life to Look Like{" "}
            <span className="italic text-white/90">One Year From Now?</span>
          </h2>
          <div className="h-1 w-12 rounded-full mx-auto mb-6" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

          <p className="text-base md:text-lg text-white/80 mb-5 leading-relaxed">
            Imagine making decisions from a place of clarity rather than exhaustion. Imagine
            feeling calm, confident, and present instead of constantly overwhelmed.
          </p>
          <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed">
            Together, we can help you move from survival mode to a life that feels more
            balanced, meaningful, and sustainable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand text-base font-medium shadow-md hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
            >
              Book Your Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="https://w48bpx2y2ic.typeform.com/to/zBGT9y6e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white text-base font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Find Your Survival Role First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
