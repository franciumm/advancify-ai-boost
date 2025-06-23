
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/da6dc3e8-04c6-40be-a667-f9faff2fd463.png" 
                alt="Advancify Logo"
                className="w-6 h-6"
              />
            </div>
            <h1 className="text-xl font-bold text-white">
              ADVANCIFY
            </h1>
          </div>

          {/* Navigation - can be expanded later */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a 
              href="#use-cases" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Use Cases
            </a>
            <a 
              href="#contact-form" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
