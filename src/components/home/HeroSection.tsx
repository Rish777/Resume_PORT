import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToNextSection = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden animated-gradient">
      {/* Particles background */}
      <ParticlesBackground />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-text-primary">Rishabh Shukla</span>
          </h1>
          <div className="h-1 w-24 bg-primary-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl mb-6 text-primary-400 font-medium">ETL Engineer</h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          A seasoned Senior Software Engineer with 5 years of experience in Teradata, Snowflake, SQL, and AWS, specializing in data integration,
 performance tuning, and production support. Skilled in handling complex data from diverse sources with domain
 expertise in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#projects" 
              className="btn btn-primary text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          className="text-text-primary opacity-70 hover:opacity-100 transition-opacity"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
      
      <div ref={scrollRef} className="absolute bottom-0 left-0 right-0 h-1"></div>
    </section>
  );
};

export default HeroSection;