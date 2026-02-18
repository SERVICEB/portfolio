import React from 'react';
// Icônes et UI
import { MessageCircle } from 'lucide-react'; 

// Composants de structure
import Header from './components/Header';
import SectionWrapper from './components/SectionWrapper';

// Sections du portfolio
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contacts';

function App() {
  return (
    /**
     * CONFIGURATION DU CONTENEUR :
     * - h-screen : On bloque la hauteur à celle de l'écran.
     * - overflow-y-auto : On permet le défilement vertical.
     * - snap-y snap-mandatory : Force l'arrêt précis sur chaque section (magnétisme).
     */
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-background-dark text-white antialiased selection:bg-primary/30 scroll-smooth">
      
      {/* Le Header reste fixé en haut grâce à son propre CSS (fixé ou sticky) */}
      <Header />
      
      <main>
        {/** * MOTIF DE SECTION :
         * Chaque <section> définit la zone de "Snap" (100vh).
         * La div interne "sticky top-0" permet l'effet de superposition (engloutissement).
         */}

        {/* --- SECTION 1 : ACCUEIL --- */}
        <section className="relative h-screen w-full snap-start snap-always">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <SectionWrapper><Hero /></SectionWrapper>
          </div>
        </section>

        {/* --- SECTION 2 : À PROPOS --- */}
        <section className="relative h-screen w-full snap-start snap-always">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <SectionWrapper><About /></SectionWrapper>
          </div>
        </section>

        {/* --- SECTION 3 : PROJETS --- */}
        <section className="relative h-screen w-full snap-start snap-always">
          {/* Note : overflow-y-auto ici pour permettre de voir tous les projets 
              si la liste est longue, tout en restant "collé" en haut. */}
          <div className="sticky top-0 h-screen w-full overflow-y-auto custom-scrollbar">
            <SectionWrapper>
              <Projects />
            </SectionWrapper>
          </div>
        </section>
          
        {/* --- SECTION 4 : COMPÉTENCES --- */}
        <section className="relative h-screen w-full snap-start snap-always">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <SectionWrapper>
              <Skills />
            </SectionWrapper>
          </div>
        </section>

        {/* --- SECTION 5 : CONTACT --- */}
        <section className="relative h-screen w-full snap-start snap-always">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <SectionWrapper>
              <Contact />
            </SectionWrapper>
          </div>
        </section>
      </main>

      {/* --- BOUTON FLOTTANT WHATSAPP --- 
          Placé en dehors du <main> pour rester visible peu importe la section.
      */}
      <a 
        href="https://wa.me/2250789569522"
        className="fixed bottom-6 right-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactez-moi sur WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

    </div>
  );
}

export default App;