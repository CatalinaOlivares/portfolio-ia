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
      {/* Interactive Neural Background */}
      <NeuralBackground />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
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
            © {new Date().getFullYear()} Catalina Olivares M. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with Next.js, TypeScript & Framer Motion | Designed with Neural Aesthetics
          </p>
        </div>
      </footer>
    </main>
  );
}
