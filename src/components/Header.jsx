import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On détecte le scroll immédiatement (dès 10px)
      setIsScrolled(window.scrollY > 10);
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
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
        ? 'py-2 bg-black shadow-2xl border-b border-white/10' 
        : 'py-3 md:py-5 bg-black/50 backdrop-blur-sm' // Fond sombre même au début pour éviter les mélanges
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-2xl font-bold flex items-center gap-2 group"
        >
          <span className="bg-primary text-white px-2 py-0.5 rounded-lg">
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
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="px-5 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            Engagez-moi
          </a>
        </nav>

        {/* Bouton Menu Mobile - Positionné haut */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-white bg-white/10 rounded-md border border-white/10"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Collé au bord */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5 bg-black">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-200 hover:text-primary border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-primary text-white rounded-lg text-center font-bold"
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