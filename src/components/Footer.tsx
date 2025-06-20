
const Footer = () => {
  return (
    <footer className="bg-black/50 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ADVANCIFY</h3>
            <p className="text-gray-400 leading-relaxed">
              Advance Your Potential with AI-Powered Solutions. 
              Custom automation for UAE businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>CRM Automation</li>
              <li>WhatsApp Bots</li>
              <li>AI Call Agents</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Dubai, UAE</p>
              <p>hello@advancify.ae</p>
              <p>Available in English & Arabic</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Advancify. All rights reserved. | 
            <span className="text-[#4D7DDA] ml-1">Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
