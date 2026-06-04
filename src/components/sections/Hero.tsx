"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Mail,
  Sparkles,
  Brain,
  Code2,
  Database,
  Cpu,
  FileCode,
  GitBranch,
  Layers,
} from "lucide-react";
import { PERSONAL } from "@/lib/constants";

const TITLES = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Product-Minded Builder",
  "Self-Directed Learner",
];

function Typewriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(
      () => {
        if (!del && sub === current) {
          setTimeout(() => setDel(true), 1400);
        } else if (del && sub === "") {
          setDel(false);
          setIdx((i) => (i + 1) % texts.length);
        } else {
          setSub((s) => (del ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1)));
        }
      },
      del ? 40 : 90
    );
    return () => clearTimeout(timeout);
  }, [sub, del, idx, texts]);

  return (
    <span className="typing-cursor">
      {sub}
    </span>
  );
}

function FloatingIcon({
  icon: Icon,
  x,
  y,
  delay,
}: {
  icon: React.ElementType;
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.6 + delay, type: "spring" }}
      className="absolute w-11 h-11 md:w-14 md:h-14 rounded-2xl glass flex items-center justify-center animate-float"
      style={{ left: x, top: y, animationDelay: `${delay}s` }}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
    </motion.div>
  );
}

function CubeVisual() {
  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto" style={{ perspective: "1000px" }}>
      <motion.div
        animate={{ rotateX: 25, rotateY: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[
          { label: "ML", sub: "Models", rot: "rotateY(0deg) translateZ(120px)" },
          { label: "AI", sub: "Systems", rot: "rotateY(90deg) translateZ(120px)" },
          { label: "Data", sub: "Pipelines", rot: "rotateY(180deg) translateZ(120px)" },
          { label: "Web", sub: "Apps", rot: "rotateY(270deg) translateZ(120px)" },
        ].map((f) => (
          <div
            key={f.label}
            className="absolute w-40 h-40 md:w-48 md:h-48 glass rounded-2xl flex flex-col items-center justify-center border border-accent/20"
            style={{
              transform: f.rot,
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.3)",
            }}
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient-accent">
              {f.label}
            </div>
            <div className="text-xs text-text-muted mt-1">{f.sub}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    const s = sectionRef.current;
    s?.addEventListener("mousemove", onMove);
    return () => s?.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 spotlight opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-text-muted mb-6">
              <span className="status-online">{PERSONAL.status}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-balance"
          >
            Hi, I'm
            <br />
            <span className="text-gradient-accent">{PERSONAL.name.split(" ")[0]}</span>
            <span className="text-gradient"> {PERSONAL.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="mt-6 text-xl md:text-2xl text-text-muted font-medium"
          >
            <Typewriter texts={TITLES} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.6 }}
            className="mt-6 text-base md:text-lg text-text-muted leading-relaxed max-w-2xl"
          >
            {PERSONAL.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary" data-hover>
              View Projects
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="Akshat_dahiya_Resume.pdf"
              download
              className="btn-secondary"
              data-hover
             >
  <Download className="w-4 h-4" />
  Download Resume
</a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="btn-secondary"
              data-hover
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.9 }}
            className="mt-12 flex items-center gap-8 text-sm text-text-dim"
          >
            <div>
              <div className="text-2xl font-semibold text-text">7+</div>
              <div>Industry Certifications</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-semibold text-text">3rd</div>
              <div>Year Student</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-semibold text-text">2028</div>
              <div>Graduation</div>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="relative"
            style={{
              transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            <CubeVisual />
          </motion.div>

          <FloatingIcon icon={Brain} x="10%" y="10%" delay={0} />
          <FloatingIcon icon={Code2} x="75%" y="15%" delay={1} />
          <FloatingIcon icon={Database} x="80%" y="70%" delay={2} />
          <FloatingIcon icon={Cpu} x="5%" y="75%" delay={3} />
          <FloatingIcon icon={FileCode} x="15%" y="45%" delay={1.5} />
          <FloatingIcon icon={GitBranch} x="75%" y="45%" delay={2.5} />
          <FloatingIcon icon={Layers} x="50%" y="5%" delay={3} />
          <FloatingIcon icon={Sparkles} x="50%" y="85%" delay={1.2} />

          <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-text-muted">Currently</span>
              <span className="text-text">Building</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim text-xs"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
