import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/booking";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BadgeCheck, CalendarCheck, CheckCircle2, Video } from "lucide-react";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Life Transitions Therapy for Women in Atlanta, GA",
  },
  description:
    "Online therapy for women in Atlanta and across Georgia at a crossroads in work, a relationship, or their sense of self. Free 15-minute consultation.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/life-transitions-therapy" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Life Transitions Therapy for Women in Atlanta, GA",
    description:
      "Online therapy for women in Atlanta and across Georgia at a crossroads in work, a relationship, or their sense of self. Free 15-minute consultation.",
    url: "https://anxietytherapyforwomen.com/life-transitions-therapy",
    type: "website",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia" },
    ],
  },
};

const crossroads: { title: string; body: ReactNode }[] = [
  {
    title: "At work",
    body: (
      <>
        You&rsquo;re exhausted in a way sleep doesn&rsquo;t fix. You keep asking yourself whether
        to push through, step back, or walk away from a job that&rsquo;s wearing you down. If this
        is where you are, my{" "}
        <a
          href="/career-clarity-therapy"
          className="font-medium text-brand underline underline-offset-2 hover:text-brand-dark transition-colors"
        >
          Career Clarity Therapy
        </a>{" "}
        page goes deeper.
      </>
    ),
  },
  {
    title: "In a relationship",
    body: "You keep wondering if it’s really that bad, or if you’re overreacting. Some days you’re sure you should stay, and some days you’re sure you should go. The second-guessing itself has become exhausting.",
  },
  {
    title: "Within yourself",
    body: "You’ve become who everyone needed you to be. Somewhere along the way, you lost track of who you actually are, and who you want to be in this season of your life.",
  },
];

const workOnTogether = [
  "Untangle the fear, guilt, and pressure that keep you stuck going back and forth",
  "Separate what you want from what others expect of you",
  "Calm the anxiety that comes with not knowing yet",
  "Make a decision you can trust, at a pace that feels right",
  "Find your footing after the change, without forcing yourself to be okay too soon",
  "Reconnect with your values, your needs, and your direction",
];

const onlineHighlights = [
  { icon: Video, label: "Secure video sessions" },
  { icon: BadgeCheck, label: "Licensed in Georgia & Florida" },
  { icon: CalendarCheck, label: "Free 15-minute consultation" },
];

const faqs = [
  {
    question: "What counts as a life transition?",
    answer:
      "Any change that reshapes your daily life or your sense of who you are. For the women I work with, that’s often a crossroads at work, in a relationship, or in their own identity. Some transitions are chosen and some arrive without asking. Both can leave you feeling unsteady.",
  },
  {
    question: "Do I need to have already made a decision?",
    answer:
      "No. Many women come to me while they’re still going back and forth. Therapy can help you think clearly before you decide, not only after.",
  },
  {
    question: "Why does a change I wanted still feel this hard?",
    answer:
      "Your nervous system responds to uncertainty, whether or not the change was your idea. A new role or a new chapter also means letting go of an old identity, and that is a form of grief. Feeling anxious or flat after a change you chose does not mean you chose wrong.",
  },
  {
    question: "Do I need to be in crisis to start?",
    answer:
      "No. Many women reach out because they are functioning well on the outside and feel unsettled underneath. Therapy during a transition gives you room to think clearly before the pressure builds.",
  },
  {
    question: "Do you offer in-person sessions in Atlanta?",
    answer:
      "All sessions are online by secure video. I work with women throughout metro Atlanta and across Georgia, so you can meet from wherever you have privacy.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 15-minute consultation. We will talk about what is changing in your life and whether working together is a good fit. There is no commitment.",
  },
];

export default function LifeTransitionsTherapyPage() {
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
                Life Transitions{" "}
                <span className="italic text-brand">Therapy for Women</span>
              </h1>
              <p className="text-lg md:text-xl text-dusty font-medium mb-6 tracking-wide">
                For high-performing women in Georgia &amp; Florida who are standing at a crossroads
              </p>
              <p className="text-base md:text-lg text-dark/70 mb-10 max-w-2xl leading-relaxed">
                You can feel that something has to change. You just don&rsquo;t know yet what, or
                how, or whether you&rsquo;re ready. That in-between place is hard, and it&rsquo;s
                where I do some of my most meaningful work.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-cream text-base font-medium hover:bg-brand-dark transition-colors duration-200 shadow-md"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Crossroads Section */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-10 text-center"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The crossroads{" "}
                <span className="italic text-brand">I see most often</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {crossroads.map(({ title, body }) => (
                  <div key={title} className="p-6 rounded-2xl bg-cream border border-cream-dark">
                    <h3
                      className="text-xl font-medium text-dark mb-3"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-dark/70 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why the In-Between Is Hard */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Why the in-between{" "}
                <span className="italic text-brand">feels so hard</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Transitions tend to move in three phases: the stretch where something stops
                feeling right, the change itself, and the time after, when you&rsquo;re figuring
                out who you are on the other side. Many women I work with are stuck in that first
                phase, and it&rsquo;s often the most anxious one. Your mind keeps weighing options,
                and your body stays on alert, because uncertainty registers as a threat.
              </p>
              <p className="text-base text-dark/70 mb-8 leading-relaxed">
                Some crossroads are external, like a job or a relationship. Others are internal, a
                quiet sense that you&rsquo;ve drifted from yourself. Both are real, and both
                deserve attention.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-cream-dark">
                <p
                  className="text-xl md:text-2xl italic text-dark/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  If you&rsquo;re in that place right now, it may help to ask yourself: What am I
                  afraid will happen if I decide? What am I afraid will happen if I don&rsquo;t?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Therapy */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                You don&rsquo;t have to figure this out{" "}
                <span className="italic text-brand">alone</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                High-achieving women are often the ones everyone else leans on, which leaves
                little room to be uncertain yourself. You may be very good at looking like you
                have it handled.
              </p>
              <p className="text-base text-dark/70 leading-relaxed">
                Therapy gives you a place to set that down for a while. A confidential space where
                you can be honest about how hard this is, think out loud without judgment, and make
                a decision that&rsquo;s actually yours.
              </p>
            </div>
          </div>
        </section>

        {/* What We Work On */}
        <section className="bg-cream section-padding">
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

        {/* Online in Atlanta & Georgia */}
        <section className="bg-sage-muted section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <span className="block text-xs tracking-widest uppercase font-medium text-dusty mb-4">
                Online by secure video
              </span>
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-6 text-balance"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Life transitions therapy for women{" "}
                <span className="italic text-brand">in Atlanta and across Georgia</span>
              </h2>
              <p className="text-base text-dark/70 mb-6 leading-relaxed">
                Sessions are held by secure video, so you can meet from home, your office, or
                anywhere private. If you live in Georgia or Florida, we can work together.
              </p>
              <p className="text-base text-dark/70 mb-8 leading-relaxed">
                That includes Atlanta and the communities around it, such as Alpharetta, Roswell,
                Sandy Springs, Decatur, Marietta, and Peachtree City. There is no commute and no
                waiting room. For a woman whose calendar is already full, that often decides
                whether therapy happens at all.
              </p>
              <div className="h-px w-full mb-8" style={{ backgroundColor: "#CAAF99" }} aria-hidden="true" />
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {onlineHighlights.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm font-medium text-dark/80">
                    <Icon size={18} className="text-brand shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-10"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Questions women ask about{" "}
                <span className="italic text-brand">life transitions therapy</span>
              </h2>
              <div>
                {faqs.map(({ question, answer }, i) => (
                  <div
                    key={question}
                    className="py-6"
                    style={i > 0 ? { borderTop: "1px solid #CAAF99" } : undefined}
                  >
                    <h3
                      className="text-xl md:text-2xl font-medium text-dark mb-3"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {question}
                    </h3>
                    <p className="text-base text-dark/70 leading-relaxed">{answer}</p>
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
              The other side of this{" "}
              <span className="italic" style={{ color: "#CAAF99" }}>exists.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(242,241,235,0.75)" }}>
              You don&rsquo;t need to have it all figured out to begin. Let&rsquo;s start with
              where you are.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors duration-200"
              style={{ backgroundColor: "#CAAF99", color: "#57686B" }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-cream section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-light text-dark mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Related <span className="italic text-brand">Services</span>
              </h2>
              <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: "#CAAF99" }} aria-hidden="true" />
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <a href="/burnout-anxiety-therapy" className="text-sm font-medium text-brand underline underline-offset-2 hover:text-brand-dark transition-colors">
                  Burnout Recovery &amp; Anxiety Therapy
                </a>
                <a href="/career-clarity-therapy" className="text-sm font-medium text-brand underline underline-offset-2 hover:text-brand-dark transition-colors">
                  Career Clarity Therapy
                </a>
                <a href="/high-performing-women-therapy" className="text-sm font-medium text-brand underline underline-offset-2 hover:text-brand-dark transition-colors">
                  High-Performing Women Therapy
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
