
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass-panel rounded-3xl border border-white/5 overflow-hidden hover:border-cyan-400/20 transition-all"
    >
      {/* Image Wrap */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-400/20">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-4">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <button 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A selection of my recent works across AI research, automation, and web engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
