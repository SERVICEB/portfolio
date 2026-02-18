import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 75 },
        { name: 'TypeScript', level: 75 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Redux', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST API', level: 70 }
      ]
    },
    {
      title: 'Outils & Autres',
      skills: [
        { name: 'Git', level: 60 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="h-full w-full py-20 px-6 flex items-center bg-transparent">
      <div className="max-w-6xl mx-auto w-full">
        
        <header className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Compétences <span className="text-primary">Techniques</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Technologies et outils que je maîtrise pour créer des applications web performantes.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white border-b border-primary/20 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-primary text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Conteneur de la barre */}
                    <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      {/* Barre animée au scroll */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full shadow-[0_0_10px_rgba(244,133,6,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;