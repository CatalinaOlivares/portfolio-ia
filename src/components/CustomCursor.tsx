"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detectar si es móvil
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Rastrear elementos interactivos
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );

    window.addEventListener("mousemove", moveCursor);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // No renderizar hasta que esté montado (evita error de hidratación)
  if (!isMobile && typeof window === 'undefined') return null;

  // No mostrar cursor personalizado en móviles
  if (isMobile) return null;

  return (
    <>
      {/* Ocultar cursor predeterminado */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Cursor principal (nodo neural) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Círculo exterior con pulso */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.3 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 border-2 border-primary rounded-full" />

          {/* Anillo de pulso */}
          <motion.div
            className="absolute inset-0 border-2 border-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Punto central (núcleo del nodo) */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />

          {/* Brillo del núcleo */}
          <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-75" />
        </motion.div>

        {/* Partículas orbitales (cuando hover) */}
        {isHovering && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-secondary rounded-full"
                animate={{
                  x: [0, Math.cos(i * Math.PI / 2) * 20, 0],
                  y: [0, Math.sin(i * Math.PI / 2) * 20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}

        {/* Rastro de datos (efecto de líneas) */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-4 bg-gradient-to-b from-primary to-transparent"
              style={{
                transform: `rotate(${i * 120}deg) translateY(-12px)`,
              }}
            />
          ))}
        </motion.div>

        {/* Texto "AI" cuando hover */}
        {isHovering && (
          <motion.div
            className="absolute -translate-x-1/2 translate-y-8 text-primary text-xs font-mono whitespace-nowrap"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0 }}
          >
            &lt;AI/&gt;
          </motion.div>
        )}
      </motion.div>

      {/* Rastro del cursor (trail effect) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-md"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </>
  );
}
