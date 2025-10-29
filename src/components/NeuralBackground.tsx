"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function NeuralBackground() {
  const [points, setPoints] = useState<Point[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Crear puntos iniciales
    const initialPoints: Point[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));
    setPoints(initialPoints);

    // Animar puntos
    const interval = setInterval(() => {
      setPoints((prevPoints) =>
        prevPoints.map((point) => {
          let { x, y, vx, vy } = point;

          x += vx;
          y += vy;

          // Rebotar en los bordes
          if (x <= 0 || x >= 100) vx *= -1;
          if (y <= 0 || y >= 100) vy *= -1;

          return { x, y, vx, vy };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Esta función ya no se usa pero la dejamos por si acaso
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // No renderizar hasta que esté montado en el cliente
  if (!mounted || points.length === 0) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Líneas conectoras */}
        {points.map((point, i) =>
          points.slice(i + 1).map((otherPoint, j) => {
            const distance = Math.sqrt(
              Math.pow(point.x - otherPoint.x, 2) +
                Math.pow(point.y - otherPoint.y, 2)
            );

            // Solo dibujar líneas si los puntos están cerca
            if (distance < 15) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${otherPoint.x}%`}
                  y2={`${otherPoint.y}%`}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  opacity={1 - distance / 15}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              );
            }
            return null;
          })
        )}

        {/* Puntos */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="2"
            fill="#00d9ff"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Gradiente */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
