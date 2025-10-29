import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
  return (
    <main className="relative">
      {/* Fondo Neural Interactivo */}
      <NeuralBackground />

      {/* Navbar */}
      <Navbar />

      {/* Secciones */}
      <div id="home">
        <Hero />
      </div>
      <Projects />
      <About />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} - Construido con Next.js, TypeScript y
            Framer Motion
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Diseñado con la Estética Neural
          </p>
        </div>
      </footer>
    </main>
  );
}
