import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/booking";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SITE_NAME } from "@/lib/site";

const IMAGE_DIR = "/images/blog/endurance-isnt-resilience";

export const metadata: Metadata = {
  title: {
    absolute:
      "Endurance Isn’t Resilience: Why High-Performing Women Burn Out Even When Support Exists | Jennifer Walker, LCSW",
  },
  description:
    "Most women have support at work but don’t use it. A therapist explains why high-performing women burn out while still engaged — and what endurance is costing you.",
  alternates: {
    canonical:
      "https://anxietytherapyforwomen.com/blog/endurance-isnt-resilience-why-high-performing-women-burn-out",
  },
  openGraph: {
    siteName: SITE_NAME,
    title:
      "Endurance Isn’t Resilience: Why High-Performing Women Burn Out Even When Support Exists | Jennifer Walker, LCSW",
    description:
      "Most women have support at work but don’t use it. A therapist explains why high-performing women burn out while still engaged — and what endurance is costing you.",
    url: "https://anxietytherapyforwomen.com/blog/endurance-isnt-resilience-why-high-performing-women-burn-out",
    type: "article",
    publishedTime: "2026-11-09",
    images: [
      {
        url: `${IMAGE_DIR}/resilience-vs-endurance.png`,
        width: 1800,
        height: 1125,
        alt: "Two columns comparing resilience, the capacity to recover, with endurance, the capacity to keep going without recovering.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${IMAGE_DIR}/resilience-vs-endurance.png`],
  },
};

const h2ClassName = "text-2xl md:text-3xl font-normal text-dark mt-6 mb-1";
const h3ClassName = "text-xl md:text-2xl font-normal text-dark mt-3";
const headingFont = { fontFamily: "var(--font-cormorant), Georgia, serif" };

function PostImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-4">
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1125}
        sizes="(min-width: 768px) 720px, 100vw"
        className="w-full h-auto rounded-2xl border border-cream-dark"
      />
    </figure>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sources = [
  {
    label: "Kara Connect survey via HR Magazine, Oct 2026",
    href: "https://www.hrmagazine.co.uk/content/news/employees-shun-workplace-mental-health-support",
  },
  {
    label: "NAMI/Ipsos Workplace Mental Health Poll, 2026",
    href: "https://www.ipsos.com/en-us/nami-workplace-mental-health-2026",
  },
  {
    label: "Gallup, “Women Show Stronger Employee Engagement Amid Higher Burnout,” Mar 2026",
    href: "https://www.gallup.com/workplace/702881/women-show-stronger-employee-engagement-amid-higher-burnout.aspx",
  },
  {
    label: "HR Brew on the Gallup findings, Mar 2026",
    href: "https://www.hr-brew.com/stories/2026/03/16/women-are-both-more-engaged-and-burned-out-at-work-than-men",
  },
  {
    label: "McKinsey & LeanIn Women in the Workplace 2025, summarized by Metaintro",
    href: "https://www.metaintro.com/blog/senior-women-burnout-2026-retention",
  },
];

export default function BlogPost9() {
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
              style={headingFont}
            >
              Endurance Isn’t Resilience: Why High-Performing Women Burn Out Even When Support Exists
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                November 9, 2026
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                7 min read
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
                Someone at work asks how you’re doing. You say “busy, but good.” Maybe you add a small laugh. Then you go back to your desk, answer the next email, and quietly calculate how many hours you’ll need tonight to get caught up.
              </p>
              <p>
                You know your company has an employee assistance program. You know your manager has said, more than once, that their door is open. You might even have a wellness stipend you haven’t touched. None of that is the problem. The problem is that using any of it feels like it would cost you something.
              </p>
              <p>
                Three pieces of recent research, read together, describe this pattern with uncomfortable clarity. They don’t describe women who are fragile, unmotivated, or bad at managing stress. They describe women who are deeply invested, highly capable, and carrying more than anyone can see. That’s worth understanding, because the usual advice aimed at this group tends to miss the point.
              </p>

              <h2 className={h2ClassName} style={headingFont}>
                Having support isn’t the same as feeling allowed to use it
              </h2>
              <p>
                In October 2026, Kara Connect surveyed 2,010 UK employees at large organizations. Ninety-one percent said they had access to mental health support through work. Only 37 percent said they would actually use it if they needed help. When asked what held them back, nearly a third worried it would affect their career or job security, 29 percent said they’d feel embarrassed to ask, and 23 percent said their problems didn’t seem serious enough.
              </p>
              <p>
                U.S. data points the same direction. In a NAMI/Ipsos poll from early 2026, employees were far more likely to have supported a struggling coworker (38 percent) than to have told their own manager that work was hurting their mental health (15 percent).
              </p>
              <PostImage
                src={`${IMAGE_DIR}/support-access-vs-use-stat.png`}
                alt="91% of UK employees have access to mental health support at work, but only 37% would use it. Top reasons: career worries (32%), embarrassment (29%), and feeling their problems aren't serious enough (23%)."
              />
              <p>
                If you recognize yourself in those numbers, here’s what I want you to know: this isn’t a personal failing. It’s a reasonable response to a real calculation.
              </p>
              <p>
                For many high-performing women, competence isn’t just something you do. Over time, it becomes part of how you understand your value and your safety. Being the reliable one has been rewarded — often for years, sometimes since childhood. So when your nervous system weighs “ask for help” against “push through,” it isn’t only weighing the stress. It’s weighing the risk of being seen differently. Less capable. Less steady. Less “fine.”
              </p>
              <p>
                That’s why access alone doesn’t solve much. A benefit can exist on paper while the culture around it makes using it feel like a liability. And women who have spent years being the person others lean on often have the hardest time becoming the person who leans.
              </p>

              <h2 className={h2ClassName} style={headingFont}>
                The swan problem: when looking calm becomes the job
              </h2>
              <p>
                There’s an image that comes up often in conversations about high-achieving women: the swan. Graceful and composed on the surface, paddling hard underneath where no one can see.
              </p>
              <p>
                The image lands because it’s accurate. Many of the women I work with have built a version of themselves that looks calm and capable — and part of why they built it is so that no one will ask how they’re really doing. The composure works. People trust it. And that’s exactly what makes the exhaustion underneath so easy to miss, including for the woman herself.
              </p>
              <p>
                The data on senior women reflects this. McKinsey and LeanIn’s Women in the Workplace 2025 report found that 60 percent of senior-level women reported frequent burnout, about ten points higher than their male peers.
              </p>
              <p>Here’s the distinction I keep coming back to in session:</p>
              <Bullets
                items={[
                  <>
                    <strong className="font-semibold text-dark">Resilience</strong> is the capacity to recover. You get knocked down, you have what you need to rest and repair, and you come back with something left in the tank.
                  </>,
                  <>
                    <strong className="font-semibold text-dark">Endurance</strong> is the capacity to keep going without recovering. You absorb the hit, you don’t stop, and you call it strength.
                  </>,
                ]}
              />
              <p>
                Both can look identical from the outside. But they feel very different from the inside, and they lead to very different places. A lot of what gets praised as resilience in high-performing women is really endurance that hasn’t been named yet. And endurance, unlike resilience, eventually runs out.
              </p>
              <PostImage
                src={`${IMAGE_DIR}/resilience-vs-endurance.png`}
                alt="Two columns comparing resilience, the capacity to recover, with endurance, the capacity to keep going without recovering. A lot of what gets praised as resilience is really endurance that hasn't been named yet."
              />
              <p>If this sounds familiar, this short piece might feel like a deep breath.</p>
              <div className="relative w-full aspect-video my-4 overflow-hidden rounded-2xl bg-cream-dark">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/hK-ikIPJIEU"
                  title="Looking Fine | The Quiet Truth About Burnout in High-Performing Women"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              <h2 className={h2ClassName} style={headingFont}>
                You’re not burned out because you care too much
              </h2>
              <p>
                This is the part of the research I find most important, because it pushes back on advice women hear constantly.
              </p>
              <p>
                Gallup’s workplace data, released in March 2026, found that U.S. women working full time report higher engagement than men — 34 percent compared to 28 percent. Women were also more likely to say they were extremely motivated to pursue career growth. And at the same time, 31 percent of women said they very often or always feel burned out at work, compared to 23 percent of men. That gap held for women in management, and burnout peaked among mothers and leaders.
              </p>
              <PostImage
                src={`${IMAGE_DIR}/gallup-engagement-burnout-chart.png`}
                alt="Bar chart: 34% of women vs. 28% of men are engaged at work, while 31% of women vs. 23% of men very often or always feel burned out (Gallup, 2026)."
              />
              <p>
                Gallup’s own researchers noted the tension: higher engagement usually comes with lower burnout. For women right now, the two are sitting side by side.
              </p>
              <p>
                That matters because the most common advice to a burned-out, ambitious woman is some version of “want it less.” Care less. Lower your standards. Stop being so driven. As if ambition were the illness.
              </p>
              <p>
                It isn’t. You can be fully invested in your work, genuinely care about doing it well, and still be running on empty — because the load is unsustainable, not because your motivation is misplaced. Burnout isn’t proof that you care too much. More often, it’s information about the conditions you’re working in and how long you’ve been compensating for them.
              </p>

              <h2 className={h2ClassName} style={headingFont}>
                What this means for you
              </h2>
              <p>
                Some of this is structural, and I won’t pretend you can fix a workplace culture by yourself. Organizations need to do more than offer benefits; they need to make it safe to use them. But there are still things within your reach, and none of them require you to stop caring about your work.
              </p>

              <h3 className={h3ClassName} style={headingFont}>
                Notice the “I’m fine” reflex
              </h3>
              <p>
                You don’t have to change your answer yet. Just notice when you give it, and what you’re feeling in that moment. Awareness comes before choice.
              </p>

              <h3 className={h3ClassName} style={headingFont}>
                Name what the endurance is costing you
              </h3>
              <p>
                Sleep, patience, the hobbies you stopped doing, the friends you haven’t called back. Endurance always has a price; it’s just usually paid somewhere other than work.
              </p>

              <h3 className={h3ClassName} style={headingFont}>
                Separate what’s yours from what’s the system’s
              </h3>
              <p>
                Some of the pressure comes from your own standards. Some of it comes from a workload or culture that would wear down anyone. Telling the two apart helps you stop treating every bit of exhaustion as a personal flaw to correct.
              </p>

              <h3 className={h3ClassName} style={headingFont}>
                Lower the stakes of getting support
              </h3>
              <p>
                If using your workplace benefit feels too exposed right now, start small and private. Look up exactly how it works, what’s confidential, and who would know you used it. Or reach for support outside of work entirely — a therapist, a trusted friend, one honest conversation. The goal isn’t to become someone who asks for help effortlessly. It’s to stop carrying everything alone by default.
              </p>

              <h2 className={h2ClassName} style={headingFont}>
                A few questions to sit with
              </h2>
              <Bullets
                items={[
                  "What would it actually cost you to tell someone the truth about how you’re doing this week? Is that cost real, or is it an old rule you’re still following?",
                  "If you stopped managing how things look to other people for one week, what would you need to change first?",
                  "If burnout isn’t a sign that you care too much, what do you think it might be telling you?",
                ]}
              />
              <p>
                You don’t need to become less capable or less ambitious to feel better. You may simply need to stop mistaking endurance for strength, and to let yourself recover the way you’ve always helped everyone else recover. If you’re ready to explore what that could look like, Anxiety Therapy for Women in Atlanta, GA works with high-performing women across Georgia who are tired of holding it all together on their own.
              </p>
              <p className="italic">You deserve to thrive, not just survive.</p>

              <h2 className={h2ClassName} style={headingFont}>
                Sources
              </h2>
              <ul className="flex flex-col gap-2 pl-1 text-sm">
                {sources.map((source) => (
                  <li key={source.href} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    <span>
                      {source.label} —{" "}
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand underline underline-offset-2 hover:text-brand-dark break-all"
                      >
                        {source.href}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author bio */}
            <div className="mt-14 pt-8 border-t border-cream-dark flex items-start gap-5">
              <div>
                <p className="font-medium text-dark mb-1">Jennifer Walker, LCSW</p>
                <p className="text-sm text-dark/75 leading-relaxed">
                  Licensed clinical social worker in Georgia &amp; Florida, specializing in anxiety, burnout, and career transitions for high-performing women. Founder of Anxiety Therapy for Women.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 rounded-2xl bg-sage-muted border border-sage-light text-center">
              <h3
                className="text-2xl md:text-3xl font-normal text-dark mb-3"
                style={headingFont}
              >
                Ready to stop running on endurance?
              </h3>
              <p className="text-sm text-dark/75 mb-6 max-w-md mx-auto">
                Book a free 15-minute consultation and let’s talk about what real recovery could look like for you.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
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
