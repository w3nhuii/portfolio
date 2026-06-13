import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between px-8 pt-20 pb-12 overflow-hidden"
      style={{ background: "#09090E" }}
    >
      {/* Subtle blue glow — bottom right only */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 80%, rgba(43,111,255,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#2B6FFF",
            textTransform: "uppercase",
          }}
          className="mb-7"
        >
          Software Engineer · Malaysia
        </p>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            lineHeight: 1.04,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          Mobile & web
          <br />
          <span style={{ color: "#5B9BFF" }}>built with care.</span>
        </h1>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.5)",
            maxWidth: "440px",
          }}
          className="mt-7"
        >
          I build cross-platform mobile apps and responsive web experiences using Flutter, React Native, React.js, and Vue.js.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              background: "#2B6FFF",
              color: "white",
              padding: "0.75rem 1.75rem",
              borderRadius: "6px",
              display: "inline-block",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="common%20files/Resume%202026.pdf"
            download
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)",
              padding: "0.75rem 1.75rem",
              borderRadius: "6px",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            className="hover:border-white/30 hover:text-white transition-all"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "Email"].map((s) => (
            <a
              key={s}
              href="#"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "rgba(255,255,255,0.35)" }}
              className="hover:text-white/60 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={18} style={{ color: "rgba(255,255,255,0.25)" }} className="hover:opacity-60 transition-opacity" />
        </a>
      </div>
    </section>
  );
}
