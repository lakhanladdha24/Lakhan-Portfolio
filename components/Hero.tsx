import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const ROLES = [
  { text: "AI Engineer", emoji: "🤖" },
  { text: "ML Engineer", emoji: "🧠" },
  { text: "NLP Specialist", emoji: "🗣️" },
  { text: "Deep Learning", emoji: "🕸️" },
  { text: "Data Scientist", emoji: "📊" }
];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 text-center md:text-left">
        {/* Left Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border-2 border-white/10 glass-panel shadow-2xl">
            <img
              src="https://res.cloudinary.com/dcqeyu7bh/image/upload/v1766822200/Gemini_Generated_Image_h9xsagh9xsagh9xs_wj5qdc.png"
              alt="Lakhan Laddha"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Technical UI corner elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Right Side: Hero Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass-panel text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-cyan-400/20"
          >
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight"
          >
            Lakhan <span className="text-glow-cyan text-cyan-400">Laddha</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl mb-8 font-medium"
          >
            <span className="text-slate-400">I am Passionate</span>
            <div className="relative h-8 overflow-hidden inline-block min-w-[200px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex].text}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute left-0 text-cyan-400 whitespace-nowrap flex items-center gap-2"
                >
                  {ROLES[roleIndex].text} <span>{ROLES[roleIndex].emoji}</span>
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg"
          >
            Aspiring AI Engineer skilled in
            <span className="text-white"> Python</span>, <span className="text-white">Web Development</span>,
            and <span className="text-white">Generative AI</span>, focused on solving real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>

            <a
              href="/resume.pdf"
              download="Lakhan_Laddha_Resume.pdf"
              className="group px-8 py-4 glass-panel border border-white/10 text-white font-bold rounded-lg transition-all hover:bg-white/5 hover:scale-105 flex items-center gap-2"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center md:justify-start justify-center gap-6"
          >
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/lakhanladdha24" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/lakhan-laddha-60593b304/" },
              { icon: <ExternalLink className="w-5 h-5" />, href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 glass-panel rounded-full text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
