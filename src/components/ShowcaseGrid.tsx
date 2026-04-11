import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'The Obsidian Penthouse',
    category: 'Residential',
    image: '/images/portfolio_1_1775935312965.png',
    aspect: 'aspect-[4/3] md:col-span-2'
  },
  {
    title: 'Aura Spa Retreat',
    category: 'Commercial',
    image: '/images/portfolio_4_1775935356292.png',
    aspect: 'aspect-[3/4]'
  },
  {
    title: 'Minimalist Haven',
    category: 'Residential',
    image: '/images/portfolio_3_1775935342676.png',
    aspect: 'aspect-[3/4]'
  },
  {
    title: 'Lumina Corporate',
    category: 'Commercial',
    image: '/images/portfolio_2_1775935328231.png',
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
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, type: "spring", bounce: 0.2 }}
      className={`group overflow-hidden relative cursor-pointer ${project.aspect} transform-gpu`}
    >
      {/* Background shadow/overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700 z-10" />
      
      {/* Image with Scroll Parallax AND Hover Scale */}
      <motion.div style={{ y: yPos, scale }} className="w-full h-[115%] absolute -top-[10%] left-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out origin-center"
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
          <Link to="/portfolio" className="inline-block relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest relative overflow-hidden transition-all duration-300 shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)]"
            >
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Explore More</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGrid;
