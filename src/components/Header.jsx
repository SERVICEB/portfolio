import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Plus réactif au scroll
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
        ? 'py-3 bg-black shadow-2xl border-b border-white/10' 
        : 'py-4 md:py-6 bg-transparent' // Moins de padding sur mobile dès le départ
      }`}
    >
      {/* Conteneur interne : Retrait du bg-[#111] pour éviter les décalages visuels */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold flex items-center gap-2 group"
        >
          <span className="bg-primary text-white px-2 py-0.5 md:px-2.5 md:py-1 rounded-lg">
            S
          </span>
          <span className="text-white tracking-tighter">SOSTHENE.DEV</span>
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

        {/* Bouton Menu Mobile - Optimisé pour toucher le bord */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white bg-white/5 rounded-lg border border-white/10 active:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Collé au header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-200 hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 bg-primary text-white rounded-xl text-center font-bold"
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