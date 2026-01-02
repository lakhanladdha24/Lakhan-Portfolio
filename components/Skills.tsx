
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Code2, Globe, Layout, 
  Sparkles, Database, BrainCircuit, Workflow, 
  Github, Cpu, LucideIcon, Table, BarChart3, 
  LineChart, Network, BookOpen, Cloud, GitBranch, Code
} from 'lucide-react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal, Code2, Globe, Layout, Sparkles, Database, 
  BrainCircuit, Workflow, Github, Cpu, Table, 
  BarChart3, LineChart, Network, BookOpen, Cloud, GitBranch, Code
};

const SkillCard: React.FC<{ name: string; icon: string; delay: number }> = ({ name, icon, delay }) => {
  const Icon = ICON_MAP[icon] || Terminal;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="group relative p-6 glass-panel rounded-2xl border border-white/5 hover:border-cyan-400/20 transition-all cursor-default overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:to-cyan-400/5 transition-all" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-slate-900 text-slate-400 group-hover:text-cyan-400 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{name}</span>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | SkillCategory>('All');
  const filteredSkills = activeTab === 'All' ? SKILLS : SKILLS.filter(s => s.category === activeTab);

  const tabs: ('All' | SkillCategory)[] = [
    'All',
    'Programming Languages',
    'Data Science & AI Libraries',
    'Artificial Intelligence',
    'Tools & Platforms'
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950/50 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row justify-between xl:items-end gap-8 mb-12">
          <div>
            <div className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Stack</div>
            <h2 className="text-4xl font-bold mb-2">Skills & Technologies</h2>
            <p className="text-slate-500 max-w-lg">Expertise spanning core development to cutting-edge AI implementation.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 glass-panel p-2 rounded-2xl md:rounded-full border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl md:rounded-full text-[10px] md:text-xs font-bold transition-all uppercase tracking-wider ${
                  activeTab === tab ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'Programming Languages' && '💻 '}
                {tab === 'Data Science & AI Libraries' && '📊 '}
                {tab === 'Artificial Intelligence' && '🤖 '}
                {tab === 'Tools & Platforms' && '🛠 '}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, i) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon} 
              delay={i * 0.05} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
