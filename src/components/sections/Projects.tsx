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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Projects</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Shipped work, not just ideas.
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-3xl">
            Each project is treated as a case study — from problem framing to architecture to measurable outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden card-hover relative group"
              data-hover
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative grid lg:grid-cols-[1fr_1.3fr] gap-0">
                {/* Left: Visual / Preview */}
                <div className="relative p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-br from-bg-elevated to-bg">
                  <div className="text-xs font-mono text-accent mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-accent" />
                    PROJECT 0{ i + 1} · {project.year}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm">{project.subtitle}</p>

                  {/* Tech stack chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  {/* Mock UI */}
                  <div className="mt-8 rounded-xl border border-border bg-surface overflow-hidden">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      <div className="ml-3 text-xs text-text-dim font-mono">
                        movie-rec · python
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium">Recommendation Engine</div>
                        <div className="status-online">Running</div>
                      </div>
                      <div className="space-y-2">
                        {[88, 74, 62, 51].map((v, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-xs">
                            <div className="flex-1 h-6 rounded-md bg-surface-hover flex items-center px-3 text-text-dim">
                              Movie #{idx + 1} · {["Sci-Fi", "Drama", "Thriller", "Comedy"][idx]}
                            </div>
                            <div className="w-16 h-1.5 rounded-full bg-surface overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full"
                                style={{ width: `${v}%` }}
                              />
                            </div>
                            <div className="w-10 text-right font-mono text-text-muted">{v}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
<div className="mt-6 flex flex-wrap gap-2">
  <a
    href="https://github.com/akshat-dahiya10/movie-recommendation-system"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary text-sm"
    data-hover
  >
    <Code2 className="w-4 h-4" />
    GitHub
  </a>

  <a
    href="https://movie-recommendation-system-dun.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary text-sm"
    data-hover
  >
    <ExternalLink className="w-4 h-4" />
    Live Demo
  </a>

                {/* Right: Case study */}
                <div className="p-8 md:p-10 space-y-6">
                  <CaseBlock
                    icon={AlertCircle}
                    label="Problem Statement"
                    text={project.problem}
                    accent="text-red-400"
                  />
                  <CaseBlock
                    icon={Lightbulb}
                    label="Solution"
                    text={project.solution}
                    accent="text-accent"
                  />

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-accent" />
                      <div className="text-xs font-medium text-text-dim uppercase tracking-wider">
                        Architecture
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.architecture.map((step, idx) => (
                        <div
                          key={idx}
                          className="glass rounded-lg p-3 text-sm border border-border hover:border-accent/40 transition-colors"
                        >
                          <div className="text-xs text-text-dim font-mono mb-1">
                            STEP {idx + 1}
                          </div>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <div className="text-xs font-medium text-text-dim uppercase tracking-wider">
                        Key Features
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <CaseBlock
                    icon={AlertCircle}
                    label="Challenges Faced"
                    text={project.challenges}
                    accent="text-yellow-400"
                  />

                  <CaseBlock
                    icon={Trophy}
                    label="Results Achieved"
                    text={project.results}
                    accent="text-green-400"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
            data-hover
          >
            View more on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CaseBlock({
  icon: Icon,
  label,
  text,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  text: string;
  accent: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${accent}`} />
        <div className="text-xs font-medium text-text-dim uppercase tracking-wider">{label}</div>
      </div>
      <p className="text-sm text-text-muted leading-relaxed">{text}</p>
    </div>
  );
}
mujhe github or live demo ke button ko clickable bnana hai uske liye iss code ko correct kro
