import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "The Benefits You Didn't Know You Were Allowed to Use | Jennifer Walker, LCSW",
  },
  description:
    "You likely have access to FMLA, disability leave, and paid benefits that cover anxiety and burnout, not just physical illness. Here's what most women don't know they can use.",
  alternates: {
    canonical:
      "https://anxietytherapyforwomen.com/blog/the-benefits-youre-not-using",
  },
  openGraph: {
    title:
      "The Benefits You Didn't Know You Were Allowed to Use | Jennifer Walker, LCSW",
    description:
      "You likely have access to FMLA, disability leave, and paid benefits that cover anxiety and burnout, not just physical illness. Here's what most women don't know they can use.",
    url: "https://anxietytherapyforwomen.com/blog/the-benefits-youre-not-using",
    type: "article",
    images: [
      { url: "/headshot.jpg", width: 800, height: 1000, alt: "Jennifer Walker, LCSW" },
    ],
  },
};

export default function BlogPost6() {
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
              The Benefits You Didn&rsquo;t Know You Were Allowed to Use
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                August 9, 2026
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                4 min read
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
                There&rsquo;s a quiet category of resources that most high-achieving women have
                access to and rarely use. FMLA. Short-term disability. Intermittent leave.
                Long-term disability. These benefits are often introduced once, during
                onboarding, and then filed away in our minds as something for a different kind
                of situation. A surgery. A baby. Something with a clear before and after.
              </p>
              <p>
                If you&rsquo;ve been managing anxiety, burnout, or a mental health condition
                while still showing up and performing well, this is worth understanding.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What These Benefits Actually Cover
              </h2>
              <p>
                Most employers offer these protections because federal law requires it, and most
                HR departments genuinely want employees to use their benefits appropriately.
                Under federal law, mental health conditions like anxiety, depression, and other
                diagnosable conditions can qualify as a serious health condition, the same
                category that covers a surgery recovery or a difficult pregnancy.
              </p>
              <p>A few distinctions worth understanding:</p>
              <ul className="flex flex-col gap-3 pl-1">
                {[
                  {
                    label: "FMLA (Family and Medical Leave Act)",
                    detail:
                      "protects your job for up to 12 weeks in a 12-month period if you're eligible. FMLA itself guarantees your job is protected and keeps your health insurance active, but it doesn't guarantee pay on its own. In practice, it's often paired with accrued paid sick leave or vacation time, or run alongside short-term disability coverage, so most people aren't going fully unpaid during that window. Worth confirming with your HR department exactly how your leave would be paid before you need it.",
                  },
                  {
                    label: "Intermittent FMLA",
                    detail:
                      "allows leave to be taken in smaller increments rather than all at once. A few hours for a therapy appointment, a day during a difficult flare-up, or a temporarily reduced schedule. This option exists specifically because many health conditions, including mental health conditions, don't require continuous leave to be effectively managed.",
                  },
                  {
                    label: "Short-term disability",
                    detail:
                      "typically covers a portion of income, often somewhere around 60 to 70 percent depending on the policy, for a limited window, and can include anxiety, depression, and stress-related conditions, not only physical ones. The documentation requirements for mental health claims are often more detailed than for physical conditions. That's a feature of how these plans are structured, not a sign that something is wrong with the request.",
                  },
                  {
                    label: "Long-term disability",
                    detail:
                      "applies when a condition affects someone's ability to work over an extended period, and it can sometimes pick up where short-term coverage or FMLA leaves off.",
                  },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    <span><span className="font-medium text-dark">{label}</span> {detail}</span>
                  </li>
                ))}
              </ul>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Why So Many Women Don&rsquo;t Use Them
              </h2>
              <p>
                In practice, many women think of these benefits as reserved for a different kind
                of situation than the one they&rsquo;re in. Burnout and anxiety don&rsquo;t
                always look like an emergency from the outside. They look like still meeting
                deadlines, still being dependable, while managing a lot internally.
              </p>
              <p>
                Because it doesn&rsquo;t look like a crisis, it can be easy to assume it
                doesn&rsquo;t qualify. There&rsquo;s often an added layer of hesitation, a sense
                that using this kind of support says something about capability or resilience,
                when in reality it reflects the same kind of proactive self-management
                that&rsquo;s valued in every other area of a high performer&rsquo;s life.
              </p>
              <p>
                These benefits are also simply underused across the board. Awareness, more than
                eligibility, tends to be the gap. Most people don&rsquo;t use what they
                don&rsquo;t know is there.
              </p>
              <p>
                It&rsquo;s also worth knowing that FMLA leave is legally protected. Employers are
                required to keep medical information confidential, separate from general
                personnel files, and cannot penalize an employee for using protected leave
                appropriately and in good faith.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Something to Consider Before Making a Job Change
              </h2>
              <p>
                If burnout is part of what&rsquo;s driving the idea of a job change, it can be
                worth exploring available benefits before making that decision. These
                protections are tied to current employment and are typically not something that
                carries over. Understanding what&rsquo;s currently available, whether
                that&rsquo;s a short leave, a temporarily reduced schedule, or disability
                coverage during a difficult stretch, can be a useful part of deciding what&rsquo;s
                actually needed before deciding what&rsquo;s next.
              </p>
              <p>
                This isn&rsquo;t about staying somewhere that isn&rsquo;t the right fit. It&rsquo;s
                about making a fully informed decision with all the resources already available
                factored in.
              </p>

              <h2
                className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Questions Worth Sitting With
              </h2>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  "Do you know what's actually included in your benefits package?",
                  "If you needed a reduced schedule or a short leave, would you know how to start that conversation with HR?",
                  "Have you talked with your therapist, your PCP, or your psychiatrist about whether they'd be able to provide the documentation these processes typically require?",
                  "What would it look like to treat your own well-being with the same proactive planning you'd apply to any other part of your career?",
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
                Resources to Learn More
              </h2>
              <ul className="flex flex-col gap-2 pl-1">
                {[
                  {
                    org: "U.S. Department of Labor",
                    title: "Mental Health and the FMLA",
                    url: "https://www.dol.gov/agencies/whd/fmla/mental-health",
                  },
                  {
                    org: "U.S. Department of Labor",
                    title: "Fact Sheet 28-O: Mental Health Conditions and the FMLA",
                    url: "https://www.dol.gov/agencies/whd/fact-sheets/28o-mental-health",
                  },
                  {
                    org: "U.S. Equal Employment Opportunity Commission",
                    title: "Depression, PTSD, and Other Mental Health Conditions in the Workplace: Your Legal Rights",
                    url: "https://www.eeoc.gov/laws/guidance/depression-ptsd-other-mental-health-conditions-workplace-your-legal-rights",
                  },
                  {
                    org: "U.S. Equal Employment Opportunity Commission",
                    title: "The Mental Health Provider's Role in a Client's Request for a Reasonable Accommodation at Work",
                    url: "https://www.eeoc.gov/laws/guidance/mental-health-providers-role-clients-request-reasonable-accommodation-work",
                  },
                  {
                    org: "Social Security Administration",
                    title: "Disability Benefits",
                    url: "https://www.ssa.gov/disability",
                  },
                ].map(({ org, title, url }) => (
                  <li key={url} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-2" />
                    <span>
                      {org},{" "}
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand underline underline-offset-2 hover:text-brand-dark transition-colors"
                      >
                        {title}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
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
                You deserve to use what you already have.
              </h3>
              <p className="text-sm text-dark/75 mb-6 max-w-md mx-auto">
                If you&rsquo;re managing anxiety or burnout while still showing up every day,
                let&rsquo;s talk about what support could look like — including the benefits
                already available to you.
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
