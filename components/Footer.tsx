
import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Cpu className="text-cyan-400 w-6 h-6" />
            <span className="text-white">Lakhan</span>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lakhan Laddha. Built with React & AI.
          </p>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Back to Top 
            <div className="p-2 glass-panel rounded-full group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
