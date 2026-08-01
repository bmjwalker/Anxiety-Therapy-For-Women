import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#F5EFE6" }}
    >

      {/* Content */}
      <div className="section-container w-full relative z-10 pt-24 pb-16">
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-center gap-10 md:gap-16">
          {/* Photo */}
          <div className="mx-auto shrink-0 relative w-40 sm:w-48 md:w-56 lg:w-64 aspect-square">
            {/* Decorative accent shape, peeking out from behind the photo */}
            <div
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-[88%] h-[88%] rounded-full"
              style={{ backgroundColor: "rgba(74,124,126,0.14)" }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-full overflow-hidden border-[3px]"
              style={{
                borderColor: "rgba(74,124,126,0.35)",
                boxShadow: "0 25px 55px -20px rgba(44,56,57,0.22)",
              }}
            >
              <Image
                src="/headshot.jpg"
                alt="Jennifer Walker, LCSW, smiling"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                style={{
                  objectPosition: "50% 28%",
                  transform: "scale(1.75)",
                  transformOrigin: "45% 75%",
                }}
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow removed per request */}

            {/* Positioning */}
            <p className="text-sm font-medium text-sage mb-5 tracking-wide">
              Anxiety and Burnout Recovery Specialist for High-Performing Women in Atlanta, GA
            </p>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 leading-[1.08]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#1F3D3A" }}
            >
              Helping High-Performing Women Stop Living in{" "}
              <span className="italic text-brand">Survival Mode</span>
            </h1>

            {/* Supporting line */}
            <p
              className="text-xl md:text-2xl font-light mb-5 italic"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#5A5A5A" }}
            >
              You deserve to thrive, not just survive.
            </p>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-dark/85 mb-10 leading-relaxed">
              Helping ambitious women in Georgia and Florida overcome burnout, anxiety,
              perfectionism, chronic stress, and overthinking so they can reclaim clarity,
              confidence, and balance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="btn-primary px-8 py-4 text-base shadow-md"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="https://w48bpx2y2ic.typeform.com/to/zBGT9y6e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#C4897B] text-base font-medium transition-colors duration-200"
                style={{ backgroundColor: "#FFFFFF", color: "#57686B" }}
              >
                Take the 2-Min Survival Role Quiz
              </a>
            </div>

            {/* Trust signal */}
            <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-3">
              {[
                "Licensed in Georgia & Florida",
                "Telehealth Available",
                "Free 15-Minute Consultation",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-sm text-dark">
                  <Check size={13} style={{ color: "#4A7C7E" }} strokeWidth={2.5} />
                  {item}
                </span>
              ))}
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
