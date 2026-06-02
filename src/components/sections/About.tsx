"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Lightbulb, TrendingUp } from "lucide-react";
import { MISSION, SUMMARY, UNIQUE } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  Brain,
  Code2,
  TrendingUp,
  Lightbulb,
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">About</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance text-gradient max-w-3xl">
            Engineer, thinker, builder.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
            {SUMMARY}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-24 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent glow-pulse" />
              <span className="text-xs font-medium text-text-dim uppercase tracking-wider">
                Personal Mission
              </span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-snug text-balance">
              "{MISSION}"
            </blockquote>
            <div className="mt-6 text-sm text-text-muted">— {new Date().getFullYear()}</div>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
          {UNIQUE.map((u) => {
            const Icon = ICONS[u.icon] ?? Code2;
            return (
              <motion.div
                key={u.title}
                variants={item}
                className="group relative glass rounded-2xl p-6 card-hover overflow-hidden tilt-card"
                data-hover
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{u.title}</h3>
                  <p className="text-text-muted leading-relaxed">{u.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
