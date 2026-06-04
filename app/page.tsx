import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
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

export default function Home() {
  return (
    <>
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
