
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Sparkles, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: <Sparkles className="text-cyan-400" />,
      title: "Generative AI & RAG",
      desc: "Building advanced RAG workflows and AI agents using LangChain and OCI frameworks."
    },
    {
      icon: <Database className="text-blue-400" />,
      title: "Data Engineering",
      desc: "Designing end-to-end workflows with NumPy and pandas for complex transformations."
    },
    {
      icon: <Brain className="text-violet-400" />,
      title: "ML & Deep Learning",
      desc: "Developing, training, and evaluating models with a focus on explainability."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Architecting Intelligence <br />
              <span className="text-slate-500 text-3xl md:text-4xl">Through Data & Innovation.</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a versatile software and data practitioner proficient in <span className="text-white font-medium">Python, SQL, and C</span>. I specialize in the full lifecycle of AI—from data transformation to deploying production-ready Generative AI prototypes.
              </p>
              <p>
                As a certified <span className="text-cyan-400 font-semibold">OCI 2025 Generative AI Professional</span> and <span className="text-blue-400 font-semibold">Vertex AI Prompt Designer</span>, I build robust RAG workflows and AI agents using LangChain, emphasizing model explainability and reproducible experimentation.
              </p>
              <p>
                My approach combines rigorous technical engineering with a strategic mindset developed during my <span className="text-white">2-year tenure as a Campus Ambassador at Viral Fission</span>, where I led impactful youth marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 group hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-cyan-400 w-5 h-5" />
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-500">Certified</div>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">OCI GenAI Professional</div>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/5 group hover:border-blue-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-blue-400 w-5 h-5" />
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-500">Visualization</div>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Seaborn Insights Expert</div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 flex gap-6 group hover:border-cyan-400/30 transition-all duration-500"
              >
                <div className="p-4 rounded-xl bg-slate-900 group-hover:scale-110 transition-transform h-fit">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
