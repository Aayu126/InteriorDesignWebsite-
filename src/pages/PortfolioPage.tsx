import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const allProjects = [
  {
    title: 'The Obsidian Penthouse',
    category: 'Residential',
    location: 'New York',
    image: '/images/portfolio_1_1775935312965.png',
    size: 'large'
  },
  {
    title: 'Aura Spa Retreat',
    category: 'Commercial',
    location: 'Los Angeles',
    image: '/images/portfolio_4_1775935356292.png',
    size: 'medium'
  },
  {
    title: 'Minimalist Haven',
    category: 'Residential',
    location: 'London',
    image: '/images/portfolio_3_1775935342676.png',
    size: 'medium'
  },
  {
    title: 'Lumina Corporate',
    category: 'Commercial',
    location: 'Tokyo',
    image: '/images/portfolio_2_1775935328231.png',
    size: 'large'
  },
  {
    title: 'Ethereal Villa',
    category: 'Residential',
    location: 'Monaco',
    image: '/images/portfolio_1_1775935312965.png',
    size: 'medium'
  },
  {
    title: 'The Zenith Gallery',
    category: 'Commercial',
    location: 'Paris',
    image: '/images/portfolio_3_1775935342676.png',
    size: 'large'
  }
];

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 md:px-12 text-white overflow-hidden">
      
      {/* Navigation Back */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute top-8 left-6 md:top-12 md:left-12 z-50"
      >
        <Link to="/" className="inline-flex items-center gap-3 text-white/60 hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs font-semibold group">
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header 
        style={{ y: headerY, opacity: headerOpacity }}
        className="container mx-auto mb-32 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl mb-6"
        >
          Selected Works
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed"
        >
          A curated exhibition of our finest interior design projects, showcasing the intersection of architectural brilliance and bespoke elegance across the globe.
        </motion.p>
      </motion.header>

      {/* About Us (Full Portfolio Context) */}
      <div className="container mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] w-full"
          >
             <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] -z-10 rounded-full" />
             <img 
               src="/images/portfolio_2_1775935328231.png" 
               alt="About Studio" 
               className="w-full h-full object-cover grayscale-[20%] sepia-[10%] brightness-[0.8]"
             />
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#D4AF37]/30 rounded-full border-dashed"
             />
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-[#D4AF37]"></span>
              The Vision
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl mb-8"
            >
              Mastering the Art of Spatial Symphony
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 text-lg leading-relaxed font-light mb-6"
            >
              Our studio approaches every project as a blank canvas, where geometry, light, and texture coalesce into living art. We do not just design rooms; we architect emotions. Each portfolio piece below tells a story of transformation, luxury, and meticulous attention to the unspoken details.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Masonry / Staggered Gallery */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-24 md:gap-40">
          {allProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
              >
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.1 }}
                  className={`w-full ${project.size === 'large' ? 'md:w-3/5' : 'md:w-2/5'} relative group overflow-hidden`}
                >
                  <div className={`aspect-[4/5] object-cover w-full h-full relative`}>
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`w-full ${project.size === 'large' ? 'md:w-2/5' : 'md:w-3/5'} ${isEven ? 'md:text-left' : 'md:text-right'}`}
                >
                  <div className="flex flex-col gap-4">
                    <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">
                      0{index + 1} — {project.category}
                    </p>
                    <h4 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-white/50 text-sm uppercase tracking-widest mt-2">{project.location}</p>
                    <motion.div 
                      className={`h-px w-24 bg-[#D4AF37]/50 mt-6 ${isEven ? 'mr-auto' : 'ml-auto'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 96 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default PortfolioPage;
