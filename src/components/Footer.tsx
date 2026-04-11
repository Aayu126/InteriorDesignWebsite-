import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#" className="text-2xl font-display font-bold tracking-widest text-white block mb-6">
            VELORAH
          </a>
          <p className="text-white/50 font-light max-w-sm mb-8 leading-relaxed">
            Curating timeless spaces through architectural precision and minimalist elegance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all">
              <span className="sr-only">Instagram</span>
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all">
              <span className="sr-only">Pinterest</span>
              PT
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all">
              <span className="sr-only">LinkedIn</span>
              IN
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><a href="#about" className="text-white/70 hover:text-white transition-colors">Philosophy</a></li>
            <li><a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
            <li><a href="#booking" className="text-white/70 hover:text-white transition-colors">Book Demo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-white/70">
            <li>studio@velorah.com</li>
            <li>+1 (555) 123-4567</li>
            <li className="pt-4">1200 Architecture Blvd<br/>Suite 400<br/>New York, NY 10001</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Velorah Design. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-white/40 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
