import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "the-science-of-burnout-what-the-research-actually-says-and-why-youre-not-just-tired",
    category: "Anxiety & Burnout",
    title: "The Science of Burnout: What the Research Actually Says (And Why You're Not Just 'Tired')",
    date: "May 15, 2026",
    readTime: "7 min read",
    excerpt:
      "Burnout is a clinical phenomenon affecting over 50% of U.S. workers — yet it's still dismissed as weakness. Here's what the research actually says, and why understanding it changes everything about recovery.",
  },
  {
    slug: "high-functioning-burnout-in-women-why-youre-exhausted-even-if-youre-still-showing-up",
    category: "Anxiety & Burnout",
    title: "High-Functioning Burnout in Women: Why You're Exhausted Even If You're Still Showing Up",
    date: "April 25, 2026",
    readTime: "6 min read",
    excerpt:
      "You're meeting deadlines, showing up for everyone, keeping it all together — and you're utterly depleted. High-functioning burnout is real, and it's affecting more women than ever.",
  },
  {
    slug: "adhd-high-performers-why-youre-not-meant-to-be-disciplined-and-why-thats-your-superpower",
    category: "Resilience & Mental Health",
    title: "ADHD High Performers — Why You're Not Meant to Be 'Disciplined' (And Why That's Your Superpower)",
    date: "November 9, 2025",
    readTime: "8 min read",
    excerpt:
      "Traditional productivity advice was not designed for the ADHD brain. Discover why your dopamine-driven motivation is a feature, not a bug — and how to harness it for authentic high performance.",
  },
  {
    slug: "why-high-performing-women-overthink",
    category: "Personal Growth",
    title: "Why High-Performing Women Overthink (and How to Break the Cycle)",
    date: "August 24, 2025",
    readTime: "5 min read",
    excerpt:
      "Rumination feels productive — like you're solving problems — but it often keeps high achievers stuck in anxiety loops. These evidence-based techniques will help you interrupt the cycle for good.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-cream pt-24 pb-16">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-dusty" />
              <span className="text-xs tracking-widest uppercase text-dusty font-medium">Blog</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-light text-dark mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Insights &amp; tools for the{" "}
              <span className="italic text-brand">women who lead</span>
            </h1>
            <p className="text-base md:text-lg text-dark/60 max-w-2xl">
              Evidence-based guidance on anxiety, burnout recovery, and authentic living — written for high-performing women who are ready to stop surviving and start thriving.
            </p>
          </div>
        </section>

        <section className="bg-white section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col bg-cream rounded-2xl overflow-hidden border border-cream-dark card-hover"
                >
                  <div className="h-1 bg-gradient-to-r from-brand to-sage" />
                  <div className="flex flex-col flex-1 p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-mist-light text-brand border border-mist">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-dark/40">
                        <Calendar size={11} />
                        {post.date}
                      </div>
                      <span className="text-xs text-dark/40 ml-auto">{post.readTime}</span>
                    </div>
                    <h2
                      className="text-xl font-medium text-dark mb-3 leading-snug"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm text-dark/60 leading-relaxed flex-1 mb-6">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      Read More
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
