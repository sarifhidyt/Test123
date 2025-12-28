import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
              Available for Hire
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Syarif Hidayat</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light mt-2">
              Frontend Developer & <br />
              <span className="text-white font-medium">BSI Informatics Graduate</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-lg leading-relaxed"
          >
            Crafting pixel-perfect, engaging, and accessible digital experiences. 
            Passionate about transforming complex requirements into seamless interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden md:block"
        >
            <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl" />
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm z-10 flex items-center justify-center overflow-hidden">
                    <img 
                        src="https://picsum.photos/600/600?grayscale" 
                        alt="Syarif Hidayat" 
                        className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
                {/* Floating Cards */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 z-20 bg-darker/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-semibold">100% Uptime</span>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-4 z-20 bg-darker/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl flex gap-3 items-center"
                >
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <Download size={20} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Total Projects</p>
                        <p className="text-lg font-bold">15+</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;