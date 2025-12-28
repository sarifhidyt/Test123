import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
        {/* Decorative Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind or want to hire me? Let's talk.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <p className="text-gray-400">
                I am currently available for freelance work and full-time positions. 
                Based in Indonesia, open to remote work worldwide.
            </p>

            <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <Mail size={20} />
                    </div>
                    <span>syarifhidyt@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                        <Phone size={20} />
                    </div>
                    <span>+62 821 2732 1751</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-500">
                        <MapPin size={20} />
                    </div>
                    <span>Bandung, Indonesia</span>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                    {SOCIALS.map(social => (
                        <a 
                            key={social.platform}
                            href={social.url}
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300"
                            aria-label={social.platform}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
          </div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Name</label>
                    <input type="text" className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Syarif Hidayat" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input type="email" className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="syarif@gmail.com" />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input type="text" className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Project Inquiry" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Syarif Hidayat. All rights reserved.</p>
            <p className="mt-2">Graduate of Information Systems, Bina Sarana Informatika (BSI).</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;