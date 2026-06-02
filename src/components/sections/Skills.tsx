"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SKILLS } from "@/lib/constants";
import { Zap } from "lucide-react";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setWidth(level), index * 80);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, index]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="text-xs font-mono text-text-dim">{width}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: { name: string; level: number }[];
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
      data-hover
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-accent/20 flex items-center justify-center">
            <span className="text-lg">{icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-xs text-text-dim">{skills.length} skills</div>
          </div>
        </div>
        <div className="space-y-4">
          {skills.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const ICONS: Record<string, string> = {
  Programming: "⌨️",
  "Web Development": "🌐",
  "Core CS": "🎓",
  "AI & ML": "🤖",
  Tools: "🛠️",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Skills</div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
              A curated engineering toolkit.
            </h2>
            <div className="text-text-muted max-w-md text-sm leading-relaxed">
              Skills sharpened through projects, certifications, and deliberate practice — not just tutorials.
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILLS).map(([cat, skills]) => (
            <CategoryCard
              key={cat}
              title={cat}
              skills={skills}
              icon={ICONS[cat] ?? <Zap className="w-4 h-4" />}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <div className="text-sm text-text-dim mb-1">Currently Learning</div>
            <div className="text-lg font-medium">
              React · Next.js · System Design · Advanced ML · Open Source
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-dim">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Always expanding
          </div>
        </motion.div>
      </div>
    </section>
  );
}
