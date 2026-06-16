import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anxiety & Burnout Insights for High-Performing Women",
  description:
    "Evidence-based guidance on anxiety, burnout recovery, and authentic living — written for high-performing women who are ready to stop surviving and start thriving.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/blog" },
  openGraph: {
    title: "Blog | Jennifer Walker, LCSW",
    description:
      "Evidence-based insights on anxiety, burnout, and authentic living for high-performing women.",
    url: "https://anxietytherapyforwomen.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
