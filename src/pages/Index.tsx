
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactFormSection from "@/components/ContactFormSection";
import LanguageToggle from "@/components/LanguageToggle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <LanguageToggle />
      
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <UseCasesSection />
        <ContactFormSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
