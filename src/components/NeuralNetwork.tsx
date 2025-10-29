"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function NeuralNetwork() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<[number, number][]>([]);

  useEffect(() => {
    // Crear partículas iniciales (nodos de la red)
    // Las partículas solo aparecen en la mitad inferior (y: 50-100%)
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 50 + Math.random() * 50, // Solo en la mitad inferior de la pantalla
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    setParticles(initialParticles);

    // Animación de movimiento de partículas
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newVx = p.vx;
          let newVy = p.vy;

          // Rebotar en los bordes horizontales
          if (newX <= 0 || newX >= 100) {
            newVx = -p.vx;
            newX = p.x;
          }
          // Rebotar en los bordes verticales (solo mitad inferior: 50-100%)
          if (newY <= 50 || newY >= 100) {
            newVy = -p.vy;
            newY = p.y;
          }

          return { ...p, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Calcular conexiones entre partículas cercanas
  useEffect(() => {
    const maxDistance = 15; // Distancia máxima para conectar
    const newConnections: [number, number][] = [];

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          newConnections.push([i, j]);
        }
      }
    }

    setConnections(newConnections);
  }, [particles]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full">
        {/* Conexiones (sinapsis) */}
        {connections.map(([i, j], idx) => {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = 1 - distance / 15;

          return (
            <motion.line
              key={`${i}-${j}-${idx}`}
              x1={`${p1.x}%`}
              y1={`${p1.y}%`}
              x2={`${p2.x}%`}
              y2={`${p2.y}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity={opacity * 0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}

        {/* Definir gradiente para las líneas */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Partículas (neuronas) */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: "radial-gradient(circle, #00d9ff 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {/* Brillo de la neurona */}
            <div className="absolute inset-0 rounded-full bg-primary blur-sm opacity-50" />
          </motion.div>
        ))}
      </div>

      {/* Pulsos de datos viajando */}
      {connections.slice(0, 10).map(([i, j], idx) => {
        const p1 = particles[i];
        const p2 = particles[j];

        return (
          <motion.div
            key={`pulse-${idx}`}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${p1.x}%`,
              top: `${p1.y}%`,
            }}
            animate={{
              left: [`${p1.x}%`, `${p2.x}%`],
              top: [`${p1.y}%`, `${p2.y}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.3,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
