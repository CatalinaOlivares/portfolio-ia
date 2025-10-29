"use client";

import { motion } from "framer-motion";

export default function NeuralScrollIndicator() {
  // Red neuronal COMPLETA con 4 capas (input, hidden1, hidden2, output)
  const nodes = [
    // Capa de entrada (3 nodos)
    { x: 10, y: 5, size: 3, layer: 0, id: 0 },
    { x: 10, y: 15, size: 3.5, layer: 0, id: 1 },
    { x: 10, y: 25, size: 3, layer: 0, id: 2 },

    // Primera capa oculta (5 nodos)
    { x: 30, y: 3, size: 2.5, layer: 1, id: 3 },
    { x: 30, y: 10, size: 3, layer: 1, id: 4 },
    { x: 30, y: 15, size: 3.5, layer: 1, id: 5 },
    { x: 30, y: 20, size: 3, layer: 1, id: 6 },
    { x: 30, y: 27, size: 2.5, layer: 1, id: 7 },

    // Segunda capa oculta (4 nodos)
    { x: 50, y: 6, size: 2.8, layer: 2, id: 8 },
    { x: 50, y: 12, size: 3.2, layer: 2, id: 9 },
    { x: 50, y: 18, size: 3.2, layer: 2, id: 10 },
    { x: 50, y: 24, size: 2.8, layer: 2, id: 11 },

    // Capa de salida (2 nodos)
    { x: 70, y: 10, size: 3.5, layer: 3, id: 12 },
    { x: 70, y: 20, size: 3.5, layer: 3, id: 13 },
  ];

  // Conexiones completas entre capas
  const connections: { from: number; to: number; weight: number }[] = [];

  // Input -> Hidden1
  for (let i = 0; i <= 2; i++) {
    for (let j = 3; j <= 7; j++) {
      connections.push({ from: i, to: j, weight: Math.random() });
    }
  }

  // Hidden1 -> Hidden2
  for (let i = 3; i <= 7; i++) {
    for (let j = 8; j <= 11; j++) {
      connections.push({ from: i, to: j, weight: Math.random() });
    }
  }

  // Hidden2 -> Output
  for (let i = 8; i <= 11; i++) {
    for (let j = 12; j <= 13; j++) {
      connections.push({ from: i, to: j, weight: Math.random() });
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Red neuronal ELABORADA */}
      <motion.div
        className="w-32 h-32 relative"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 80 30"
          className="w-full h-full"
          fill="none"
        >
          {/* CONEXIONES ELABORADAS con grosor variable */}
          {connections.map((conn, i) => {
            const from = nodes[conn.from];
            const to = nodes[conn.to];
            const weight = conn.weight;

            return (
              <g key={`connection-${i}`}>
                {/* Línea de conexión con grosor basado en peso */}
                <motion.line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="url(#lineGradient)"
                  strokeWidth={0.2 + weight * 0.4}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: [0.2 + weight * 0.3, 0.5 + weight * 0.3, 0.2 + weight * 0.3],
                  }}
                  transition={{
                    pathLength: { duration: 0.8, delay: i * 0.01 },
                    opacity: { duration: 3, repeat: Infinity, delay: i * 0.05 },
                  }}
                />

                {/* MÚLTIPLES pulsos de datos viajando */}
                {i % 4 === 0 && (
                  <>
                    <motion.circle
                      r="0.8"
                      fill={weight > 0.5 ? "#00d9ff" : "#ff00ff"}
                      filter="url(#glow)"
                      initial={{
                        cx: from.x,
                        cy: from.y,
                        opacity: 0,
                      }}
                      animate={{
                        cx: [from.x, to.x],
                        cy: [from.y, to.y],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.03,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Pulso secundario */}
                    <motion.circle
                      r="0.6"
                      fill="#ffffff"
                      opacity="0.8"
                      initial={{
                        cx: from.x,
                        cy: from.y,
                        opacity: 0,
                      }}
                      animate={{
                        cx: [from.x, to.x],
                        cy: [from.y, to.y],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.03 + 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}
              </g>
            );
          })}

          {/* NODOS (neuronas) ELABORADOS */}
          {nodes.map((node, i) => {
            const layerColor =
              node.layer === 0 ? "#00d9ff" : // Input: cyan
              node.layer === 1 ? "#00ffaa" : // Hidden1: verde
              node.layer === 2 ? "#ff00ff" : // Hidden2: magenta
              "#ffaa00"; // Output: naranja

            return (
              <g key={`node-${i}`}>
                {/* Ondas de activación (3 niveles) */}
                {[1, 2, 3].map((wave) => (
                  <motion.circle
                    key={`wave-${wave}`}
                    cx={node.x}
                    cy={node.y}
                    r={node.size + wave * 1.5}
                    fill="none"
                    stroke={layerColor}
                    strokeWidth="0.3"
                    initial={{ opacity: 0 }}
                    animate={{
                      r: [node.size, node.size + wave * 3],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.15 + wave * 0.3,
                    }}
                  />
                ))}

                {/* Partículas orbitales alrededor de nodos activos */}
                {i % 3 === 0 && [0, 120, 240].map((angle) => (
                  <motion.circle
                    key={`particle-${angle}`}
                    r="0.4"
                    fill={layerColor}
                    animate={{
                      cx: [
                        node.x + Math.cos((angle * Math.PI) / 180) * (node.size + 2),
                        node.x + Math.cos(((angle + 360) * Math.PI) / 180) * (node.size + 2),
                      ],
                      cy: [
                        node.y + Math.sin((angle * Math.PI) / 180) * (node.size + 2),
                        node.y + Math.sin(((angle + 360) * Math.PI) / 180) * (node.size + 2),
                      ],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* Anillo de borde */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size + 0.5}
                  fill="none"
                  stroke={layerColor}
                  strokeWidth="0.3"
                  opacity="0.6"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />

                {/* Nodo principal con gradiente */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill={`url(#nodeGradient${node.layer})`}
                  filter="url(#glow)"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />

                {/* Núcleo brillante pulsante */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size * 0.5}
                  fill="#ffffff"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    r: [node.size * 0.4, node.size * 0.6, node.size * 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />

                {/* Anillo interno pulsante */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size * 0.7}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.2"
                  animate={{
                    opacity: [0, 0.5, 0],
                    r: [node.size * 0.5, node.size * 0.8, node.size * 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </g>
            );
          })}

          {/* Gradientes y Filtros */}
          <defs>
            {/* Gradientes por capa */}
            <linearGradient id="nodeGradient0" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#0088cc" />
            </linearGradient>
            <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffaa" />
              <stop offset="100%" stopColor="#00cc88" />
            </linearGradient>
            <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#cc00cc" />
            </linearGradient>
            <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffaa00" />
              <stop offset="100%" stopColor="#cc8800" />
            </linearGradient>

            {/* Gradiente para líneas */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="30%" stopColor="#00ffaa" />
              <stop offset="60%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#ffaa00" />
            </linearGradient>

            {/* Filtro de brillo/glow */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Indicador de procesamiento */}
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Etiquetas de estado */}
      <div className="flex gap-4 items-center">
        <motion.div
          className="flex items-center gap-1.5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[10px] font-mono text-gray-500">INPUT</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          <div className="flex gap-0.5">
            <motion.div
              className="w-0.5 h-2 bg-primary rounded"
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              className="w-0.5 h-2 bg-primary rounded"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-0.5 h-2 bg-primary rounded"
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <span className="text-[10px] font-mono text-gray-500">PROCESSING</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-1.5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="text-[10px] font-mono text-gray-500">OUTPUT</span>
        </motion.div>
      </div>

      {/* Texto "NEURAL NETWORK" */}
      <motion.span
        className="text-primary text-xs font-mono tracking-wider font-bold"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        NEURAL NETWORK
      </motion.span>

      {/* Flecha con pulso mejorada */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
