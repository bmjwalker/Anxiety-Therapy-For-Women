import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: "Group Therapy Programs | Burnout Recovery for Women",
  description:
    "Small-group programs for high-performing women ready to move from survival mode to aligned living — structured, intimate, and led by Jennifer Walker, LCSW.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/groups" },
  openGraph: {
    title: "Group Therapy Programs | Jennifer Walker, LCSW",
    description:
      "Structured group programs for high-performing women ready to recover from burnout and reclaim their lives.",
    url: "https://anxietytherapyforwomen.com/groups",
  },
};

export default function GroupsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Programs />
      </main>
      <Footer />
    </>
  );
}
