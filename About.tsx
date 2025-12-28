import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-darker relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
                {/* BSI Item */}
                <div className="relative">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-darker" />
                    <h4 className="text-xl font-bold text-white">Bachelor of Information Systems</h4>
                    <p className="text-primary font-medium">Bina Sarana Informatika (BSI)</p>
                    <p className="text-sm text-gray-500 mb-4">2019 - 2023</p>
                    <p className="text-gray-400">
                        Graduated with honors. Focused on System Analysis, Web Development, and Database Management. 
                        Active member of the university coding club.
                    </p>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-darker" />
                    <h4 className="text-xl font-bold text-white">Fullstack Bootcamp</h4>
                    <p className="text-secondary font-medium">Online Certification</p>
                    <p className="text-sm text-gray-500 mb-4">2023</p>
                    <p className="text-gray-400">
                        Intensive course covering modern MERN stack, cloud deployment, and system architecture.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Experience/Philosophy Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <Briefcase size={32} />
                </div>
                <h3 className="text-2xl font-semibold">My Journey</h3>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors">
                <p className="text-gray-300 leading-relaxed mb-6">
                    As a graduate from <strong className="text-white">BSI (Information Systems)</strong>, I have built a strong foundation in understanding how software solves business problems. 
                </p>
                <p className="text-gray-300 leading-relaxed">
                    My name is <strong className="text-white">Syarif Hidayat</strong>. I bridge the gap between complex backend logic and beautiful frontend user experiences. I don't just write code; I build solutions that work efficiently and look stunning.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
                    <Award className="mx-auto text-primary mb-2" size={28} />
                    <h5 className="font-bold text-2xl text-white">3+</h5>
                    <p className="text-gray-500 text-sm">Years Coding</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
                    <Briefcase className="mx-auto text-secondary mb-2" size={28} />
                    <h5 className="font-bold text-2xl text-white">20+</h5>
                    <p className="text-gray-500 text-sm">Projects Done</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;