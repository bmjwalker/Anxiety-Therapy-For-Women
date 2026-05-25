import { CheckCircle2, ArrowRight } from "lucide-react";

const signs = [
  "You look successful on the outside but feel exhausted inside",
  "You struggle to relax without guilt",
  "Your mind never seems to shut off",
  "You overthink every decision",
  "You feel responsible for everyone else's needs",
  "You've lost yourself while taking care of everything else",
];

export default function WhoIHelp() {
  return (
    <section className="bg-cream section-padding">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            You Are Not Alone
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-light text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Are You Tired of Being{" "}
              <span className="italic text-brand">the Strong One?</span>
            </h2>
            <p className="text-base md:text-lg text-dark/70 mb-8 leading-relaxed">
              As a high-performing woman, you&rsquo;ve mastered the art of holding everything
              together. But behind that competence is a level of exhaustion that others rarely see.
            </p>

            <div className="p-6 rounded-2xl bg-white border-l-4 border-brand mb-8">
              <p
                className="text-xl font-light text-dark leading-snug"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                You don&rsquo;t have to keep living in survival mode.{" "}
                <span className="italic text-brand">There is another way.</span>
              </p>
            </div>

            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors duration-200"
            >
              Yes, I&rsquo;m Ready for Change
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {signs.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-cream-dark"
              >
                <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                <p className="text-base text-dark/80 leading-snug">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
