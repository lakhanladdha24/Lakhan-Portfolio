import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const MovingStars = () => {
    const starsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (starsRef.current) {
            starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
            starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={50} scale={10} size={4} speed={0.4} opacity={0.5} color="#22d3ee" />
        </group>
    );
};

const FuturisticBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-slate-950">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <MovingStars />
            </Canvas>
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />
        </div>
    );
};

export default FuturisticBackground;
