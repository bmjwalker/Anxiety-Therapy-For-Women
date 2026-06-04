import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TherapyServices from "@/components/sections/TherapyServices";
import Programs from "@/components/sections/Programs";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <TherapyServices />
        <Programs />
      </main>
      <Footer />
    </>
  );
}
