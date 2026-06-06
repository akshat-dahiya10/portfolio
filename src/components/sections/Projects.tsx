"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  ArrowRight,
  Cpu,
  Database,
  GitBranch,
  Layers,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Lightbulb,
} from "lucide-react";

const projects = [
  {
    title: "Movie Recommendation System",
    subtitle: "ML · Content-Based Filtering · Python",
    year: "2025",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
    problem:
      "Users struggle to find relevant movies among thousands of options.",
    solution:
      "Built a content-based recommendation system using similarity scoring.",
    architecture: [
      "Data Collection",
      "Preprocessing",
      "Feature Extraction",
      "Similarity Model",
    ],
    features: [
      "Real-time recommendations",
      "Fast similarity matching",
      "Clean UI",
      "Scalable design",
    ],
    challenges:
      "Handling large datasets and optimizing similarity calculations.",
    results:
      "Achieved fast and accurate recommendations with improved UX.",
    github:
      "https://github.com/akshat-dahiya10/movie-recommendation-system",
    demo: "https://movie-recommendation-system-dun.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border rounded-xl p-6"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400">{project.subtitle}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 border rounded text-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* Mock UI */}
              <div className="mt-6 border rounded-lg p-4">
                <p className="mb-2 font-semibold">Recommendation Engine</p>
                {[88, 74, 62, 51].map((v, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm mb-2">
                    <div className="flex-1 bg-gray-800 px-3 py-1 rounded">
                      Movie #{idx + 1}
                    </div>
                    <div className="w-32 bg-gray-700 h-2 rounded">
                      <div
                        className="bg-purple-500 h-2 rounded"
                        style={{ width: `${v}%` }}
                      />
                    </div>
                    <span>{v}%</span>
                  </div>
                ))}
              </div>

              {/* Buttons ✅ FIXED */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded hover:scale-105 transition"
                >
                  <Code2 size={16} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border rounded hover:scale-105 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>

              {/* Case Study */}
              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <p><b>Problem:</b> {project.problem}</p>
                <p><b>Solution:</b> {project.solution}</p>
                <p><b>Challenges:</b> {project.challenges}</p>
                <p><b>Results:</b> {project.results}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More */}
        <div className="text-center mt-10">
          <a
            href="https://github.com"
            target="_blank"
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white"
          >
            View More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
