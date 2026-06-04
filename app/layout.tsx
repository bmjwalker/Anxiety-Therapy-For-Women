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
  metadataBase: new URL("https://anxietytherapyforwomen.com"),
  title: {
    default: "Jennifer Walker, LCSW | Anxiety Therapy for Women",
    template: "%s | Jennifer Walker, LCSW",
  },
  description:
    "Compassionate anxiety therapy and burnout recovery for high-performing women in Georgia and Florida. Telehealth sessions, therapy for life transitions, career clarity, and burnout support.",
  keywords: [
    "anxiety therapy for women",
    "burnout recovery for women",
    "Georgia therapist for anxiety",
    "Florida telehealth therapy",
    "career clarity therapy",
    "therapy for high-performing women",
    "life transitions therapist",
  ],
  alternates: {
    canonical: "https://anxietytherapyforwomen.com",
  },
  openGraph: {
    title: "Jennifer Walker, LCSW | Anxiety Therapy for Women",
    description:
      "Helping high-performing professional women reclaim calm, clarity, and confidence through anxiety therapy, burnout recovery, and life transition support.",
    url: "https://anxietytherapyforwomen.com",
    siteName: "Jennifer Walker, LCSW",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennifer Walker, LCSW | Anxiety Therapy for Women",
    description:
      "Online anxiety therapy and burnout recovery for high-performing professional women in Georgia and Florida.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
