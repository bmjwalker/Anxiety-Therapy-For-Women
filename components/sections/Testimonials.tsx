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
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Client Experiences
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-light text-dark mb-14"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          What Women{" "}
          <span className="italic text-brand">Often Tell Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, credit }) => (
            <div
              key={quote}
              className="relative p-8 rounded-2xl bg-cream border border-cream-dark flex flex-col"
            >
              <span
                className="absolute top-5 left-7 text-5xl text-dusty/40 leading-none select-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="text-lg font-light text-dark/80 leading-relaxed pt-6 mb-6 flex-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {quote}
              </p>
              <p className="text-xs text-sage tracking-wide">— {credit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
