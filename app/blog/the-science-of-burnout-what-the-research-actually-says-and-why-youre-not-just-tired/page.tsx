import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPost1() {
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
              The Science of Burnout: What the Research Actually Says (And Why You&rsquo;re Not Just &ldquo;Tired&rdquo;)
            </h1>
            <div className="flex items-center gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                May 15, 2026
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
                If you&rsquo;ve been telling yourself you&rsquo;re just tired, just stressed, just going through a busy season — this post is for you.
              </p>
              <p>
                Because what you might actually be experiencing has a name, a clinical definition, and decades of research behind it. And understanding the difference between being tired and being burned out could change everything about how you approach your next step.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Burnout Is Not a Personal Failing — It&rsquo;s a Clinical Phenomenon
              </h2>
              <p>
                In 2019, the World Health Organization made it official: burnout is a recognized occupational phenomenon in the International Classification of Diseases, 11th Revision (ICD-11). This wasn&rsquo;t a casual decision. It was based on decades of research pioneered by Dr. Christina Maslach, Professor Emerita of Psychology at UC Berkeley and creator of the Maslach Burnout Inventory — the gold standard tool for measuring burnout used by researchers and clinicians worldwide.
              </p>
              <p>
                Dr. Maslach defines burnout as &ldquo;a prolonged response to chronic emotional and interpersonal stressors on the job — characterized by three specific dimensions: exhaustion, cynicism, and reduced sense of efficacy.&rdquo; Not just tiredness. Not just stress. A specific, measurable psychological response to sustained chronic stressors.
              </p>
              <p>
                This matters because most of the women I work with have spent months — sometimes years — telling themselves they just need a vacation, a better morning routine, or a new job. The research tells a different story.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                The Numbers Are Staggering
              </h2>
              <p>Burnout isn&rsquo;t a niche problem. It&rsquo;s a workforce crisis.</p>
              <p>
                Recent research from Eagle Hill Consulting found that more than half of the U.S. workforce — 55% — is currently experiencing burnout. A separate 2025 report from Aflac found that U.S. workplace burnout has reached a six-year high, with Gen Z now surpassing Millennials as the most burned-out generation, with 74% experiencing at least moderate levels of burnout.
              </p>
              <p>
                And the impact goes far beyond how people feel at work. Burned-out employees are nearly three times more likely to say they plan to leave their employer in the coming year. The economic cost is staggering — experts estimate more than $500 billion and 550 million work hours are lost annually to on-the-job stress.
              </p>
              <p>
                But here&rsquo;s what strikes me most as a therapist: only 42% of burned-out workers have told their manager about their burnout. And of those who did speak up, 42% said their manager took no action to help. Women — especially high-performing women — are often the least likely to name what they&rsquo;re experiencing, and the most likely to keep pushing through.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                What Burnout Actually Looks Like — Especially in High-Performing Women
              </h2>
              <p>
                This is where the clinical picture gets important. Because burnout in high-achieving women rarely looks like collapsing. It looks like continuing.
              </p>
              <p>Dr. Maslach&rsquo;s research identified three dimensions of burnout that are worth understanding:</p>

              <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand/20">
                <div>
                  <p className="font-semibold text-dark">Exhaustion</p>
                  <p className="mt-1">Not just physical tiredness, but a depletion of emotional and psychological resources. You wake up tired. Rest doesn&rsquo;t restore you. You&rsquo;re running on fumes but the fumes keep coming.</p>
                </div>
                <div>
                  <p className="font-semibold text-dark">Cynicism</p>
                  <p className="mt-1">A growing detachment or distance from your work, your colleagues, or the people you serve. You used to care deeply. Now you&rsquo;re going through the motions. The passion is gone and you can&rsquo;t quite remember when it left.</p>
                </div>
                <div>
                  <p className="font-semibold text-dark">Reduced Efficacy</p>
                  <p className="mt-1">A diminished sense of accomplishment or competence. Despite evidence to the contrary, you feel like nothing you do is enough. Imposter syndrome intensifies. The confidence you once had feels distant.</p>
                </div>
              </div>

              <p>
                High-performing women often experience burnout in a specific pattern: they maintain the external markers of success — the performance, the deliverables, the showing up — while the internal experience quietly deteriorates. They look fine. They are not fine.
              </p>
              <p>
                Jennifer Moss, author of <em>The Burnout Epidemic</em> and one of the leading workplace burnout voices today, describes it clearly: &ldquo;burnout is a workplace phenomenon deeply rooted inside our organizations — and asking someone to do more yoga or download another meditation app isn&rsquo;t going to solve a systemic problem.&rdquo;
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                The Six Drivers of Burnout
              </h2>
              <p>Dr. Maslach&rsquo;s research identified six key areas of work life that, when mismatched with a person&rsquo;s needs and values, drive burnout:</p>

              <ol className="flex flex-col gap-3 list-none">
                {[
                  { n: "1", title: "Workload", body: "When demands consistently exceed capacity without adequate recovery time." },
                  { n: "2", title: "Control", body: "When you have little autonomy over how, when, or where you work." },
                  { n: "3", title: "Reward", body: "When the recognition, compensation, or sense of meaning you receive doesn't match your contribution." },
                  { n: "4", title: "Community", body: "When workplace relationships are characterized by conflict, isolation, or lack of support." },
                  { n: "5", title: "Fairness", body: "When decisions, policies, or treatment feel inequitable or disrespectful." },
                  { n: "6", title: "Values", body: "When what you're asked to do conflicts with what you actually believe in." },
                ].map(({ n, title, body }) => (
                  <li key={n} className="flex gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand/10 text-brand text-sm font-medium flex items-center justify-center mt-0.5">{n}</span>
                    <div>
                      <span className="font-semibold text-dark">{title}</span>
                      {" — "}
                      {body}
                    </div>
                  </li>
                ))}
              </ol>

              <p>
                As a therapist, what I find most useful about this framework is how it shifts the conversation away from &ldquo;what&rsquo;s wrong with me&rdquo; toward &ldquo;what is this situation asking of me that I can no longer sustainably give?&rdquo; That is a fundamentally different question — and it opens the door to fundamentally different answers.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Burnout vs. Misalignment — A Critical Distinction
              </h2>
              <p>
                One thing the research doesn&rsquo;t always address — but clinical work makes clear — is the difference between burnout that would be resolved by better conditions and burnout that signals something deeper: a fundamental misalignment between who you are and what you&rsquo;re doing.
              </p>
              <p>
                Some women are burned out because their workload is unsustainable. Better boundaries, a different role, or a supportive manager could make a real difference. But others are burned out because they&rsquo;ve been operating from a version of themselves shaped by external expectations rather than their authentic values, strengths, and desires.
              </p>
              <p>
                For that second group, no amount of workload management will fix what&rsquo;s actually wrong. The work isn&rsquo;t just about recovering. It&rsquo;s about redefining.
              </p>
              <p>
                Understanding which situation you&rsquo;re in is one of the most important pieces of clarity you can gain — and it&rsquo;s exactly what the work I do with women focuses on.
              </p>

              <h2 className="text-2xl md:text-3xl font-normal text-dark mt-6 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                What To Do With This Information
              </h2>
              <p>If you&rsquo;ve read this far, something in this resonated. Here are your next steps:</p>
              <p>
                Start by finding out where you actually are. The free 2-minute burnout quiz is designed to help you assess your current burnout level across the key dimensions. It&rsquo;s not a diagnosis — it&rsquo;s a starting point for clarity.
              </p>
              <p>You are not just tired. What you&rsquo;re experiencing is real, it&rsquo;s recognized, and there&rsquo;s a way through it.</p>
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
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ready to stop pushing through?
              </h3>
              <p className="text-sm text-dark/75 mb-6 max-w-md mx-auto">
                Book a free 15-minute consultation and let&rsquo;s talk about what recovery actually looks like for you.
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
