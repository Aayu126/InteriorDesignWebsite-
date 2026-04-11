import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sentence = "Spaces That Breathe Elegance.";

const AboutSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="about" className="relative bg-black py-32 px-6 md:px-12 overflow-hidden">
      {/* Decorative Blur */}
      <motion.div 
        style={{ rotate: rotateBg }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" 
      />

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-[#D4AF37]"></span>
              Our Philosophy
            </motion.h2>

            <motion.h3 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <span className="block mb-2">Spaces That</span>
              <span className="italic text-white/80 flex flex-wrap">
                {sentence.split("").map((char, index) => (
                  <motion.span
                    key={char + "-" + index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 font-light"
            >
               At Velorah, we believe interior design is more than arranging furniture; it is the curation of atmosphere. We blend timeless architectural principles with modern minimalism to create environments that are both striking to the eye and soothing to the soul.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed mb-10 font-light"
            >
              Every texture, every shadow, and every line is meticulously planned to tell your unique story.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              href="#portfolio"
              className="group inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm hover:text-[#D4AF37] transition-colors"
            >
              Explore Our Work
              <span className="w-8 h-px bg-white group-hover:bg-[#D4AF37] transition-colors group-hover:w-16 duration-500"></span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full"
          >
            <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-700 hover:translate-x-6 hover:translate-y-6" />
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
              alt="Elegant interior design"
              className="w-full h-full object-cover rounded-sm box-border border-white/10 shadow-2xl relative z-10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
