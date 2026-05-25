import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPost2() {
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
              Anxiety &amp; Burnout
            </span>
            <h1
              className="text-4xl md:text-5xl font-light text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              High-Functioning Burnout in Women: Why You&rsquo;re Exhausted Even If You&rsquo;re Still Showing Up
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/50">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                April 25, 2026
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                6 min read
              </div>
              <span>By Jennifer Walker, LCSW</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="bg-white py-12 md:py-16">
          <div className="section-container max-w-3xl">
            <div className="flex flex-col gap-5 text-base text-dark/75 leading-relaxed">

              <p>
                If you&rsquo;ve been feeling mentally and emotionally exhausted — but you&rsquo;re still getting things done, meeting responsibilities, and keeping everything going — you&rsquo;re not alone.
              </p>
              <p>
                And it can be confusing, because nothing looks &ldquo;wrong&rdquo; from the outside. This is a form of burnout that often goes unnoticed. From the outside, everything may look fine. Internally, it feels very different.
              </p>

              <h2 className="text-2xl md:text-3xl font-light text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                What High-Functioning Burnout Actually Looks Like
              </h2>
              <p>
                Burnout is often misunderstood. It&rsquo;s not always obvious. It doesn&rsquo;t always look like falling apart.
              </p>
              <p>For many high-performing women, burnout looks like:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "continuing to show up and meet expectations",
                  "managing work, home, and others' needs",
                  "staying productive while feeling depleted",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>At the same time, you may notice:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "constant mental fatigue",
                  "difficulty slowing down",
                  "feeling like you're pushing through something that isn't sustainable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="italic text-dark/60">
                Burnout doesn&rsquo;t always look like collapse. Sometimes it looks like continuing — at a cost.
              </p>

              <h2 className="text-2xl md:text-3xl font-light text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Why Burnout Happens (Even When You&rsquo;re &ldquo;Doing Well&rdquo;)
              </h2>
              <p>Burnout is not just about working too much. It&rsquo;s often connected to patterns like:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "taking on high levels of responsibility",
                  "internal pressure to perform",
                  "difficulty setting or maintaining boundaries",
                  "prioritizing others' needs over your own",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Over time, these patterns create a cycle where energy is consistently depleted without enough space to recover. Research on burnout consistently shows that chronic demands combined with limited recovery are a major contributor to emotional exhaustion.
              </p>
              <p>
                And for many women, these patterns are so familiar they don&rsquo;t immediately stand out — they just feel like &ldquo;how things are.&rdquo;
              </p>

              <h2 className="text-2xl md:text-3xl font-light text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Signs You May Be Experiencing Burnout
              </h2>
              <p>You might notice things like:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "feeling mentally and emotionally exhausted",
                  "increased irritability or detachment",
                  "difficulty making decisions",
                  "feeling like you don't have space to think clearly",
                  "continuing to push through despite knowing something needs to change",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Burnout often shows up as emotional exhaustion and reduced capacity, even when you&rsquo;re still functioning. And often, there&rsquo;s a quiet awareness underneath it all: something about this isn&rsquo;t sustainable.
              </p>

              <h2 className="text-2xl md:text-3xl font-light text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Why Pushing Through Stops Working
              </h2>
              <p>
                If you&rsquo;re used to being high-performing, your default response may be to work harder, be more disciplined, push through. That approach likely worked for you for a long time.
              </p>
              <p>But burnout doesn&rsquo;t respond to more effort. In many cases, pushing harder actually deepens the exhaustion.</p>
              <p>
                What&rsquo;s needed instead is not more effort — but space to step back and understand what&rsquo;s actually happening.
              </p>

              <h2 className="text-2xl md:text-3xl font-light text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                What Actually Helps
              </h2>
              <p>You don&rsquo;t need to change everything. What tends to help is:</p>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "understanding what's been draining your energy",
                  "identifying patterns that are keeping burnout in place",
                  "creating space to think more clearly",
                  "choosing one small, realistic shift",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Even small changes, when applied consistently, can begin to shift your experience. It doesn&rsquo;t have to be dramatic to be meaningful.
              </p>

              <p className="italic text-dark/60 border-l-2 border-brand/30 pl-4">
                Burnout doesn&rsquo;t always look like everything falling apart. Sometimes it looks like continuing — while feeling increasingly depleted. If something in this resonated, it may be worth paying attention to.
              </p>
            </div>

            {/* Author bio */}
            <div className="mt-14 pt-8 border-t border-cream-dark">
              <p className="font-medium text-dark mb-1">Jennifer Walker, LCSW</p>
              <p className="text-sm text-dark/60 leading-relaxed">
                Licensed clinical social worker in Georgia &amp; Florida, specializing in anxiety, burnout, and career transitions for high-performing women. Founder of Anxiety Therapy for Women.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 rounded-2xl bg-sage-muted border border-sage-light text-center">
              <h3
                className="text-2xl md:text-3xl font-light text-dark mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ready to step back and understand what&rsquo;s happening?
              </h3>
              <p className="text-sm text-dark/60 mb-6 max-w-md mx-auto">
                Book a free 15-minute consultation and let&rsquo;s figure out what support looks like for you.
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
