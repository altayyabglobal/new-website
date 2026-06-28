import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsBand } from "@/components/site/StatsBand";
import { AboutSection } from "@/components/site/AboutSection";
import { TrustPillars } from "@/components/site/TrustPillars";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WhyBangladesh } from "@/components/site/WhyBangladesh";
import { Programs } from "@/components/site/Programs";
import { EligibilitySection } from "@/components/site/EligibilitySection";
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
        <AboutSection />
        <TrustPillars />
        <ServicesSection />
        <EligibilitySection />
        <Programs />
        <WhyBangladesh />
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
