import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsBand } from "@/components/site/StatsBand";
import { TrustPillars } from "@/components/site/TrustPillars";
import { WhyBangladesh } from "@/components/site/WhyBangladesh";
import { Programs } from "@/components/site/Programs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ApplySection } from "@/components/site/ApplySection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { JsonLd } from "@/components/site/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <TrustPillars />
        <Programs />
        <WhyBangladesh />
        <Process />
        {/* <Testimonials /> */}
        <FAQ />
        <ApplySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
