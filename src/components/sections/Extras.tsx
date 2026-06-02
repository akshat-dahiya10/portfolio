"use client";

import { motion } from "framer-motion";
import { Quote, Calendar, Clock, BookOpen, TrendingUp, Eye } from "lucide-react";
import { TESTIMONIALS, BLOG_POSTS } from "@/lib/constants";
import { useEffect, useState } from "react";

// ============ TESTIMONIALS ============
export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Kind words from mentors & peers.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 card-hover relative"
              data-hover
            >
              <Quote className="w-8 h-8 text-accent/30 absolute top-6 right-6" />
              <p className="text-text-muted leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-accent/20 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-text-dim">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ BLOG ============
export function Blog() {
  return (
    <section className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Blog</div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
              Thoughts in progress.
            </h2>
            <div className="text-sm text-text-dim">Coming soon</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {BLOG_POSTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-hover relative group cursor-pointer"
              data-hover
            >
              <div className="text-xs font-mono text-accent mb-3">{p.category}</div>
              <h3 className="text-lg font-semibold mb-4 leading-snug">{p.title}</h3>
              <div className="flex items-center gap-3 text-xs text-text-dim">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {p.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {p.readTime}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ GITHUB CONTRIBUTIONS ============
export function GitHubContributions() {
  const [data] = useState(() =>
    Array.from({ length: 364 }, () => Math.floor(Math.random() * 5))
  );

  const weeks: number[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Activity</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Consistent building.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-medium">GitHub Activity</div>
                <div className="text-xs text-text-dim">Past year · placeholder data</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-text-dim">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((v) => (
                <div
                  key={v}
                  className={`w-2.5 h-2.5 rounded-sm ${
                    v === 0 ? "bg-surface" : `contrib-${v}`
                  }`}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-[720px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((v, di) => (
                    <div
                      key={di}
                      className={`contrib-cell ${v === 0 ? "" : `contrib-${Math.min(v, 4)}`}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ VISITOR COUNTER ============
export function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const key = "portfolio_visits";
    const current = parseInt(localStorage.getItem(key) ?? "0", 10);
    const next = current + 1;
    localStorage.setItem(key, String(next));
    setVisits(next);
  }, []);

  return (
    <div className="glass rounded-2xl p-6 flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <Eye className="w-5 h-5 text-accent" />
        <div>
          <div className="text-xs text-text-dim uppercase tracking-wider">Portfolio Visits</div>
          <div className="text-2xl font-semibold font-mono">
            {visits.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="text-xs text-text-dim flex items-center gap-1.5">
        <BookOpen className="w-3.5 h-3.5" />
        Thanks for stopping by!
      </div>
    </div>
  );
}
