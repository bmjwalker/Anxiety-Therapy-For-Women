"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I finally stopped feeling like I was drowning.",
    credit: "Client, Georgia",
  },
  {
    quote:
      "My time working with Jennifer has been powerful to say the least. Since day one, I have always felt that she champions individual empowerment. I see that in my sessions with her as we work through everything and anything — she is always right there not just guiding me but providing me with the tools to face challenges head on and step into every situation feeling powerful. Her skills, patience, and dedication are clear and I cannot recommend working with her enough. I can confidently say that without our time together, I would not be able to step into my most authentic self.",
    credit: "Ash S.",
  },
  {
    quote: "For the first time, I felt truly understood.",
    credit: "Client, Florida",
  },
  {
    quote:
      "Jennifer really helped me grow in my personal relationships and career! Thanks for helping me learn how to manage my anxiety...",
    credit: "Tonya",
  },
  {
    quote: "I learned how to make decisions without anxiety running the show.",
    credit: "Client, Georgia",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        let closest = 0;
        let closestDistance = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const distance = Math.abs(card.getBoundingClientRect().left - containerRect.left);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(testimonials.length - 1, index));
    const container = containerRef.current;
    const card = cardRefs.current[clamped];
    if (container && card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft = container.scrollLeft + (cardRect.left - containerRect.left);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setActiveIndex(clamped);
  };

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

        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          className="flex items-start gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map(({ quote, credit }, i) => (
            <div
              key={quote}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
              className="relative p-4 md:p-6 rounded-2xl bg-white border-l-4 shadow-sm flex flex-col shrink-0 snap-start w-full md:w-[calc(50%-0.75rem)]"
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

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "#D9CFC3", color: "#6B7E80" }}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map(({ quote }, i) => (
              <button
                key={quote}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
                aria-current={activeIndex === i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6" : "w-2"
                }`}
                style={{ backgroundColor: activeIndex === i ? "#C4897B" : "#D9CFC3" }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "#D9CFC3", color: "#6B7E80" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
