"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Formas geométricas 3D
  const shapes = [
    // Cubos
    { type: "cube", size: 40, x: 10, y: 20, delay: 0 },
    { type: "cube", size: 30, x: 85, y: 60, delay: 1 },
    { type: "cube", size: 35, x: 15, y: 75, delay: 2 },

    // Esferas/Círculos
    { type: "sphere", size: 50, x: 70, y: 15, delay: 0.5 },
    { type: "sphere", size: 25, x: 30, y: 50, delay: 1.5 },
    { type: "sphere", size: 40, x: 90, y: 85, delay: 2.5 },

    // Pirámides (triángulos)
    { type: "pyramid", size: 45, x: 50, y: 30, delay: 1 },
    { type: "pyramid", size: 35, x: 20, y: 90, delay: 2 },

    // Toroides (anillos)
    { type: "torus", size: 55, x: 80, y: 40, delay: 1.5 },
    { type: "torus", size: 30, x: 40, y: 10, delay: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [-20, 20, -20],
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 20 + shape.delay * 5,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "cube" && (
            <div
              className="relative"
              style={{
                width: shape.size,
                height: shape.size,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Cubo 3D */}
              <div className="absolute inset-0 border-2 border-primary/30 backdrop-blur-sm bg-primary/5">
                {/* Líneas diagonales para dar efecto 3D */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full border-r-2 border-b-2 border-secondary/20" />
                </div>
              </div>
            </div>
          )}

          {shape.type === "sphere" && (
            <div
              className="rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"
              style={{
                width: shape.size,
                height: shape.size,
              }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          )}

          {shape.type === "pyramid" && (
            <div
              className="relative"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(0, 217, 255, 0.2)`,
              }}
            >
              {/* Líneas internas */}
              <div
                className="absolute"
                style={{
                  top: shape.size / 2,
                  left: -shape.size / 4,
                  width: 1,
                  height: shape.size / 2,
                  background: "rgba(255, 0, 255, 0.3)",
                  transform: "rotate(30deg)",
                }}
              />
            </div>
          )}

          {shape.type === "torus" && (
            <div
              className="relative rounded-full border-4 border-primary/30"
              style={{
                width: shape.size,
                height: shape.size,
              }}
            >
              {/* Anillo interno */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-secondary/30"
                style={{
                  width: shape.size * 0.6,
                  height: shape.size * 0.6,
                }}
              />
              {/* Pulso */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          )}

          {/* Código binario flotante alrededor */}
          {i % 3 === 0 && (
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary/30 text-xs font-mono whitespace-nowrap"
              animate={{
                opacity: [0, 1, 0],
                y: [-10, 10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: shape.delay,
              }}
            >
              {Array.from({ length: 8 }, () => Math.round(Math.random())).join("")}
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Partículas pequeñas adicionales */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
