"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid gap-10">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={index}
              className="border rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.subtitle}</p>

              <p className="mt-4">{project.problem}</p>
              <p className="mt-2">{project.solution}</p>

              <div className="mt-4">
                <h4 className="font-semibold">Tech:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 border rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
