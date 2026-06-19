import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "The Real Reason You're Exhausted: It's Not the Chores | Jennifer Walker, LCSW",
  },
  description:
    "You can split the chores evenly and still be bone-tired. The real culprit is the mental load — the invisible labor of noticing, tracking, and anticipating that never turns off.",
  alternates: {
    canonical:
      "https://anxietytherapyforwomen.com/blog/the-real-reason-youre-exhausted-its-not-the-chores",
  },
  openGraph: {
    title:
      "The Real Reason You're Exhausted: It's Not the Chores | Jennifer Walker, LCSW",
    description:
      "You can split the chores evenly and still be bone-tired. The real culprit is the mental load — the invisible labor of noticing that never turns off.",
    url: "https://anxietytherapyforwomen.com/blog/the-real-reason-youre-exhausted-its-not-the-chores",
    type: "article",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW" },
    ],
  },
};

export default function BlogPost5() {
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
              The Real Reason You&rsquo;re Exhausted: It&rsquo;s Not the Chores
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                June 19, 2026
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
                You&rsquo;re not imagining it. The exhaustion is real, and it goes deeper than the dishes in
                the sink or the laundry that sat in the dryer for three days. You might actually have a husband
                who cooks dinner twice a week. Kids who unload the dishwasher when asked. By some objective
                measure, the chores aren&rsquo;t fully on you.
              </p>
              <p>
                And yet you are bone-tired in a way that doesn&rsquo;t add up if you&rsquo;re just counting
                tasks.
              </p>
              <p>Here&rsquo;s what&rsquo;s actually happening.</p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                There Are Two Kinds of Labor in a Household
              </h2>
              <p>
                The first kind is <em>doing</em>. Cooking dinner, driving to soccer practice, scheduling the
                dentist appointment. These are visible, finite tasks — and you can, in theory, hand them to
                someone else.
              </p>
              <p>
                The second kind is <em>noticing</em>. Realizing the dentist appointment needs to be scheduled
                in the first place. Remembering that the school picture day form has a deadline. Noticing the
                pantry is low on the thing the kids eat every morning, and that if you don&rsquo;t add it to
                the list now, it won&rsquo;t be there when they need it. Tracking the emotional temperature
                of everyone in the house and quietly adjusting the evening to avoid a meltdown.
              </p>
              <p>
                Noticing is what makes doing possible. And in most households — especially households with
                women who are good at solving problems and keeping things running — noticing falls almost
                entirely on one person.
              </p>
              <p>
                The crucial difference between these two kinds of labor: doing has an off switch. When dinner
                is served, that task is done. Noticing doesn&rsquo;t work that way. It runs continuously, in
                the background, even when you&rsquo;re sitting on the couch, even when you&rsquo;re trying
                to sleep, even when you&rsquo;re in a meeting that deserves your full attention. Some part of
                your mind is always doing a quiet sweep — scanning for what&rsquo;s coming, what&rsquo;s
                been forgotten, what&rsquo;s about to fall apart.
              </p>
              <p>That is the exhaustion. Not the chores. The always-on.</p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Why Your Family Doesn&rsquo;t Just Notice on Their Own
              </h2>
              <p>
                This is the part that feels most maddening — and also the part most worth understanding.
              </p>
              <p>
                Your husband and your kids aren&rsquo;t noticing because you are noticing first. Every time
                you catch something before it becomes a problem — every time you add the item to the list,
                send the reminder, handle the thing before anyone else realizes it needed handling — you
                remove the only condition under which someone else would have ever learned to catch it
                themselves.
              </p>
              <p>
                This isn&rsquo;t a character flaw in them. It&rsquo;s how learning works. If the thing is
                always handled before anyone else experiences the consequence of it not being handled,
                there&rsquo;s no feedback loop. They live in a frictionless environment because you create
                one. And a frictionless environment produces exactly this: people who don&rsquo;t notice,
                because they&rsquo;ve never had to.
              </p>
              <p>
                This is worth sitting with, because it changes the framing. The question isn&rsquo;t
                &ldquo;why don&rsquo;t they just step up&rdquo; — it&rsquo;s &ldquo;what would they need
                to experience in order to develop the habit of noticing?&rdquo;
              </p>
              <p>
                The answer is: the consequence. The thing not being there. The form not getting turned in.
                Dinner being late because no one caught that it needed to start earlier. These aren&rsquo;t
                signs of a household falling apart. They&rsquo;re the necessary experience of people learning
                to pay attention.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What Changing This Actually Looks Like
              </h2>
              <p>It doesn&rsquo;t look clean, at least not at first.</p>
              <p>
                Changing this requires stepping back — and then staying back when you notice the thing that
                needs doing, and sitting with the discomfort of not doing it. Waiting to see if someone else
                catches it. Sometimes they will. Often, at first, they won&rsquo;t. Things will get done
                late, badly, or not at all for a while.
              </p>
              <p>
                That period is uncomfortable and easy to misread as failure. It isn&rsquo;t. It&rsquo;s the
                normal, expected middle of a system in the process of changing. If you step back in to smooth
                it over, the system resets to where it started.
              </p>
              <p>
                Staying back doesn&rsquo;t mean being passive or resentful. It means deciding in advance
                which things you&rsquo;re genuinely willing to let go sideways, and tolerating the outcome
                without rescuing. That&rsquo;s harder than it sounds when you&rsquo;ve spent years wiring
                your nervous system to treat the undone thing as an emergency.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The Real Marker of Progress
              </h2>
              <p>
                People often expect the goal to be a tidier home or a more participatory family. Those may
                eventually follow. But they&rsquo;re not the first sign that something is actually shifting.
              </p>
              <p>
                The first sign is this: you&rsquo;re able to sit in an imperfect house without your body
                reading it as a threat. The dishes are in the sink, and you feel mildly annoyed rather than
                wound tight. The form is a day late, and you tolerate the discomfort without immediately
                moving to fix it.
              </p>
              <p>
                That internal shift — your nervous system standing down — is what makes everything else
                possible. It&rsquo;s not about the chores.
              </p>

              <p className="mt-2 text-dark/60 italic">
                If you recognize this pattern in your own life, I&rsquo;d be glad to talk. You can{" "}
                <a
                  href="/about"
                  className="text-brand underline underline-offset-2 hover:text-brand-dark transition-colors not-italic"
                >
                  reach out through the contact page
                </a>{" "}
                or{" "}
                <a
                  href="https://jennifer-walker7285.clientsecure.me/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline underline-offset-2 hover:text-brand-dark transition-colors not-italic"
                >
                  schedule a free 15-minute consultation
                </a>
                .
              </p>
            </div>

            {/* Author bio */}
            <div className="mt-14 pt-8 border-t border-cream-dark flex items-start gap-5">
              <div>
                <p className="font-medium text-dark mb-1">Jennifer Walker, LCSW</p>
                <p className="text-sm text-dark/75 leading-relaxed">
                  Licensed clinical social worker in Georgia &amp; Florida, specializing in anxiety, burnout,
                  and career transitions for high-performing women. Founder of Anxiety Therapy for Women.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 rounded-2xl bg-sage-muted border border-sage-light text-center">
              <h3
                className="text-2xl md:text-3xl font-normal text-dark mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ready to put some of it down?
              </h3>
              <p className="text-sm text-dark/75 mb-6 max-w-md mx-auto">
                Book a free 15-minute consultation and let&rsquo;s talk about what it would look like to
                carry less.
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
