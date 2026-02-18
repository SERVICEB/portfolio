import React from 'react';
import { Github, Mail, Linkedin, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// IMPORTATION DES STYLES
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  // Contenu des slides mis à jour
  const slides = [
    {
      title: "Développeur Web FullStack MERN",
      text: "Je suis Sosthene ANZAN. Je code avec la pile MERN (MongoDB, Express, React, Node.js) pour créer des applications web modernes, scalables et performantes.",
      tag: "Expertise MERN",
    },
    {
      title: "Solutions Innovantes & Créatives",
      text: "Transformer des idées complexes en expériences digitales exceptionnelles est ma passion. Je repousse les limites de la technologie pour vous.",
      tag: "Vision Produit",
    }
  ];

  return (
    /**
     * bg-african-pattern : Ton motif personnalisé
     * dark:bg-background-dark : Support du mode sombre avec tes couleurs
     */
    <section className="h-full w-full flex items-center justify-center py-10 bg-background-light dark:bg-background-dark bg-african-pattern">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }} // Indispensable pour éviter la superposition de texte
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          // Hauteur fixe pour assurer la stabilité visuelle
          className="rounded-3xl shadow-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 min-h-[550px] md:min-h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="py-16 md:py-24 px-8 text-center flex flex-col items-center justify-center min-h-[550px] md:min-h-[500px]">
                
                {/* Badge de spécialité */}
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase"
                >
                  {slide.tag}
                </motion.span>

                {/* Titre avec animation d'entrée */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight"
                >
                  {slide.title}
                </motion.h1>
                
                {/* Texte de présentation */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  {slide.text}
                </motion.p>

                {/* Boutons d'Appel à l'action (CTA) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4 justify-center mb-12"
                >
                  <a href="#contact" className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all font-bold flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95">
                    Me contacter <Mail size={18} />
                  </a>
                  <a href="#projects" className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all font-bold flex items-center gap-2 active:scale-95">
                    Voir mes projets <ChevronRight size={18} />
                  </a>
                </motion.div>

                {/* Liens réseaux sociaux mis à jour */}
                <div className="flex gap-8 justify-center border-t border-gray-100 dark:border-gray-700 pt-8 w-full max-w-xs">
                  <motion.a 
                    whileHover={{ y: -3, color: '#f48506' }} 
                    href="https://github.com/SERVICEB" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-400 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -3, color: '#f48506' }} 
                    href="https://www.linkedin.com/feed/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;