"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NeuralIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function NeuralIcon({
  size = 24,
  className = "",
  animated = true
}: NeuralIconProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted && animated) return null;

  // Posiciones de los nodos de la red neuronal
  const nodes = [
    // Capa de entrada (izquierda)
    { x: 2, y: 4, layer: "input" },
    { x: 2, y: 12, layer: "input" },
    { x: 2, y: 20, layer: "input" },

    // Capa oculta (centro)
    { x: 12, y: 2, layer: "hidden" },
    { x: 12, y: 8, layer: "hidden" },
    { x: 12, y: 16, layer: "hidden" },
    { x: 12, y: 22, layer: "hidden" },

    // Capa de salida (derecha)
    { x: 22, y: 8, layer: "output" },
    { x: 22, y: 16, layer: "output" },
  ];

  // Conexiones entre nodos
  const connections = [
    // Input -> Hidden
    { from: 0, to: 3 }, { from: 0, to: 4 }, { from: 0, to: 5 },
    { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 }, { from: 1, to: 6 },
    { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 2, to: 6 },

    // Hidden -> Output
    { from: 3, to: 7 }, { from: 4, to: 7 }, { from: 4, to: 8 },
    { from: 5, to: 7 }, { from: 5, to: 8 },
    { from: 6, to: 8 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      {/* Conexiones (sinapsis) */}
      {connections.map((conn, i) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        return animated ? (
          <motion.line
            key={`conn-${i}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              pathLength: { duration: 0.8, delay: i * 0.05 },
              opacity: { duration: 2, repeat: Infinity, delay: i * 0.1 },
            }}
          />
        ) : (
          <line
            key={`conn-${i}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.4"
          />
        );
      })}

      {/* Nodos (neuronas) */}
      {nodes.map((node, i) => (
        animated ? (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="1"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, delay: i * 0.15 },
            }}
          />
        ) : (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="1"
            fill="currentColor"
          />
        )
      ))}

      {/* Pulso de datos viajando (solo animado) */}
      {animated && connections.slice(0, 3).map((conn, i) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        return (
          <motion.circle
            key={`pulse-${i}`}
            r="0.8"
            fill="currentColor"
            opacity="0.8"
            initial={{
              cx: fromNode.x,
              cy: fromNode.y,
              opacity: 0,
            }}
            animate={{
              cx: [fromNode.x, toNode.x, fromNode.x],
              cy: [fromNode.y, toNode.y, fromNode.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
          />
        );
      })}
    </svg>
  );
}
