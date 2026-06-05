"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  ArrowRight,
  Layers,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Lightbulb,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Projects</div>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-3xl">
            Shipped work, not just ideas.
          </h2>

          <p className="mt-6 text-lg text-text-muted max-w-3xl">
            Each project is treated as a case study — from problem to results.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden"
            >

              {/* GRID */}
              <div className="grid lg:grid-cols-[1fr_1.3fr]">

                {/* LEFT SIDE */}
                <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border">

                  <div className="text-xs text-accent mb-4">
                    PROJECT 0{i + 1} · {project.year}
                  </div>

                  <h3 className="text-3xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-muted">
                    {project.subtitle}
                  </p>

                  {/* TECH */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 text-sm"
                    >
                      <Code2 className="w-4 h-4" />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>

                </div> {/* ✅ LEFT CLOSED */}

                {/* RIGHT SIDE */}
                <div className="p-8 md:p-10 space-y-6">

                  <CaseBlock
                    icon={AlertCircle}
                    label="Problem"
                    text={project.problem}
                  />

                  <CaseBlock
                    icon={Lightbulb}
                    label="Solution"
                    text={project.solution}
                  />

                  {/* ARCHITECTURE */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase text-text-dim">
                        Architecture
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.architecture.map((step, idx) => (
                        <div
                          key={idx}
                          className="glass p-3 text-sm border border-border"
                        >
                          STEP {idx + 1} — {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-xs uppercase text-text-dim">
                        Features
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((f, idx) => (
                        <div key={idx} className="text-sm text-text-muted">
                          • {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <CaseBlock
                    icon={AlertCircle}
                    label="Challenges"
                    text={project.challenges}
                  />

                  <CaseBlock
                    icon={Trophy}
                    label="Results"
                    text={project.results}
                  />

                </div> {/* ✅ RIGHT CLOSED */}

              </div> {/* ✅ GRID CLOSED */}

            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text"
          >
            View more on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

/* REUSABLE BLOCK */
function CaseBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: React.ElementType;
  label: string;
  text: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-accent" />
        <span className="text-xs uppercase text-text-dim">
          {label}
        </span>
      </div>

      <p className="text-sm text-text-muted leading-relaxed">
        {text}
      </p>
    </div>
  );
}
