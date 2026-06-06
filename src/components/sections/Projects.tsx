"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Movie Recommendation System",
    subtitle: "AI/ML Project",
    description:
      "Built a smart movie recommendation system using machine learning algorithms that suggests movies based on user preferences.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github:
      "https://github.com/akshat-dahiya10/movie-recommendation-system",
    live:
      "https://movie-recommendation-system-dun.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          My Projects 🚀
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

              {/* Card */}
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl group-hover:scale-[1.03] transition">

                <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
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
