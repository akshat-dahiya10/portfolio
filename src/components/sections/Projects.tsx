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
import { PROJECTS } from "@/lib/constants";

const ICONS = {
  Cpu,
  Database,
  GitBranch,
  Layers,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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

        {/* Projects */}
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden relative group"
            >

              <div className="relative grid lg:grid-cols-[1fr_1.3fr]">

                {/* LEFT SIDE */}
                <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border">

                  <div className="text-xs text-accent mb-4">
                    PROJECT 0{i + 1} · {project.year}
                  </div>

                  <h3 className="text-3xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-text-muted text-sm">
                    {project.subtitle}
                  </p>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  {/* Buttons */}
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

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-accent" />
                      <span className="text-xs text-text-dim uppercase">
                        Architecture
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.architecture.map((step, idx) => (
                        <div key={idx} className="glass p-3 text-sm">
                          STEP {idx + 1} - {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <CaseBlock
                    icon={Trophy}
                    label="Results"
                    text={project.results}
                  />

                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
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

/* CaseBlock */
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
        <span className="text-xs uppercase">{label}</span>
      </div>
      <p className="text-sm text-text-muted">{text}</p>
    </div>
  );
}
