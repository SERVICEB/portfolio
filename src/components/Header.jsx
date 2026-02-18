import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gestion du scroll pour l'effet de flou
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
        ? 'py-4 bg-black/90 backdrop-blur-md shadow-2xl border-b border-white/5' 
        : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center bg-[#111] rounded-full mt-2">
        
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold flex items-center gap-2 group"
        >
          <span className="bg-primary text-white px-2.5 py-1 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            S
          </span>
          <span className="text-white tracking-tighter">SOSTHENE<span className="text-primary">.</span>DEV</span>
        </motion.a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
          >
            Engagez-moi
          </a>
        </nav>

        {/* Bouton Menu Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white bg-white/5 rounded-lg border border-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Overlay Noir Sombre */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-gray-200 hover:text-primary transition-colors flex justify-between items-center group"
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </motion.a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-primary text-white rounded-xl text-center font-bold text-lg"
              >
                Engagez-moi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;