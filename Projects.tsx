import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
            </motion.div>
            
            <motion.a 
                href="https://github.com"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors mt-4 md:mt-0"
            >
                View Github Profile <ExternalLink size={16} />
            </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-darker/50 group-hover:bg-transparent transition-colors z-10" />
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.demoUrl} className="flex-1 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                        <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href={project.repoUrl} className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10">
                        <Github size={14} /> Code
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <a href="#" className="text-primary font-semibold inline-flex items-center gap-2">
                View All Projects <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;