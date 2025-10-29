"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/config";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-400">
            Conoce mi trayectoria y pasión por la IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Mi Historia
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Educación */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Educación
              </h3>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white">
                  {personalData.education.degree}
                </h4>
                <p className="text-gray-400">
                  {personalData.education.institution}
                </p>
                <p className="text-gray-500 text-sm">
                  {personalData.education.period}
                </p>
                <p className="text-gray-300 mt-2">
                  {personalData.education.specialization}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experiencia */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Experiencia Profesional
            </h3>
            {personalData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative overflow-hidden group"
              >
                {/* Línea de tiempo */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />

                <div className="ml-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-primary font-semibold mt-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                  <p className="text-gray-300 mt-3">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
