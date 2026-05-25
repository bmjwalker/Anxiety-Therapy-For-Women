import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jennifer Walker, LCSW | Anxiety Therapy for Women in Atlanta",
  description:
    "Licensed therapist specializing in anxiety therapy and burnout recovery for high-performing professional women in Atlanta, Georgia and Florida via telehealth.",
  keywords: [
    "anxiety therapy",
    "burnout recovery",
    "women therapist Atlanta",
    "telehealth therapy Georgia",
    "LCSW Atlanta",
    "professional women therapy",
  ],
  openGraph: {
    title: "Jennifer Walker, LCSW | Anxiety Therapy for Women",
    description:
      "Helping high-performing professional women thrive while navigating life transitions with strength, clarity, and self-compassion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
