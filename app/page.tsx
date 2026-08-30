import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: {
    absolute:
      "Jennifer Walker, LCSW | Anxiety & Burnout Therapy, Atlanta",
  },
  description:
    "Virtual anxiety and burnout therapy for high-performing women in Georgia and Florida. Individual telehealth sessions with Jennifer Walker, LCSW.",
  alternates: { canonical: "https://anxietytherapyforwomen.com" },
  openGraph: {
    title: "Jennifer Walker, LCSW | Anxiety & Burnout Therapy, Atlanta",
    description:
      "Virtual anxiety and burnout therapy for high-performing women in Georgia and Florida. Individual telehealth sessions with Jennifer Walker, LCSW.",
    url: "https://anxietytherapyforwomen.com",
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
import WhoIHelp from "@/components/sections/WhoIHelp";
import Testimonials from "@/components/sections/Testimonials";
import BurnoutQuizSection from "@/components/sections/BurnoutQuizSection";
import Credibility from "@/components/sections/Credibility";
import TherapyServices from "@/components/sections/TherapyServices";
import Programs from "@/components/sections/Programs";
import About from "@/components/sections/About";
import Resources from "@/components/sections/Resources";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import ClosingCTA from "@/components/sections/ClosingCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": "https://anxietytherapyforwomen.com/#business",
      "name": "Jennifer Walker, LCSW",
      "alternateName": "Anxiety Therapy for Women",
      "url": "https://anxietytherapyforwomen.com",
      "email": "jennifer@anxietytherapyforwomen.com",
      "telephone": "+14703579322",
      "description":
        "Virtual anxiety and burnout therapy for high-performing women in Georgia and Florida",
      "image": "https://anxietytherapyforwomen.com/headshot.jpg",
      "priceRange": "$$",
      "serviceType": ["Mental Health Service", "Psychotherapy"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlanta",
        "addressRegion": "GA",
        "addressCountry": "US",
      },
      "areaServed": [
        { "@type": "State", "name": "Georgia" },
        { "@type": "State", "name": "Florida" },
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100073222913867",
        "https://www.instagram.com/clarityforhpwomen/",
        "https://www.youtube.com/@HighPerformingWomen",
        "https://www.pinterest.com/jenniferwalkerlcsw/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://anxietytherapyforwomen.com/#jennifer-walker",
      "name": "Jennifer Walker",
      "givenName": "Jennifer",
      "familyName": "Walker",
      "jobTitle": "Licensed Clinical Social Worker",
      "description":
        "Licensed Clinical Social Worker (LCSW) with 20+ years of experience supporting high-performing professional women through burnout, anxiety, life transitions, and career clarity.",
      "url": "https://anxietytherapyforwomen.com/about",
      "image": "https://anxietytherapyforwomen.com/headshot.jpg",
      "worksFor": { "@id": "https://anxietytherapyforwomen.com/#business" },
      "knowsAbout": [
        "Anxiety Therapy",
        "Burnout Recovery",
        "Life Transitions",
        "Career Clarity",
        "Cognitive Behavioral Therapy",
        "Dialectical Behavior Therapy",
        "Trauma-Informed Care",
        "High-Performing Professional Women",
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Licensed Clinical Social Worker (LCSW)",
        "credentialCategory": "license",
        "recognizedBy": [
          { "@type": "Organization", "name": "Georgia Composite Board of Professional Counselors, Social Workers and Marriage & Family Therapists" },
          { "@type": "Organization", "name": "Florida Department of Health" },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-cream focus:rounded-md"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WhoIHelp />
        <Testimonials />
        <BurnoutQuizSection />
        <Credibility />
        <TherapyServices />
        <Programs />
        <About />
        <Resources />
        <FAQ />
        <Blog />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
