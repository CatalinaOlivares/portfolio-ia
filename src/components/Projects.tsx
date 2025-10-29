"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/config";
import { useState } from "react";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-mono text-sm">&lt;proyectos&gt;</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-secondary">//</span> Explorando las fronteras de la IA
          </p>
        </motion.div>

        {/* Grid de proyectos ARRASTRABLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // ARRASTRABLE: permite arrastrar la card
              drag
              dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileDrag={{ scale: 1.1, rotate: 5, cursor: "grabbing" }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 cursor-grab"
            >
              {/* Efecto de red neuronal en el fondo */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                  <pattern
                    id={`neural-${project.id}`}
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="1" fill="#00d9ff" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#neural-${project.id})`} />
                </svg>
              </div>

              {/* Imagen del proyecto con efecto holográfico */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"
                  animate={{
                    x: hoveredId === project.id ? ["0%", "100%", "0%"] : "0%",
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Partículas flotantes */}
                {hoveredId === project.id && (
                  <>
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: "100%",
                        }}
                        animate={{
                          y: "-20%",
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icono del proyecto */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: hoveredId === project.id ? 360 : 0,
                    }}
                    transition={{ duration: 2 }}
                  >
                    <svg
                      className="w-16 h-16 text-primary/50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </motion.div>
                </div>

                {/* Badge de ID del proyecto */}
                <div className="absolute top-3 right-3">
                  <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded border border-primary/30">
                    <span className="text-primary text-xs font-mono">#{project.id}</span>
                  </div>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>

                {/* Tecnologías con efecto neón */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 font-mono"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enlaces con iconos mejorados */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors font-mono"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>&lt;code/&gt;</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors font-mono"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span>demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Efecto de escaneo tipo IA */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0"
                animate={{
                  y: hoveredId === project.id ? ["-100%", "100%"] : "-100%",
                }}
                transition={{ duration: 1.5, repeat: hoveredId === project.id ? Infinity : 0 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Borde brillante animado */}
              {hoveredId === project.id && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 rounded-xl border-2 border-primary shadow-lg shadow-primary/50" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Instrucción de arrastrar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm font-mono">
            <span className="text-primary">💡</span> Tip: Puedes arrastrar las cards
          </p>
        </motion.div>
      </div>
    </section>
  );
}
