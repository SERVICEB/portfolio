import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: 'Service Securit',
      description: 'Site web vitrine pour une société de sécurité basée à Abidjan, optimisé pour la conversion.',
      image: 'https://service-securit.onrender.com/images/hero.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/SERVICEB/security_web_Site',
      demo: 'https://service-securit.onrender.com/'
    },
    {
      title: 'CaseAfric',
      description: 'Plateforme web dédiée à la mutuelle CaseAfric, facilitant la gestion des membres.',
      image: 'https://caseafric.com/images/logocaseok.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      demo: 'https://poetic-toffee-49ca88.netlify.app/'
    },
    {
      title: 'Y ELOGE',
      description: 'Plateforme moderne de gestion de biens immobiliers et de réservations en ligne.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop', // Remplacement par une image valide
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      demo: 'https://ema-v3-front.onrender.com/reserve'
    },
  ];

  return (
    /**
     * h-full + overflow-y-auto : Permet de voir tous les projets 
     * sans être bloqué par le Snap Scroll du parent.
     */
    <section id="projects" className="h-full w-full py-20 px-6 overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Mes <span className="text-primary">Projets</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes, conçues avec précision et passion.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 pb-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group"
            >
              {/* Image avec Overlay au Hover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"; }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags utilisant ta couleur Primary */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Liens avec effets au hover */}
                <div className="flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;