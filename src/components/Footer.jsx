import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Portfolio JS</h3>
            <p className="text-gray-400">
              Développeur web passionné créant des expériences digitales modernes et performantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Réseaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-moi</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              contact@example.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Portfolio JS. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Créé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> et React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;