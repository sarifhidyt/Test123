import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-10 right-0 text-9xl font-bold text-white/5 pointer-events-none select-none">
            SKILLS
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset developed through academic study at BSI and hands-on professional projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-darker flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="text-primary group-hover:text-secondary transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>{skill.category}</span>
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;