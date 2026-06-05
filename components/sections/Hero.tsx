import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay — heavier on the left where text lives, fades right so image breathes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(242,241,235,1) 0%, rgba(242,241,235,1) 52%, rgba(242,241,235,0.65) 68%, rgba(242,241,235,0.10) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-container w-full relative z-10 pt-24 pb-16">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow removed per request */}

          {/* Positioning */}
          <p className="text-sm font-medium text-sage mb-5 tracking-wide">
            Anxiety and Burnout Recovery Specialist for High-Performing Women in Atlanta, GA
          </p>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-dark mb-4 leading-[1.08]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Helping High-Performing<br />
            Women Stop Living in{" "}
            <span className="italic text-brand">Survival Mode</span>
          </h1>

          {/* Supporting line */}
          <p
            className="text-xl md:text-2xl font-light text-dark/60 mb-5 italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            You deserve to thrive, not just survive.
          </p>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
            Helping ambitious women in Georgia and Florida overcome burnout, anxiety,
            perfectionism, chronic stress, and overthinking so they can reclaim clarity,
            confidence, and balance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              className="btn-primary px-8 py-4 text-base shadow-md"
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="https://w48bpx2y2ic.typeform.com/to/G8yK8j8J"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-brand text-brand text-base font-medium hover:bg-brand-muted transition-colors duration-200"
            >
              Take the 2-Min Burnout Quiz
            </a>
          </div>

          {/* Trust signal */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-dark/50">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-dusty" />
              Licensed in Georgia &amp; Florida
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-dusty" />
              Telehealth Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-dusty" />
              Free 15-Minute Consultation
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 32C672 36 768 36 864 30C960 24 1056 12 1152 8C1248 4 1344 8 1392 10L1440 12V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
