import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-bold tracking-widest text-white">
          VELORAH
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className="inline-block px-8 py-3 bg-[#D4AF37] text-black text-sm font-semibold uppercase tracking-widest hover:bg-[#b5952f] transition-colors duration-300 ring-1 ring-[#D4AF37]/50"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col space-y-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-white/80 hover:text-[#D4AF37]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block text-center px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold uppercase tracking-widest"
          >
            Book Demo
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
