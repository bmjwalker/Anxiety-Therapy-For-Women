import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPost3() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream pt-24 pb-12">
          <div className="section-container max-w-3xl">
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-brand font-medium mb-8 hover:text-brand-dark transition-colors"
            >
              ← Back to Blog
            </a>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist mb-5">
              Resilience &amp; Mental Health
            </span>
            <h1
              className="text-4xl md:text-5xl font-normal text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              ADHD High Performers — Why You&rsquo;re Not Meant to Be &ldquo;Disciplined&rdquo; (And Why That&rsquo;s Your Superpower)
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                November 9, 2025
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                8 min read
              </div>
              <span>By Jennifer Walker, LCSW</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="bg-white py-12 md:py-16">
          <div className="section-container max-w-3xl">
            <div className="flex flex-col gap-5 text-base text-dark/75 leading-relaxed">

              <h2 className="text-2xl md:text-3xl font-light text-dark mt-2 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                The Truth About ADHD High Performers
              </h2>
              <p>
                You can&rsquo;t have ADHD and be a &ldquo;high performer&rdquo; the way society defines it — calm, consistent, disciplined, and always in control.
              </p>
              <p>
                Because the ADHD brain isn&rsquo;t built for balance. It&rsquo;s built for sprints.
              </p>
              <p>
                You&rsquo;re a 0-to-100 type of person. You can hyperfocus for 10 hours on something you love or procrastinate for 10 days on something you hate. There&rsquo;s no middle ground.
              </p>
              <p>
                Most ADHD high performers try to fix this by forcing consistency — building systems, routines, and dopamine hacks. But that&rsquo;s fighting your nature instead of leveraging it.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Your Brain Runs on Dopamine, Not Discipline
              </h2>
              <p>
                People with ADHD don&rsquo;t get motivated by &ldquo;shoulds.&rdquo; You move when something feels meaningful, urgent, or alive.
              </p>
              <p>
                This is called an interest-based nervous system — and it&rsquo;s your superpower.
              </p>
              <p>
                The closer you get to something that truly matters, the more your brain panics. You overthink, procrastinate, and shame yourself — not because you&rsquo;re lazy, but because your nervous system is protecting you from the pain of being &ldquo;too much.&rdquo;
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                The Secret Isn&rsquo;t Consistency — It&rsquo;s Safety
              </h2>
              <p>
                People who look disciplined aren&rsquo;t better than you. They&rsquo;re just more regulated.
              </p>
              <p>The goal isn&rsquo;t to copy their consistency. It&rsquo;s to build safety around your intensity.</p>
              <p>That means:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "working in short, focused sprints",
                  "choosing goals that ignite passion",
                  "creating small wins your brain can trust",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="italic text-dark/75">
                ADHD high performers don&rsquo;t need to be disciplined. They need to be directed.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Your Inconsistency Is a Power Pattern
              </h2>
              <p>
                When you stop treating your rhythm as a flaw, everything changes. Procrastination becomes a signal. Hyperfocus becomes a weapon.
              </p>
              <p>
                You don&rsquo;t become normal. You become dangerous — in the best possible way.
              </p>

              <div className="p-6 rounded-2xl bg-cream border border-cream-dark mt-4">
                <p className="font-medium text-dark mb-2">Final Thought</p>
                <p>
                  You are not broken. You are wired for impact. Once you stop chasing balance and start embracing your brilliance, you become unstoppable.
                </p>
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-14 pt-8 border-t border-cream-dark">
              <p className="font-medium text-dark mb-1">Jennifer Walker, LCSW</p>
              <p className="text-sm text-dark/75 leading-relaxed">
                Licensed clinical social worker in Georgia &amp; Florida, specializing in anxiety, burnout, and career transitions for high-performing women. Founder of Anxiety Therapy for Women.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 rounded-2xl bg-sage-muted border border-sage-light text-center">
              <h3
                className="text-2xl md:text-3xl font-normal text-dark mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ready to stop fighting your nature?
              </h3>
              <p className="text-sm text-dark/75 mb-6 max-w-md mx-auto">
                Schedule a consultation and let&rsquo;s create a personalized plan for building confidence, clarity, and calm.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors"
              >
                Book a Free Consultation
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
