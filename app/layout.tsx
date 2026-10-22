import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Jost } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/lib/site";

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

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anxietytherapyforwomen.com"),
  title: {
    default: "Anxiety Therapy for Women | Atlanta, GA",
    template: "%s | Anxiety Therapy for Women",
  },
  applicationName: SITE_NAME,
  appleWebApp: {
    title: SITE_NAME,
  },
  description:
    "Anxiety and burnout therapy for high-performing professional women in Atlanta, GA. Virtual sessions across Georgia with Jennifer Walker, LCSW.",
  keywords: [
    "anxiety therapy for women",
    "burnout recovery for women",
    "Georgia therapist for anxiety",
    "career clarity therapy",
    "therapy for high-performing professional women",
    "life transitions therapist",
  ],
  alternates: {
    canonical: "https://anxietytherapyforwomen.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Anxiety Therapy for Women | Atlanta, GA",
    description:
      "Anxiety and burnout therapy for high-performing professional women in Atlanta, GA. Virtual sessions across Georgia with Jennifer Walker, LCSW.",
    url: "https://anxietytherapyforwomen.com",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Jennifer Walker, LCSW — Anxiety Therapist for Women in Georgia & Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/headshot.jpg"],
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
      className={`${cormorant.variable} ${inter.variable} ${jost.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
