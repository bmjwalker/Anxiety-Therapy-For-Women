import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="bg-sage-muted section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-dusty" />
            <span className="text-xs tracking-widest uppercase text-dusty font-medium">
              Begin Your Journey
            </span>
            <div className="h-px w-12 bg-dusty" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            What Would You Like Your Life to Look Like{" "}
            <span className="italic text-brand">One Year From Now?</span>
          </h2>

          <p className="text-base md:text-lg text-dark/70 mb-5 leading-relaxed">
            Imagine making decisions from a place of clarity rather than exhaustion. Imagine
            feeling calm, confident, and present instead of constantly overwhelmed.
          </p>
          <p className="text-base md:text-lg text-dark/70 mb-10 leading-relaxed">
            Together, we can help you move from survival mode to a life that feels more
            balanced, meaningful, and sustainable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
            >
              Book Your Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="https://w48bpx2y2ic.typeform.com/to/G8yK8j8J"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-brand text-brand text-base font-medium hover:bg-brand-muted transition-colors duration-200"
            >
              Take the Burnout Quiz First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
