import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Anxiety Therapy for Women",
  },
  description:
    "Psychoeducation, tools, and honest insight for high-performing women navigating anxiety, burnout, and life transitions.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/blog" },
  openGraph: {
    title: "Blog | Anxiety Therapy for Women",
    description:
      "Psychoeducation, tools, and honest insight for high-performing women navigating anxiety, burnout, and life transitions.",
    url: "https://anxietytherapyforwomen.com/blog",
    type: "website",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Jennifer Walker, LCSW — anxiety and burnout therapist for women in Atlanta, Georgia",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
