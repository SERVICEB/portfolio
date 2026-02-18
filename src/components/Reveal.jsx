import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, width = "100%", delay = 0.2, y = 50 }) => {
  return (
    <div style={{ relative: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: y, filter: "blur(10px)" }} // Commence invisible, bas et flou
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // S'anime au scroll
        viewport={{ once: false, amount: 0.3 }} // S'anime à chaque fois (once: false)
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.17, 0.67, 0.83, 0.67] // Courbe de vitesse "Beziér" pour un effet pro
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;