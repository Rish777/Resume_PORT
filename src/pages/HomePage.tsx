import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import VisualizationSection from '../components/home/VisualizationSection';
// import CodeShowcase from '../components/home/CodeShowcase';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <VisualizationSection />
      {/* <CodeShowcase /> */}
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;