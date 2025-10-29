"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Barra de progreso superior con efecto neural */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-[9999]"
        style={{ scaleX }}
      >
        {/* Pulso que se mueve con el scroll */}
        <motion.div
          className="absolute right-0 top-0 w-20 h-full bg-white/50 blur-xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Indicador de porcentaje circular (estilo IA) */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollPercentage > 5 ? 1 : 0, scale: scrollPercentage > 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-16 h-16">
          {/* Círculo de fondo */}
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(0, 217, 255, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            {/* Círculo de progreso */}
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress,
              }}
              strokeDasharray="175.93"
              strokeDashoffset="0"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d9ff" />
                <stop offset="100%" stopColor="#ff00ff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Porcentaje en el centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary text-xs font-mono font-bold">
              {scrollPercentage}%
            </span>
          </div>

          {/* Pulso */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
