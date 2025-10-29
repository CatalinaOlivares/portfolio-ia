"use client";

import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/lib/config";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-mono text-sm">&lt;projects&gt;</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-secondary">//</span> Exploring the frontiers of AI
          </p>
        </motion.div>

        {/* DRAGGABLE projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // DRAGGABLE: allows dragging the card
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
              {/* Neural network background effect */}
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

              {/* Project image with holographic effect */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"
                  animate={{
                    x: hoveredId === project.id ? ["0%", "100%", "0%"] : "0%",
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Floating particles */}
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

                {/* Project icon */}
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

                {/* Project ID badge */}
                <div className="absolute top-3 right-3">
                  <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded border border-primary/30">
                    <span className="text-primary text-xs font-mono">#{project.id}</span>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>

                {/* Technologies with neon effect */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
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
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium text-gray-500 rounded-full border border-gray-700 font-mono">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg font-mono text-sm transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details →
                </motion.button>
              </div>

              {/* AI scanning effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0"
                animate={{
                  y: hoveredId === project.id ? ["-100%", "100%"] : "-100%",
                }}
                transition={{ duration: 1.5, repeat: hoveredId === project.id ? Infinity : 0 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Animated glowing border */}
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

        {/* Drag instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm font-mono">
            <span className="text-primary">💡</span> Tip: You can drag the cards or click "View Details" for more info
          </p>
        </motion.div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 border-2 border-primary/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-red-500/20 border border-gray-700 hover:border-red-500 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-red-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>

              {/* Modal content */}
              <div className="p-8">
                {/* Header with animated gradient */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25"
                    animate={{
                      opacity: [0.25, 0.5, 0.25],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-primary text-sm font-mono">#{selectedProject.id}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
                          {selectedProject.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-mono">
                    &lt;Description /&gt;
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-mono">
                    &lt;Technologies /&gt;
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/30 font-mono hover:bg-primary/20 transition-all"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(0, 217, 255, 0.5)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-black border-2 border-primary rounded-lg font-mono font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>View on GitHub</span>
                    </motion.a>
                  )}
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 bg-secondary/10 hover:bg-secondary text-secondary hover:text-black border-2 border-secondary rounded-lg font-mono font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 217, 255, 0.3)",
                    "0 0 40px rgba(0, 217, 255, 0.5)",
                    "0 0 20px rgba(0, 217, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
