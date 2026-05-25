import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    category: "Anxiety & Burnout",
    title: "The Science of Burnout: What the Research Actually Says (And Why You're Not Just 'Tired')",
    date: "May 15, 2026",
    excerpt:
      "Burnout is a clinical phenomenon affecting over 50% of U.S. workers — yet it's still dismissed as weakness. Here's what the research actually says, and why understanding it changes everything about recovery.",
    href: "/blog/the-science-of-burnout-what-the-research-actually-says-and-why-youre-not-just-tired",
    readTime: "7 min read",
  },
  {
    category: "Anxiety & Burnout",
    title: "High-Functioning Burnout in Women: Why You're Exhausted Even If You're Still Showing Up",
    date: "April 25, 2026",
    excerpt:
      "You're meeting deadlines, showing up for everyone, keeping it all together — and you're utterly depleted. High-functioning burnout is real, and it's affecting more women than ever.",
    href: "/blog/high-functioning-burnout-in-women-why-youre-exhausted-even-if-youre-still-showing-up",
    readTime: "6 min read",
  },
  {
    category: "Resilience & Mental Health",
    title: "ADHD High Performers — Why You're Not Meant to Be 'Disciplined' (And Why That's Your Superpower)",
    date: "November 9, 2025",
    excerpt:
      "Traditional productivity advice was not designed for the ADHD brain. Discover why your dopamine-driven motivation is a feature, not a bug — and how to harness it for authentic high performance.",
    href: "/blog/adhd-high-performers-why-youre-not-meant-to-be-disciplined-and-why-thats-your-superpower",
    readTime: "8 min read",
  },
  {
    category: "Personal Growth",
    title: "Why High-Performing Women Overthink (and How to Break the Cycle)",
    date: "August 24, 2025",
    excerpt:
      "Rumination feels productive — like you're solving problems — but it often keeps high achievers stuck in anxiety loops. These evidence-based techniques will help you interrupt the cycle for good.",
    href: "/blog/why-high-performing-women-overthink",
    readTime: "5 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-cream section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Blog
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-light text-dark max-w-xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Insights &amp; tools for the{" "}
            <span className="italic text-brand">women who lead</span>
          </h2>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-brand text-brand text-sm font-medium hover:bg-brand-muted transition-colors shrink-0"
          >
            View All Posts
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-cream-dark card-hover"
            >
              {/* Category color bar */}
              <div className="h-1 bg-gradient-to-r from-brand to-sage" />

              <div className="flex flex-col flex-1 p-7">
                {/* Meta */}
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

                {/* Title */}
                <h3
                  className="text-xl font-medium text-dark mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-dark/60 leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                >
                  Read More
                  <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-14 p-10 rounded-3xl bg-brand text-center">
          <h3
            className="text-3xl md:text-4xl font-light text-cream mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Stay in the loop
          </h3>
          <p className="text-cream/70 text-sm mb-6 max-w-md mx-auto">
            Join Jennifer&apos;s community for weekly insights on anxiety, burnout recovery,
            and authentic living — delivered to your inbox.
          </p>
          <a
            href="https://fabulous-teacher-7023.kit.com/c2bd48329f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream text-brand text-sm font-medium hover:bg-cream-dark transition-colors"
          >
            Subscribe to the Newsletter
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
