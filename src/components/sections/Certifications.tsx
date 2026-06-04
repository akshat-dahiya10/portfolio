"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Calendar, Tag } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

const CATEGORY_COLORS: Record<string, string> = {
  "AI & ML": "from-indigo-500 to-purple-500",
  Analytics: "from-cyan-500 to-blue-500",
  Data: "from-emerald-500 to-teal-500",
  Web: "from-pink-500 to-rose-500",
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Certifications</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Verified learning. Real credentials.
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-3xl">
            Industry-recognized certifications from IBM, Coursera, Johns Hopkins University, and IIT Kharagpur collaborations.
          </p>
        </motion.div>

        {/* IIT KGP callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 glass rounded-2xl p-6 md:p-8 border-accent/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-accent mb-2">COLLABORATION HIGHLIGHT</div>
              <div className="text-xl md:text-2xl font-semibold">
                IIT Kharagpur × Coding Ninjas 10X Club
              </div>
              <div className="text-text-muted mt-1">
                "Break into Data Analytics" workshop participant — exposure to industry-grade analytics workflows.
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/5">
              <BadgeCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((c, i) => (
  <a
    key={i}
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl p-6 card-hover relative overflow-hidden"
              data-hover
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${CATEGORY_COLORS[c.category] ?? "from-accent to-accent-2"}`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${CATEGORY_COLORS[c.category] ?? "from-accent to-accent-2"}`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-dim">
                    <BadgeCheck className="w-3.5 h-3.5 text-green-400" />
                    <span className="font-mono">Verified</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold leading-tight mb-3">{c.title}</h3>

                <div className="text-sm text-text-muted mb-4">{c.issuer}</div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-text-dim">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{c.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-text-dim" />
                    <span className="text-xs chip">{c.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
  </a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-text-dim"
        >
          All certifications are verifiable through respective issuing platforms.
        </motion.div>
      </div>
    </section>
  );
}
