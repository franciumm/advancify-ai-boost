
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4D7DDA]/10 via-transparent to-[#8E1E5F2]/10"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            ADVANCIFY
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4D7DDA] to-[#8E1E5F2] mx-auto rounded-full"></div>
        </div>

        {/* Main Headline */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Advance Your{' '}
            <span className="gradient-text">Potential</span>
            <br />
            with AI-Powered Solutions
          </h2>
        </div>

        {/* Subheadline */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Custom automation for CRM, customer support, and communications. 
            Transform your business operations with intelligent AI solutions designed for UAE SMEs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Button 
            className="btn-primary text-lg px-8 py-4 min-w-[200px]"
            onClick={() => window.open('https://calendly.com/advancify', '_blank')}
          >
            Schedule a Call
          </Button>
          <Button 
            variant="outline" 
            className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
            onClick={scrollToForm}
          >
            Let's Talk
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToServices}
            className="p-2 rounded-full border border-white/20 hover:border-[#4D7DDA] transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
