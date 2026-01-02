import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Brain, Database, Globe } from 'lucide-react';

const SPECIALITIES = [
    { text: "Generative AI", icon: <Brain className="w-4 h-4" /> },
    { text: "Computer Vision", icon: <Globe className="w-4 h-4" /> },
    { text: "Data Engineering", icon: <Database className="w-4 h-4" /> },
    { text: "LLM Fine-tuning", icon: <Cpu className="w-4 h-4" /> },
    { text: "Full Stack Dev", icon: <Code className="w-4 h-4" /> },
];

const FloatingHUD: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SPECIALITIES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed bottom-8 right-8 z-40 hidden md:block"
        >
            <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col gap-1 pr-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        System Identity
                    </span>
                    <div className="h-6 relative min-w-[140px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center gap-2 text-cyan-400 font-bold"
                            >
                                {SPECIALITIES[index].icon}
                                <span>{SPECIALITIES[index].text}</span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Decorative scanning line */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none"
                    animate={{ top: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        </motion.div>
    );
};

export default FloatingHUD;
