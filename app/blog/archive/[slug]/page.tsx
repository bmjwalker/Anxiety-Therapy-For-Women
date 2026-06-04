import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { archivedPosts, getArchivedPostBySlug } from "@/lib/archived-posts";
import { ArrowRight, Calendar } from "lucide-react";

export function generateStaticParams() {
  return archivedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getArchivedPostBySlug(slug);

  return {
    title: post ? `${post.title} | Archived Blog Post` : "Archived Blog Post",
    description: post?.summary ?? "Archived article preserved on the new site after the legacy domain retirement.",
  };
}

export default async function ArchivedBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getArchivedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-cream">
        <section className="section-padding pt-24 pb-10">
          <div className="section-container max-w-4xl">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors mb-8"
            >
              ← Back to blog
            </a>
            <p className="text-xs uppercase tracking-[0.3em] text-dusty font-semibold mb-3">
              Archived article
            </p>
            <h1
              className="text-4xl md:text-5xl font-light text-dark mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-dark/60 mb-8">
              <span className="rounded-full border border-mist bg-white px-3 py-1 text-brand font-medium">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={13} />
                {post.date}
              </span>
              <span>{post.readTime}</span>
            </div>
            <div className="rounded-3xl border border-cream-dark bg-white p-8 shadow-sm mb-8">
              <p className="text-base md:text-lg text-dark/70 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="space-y-4 text-base text-dark/75 leading-relaxed">
                {post.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-cream-dark bg-white p-8 shadow-sm mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-dark mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Why this archive still matters
              </h2>
              <ul className="space-y-3 text-base text-dark/75 leading-relaxed">
                {post.takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-cream-dark bg-white p-8 shadow-sm">
              <p className="text-sm text-dark/70 leading-relaxed mb-6">
                This archived article is preserved here so the old content remains discoverable after the legacy domain is retired. The page now includes fuller article context, practical takeaways, and a real archive reading experience.
              </p>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-cream hover:bg-brand-dark transition-colors"
              >
                Explore more blog posts
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
