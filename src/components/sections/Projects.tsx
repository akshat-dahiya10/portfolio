"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Movie Recommendation System",
    subtitle: "ML · Content-Based Filtering · Python",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
    github:
      "https://github.com/akshat-dahiya10/movie-recommendation-system",
    demo: "https://movie-recommendation-system-dun.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>

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
              <h3 className="text-3xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.subtitle}</p>

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

              {/* Animated Progress UI */}
              <div className="mt-8 space-y-3">
                {[88, 74, 62, 51].map((v, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Movie #{idx + 1}</span>
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
    </section>
  );
}
