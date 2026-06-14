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
    <section className="py-16 md:py-24" style={{ backgroundColor: "#2D5F61" }}>
      <div className="max-w-[750px] mx-auto px-4 sm:px-6">
        <h2
          className="text-4xl md:text-5xl font-normal mb-4 leading-tight"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FFFFFF" }}
        >
          Are You Tired of Being{" "}
          <span className="italic" style={{ color: "#C4897B" }}>the Strong One?</span>
        </h2>

        <p
          className="text-lg font-light italic mb-6 leading-snug"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "rgba(255,255,255,0.70)" }}
        >
          You don&rsquo;t have to keep living in survival mode. There is another way.
        </p>

        <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed">
          As a high-performing woman, you&rsquo;ve mastered the art of holding everything
          together. But behind that competence is a level of exhaustion that others rarely see.
        </p>

        <div className="flex flex-col gap-4 mb-10">
          {signs.map((sign) => (
            <div key={sign} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#C4897B" }} />
              <p className="text-sm text-white leading-snug">{sign}</p>
            </div>
          ))}
        </div>

        <a
          href="https://jennifer-walker7285.clientsecure.me/sign-in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-white/90"
          style={{ backgroundColor: "#FFFFFF", color: "#2D5F61" }}
        >
          Yes, I&rsquo;m Ready for Change
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
