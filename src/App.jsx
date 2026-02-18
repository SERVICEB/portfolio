import React from 'react';
import { MessageCircle } from 'lucide-react'; 

import Header from './components/Header';
import SectionWrapper from './components/SectionWrapper';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contacts';

function App() {
  return (
    /* - Suppression de overflow-x-hidden ici si possible, ou assure-toi qu'il 
         est sur une div qui ne bloque pas le scroll parent.
       - 'block' assure que le flux CSS est standard.
    */
    <div className="relative block w-full bg-background-dark text-white antialiased">
      
      <Header />
      
      <main className="relative w-full">
        {/* Sur mobile, on évite absolument 'h-screen' sur les balises <section>.
           On laisse le contenu (Hero, About, etc.) pousser la hauteur.
        */}
        <section id="home" className="w-full min-h-[fit-content]">
          <SectionWrapper><Hero /></SectionWrapper>
        </section>

        <section id="about" className="w-full min-h-[fit-content]">
          <SectionWrapper><About /></SectionWrapper>
        </section>

        <section id="projects" className="w-full min-h-[fit-content]">
          <SectionWrapper><Projects /></SectionWrapper>
        </section>
          
        <section id="skills" className="w-full min-h-[fit-content]">
          <SectionWrapper><Skills /></SectionWrapper>
        </section>

        <section id="contact" className="w-full min-h-[fit-content]">
          <SectionWrapper><Contact /></SectionWrapper>
        </section>
      </main>

      {/* Bouton WhatsApp */}
      <a 
        href="https://wa.me/2250789569522"
        className="fixed bottom-6 right-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-lg"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}

export default App;