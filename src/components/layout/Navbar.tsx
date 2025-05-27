import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Database, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rishabh_Resume.pdf'; // Replace with your actual file path
    link.download = 'Your_Resume.pdf'; // Optional: specify the default file name
    link.click();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-primary/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container-custom flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center space-x-2">
          <Database size={28} className="text-primary-500" />
          <span className="text-xl font-semibold">
            <span className="text-primary-500">ETL</span> Engineer
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `navbar-link ${isActive ? 'text-primary-400 after:w-full' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
              href="/Rishabh_Resume.pdf" // Replace with the actual path to your resume
              download="Rishabh_Shukla_Resume.pdf" // Specify the desired filename
              className="btn btn-primary flex items-center space-x-1"
            >
              <span>Resume</span>
              <ArrowUpRight size={18} />
            </a>
            </div>
          

        {/* Mobile Navigation Button */}
      
        <button 
          className="md:hidden text-text-primary p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-background-secondary fixed inset-0 z-40 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-2xl font-medium py-2 ${isActive ? 'text-primary-500' : 'text-text-primary'}`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
              href="/Rishabh_Resume.pdf" // Replace with the actual path to your resume
              download="Rishabh_Shukla_Resume.pdf" // Specify the desired filename
              className="btn btn-primary flex items-center space-x-1"
            >
              <span>Resume</span>
              <ArrowUpRight size={18} />
            </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;