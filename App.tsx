
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import FuturisticBackground from './components/FuturisticBackground';
import HoverboardCursor from './components/HoverboardCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-24 h-24 mb-6"
            >
              <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-full" />
              <motion.div
                className="absolute inset-0 border-4 border-t-cyan-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-cyan-400 font-bold">LL</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]"
            >
              Initializing Systems...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
        animate={!isLoading ? {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        } : {}}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1], // Quintic Out
          delay: 0.2
        }}
        className="relative min-h-screen"
      >
        <FuturisticBackground />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>

        <Footer />
      </motion.div>

      <HoverboardCursor />
    </div>
  );
};

export default App;
