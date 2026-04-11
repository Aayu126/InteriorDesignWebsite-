import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Building2, Paintbrush2, Compass } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} strokeWidth={1} />,
    title: 'Residential Design',
    description: 'Transforming houses into personalized sanctuaries. We focus on flow, light, and material logic to create homes that feel inherently yours.'
  },
  {
    icon: <Building2 size={32} strokeWidth={1} />,
    title: 'Commercial Spaces',
    description: 'Designing brand experiences. We create remarkable commercial environments that inspire employees and captivate clients.'
  },
  {
    icon: <Paintbrush2 size={32} strokeWidth={1} />,
    title: 'Custom Furnishings',
    description: 'Unique pieces for unique spaces. We design and source bespoke furniture that perfectly completes your architectural vision.'
  },
  {
    icon: <Compass size={32} strokeWidth={1} />,
    title: 'Space Planning',
    description: 'Optimizing spatial potential. We analyze and reimagine layouts to maximize functionality without compromising aesthetic integrity.'
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: -20, rotateY: -10 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0, 
    rotateY: 0,
    transition: { duration: 1.2, type: "spring", bounce: 0.4 } 
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-black py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <h2 className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-4">Expertise</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                Our Core <br/> Disciplines
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">
                From conceptual sketches to the final curated accessory, our comprehensive suite of services ensures a seamless journey from vision to reality.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="liquid-glass p-10 rounded-xl group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/40 border border-white/5 transform-gpu relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="text-[#D4AF37] mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 origin-left relative z-10">
                  {service.icon}
                </div>
                <h4 className="font-display text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{service.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
