import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Menu, X, Database, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background-primary/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="container-custom flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Database size={28} className="text-primary-500" />
            <span className="text-xl font-semibold">
              <span className="text-primary-500">Data</span> Engineer
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
              href="/Resume_PORT/Rishabh_Resume.pdf"
              download="Rishabh_Shukla_Resume.pdf"
              className="btn btn-primary flex items-center space-x-1"
            >
              <span>Resume</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-text-primary p-2 z-[999]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu — rendered via Portal directly onto body */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="fixed inset-0 w-screen h-screen z-[990] flex flex-col pt-24 px-6"
              style={{ backgroundColor: '#0F172A' }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-2xl font-medium py-2 border-b border-background-accent ${
                        isActive ? 'text-primary-500' : 'text-text-primary'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a
                  href="/Resume_PORT/Rishabh_Resume.pdf"
                  download="Rishabh_Shukla_Resume.pdf"
                  className="btn btn-primary flex items-center justify-center space-x-2 mt-4"
                  onClick={closeMenu}
                >
                  <span>Resume</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;