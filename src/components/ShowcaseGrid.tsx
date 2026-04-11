import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'The Obsidian Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    aspect: 'aspect-[4/3] md:col-span-2'
  },
  {
    title: 'Aura Spa Retreat',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800',
    aspect: 'aspect-[3/4]'
  },
  {
    title: 'Minimalist Haven',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    aspect: 'aspect-[3/4]'
  },
  {
    title: 'Lumina Corporate',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    aspect: 'aspect-[4/3] md:col-span-2'
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`group overflow-hidden relative cursor-pointer ${project.aspect}`}
    >
      {/* Background shadow/overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />
      
      {/* Image with Scroll Parallax AND Hover Scale */}
      <motion.div style={{ y: yPos, scale }} className="w-full h-[115%] absolute -top-[10%] left-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out origin-center"
        />
      </motion.div>
      
      {/* Hover overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-20 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
        <p className="text-[#D4AF37] uppercase tracking-widest text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.category}
        </p>
        <h4 className="font-display text-2xl md:text-3xl text-white">
          {project.title}
        </h4>
      </div>
    </motion.div>
  );
};

const ShowcaseGrid: React.FC = () => {
  return (
    <section id="portfolio" className="bg-black py-32 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-4">Selected Works</h2>
          <h3 className="font-display text-4xl md:text-5xl text-white">Our Signature Portfolio</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-block px-12 py-4 border border-white/20 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGrid;
