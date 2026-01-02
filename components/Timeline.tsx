
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Milestone } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950/30 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Roadmap</div>
          <h2 className="text-4xl font-bold">Journey & Achievements</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center md:justify-between ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Desktop Gap */}
                <div className="hidden md:block w-5/12" />

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-950 border-2 border-cyan-400 rounded-full z-10 transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                {/* Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-400/20 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-slate-900 text-cyan-400">
                        {item.type === 'education' && <GraduationCap className="w-5 h-5" />}
                        {item.type === 'certification' && <Award className="w-5 h-5" />}
                        {item.type === 'project' && <Milestone className="w-5 h-5" />}
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                    <div className="text-cyan-400/80 text-sm font-semibold mb-3">{item.organization}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
