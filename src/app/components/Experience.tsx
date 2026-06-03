const jobs = [
  {
    title: "Software Developer",
    company: "Bunkerchain Pte Ltd",
    location: "Singapore",
    period: "Apr 2025 – Present",
    bullets: [
      "Develop and maintain cross-platform mobile apps with Flutter (iOS & Android) for the maritime and logistics industry.",
      "Build responsive web applications with Vue.js and Tailwind CSS, implementing efficient state management.",
      "Responsible for production deployment on AWS — managing release pipelines, environment configuration, and ensuring stable rollouts.",
      "Contribute to backend development using Spring Boot (Java), including API design, server-side logic, and database integration.",
      "Integrate APIs, optimize performance, and uphold best practices across the full software lifecycle.",
      "Collaborate with product managers, designers, and backend engineers to ship scalable, user-friendly solutions.",
    ],
    stack: ["Flutter", "Vue.js", "Tailwind CSS", "Spring Boot", "Java", "AWS"],
  },
  {
    title: "Mobile Application Developer",
    company: "Agmo Studio Sdn Bhd",
    location: "Petaling Jaya, Selangor",
    period: "Aug 2023 – Apr 2025",
    bullets: [
      "Built web and mobile applications with React.js, React Native, and Flutter for multiple client projects.",
      "Integrated RESTful APIs to enable smooth backend communication across applications.",
      "Architected mobile apps using MVVM pattern for cleaner, more maintainable codebases.",
      "Improved app store ratings by consistently addressing user feedback and shipping quality updates.",
    ],
    stack: ["React Native", "React.js", "Flutter", "MVVM"],
  },
  {
    title: "Software Engineer Intern",
    company: "FootfallCam Sdn Bhd",
    location: "Kajang, Selangor",
    period: "Oct 2022 – Jan 2023",
    bullets: [
      "Tested people-tracking IoT devices and analyzed captured data.",
      "Fixed bugs in the company's React.js web application.",
      "Communicated directly with enterprise clients during device testing sessions.",
    ],
    stack: ["React.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 px-8" style={{ background: "var(--card)" }}>
      <div className="max-w-6xl mx-auto">
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
          Experience
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
          className="mb-14"
        >
          Work History
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {jobs.map((job, i) => (
            <div key={job.company} className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${i === 0 ? "pb-12" : "py-12"}`}>
              <div className="md:col-span-1 flex flex-col gap-1.5">
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  {job.period}
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {job.location}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {job.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#2B6FFF",
                  }}
                  className="mt-0.5 mb-5"
                >
                  {job.company}
                </p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "var(--muted-foreground)",
                      }}
                      className="flex gap-3"
                    >
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: "#DBEAFE",
                        color: "#1D4ED8",
                        padding: "0.2rem 0.7rem",
                        borderRadius: "4px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
