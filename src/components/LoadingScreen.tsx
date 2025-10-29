"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Efecto de matriz en el fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary font-mono text-xs"
                style={{
                  left: `${(i * 5) + 2}%`,
                  top: -20,
                }}
                animate={{
                  y: ["0vh", "120vh"],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              >
                {Array.from({ length: 15 }, () =>
                  String.fromCharCode(33 + Math.floor(Math.random() * 94))
                ).join("\n")}
              </motion.div>
            ))}
          </div>

          {/* Contenido central */}
          <div className="relative z-10 text-center">
            {/* Logo/Título con efecto glitch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold gradient-text mb-4"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 217, 255, 0.5)",
                    "0 0 20px rgba(255, 0, 255, 0.5)",
                    "0 0 10px rgba(0, 217, 255, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AI
              </motion.h1>
              <motion.p
                className="text-xl text-gray-400 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                &lt;PORTFOLIO /&gt;
              </motion.p>
            </motion.div>

            {/* Barra de progreso */}
            <div className="w-80 max-w-md mx-auto">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-primary font-mono text-sm">
                  {Math.min(100, Math.round(progress))}%
                </span>
                <motion.span
                  className="text-gray-500 font-mono text-xs"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  LOADING NEURAL NET...
                </motion.span>
              </div>

              {/* Barra de progreso con efecto neural */}
              <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ x: "-100%" }}
                  animate={{ x: `${progress - 100}%` }}
                  transition={{ duration: 0.3 }}
                />

                {/* Pulso que se mueve */}
                <motion.div
                  className="absolute right-0 top-0 w-20 h-full bg-white/50 blur-xl"
                  animate={{
                    opacity: [0, 1, 0],
                    x: [0, -20, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>

            {/* Indicadores de sistema */}
            <motion.div
              className="mt-8 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                "INITIALIZING NEURAL NETWORK...",
                "LOADING AI MODULES...",
                "CONNECTING SYNAPSES...",
                "CALIBRATING NEURONS...",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="text-xs text-gray-600 font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: progress > i * 25 ? 1 : 0.3,
                    x: 0,
                  }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-primary">&gt;</span> {text}
                  {progress > i * 25 && (
                    <motion.span
                      className="text-primary ml-2"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      [OK]
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Animación de circuito */}
            <div className="absolute -z-10 inset-0 flex items-center justify-center">
              <motion.svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="opacity-20"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx="200"
                    cy="200"
                    r={60 + i * 40}
                    stroke="url(#circleGradient)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0.5, 1, 0.5],
                      rotate: 360,
                    }}
                    transition={{
                      pathLength: { duration: 2, delay: i * 0.2 },
                      opacity: { duration: 2, repeat: Infinity },
                      rotate: { duration: 20 - i * 5, repeat: Infinity, ease: "linear" },
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#ff00ff" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
