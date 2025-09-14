import { Navbar } from "@/components/navbar";
import { BenefitSection } from "@/components/section/benefit";
import { ContactSection } from "@/components/section/contact";
import { Footer } from "@/components/section/footer";
import { HeroSection } from "@/components/section/hero";
import { PricingSection } from "@/components/section/pricing";
import { ServiceSection } from "@/components/section/service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServiceSection />
        <BenefitSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
