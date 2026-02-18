import React, { useState, useRef } from 'react';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Identifiants EmailJS mis à jour
    const SERVICE_ID = "service_9ipvkte"; 
    const TEMPLATE_ID = "template_bepb429";
    const PUBLIC_KEY = "HAu96-csxCYx8Z5hl";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert(`Merci ${formData.name}, votre message a bien été envoyé !`);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Erreur EmailJS:", error);
        alert("Oups ! Une erreur s'est produite lors de l'envoi.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen w-full pt-32 pb-20 px-6 flex flex-col items-center justify-start bg-white dark:bg-background-dark"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header de la section */}
        <header className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Contactez-<span className="text-primary">Moi</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me laisser un message, 
            je vous répondrai sous 24h.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- COLONNE INFOS --- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Restons en contact
            </h3>

            <div className="space-y-5">
              {/* WhatsApp */}
              <motion.div 
                whileHover={{ x: 10 }} 
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 group transition-all"
              >
                <div className="p-3 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider">WhatsApp</h4>
                  <a href="https://wa.me/2250789569522" target="_blank" rel="noreferrer" className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors block truncate">
                    +225 07 89 56 95 22
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ x: 10 }} 
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 group transition-all"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider">Email</h4>
                  <a href="mailto:anzaam8647@gmail.com" className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors block truncate">
                    anzaam8647@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Localisation */}
              <motion.div 
                whileHover={{ x: 10 }} 
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 group transition-all"
              >
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider">Localisation</h4>
                  <p className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200">Abidjan-Riviera, CI</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- COLONNE FORMULAIRE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-800"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Nom Complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                  placeholder="Sosthene Anzan"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-600"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                type="submit"
                className={`w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all ${
                  isSending ? 'opacity-70 cursor-wait' : 'hover:bg-primary-dark active:scale-95'
                }`}
              >
                {isSending ? 'Envoi en cours...' : 'Envoyer le message'} <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;