"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { personalData } from "@/lib/config";
import { useEffect, useState } from "react";
import NeuralNetwork from "./NeuralNetwork";
import MagneticButton from "./MagneticButton";
import NeuralIcon from "./NeuralIcon";
import NeuralScrollIndicator from "./NeuralScrollIndicator";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Efecto 3D parallax basado en posición del mouse (inicializado en 0 para SSR)
  const rotateX = useTransform(mouseY, [0, 1000], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1000], [-10, 10]);

  useEffect(() => {
    setMounted(true);

    // Actualizar los rangos una vez que window esté disponible
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Reconfigurar con dimensiones reales
    rotateX.set(0);
    rotateY.set(0);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, rotateX, rotateY]);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Red Neuronal Animada en el fondo */}
      <NeuralNetwork /> 

      {/* Efecto de Matriz/Código cayendo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="matrix-rain" />
      </div>

      {/* Contenido principal con Parallax 3D */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Badge "AI Engineer" con efecto neón */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="px-4 py-2 border border-primary/50 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-sm font-mono tracking-wider">
              &lt;AI_ENGINEER /&gt;
            </span>
          </div>
        </motion.div>

        {/* Nombre con efecto 3D y profundidad */}
        <motion.div
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 relative"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <span className="relative inline-block">
              {personalData.name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.05,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: Math.random() * 10 - 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            {/* Sombra 3D */}
            <div
              className="absolute inset-0 gradient-text opacity-20 blur-sm"
              style={{ transform: "translateZ(-10px)" }}
            >
              {personalData.name}
            </div>
          </h1>
        </motion.div>

        {/* Título con efecto de typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transform: "translateZ(30px)" }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-4 font-mono">
            <span className="text-primary">&gt;</span> {personalData.title}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="text-primary"
            >
              _
            </motion.span>
          </h2>
        </motion.div>

        {/* Tagline con partículas */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ transform: "translateZ(20px)" }}
        >
          {personalData.tagline}
        </motion.p>
      </motion.div>

      {/* Indicador de scroll: Red Neuronal Animada */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-[5] opacity-90">
        <NeuralScrollIndicator />
      </div>
    </section>
  );
}
