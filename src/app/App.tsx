import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        style={{ background: "#09090E" }}
        className="px-8 py-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            Rye
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2025 · Software Engineer · Malaysia
          </span>
        </div>
      </footer>
    </div>
  );
}