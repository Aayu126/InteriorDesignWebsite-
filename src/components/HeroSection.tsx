import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <span className="px-4 py-1 border border-white/20 rounded-full text-xs uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-sm bg-black/20">
            Velorah Design Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]"
        >
          Curating Timeless <br className="hidden md:block" />
          <span className="italic font-light">Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12"
        >
          We transform spaces into sophisticated narratives, blending modern minimalism with timeless architectural principles perfectly tailored to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="px-10 py-4 bg-[#D4AF37] text-black font-semibold text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto"
          >
            Explore Portfolio
          </a>
          <a
            href="#booking"
            className="px-10 py-4 border border-[#D4AF37]/50 text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all duration-300 w-full sm:w-auto"
          >
            Book Demo
          </a>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2 font-light">Explore</span>
        <div className="w-[26px] h-[40px] rounded-full border border-white/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#D4AF37]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
