import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Maritime Ops Platform",
    year: "2025",
    category: "Flutter · Vue.js",
    description: "Cross-platform mobile and web application for the maritime and logistics industry. Built with Flutter for iOS/Android and Vue.js for the web dashboard, with real-time API integrations.",
    stack: ["Flutter", "Vue.js", "Tailwind CSS", "REST APIs"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=500&fit=crop&auto=format",
    link: "#",
  },
  {
    title: "Multi-Client Mobile Apps",
    year: "2024",
    category: "React Native · Flutter",
    description: "Shipped multiple iOS and Android applications at Agmo Studio, implementing MVVM architecture, third-party API integrations, and iterative UX improvements that raised app store ratings.",
    stack: ["React Native", "Flutter", "React.js", "MVVM"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
    link: "#",
  },
  {
    title: "Flutter Game App",
    year: "2024",
    category: "Flutter · Side Project",
    description: "A mobile game built with Flutter as a personal side project. Developed entirely from scratch — game logic, UI, animations, and cross-platform deployment to both iOS and Android.",
    stack: ["Flutter", "Dart", "Game Dev", "iOS & Android"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&auto=format",
    link: "#",
  },
  {
    title: "People Analytics Dashboard",
    year: "2023",
    category: "React.js",
    description: "Web application for visualizing foot traffic data from IoT tracking devices, including bug resolution and QA coordination with enterprise clients.",
    stack: ["React.js", "Data Analysis", "Testing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-28 px-8">
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
          Projects
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
          Selected Work
        </h2>

        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group grid grid-cols-1 md:grid-cols-5 rounded-xl overflow-hidden border border-border hover:border-blue-300 transition-all duration-300 hover:shadow-md"
              style={{ background: "var(--card)" }}
            >
              <div className="md:col-span-2 aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--muted-foreground)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {project.category} · {project.year}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-blue-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.5rem",
                      lineHeight: 1.2,
                      fontWeight: 700,
                      color: "var(--foreground)",
                      letterSpacing: "-0.01em",
                    }}
                    className="mb-3"
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((tech) => (
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
