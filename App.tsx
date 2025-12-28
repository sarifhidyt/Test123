import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simple loading simulation for smooth entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-darker flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <h1 className="text-2xl font-bold text-white tracking-widest animate-pulse">SH.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-darker text-white min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;