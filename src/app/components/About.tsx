const skills = [
  "Flutter", "React Native", "React.js", "Vue.js",
  "Spring Boot", "Java", "MySQL", "RESTful APIs",
  "Tailwind CSS", "Git & Git Flow", "MVVM Architecture",
  "iOS & Android", "App Store Deployment", "AWS",
];

export function About() {
  return (
    <section id="about" className="bg-background py-28 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#2B6FFF",
              textTransform: "uppercase",
            }}
            className="mb-5"
          >
            About
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              lineHeight: 1.1,
              fontWeight: 900,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            Full-stack, front to back.
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}>
            I'm a full-stack developer with experience building end-to-end products across maritime logistics, retail, and analytics — from mobile and web frontends to backend APIs and database design. I care about UI/UX detail and writing clean, maintainable code.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}>
            Currently at Bunkerchain in Malaysia building Flutter and Vue.js applications for the maritime industry. Previously at Agmo Studio delivering multi-client mobile projects and consistently improving app store ratings.
          </p>

          <div className="pt-6 border-t border-border mt-2">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
              }}
              className="mb-4"
            >
              Skills & Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    background: "var(--secondary)",
                    color: "var(--foreground)",
                    padding: "0.3rem 0.9rem",
                    borderRadius: "4px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
