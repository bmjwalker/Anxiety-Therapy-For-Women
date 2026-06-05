import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { archivedPosts, getArchivedPostBySlug } from "@/lib/archived-posts";
import { Calendar } from "lucide-react";

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
    title: post ? `${post.title} | Jennifer Walker, LCSW` : "Archived Blog Post",
    description: post?.summary ?? "Archived article preserved on the new site after the legacy domain retirement.",
  };
}

function renderContentBlock(text: string, index: number) {
  // Explicit section heading (scraped h2/h3)
  if (text.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="text-2xl md:text-3xl font-light text-dark mt-8 mb-2"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {text.slice(3)}
      </h2>
    );
  }

  // Short strategy headers: under 6 words, not a bullet/emoji item
  const words = text.trim().split(/\s+/);
  const isBullet = /^[·•\-\*🔹🔸▸▷►]/.test(text.trim());
  if (words.length < 6 && !isBullet) {
    return (
      <p key={index} className="font-semibold text-dark text-base mt-4 mb-0.5">
        {text}
      </p>
    );
  }

  return (
    <p key={index} className="text-base text-dark/75 leading-relaxed">
      {text}
    </p>
  );
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

  // Use the first non-heading paragraph as a styled lede; render the rest below it
  const firstBlockIsHeading = post.content[0]?.startsWith("## ");
  const lede = firstBlockIsHeading ? null : post.content[0];
  const bodyBlocks = firstBlockIsHeading ? post.content : post.content.slice(1);

  return (
    <>
      <Header />
      <main className="bg-cream">
        <section className="section-padding pt-24 pb-16">
          <div className="section-container max-w-4xl">

            {/* Back link + label */}
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors mb-8"
            >
              ← Back to blog
            </a>
            <p className="text-xs uppercase tracking-[0.3em] text-dusty font-semibold mb-3">
              Archived article
            </p>

            {/* Title + meta */}
            <h1
              className="text-4xl md:text-5xl font-light text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-dark/60 mb-10">
              <span className="rounded-full border border-mist bg-white px-3 py-1 text-brand font-medium">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={13} />
                {post.date}
              </span>
            </div>

            {/* Article body */}
            <div className="rounded-3xl border border-cream-dark bg-white p-8 md:p-12 shadow-sm mb-8">
              {lede && (
                <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-8 pb-8 border-b border-cream-dark">
                  {lede}
                </p>
              )}
              <div className="space-y-4">
                {bodyBlocks.map((block, i) => renderContentBlock(block, i))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-sage-muted border border-sage-light p-8 md:p-10 text-center">
              <h2
                className="text-3xl md:text-4xl font-light text-dark mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ready to take the next step?
              </h2>
              <p className="text-sm text-dark/65 leading-relaxed mb-8 max-w-lg mx-auto">
                If you&rsquo;re a high-achieving woman navigating anxiety, burnout, or a difficult life transition, therapy can help. I work with professional women in Georgia and Florida who are ready to move from survival mode into something that actually feels like living.
              </p>
              <a
                href="https://jennifer-walker7285.clientsecure.me/sign-in"
                className="btn-primary px-8 py-3.5 text-sm"
              >
                Book a Free Consultation
              </a>
              <p className="mt-6 text-xs text-dark/50 italic">
                Jennifer Walker, LCSW
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
