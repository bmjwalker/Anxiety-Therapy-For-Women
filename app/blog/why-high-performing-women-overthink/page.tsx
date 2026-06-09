import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPost4() {
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
              Personal Growth
            </span>
            <h1
              className="text-4xl md:text-5xl font-normal text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Why High-Performing Women Overthink (and How to Break the Cycle)
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                August 24, 2025
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                5 min read
              </div>
              <span>By Jennifer Walker, LCSW</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="bg-white py-12 md:py-16">
          <div className="section-container max-w-3xl">
            <div className="flex flex-col gap-5 text-base text-dark/75 leading-relaxed">

              <p className="italic text-dark/75">To all my overthinkers...</p>
              <p>
                Have you ever found yourself replaying the same meeting or conversation long after it&rsquo;s over? For many high-performing women, overthinking is both a secret strength and a silent struggle.
              </p>
              <p>
                It&rsquo;s a strength because your ability to anticipate, analyze, and prepare has fueled your success. But when that same gift runs unchecked, it turns into rumination, self-doubt, and exhaustion. The American Psychiatric Association notes that &ldquo;rumination is strongly tied to heightened stress and anxiety&rdquo; — which means that unchecked overthinking can wear down both mental health and resilience.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Why Do High-Achievers Overthink?
              </h2>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  { label: "Perfectionism", detail: '"I need to get it right every time."' },
                  { label: "Over-identification with success", detail: '"If I don\'t excel, I am failing."' },
                  { label: "People-pleasing", detail: '"What will they think of me?"' },
                  { label: "Always-on mind", detail: "your brain is trained for performance, not peace." },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    <span><span className="font-medium text-dark">{label}:</span> {detail}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                The Cycle of Rumination
              </h2>
              <ol className="flex flex-col gap-3 list-none">
                {[
                  { n: "1", text: "A trigger happens (a comment, a mistake, or even silence)." },
                  { n: "2", text: 'Thoughts loop: "Was that wrong? Did I sound stupid?"' },
                  { n: "3", text: "Anxiety builds: tension, restlessness, sleeplessness." },
                  { n: "4", text: "You get stuck in analysis paralysis." },
                ].map(({ n, text }) => (
                  <li key={n} className="flex gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand/10 text-brand text-sm font-medium flex items-center justify-center mt-0.5">{n}</span>
                    <span className="pt-0.5">{text}</span>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                A Shift: Compassionate Curiosity
              </h2>
              <p>Instead of judging yourself, try asking:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "Is this thought helpful — or just noise?",
                  "What's the worst that could realistically happen here?",
                  "What part of me is talking — my Authentic Self, or my Conditioned Self?",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Research shows that mindfulness practices can interrupt this cycle by teaching the brain to observe thoughts without attaching to them, freeing up mental space for clarity and calm.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Tool: The Worry Window
              </h2>
              <p>
                Set aside 15 minutes a day for writing down worries. Outside of that window, when rumination shows up, tell yourself: &ldquo;I&rsquo;ll save this for my worry time.&rdquo;
              </p>
              <p>
                This boundary is rooted in cognitive behavioral therapy (CBT), which uses structured techniques like thought-monitoring, cognitive reframing, and worry scheduling to reduce overthinking and anxiety.
              </p>

              <div className="p-6 rounded-2xl bg-cream border border-cream-dark mt-2">
                <p className="font-medium text-dark mb-2">Reflection Prompt</p>
                <p className="italic">
                  When does overthinking show up most often in your life, and what might it be trying to protect you from?
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
                Overthinking doesn&rsquo;t have to run your life.
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
