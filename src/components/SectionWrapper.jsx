import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SectionWrapper = ({ children }) => {
  const containerRef = useRef(null);
  
  // On observe le défilement de cette section précise
  // "start start" : quand le haut de la section touche le haut de l'écran
  // "end start" : quand le bas de la section a fini de défiler vers le haut
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  /**
   * OPACITÉ (Transparence) :
   * [0, 0.7, 1] -> La section est à 100% opaque du début (0) jusqu'à 70% du scroll (0.7).
   * Elle ne commence à disparaître (0) que sur les 30 derniers % pour laisser place à la suivante.
   */
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  /**
   * ÉCHELLE (Scale) :
   * La section rétrécit légèrement à la fin pour donner cet effet de profondeur (3D).
   */
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.85]);

  /**
   * FLOU (Blur) :
   * Optionnel mais puissant : ajoute un léger flou à la section qui s'en va.
   */
  const blur = useTransform(scrollYProgress, [0, 0.8, 1], ["blur(0px)", "blur(0px)", "blur(10px)"]);

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        opacity, 
        scale,
        filter: blur // On applique le flou dynamique ici
      }}
      className="h-full w-full flex items-center justify-center bg-background-light dark:bg-background-dark overflow-hidden"
    >
      {/* On ajoute un conteneur motion interne pour s'assurer que le contenu 
          ne dépasse pas et reste parfaitement centré.
      */}
      <div className="w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default SectionWrapper;