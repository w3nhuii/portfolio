import { useState } from "react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/w3nhuii" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/boonhuinyok13" },
  { label: "Email", icon: Mail, href: "mailto:wenhuiiyang@gmail.com" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL ?? "http://localhost:3001"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-8" style={{ background: "var(--card)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
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
            Contact
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
            className="mb-5"
          >
            Let's work together.
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
            className="mb-10"
          >
            Open to new opportunities and collaborations. Feel free to reach out — I'll get back to you promptly.
          </p>

          <div className="flex flex-col gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex items-center justify-between py-3.5 border-b border-border hover:border-blue-300 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <s.icon size={16} style={{ color: "var(--muted-foreground)" }} />
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--foreground)",
                    }}
                  >
                    {s.label}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:text-blue-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  style={{ color: "var(--muted-foreground)" }}
                />
              </a>
            ))}
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex flex-col items-start justify-center h-full py-16 gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "#DBEAFE" }}
              >
                <Mail size={20} style={{ color: "#2B6FFF" }} />
              </div>
              <p
                style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)" }}
              >
                Message received.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.95rem", color: "var(--muted-foreground)" }}>
                I'll get back to you within 1–2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.name}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.name as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                    className="bg-background rounded-lg px-4 py-3 border border-border focus:outline-none transition-colors"
                    onFocus={(e) => (e.target.style.borderColor = "#2B6FFF")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", resize: "none" }}
                  className="bg-background rounded-lg px-4 py-3 border border-border focus:outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = "#2B6FFF")}
                  onBlur={(e) => (e.target.style.borderColor = "")}
                />
              </div>
              {error && (
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#ef4444" }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  background: "#2B6FFF",
                  color: "white",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "6px",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  opacity: loading ? 0.7 : 1,
                }}
                className="transition-opacity"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
