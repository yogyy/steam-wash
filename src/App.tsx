import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/section/hero";
import { ServiceSection } from "./components/section/service";
import { BenefitSection } from "./components/section/benefit";
import { PricingSection } from "./components/section/pricing";
import { ContactSection } from "./components/section/contact";
import { Footer } from "./components/section/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="steam_site-theme">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ServiceSection />
        <BenefitSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
