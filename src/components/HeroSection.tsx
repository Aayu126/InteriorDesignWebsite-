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
      <div className="relative z-20 container mx-auto px-6 text-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <span className="px-5 py-2 border border-[#D4AF37]/30 rounded-full text-xs uppercase tracking-[0.25em] text-[#D4AF37] backdrop-blur-md bg-black/40 shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)]">
            Velorah Design Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-[7.5rem] text-white mb-8 leading-[1.05]"
        >
          Curating Timeless <br className="hidden md:block" />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200 pr-4 pb-2">Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light mb-14"
        >
          We transform spaces into sophisticated narratives, blending modern minimalism with timeless architectural principles perfectly tailored to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 50px -10px rgba(212,175,55,0.7)" }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="px-10 py-5 bg-[#D4AF37] text-black font-semibold text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto shadow-[0_0_40px_-5px_rgba(212,175,55,0.4)] relative overflow-hidden"
          >
            <motion.span 
              className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full" 
              whileHover={{ translateX: ["-100%", "200%"] }} 
              transition={{ duration: 0.7, ease: "easeInOut" }} 
            />
            <span className="relative z-10">Explore Portfolio</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="px-10 py-5 border border-[#D4AF37]/50 text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all duration-300 w-full sm:w-auto relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Book Demo</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator - Fixed Alignment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1.5, type: "spring" }}
        className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.4em] mb-4 font-light">Scroll down</span>
        <div className="w-[26px] h-[40px] rounded-full border-2 border-white/20 flex justify-center p-1.5 backdrop-blur-md">
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-2 rounded-full bg-gradient-to-b from-[#D4AF37] to-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
