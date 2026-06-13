"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Movie Recommendation System",
    subtitle: "AI/ML · Content-Based Filtering · Production Ready",
    description:
      "An intelligent recommendation engine that suggests movies based on user preferences using NLP & similarity scoring. Designed with scalability and real-time performance in mind.",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "NLP"],
    features: [
      "Content-based filtering using cosine similarity",
      "Real-time recommendations (<200ms response)",
      "Clean UI with interactive feedback",
      "Optimized for large datasets",
    ],
    github:
      "https://github.com/akshat-dahiya10/movie-recommendation-system",
    demo: "https://movie-recommendation-system-dun.vercel.app/",
    showProgress: true,
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Response Time", value: "<200ms" },
      { label: "Dataset Size", value: "10K+ Movies" },
    ],
  },

  {
    title: "WeatherVue",
    subtitle: "Next.js · TypeScript · Weather API · Production Ready",
    description:
      "A modern weather application providing real-time forecasts, temperature, humidity, wind speed, and location-based weather insights through a clean and responsive interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "OpenWeather API",
    ],
    features: [
      "Real-time weather forecasts",
      "Location-based weather search",
      "Responsive UI for all devices",
      "Live weather metrics and conditions",
    ],
    github: "https://github.com/akshat-dahiya10/weathervue",
    demo: "https://weathervue-kappa.vercel.app/",
    showProgress: false,
    metrics: [
      { label: "Performance", value: "95%" },
      { label: "Responsive", value: "100%" },
      { label: "API Uptime", value: "24/7" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Projects That Actually Solve Problems 🚀
        </h2>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 blur-2xl opacity-30 group-hover:opacity-60 transition" />

              {/* Card */}
              <div className="relative bg-[#0b0f19] rounded-3xl p-8 md:p-10 border border-white/10 backdrop-blur-xl">

                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-purple-400" />
                  <h3 className="text-3xl font-semibold">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">{project.subtitle}</p>

                <p className="text-gray-300 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
                    >
                      <div className="text-lg font-bold text-purple-400">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  {project.features.map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Progress Bars */}
                {project.showProgress && (
                  <div className="mt-8 space-y-3">
                    {[88, 74, 62, 51].map((v, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Recommendation #{idx + 1}</span>
                          <span>{v}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${v}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition"
                  >
                    <Code2 size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
