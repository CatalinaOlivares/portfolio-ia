"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Efecto magnético: atrae el botón hacia el cursor
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative group ${className}`}
        style={{
          x: springX,
          y: springY,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Contenido del botón */}
        <span className="relative z-10">{children}</span>

        {/* Efecto de brillo que sigue al cursor */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-lg opacity-30"
            style={{
              background: `radial-gradient(circle at ${springX}px ${springY}px, rgba(0, 217, 255, 0.4), transparent 50%)`,
            }}
          />
        )}

        {/* Borde animado */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Partículas al hacer hover */}
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos(i * Math.PI / 2) * 30],
                  y: [0, Math.sin(i * Math.PI / 2) * 30],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </>
        )}
      </Component>
    </div>
  );
}
