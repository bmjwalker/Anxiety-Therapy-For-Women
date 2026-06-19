import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Group Therapy Programs for Women | Jennifer Walker, LCSW | Atlanta, GA",
  },
  description:
    "Structured burnout recovery group programs for high-performing women. Small cohorts, weekly telehealth sessions, led by Jennifer Walker, LCSW in Georgia & Florida.",
  alternates: { canonical: "https://anxietytherapyforwomen.com/groups" },
  openGraph: {
    title: "Group Therapy Programs for Women | Jennifer Walker, LCSW | Atlanta, GA",
    description:
      "Structured burnout recovery programs for high-performing women — small cohorts, weekly telehealth sessions in Georgia & Florida.",
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
