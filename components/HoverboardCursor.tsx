import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const HoverboardCursor: React.FC = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
            >
                <div className={`relative flex items-center justify-center transition-all duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
                    <div className="absolute w-8 h-8 border-2 border-cyan-400 rounded-full animate-spin-slow opacity-80" />
                    <div className="absolute w-2 h-2 bg-cyan-400 rounded-full" />
                    <div className="absolute w-12 h-12 border border-cyan-400/30 rounded-full animate-ping opacity-20" />
                </div>
            </motion.div>
        </>
    );
};

export default HoverboardCursor;
