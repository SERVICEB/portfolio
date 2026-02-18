import React from 'react';
import { Code2, Rocket, Users, Download } from 'lucide-react'; // Ajout de Download
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Code de qualité',
      description: 'Développement de solutions robustes et maintenables avec les meilleures pratiques modernes.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimisation poussée pour garantir des temps de chargement records et une fluidité totale.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Communication transparente et méthodologie agile pour mener à bien vos projets.'
    }
  ];

  return (
    <section id="about" className="h-full w-full py-20 px-6 flex items-center bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          À <span className="text-primary">propos</span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            Développeur web passionné par la création d'applications web modernes et intuitives. 
            Spécialisé dans l'écosystème <span className="text-primary font-semibold">JavaScript (MERN)</span>, 
            je transforme vos idées complexes en produits digitaux élégants.
          </motion.p>

          {/* --- BOUTON CV --- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <a 
              href="/mon-cv.pdf" // Assure-toi de mettre ton fichier PDF dans le dossier 'public'
              download="CV_Anzan_Sosthene.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-primary/50 transition-all transform hover:-translate-y-1"
            >
              <Download size={20} />
              Télécharger mon CV
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;