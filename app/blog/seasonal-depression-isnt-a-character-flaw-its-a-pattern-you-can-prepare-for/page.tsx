import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Seasonal Depression Isn't a Character Flaw. It's a Pattern You Can Prepare For. | Jennifer Walker, LCSW",
  },
  description:
    "Seasonal depression follows a predictable pattern. Learn why starting therapy before the fall time change beats waiting until the holidays hit.",
  alternates: {
    canonical:
      "https://anxietytherapyforwomen.com/blog/seasonal-depression-isnt-a-character-flaw-its-a-pattern-you-can-prepare-for",
  },
  openGraph: {
    title:
      "Seasonal Depression Isn't a Character Flaw. It's a Pattern You Can Prepare For. | Jennifer Walker, LCSW",
    description:
      "Seasonal depression follows a predictable pattern. Learn why starting therapy before the fall time change beats waiting until the holidays hit.",
    url: "https://anxietytherapyforwomen.com/blog/seasonal-depression-isnt-a-character-flaw-its-a-pattern-you-can-prepare-for",
    type: "article",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW" },
    ],
  },
};

export default function BlogPost7() {
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
              className="text-4xl md:text-5xl font-normal text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Seasonal Depression Isn&rsquo;t a Character Flaw. It&rsquo;s a Pattern You Can
              Prepare For.
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                October 5, 2026
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

              <p>
                The days get shorter. The clocks change. The calendar fills up. And somewhere
                between the first &ldquo;fall back&rdquo; and New Year&rsquo;s, a lot of
                high-achieving women quietly stop feeling like themselves.
              </p>
              <p>
                If that&rsquo;s familiar, you&rsquo;re not imagining it, and you&rsquo;re not
                alone in it. Research on seasonal affective disorder shows women are diagnosed
                at roughly four times the rate of men, with the highest rates showing up in
                adults in their twenties through early thirties — the exact years many of you
                are building careers, leading teams, and holding everything together for
                everyone else. Among people already living with depression, a meaningful share
                follow a seasonal pattern: worse in fall and winter, better in spring.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The Clock Change Is Its Own Trigger, Separate From &ldquo;the Holidays&rdquo;
              </h2>
              <p>
                Most people assume the low feeling that shows up in November is just holiday
                stress. It&rsquo;s worth separating that out, because the time change itself has
                an independent effect. A large Danish study analyzing more than 185,000
                depression diagnoses found that depressive episodes rose 8% in the first month
                after the fall transition from daylight saving time back to standard time — and
                researchers were confident it was the clock shift itself, not just the shorter
                days or worse weather, driving that increase.
              </p>
              <p>
                Here&rsquo;s why: when the clocks fall back, an hour of daylight effectively
                moves from the evening to early morning — a window when most people are
                commuting, in the shower, or still asleep, and not benefiting from it. You lose
                that hour exactly when you&rsquo;d use it: after work, when your body&rsquo;s
                already worn down from the day. That shift disrupts the circadian rhythm that
                regulates serotonin and melatonin, which is part of why so many people describe
                a distinct mood dip within days of the time change, not gradually over the
                season.
              </p>
              <p>
                In other words: if you&rsquo;ve noticed you feel worse right around when the
                clocks change, that&rsquo;s not a coincidence, and it&rsquo;s not just
                &ldquo;the holidays coming.&rdquo;
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Then the Holidays Land on Top of It
              </h2>
              <p>
                National polling consistently finds that the large majority of adults report
                more stress during the holiday season than at any other time of year, and
                financial pressure — gifts, travel, hosting — tends to top the list of reasons
                why. For someone already adjusting to less light and a disrupted circadian
                rhythm, that&rsquo;s not a minor inconvenience. It&rsquo;s a second stressor
                landing directly on top of the first.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Here&rsquo;s the Pattern I See Most Often in My Practice
              </h2>
              <p>
                A woman who has always been capable, always been the one others lean on, starts
                noticing she&rsquo;s more tired than usual right around the time change. She
                tells herself it&rsquo;s the season. Busy time of year. She&rsquo;ll rest more in
                January. By December, she&rsquo;s not just tired — she&rsquo;s dreading things
                she used to enjoy, snapping at people she loves, running on caffeine and
                willpower. By the time she reaches out for help, she&rsquo;s not managing a
                seasonal dip anymore. She&rsquo;s managing a full depressive episode, on top of
                holiday obligations, on top of end-of-year work deadlines.
              </p>
              <p>
                None of that was inevitable. It&rsquo;s just what happens when support gets
                added after the crisis instead of before it.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Why Proactive, Not Reactive, Actually Matters Here
              </h2>
              <p>
                Seasonal depression has something most mental health challenges don&rsquo;t:
                predictability. If your mood reliably dips starting around the fall time change,
                that&rsquo;s not a mystery to solve each year — it&rsquo;s a pattern to plan
                around. Starting therapy in September or early October, before the clocks shift
                and before symptoms take hold, means you and a therapist can build coping
                strategies and catch early warning signs while you still have the bandwidth to
                use them. Starting in December, after weeks of poor sleep and low motivation,
                means doing that same work from a depleted place.
              </p>
              <p>
                This is the difference between a fire drill and a fire. One is uncomfortable.
                The other is a crisis.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What Proactive Support Can Look Like
              </h2>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "Book before the dip, not during it. If fall and winter are hard for you, treat September and early October the way you'd treat flu shot season — routine prevention, not emergency response.",
                  "Mark the time change on your calendar as a mental health checkpoint, not just a clock adjustment.",
                  "Name the pattern out loud, to yourself and to a therapist. \"I tend to struggle every year around this time\" is useful clinical information, not an admission of weakness.",
                  "Separate \"I should be able to handle this\" from what's actually happening in your body. This has a physiological basis. It is not a discipline problem.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The Bigger Picture
              </h2>
              <p>
                High-achieving women are often the last to ask for help, because asking can feel
                like falling behind. But therapy before things get bad isn&rsquo;t falling
                behind. It&rsquo;s the same instinct that makes you plan ahead at work, applied
                to yourself for once.
              </p>
              <p>
                You don&rsquo;t have to wait for the holidays to knock you flat to justify
                getting support. You&rsquo;re allowed to get help while you&rsquo;re still
                standing.
              </p>
              <p>You deserve to thrive, not just survive.</p>
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
                You don&rsquo;t have to wait until you&rsquo;re depleted.
              </h3>
              <p className="text-sm text-dark/75 mb-6 max-w-md mx-auto">
                If this sounds like your pattern, this is the moment to reach out — before the
                clocks change, not after.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors"
              >
                Schedule a Free Consultation
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
