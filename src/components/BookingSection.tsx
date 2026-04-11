import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="relative bg-black py-32 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Interior architecture background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-4">Start Your Journey</h2>
          <h3 className="font-display text-4xl md:text-6xl text-white mb-6">
            Ready to Redefine <br/> Your Space?
          </h3>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Book an initial consultation to discuss your vision with our lead designers. Together, we'll explore how Velorah can transform your environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="liquid-glass p-8 md:p-12 rounded-lg"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm tracking-widest uppercase text-white/50 block">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm tracking-widest uppercase text-white/50 block">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm tracking-widest uppercase text-white/50 block">Project Type</label>
              <select className="w-full bg-black border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer appearance-none">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="custom">Custom Furnishings</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm tracking-widest uppercase text-white/50 block">Project Details</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Tell us a bit about your space and vision..."
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full bg-[#D4AF37] hover:bg-white text-black py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-4 group"
            >
              Request Consultation
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
