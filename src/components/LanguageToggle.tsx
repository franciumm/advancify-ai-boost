
import { useState } from "react";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    
    // Here you would implement the actual language switching logic
    // For now, we'll just update the document direction for RTL support
    if (newLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
    
    console.log(`Language switched to: ${newLanguage}`);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
      >
        {currentLanguage === 'en' ? 'العربية' : 'English'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
