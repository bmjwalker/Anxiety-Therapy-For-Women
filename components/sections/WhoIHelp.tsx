import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const signs = [
  "You look successful on the outside but feel exhausted inside",
  "You struggle to relax without guilt",
  "Your mind never seems to shut off",
  "You overthink every decision",
  "You feel responsible for everyone else's needs",
  "You've lost yourself while taking care of everything else",
];

// Featured signs for the premium left column
const featuredSigns = signs.slice(0, 4);

export default function WhoIHelp() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-16 items-start">
          {/* Left — Content (55%) */}
          <div className="flex flex-col">
            <h2
              className="text-4xl md:text-5xl font-normal text-dark mb-4 leading-tight max-w-md"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Are You Tired of Being{" "}
              <span className="italic text-brand">the Strong One?</span>
            </h2>

            <p
              className="text-lg font-light text-dark/80 italic mb-6 leading-snug"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              You don&rsquo;t have to keep living in survival mode.{" "}
              <span className="text-brand">There is another way.</span>
            </p>

            <p className="text-base md:text-lg text-dark/80 mb-8 leading-relaxed">
              As a high-performing woman, you&rsquo;ve mastered the art of holding everything
              together. But behind that competence is a level of exhaustion that others rarely see.
            </p>

            {/* Featured Signs */}
            <div className="space-y-5 mb-10">
              {featuredSigns.map((sign) => (
                <div
                  key={sign}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-dusty shrink-0 mt-0.5" />
                  <p className="text-sm text-dark/85 leading-snug">{sign}</p>
                </div>
              ))}
            </div>

            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-7 py-3.5 text-sm self-start"
            >
              Yes, I&rsquo;m Ready for Change
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — Premium Image (40%) */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="relative rounded-3xl overflow-hidden h-full shadow-xl">
              <Image
                src="/images/1.jpg"
                alt="Diverse group of women together in a supportive setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-dusty/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
