import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Anxiety & Burnout Therapy Blog | Jennifer Walker, LCSW | Atlanta, GA",
  },
  description:
    "Evidence-based articles on anxiety, burnout recovery, and authentic living for high-performing professional women — written by Jennifer Walker, LCSW, Atlanta therapist.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/blog" },
  openGraph: {
    title: "Anxiety & Burnout Therapy Blog | Jennifer Walker, LCSW | Atlanta, GA",
    description:
      "Evidence-based articles on anxiety, burnout, and authentic living for high-performing professional women — by Jennifer Walker, LCSW.",
    url: "https://anxietytherapyforwomen.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
