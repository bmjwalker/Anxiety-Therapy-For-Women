import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I finally stopped feeling like I was drowning.",
    credit: "Client, Georgia",
  },
  {
    quote: "For the first time, I felt truly understood.",
    credit: "Client, Florida",
  },
  {
    quote: "I learned how to make decisions without anxiety running the show.",
    credit: "Client, Georgia",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-mist">
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 md:right-10 text-white/25"
        size={220}
        strokeWidth={1}
        fill="currentColor"
      />
      <div className="section-container relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Client Experiences
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-normal text-dark mb-3"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          What Women{" "}
          <span className="italic" style={{ color: "#4A7C7E" }}>Often Tell Me</span>
        </h2>
        <div className="h-1 w-12 rounded-full mb-8" style={{ backgroundColor: "#C4897B" }} aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map(({ quote, credit }) => (
            <div
              key={quote}
              className="relative p-4 md:p-6 rounded-2xl bg-white border-l-4 shadow-sm flex flex-col"
              style={{ borderLeftColor: "#B18C72", borderColor: "#D9CFC3" }}
            >
              <span
                className="absolute top-5 left-7 text-5xl leading-none select-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "rgba(177,140,114,0.35)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="text-lg font-light leading-relaxed pt-6 mb-6 flex-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "rgba(44,56,57,0.92)" }}
              >
                {quote}
              </p>
              <p className="text-xs tracking-wide" style={{ color: "#6B7E80" }}>— {credit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
