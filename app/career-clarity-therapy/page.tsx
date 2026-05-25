import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const feelingThis = [
  "You've hit every milestone — and somehow still feel empty",
  "Your job title defines you more than you'd like to admit",
  "Sunday dread starts creeping in by Saturday afternoon",
  "You work hard, but can't shake the feeling you're in the wrong place",
  "You've lost track of what you actually want — separate from what you're supposed to want",
  "You're exhausted, but leaving feels terrifying",
];

const workOnTogether = [
  "Untangle your self-worth from your job title and performance",
  "Identify what you actually want — not what looks impressive on paper",
  "Understand the role burnout is playing in your career dissatisfaction",
  "Process fear around change, failure, and what others will think",
  "Explore your values, identity, and what truly drives you",
  "Build a roadmap forward — whether that means staying, pivoting, or starting over",
];

export default function CareerClarityTherapyPage() {
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
                Career{" "}
                <span className="italic text-brand">Clarity Therapy</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                For High-Performing Women in Georgia &amp; Florida
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                You&rsquo;ve built a successful career. So why does it feel so wrong? Career
                Clarity Therapy helps you separate who you are from what you do — and find a
                path forward that actually fits.
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

        {/* Does This Sound Familiar */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Does any of this{" "}
                <span className="italic text-brand">sound familiar?</span>
              </h2>
              <p className="text-base text-dark/70 mb-10 leading-relaxed">
                For high-achieving women, career dissatisfaction rarely announces itself clearly.
                It hides behind busyness, ambition, and the belief that you should just be
                grateful. But underneath the hustle, something feels off.
              </p>
              <div className="flex flex-col gap-4">
                {feelingThis.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-dusty shrink-0 mt-0.5" />
                    <p className="text-base text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Real Work */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                This is deeper than{" "}
                <span className="italic text-brand">career counseling</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Career Clarity Therapy isn&rsquo;t about updating your resume or making a pros
                and cons list. It&rsquo;s about understanding why you feel stuck, and what
                beliefs — about success, worthiness, and identity — have been quietly running
                the show.
              </p>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Many high-performing women discover that their career burnout is deeply tied to
                perfectionism, people-pleasing, and a sense of self that was built entirely
                around achievement. Therapy helps you untangle that — and rebuild something
                more sustainable.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                Whether you want to stay in your career and find meaning again, pivot to
                something new, or simply stop dreading Monday mornings — we&rsquo;ll work
                through it together.
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
              You are more than{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>your job title.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              You deserve to do work that fits who you actually are — not just who you&rsquo;ve
              always been. Let&rsquo;s figure that out together.
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
