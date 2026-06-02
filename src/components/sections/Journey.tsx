"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Target, Rocket, Award, FolderGit2, TrendingUp } from "lucide-react";
import { EDUCATION, LEARNING_JOURNEY } from "@/lib/constants";

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Education</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Academic foundation.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {EDUCATION.map((e, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative grid lg:grid-cols-[1fr_1.5fr] gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-accent">20{e.period.split("–")[0].trim().slice(2)} — 20{e.period.split("–")[1].trim().slice(2)}</div>
                      <div className="flex items-center gap-1.5 text-xs text-text-dim">
                        <Calendar className="w-3.5 h-3.5" />
                        {e.period}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">{e.degree}</h3>
                  <div className="flex items-center gap-2 text-text-muted mb-6">
                    <MapPin className="w-4 h-4" />
                    {e.institution}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip">B.Tech</span>
                    <span className="chip">AI & ML</span>
                    <span className="chip">CSE</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <div className="text-xs font-medium text-text-dim uppercase tracking-wider">
                        Relevant Coursework
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures & Algorithms", "DBMS", "Operating Systems", "Machine Learning", "Python Programming", "Data Analytics", "Web Development"].map((c) => (
                        <span key={c} className="chip">{c}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-accent" />
                      <div className="text-xs font-medium text-text-dim uppercase tracking-wider">
                        Academic Highlights
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {e.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Rocket className="w-4 h-4 text-accent" />
                      <div className="text-xs font-medium text-text-dim uppercase tracking-wider">
                        Future Goals
                      </div>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{e.futureGoals}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Journey</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Learning journey & technical growth.
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-3xl">
            A deliberately-curated path of self-learning, certifications, and hands-on projects that build professional momentum.
          </p>
        </motion.div>

        <div className="relative">
          <div className="timeline-line ml-6 md:ml-8" />
          <div className="space-y-8">
            {LEARNING_JOURNEY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-5 md:left-7 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent-2 ring-4 ring-bg glow-pulse" />
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-mono text-accent">{item.date}</div>
                    <div className="flex items-center gap-1 text-xs text-text-dim">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Milestone
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Award, label: "Certifications", value: "7+" },
            { icon: FolderGit2, label: "Projects Built", value: "1" },
            { icon: BookOpen, label: "Courses Completed", value: "10+" },
            { icon: TrendingUp, label: "Months Learning", value: "12+" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <s.icon className="w-5 h-5 text-accent mx-auto mb-3" />
              <div className="text-3xl font-semibold text-gradient-accent">{s.value}</div>
              <div className="text-xs text-text-dim mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
