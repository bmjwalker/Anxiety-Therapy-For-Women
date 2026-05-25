import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const experiences = [
  "Being the first in your family to achieve a certain level of success — and carrying the weight of that",
  "Feeling pressure to represent your entire community, culture, or race",
  "Code-switching between professional spaces and your home culture",
  "Internalizing the message that you have to work twice as hard to get half as far",
  "Struggling to ask for help because you're supposed to be the strong one",
  "Feeling caught between two worlds — never quite enough in either",
];

const workOnTogether = [
  "Explore how race, culture, and identity shape your experience of stress and burnout",
  "Process the weight of being 'the first,' 'the only,' or 'the strong one'",
  "Heal from cultural perfectionism and internalized expectations",
  "Build an authentic sense of self that honors your full story",
  "Set boundaries within family and cultural contexts — with compassion",
  "Find your voice and reclaim your own definition of success",
];

export default function MulticulturalIdentityTherapyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-6 tracking-widest uppercase">
                Therapy Service
              </span>
              <h1
                className="text-5xl md:text-6xl font-light text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Multicultural &amp;{" "}
                <span className="italic text-brand">Identity Therapy</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                For High-Performing Women in Georgia &amp; Florida
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                You contain multitudes. This is a space to explore all of them. Multicultural
                &amp; Identity Therapy is a culturally responsive space where you don&rsquo;t
                have to explain yourself, translate your experience, or minimize your story.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* The Invisible Labor */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The invisible labor{" "}
                <span className="italic text-brand">no one talks about</span>
              </h2>
              <p className="text-base text-dark/70 mb-10 leading-relaxed">
                Navigating the world as a woman of color, a first-generation professional, or
                someone straddling multiple cultural identities comes with its own kind of
                invisible labor. You may be managing external success and internal exhaustion
                simultaneously — with few spaces where it&rsquo;s safe to say so.
              </p>
              <div className="flex flex-col gap-4">
                {experiences.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Culturally Responsive */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                A space where you don&rsquo;t have to{" "}
                <span className="italic text-brand">explain yourself</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Jennifer Walker brings both professional expertise and lived experience to
                her work with multicultural clients. As a Black therapist who understands
                the complexity of navigating multiple identities, she creates a space where
                your full story is welcome — not just the parts that fit neatly into a
                clinical framework.
              </p>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                This isn&rsquo;t colorblind therapy. It&rsquo;s therapy that acknowledges
                your whole self — the cultural expectations you carry, the systemic pressures
                you face, and the unique strengths you&rsquo;ve developed in navigating it all.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                You deserve to be seen, heard, and fully understood — exactly as you are.
              </p>
            </div>
          </div>
        </section>

        {/* What We Work On */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-10"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What we work on{" "}
                <span className="italic text-brand">together</span>
              </h2>
              <div className="flex flex-col gap-4">
                {workOnTogether.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ backgroundColor: "#57686B" }}>
          <div className="section-container text-center max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-cream mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Your whole self{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>deserves space.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              You&rsquo;ve spent so long making room for everyone else. Let&rsquo;s make
              some room for you.
            </p>
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
