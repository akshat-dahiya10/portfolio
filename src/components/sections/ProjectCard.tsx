"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

      {/* Card */}
      <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl group-hover:scale-[1.02] transition">

        <h2 className="text-2xl font-bold mb-1 group-hover:text-purple-400">
          {project.title}
        </h2>

        <p className="text-sm text-gray-400 mb-3">
          {project.subtitle}
        </p>

        <p className="text-gray-300 mb-2">{project.problem}</p>
        <p className="text-gray-300 mb-4">{project.solution}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            <Github size={16} /> GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
