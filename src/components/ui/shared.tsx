"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  Command,
  Search,
  ChevronRight,
  MessageCircle,
  X,
  Send,
  Menu,
} from "lucide-react";
import { NAV_LINKS, PERSONAL, PROJECTS } from "@/lib/constants";
import Link from "next/link";

// ============ LOADING SCREEN ============
export function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-3xl font-medium tracking-tight text-gradient">
          {PERSONAL.name}
        </div>
        <div className="mt-2 text-sm text-text-muted">
          Engineering the experience...
        </div>
      </motion.div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </motion.div>
  );
}

// ============ CUSTOM CURSOR ============
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-hover], .tilt-card") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        ringRef.current?.classList.add("hover");
      }
    };
    const out = () => ringRef.current?.classList.remove("hover");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    loop();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}

// ============ SCROLL PROGRESS ============
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    return scaleX.on("change", (v) => setWidth(v * 100));
  }, [scaleX]);

  return (
    <div className="scroll-progress" style={{ width: `${width}%` }} />
  );
}

// ============ NAVBAR ============
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.4 }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-bg/70 backdrop-blur-xl border-b border-border"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 group" data-hover>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-indigo-500/30">
            A
          </div>
          <span className="font-semibold tracking-tight hidden sm:inline">
            Akshat<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-muted hover:text-text transition-colors rounded-md hover:bg-surface"
              data-hover
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const evt = new CustomEvent("open-command");
              window.dispatchEvent(evt);
            }}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md glass text-xs text-text-muted hover:text-text transition-colors"
            data-hover
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="ml-2 px-1.5 py-0.5 rounded bg-surface border border-border text-[10px] font-mono">
              ⌘K
            </kbd>
          </button>
          <a href="#contact" className="btn-primary text-sm hidden md:inline-flex" data-hover>
            Let's talk
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md glass"
            aria-label="Menu"
            data-hover
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 px-6 pb-4 flex flex-col gap-1 glass-strong mx-6 rounded-xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-text-muted hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ============ COMMAND MENU ============
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onEvt = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command", onEvt);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command", onEvt);
    };
  }, []);

  const items = [
    ...NAV_LINKS.map((l) => ({ label: l.label, href: l.href, icon: "→" })),
    { label: "Download Resume", href: "#contact", icon: "↓" },
    ...PROJECTS.map((p) => ({ label: `Project: ${p.title}`, href: "#projects", icon: "◆" })),
  ];

  const filtered = query
    ? items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
    : items;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="command-overlay"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="command-dialog"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-4 h-4 text-text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-text-dim"
              />
              <button onClick={() => setOpen(false)} data-hover>
                <X className="w-4 h-4 text-text-muted hover:text-text" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-surface-hover text-sm group"
                  data-hover
                >
                  <span className="flex items-center gap-3">
                    <span className="text-text-dim text-xs font-mono">{item.icon}</span>
                    {item.label}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-text-dim group-hover:text-accent transition-colors" />
                </a>
              ))}
              {filtered.length === 0 && (
                <div className="text-sm text-text-dim text-center py-6">No results</div>
              )}
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t border-border text-xs text-text-dim">
              <span>Navigate</span>
              <div className="flex gap-2">
                <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border font-mono">↑↓</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border font-mono">↵</kbd>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============ BACK TO TOP ============
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-surface-hover transition-colors glow-pulse"
          aria-label="Back to top"
          data-hover
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ============ TECH MARQUEE ============
export function TechMarquee() {
  const items = [
    "Python", "Machine Learning", "C", "JavaScript", "SQL", "HTML5", "CSS3",
    "Prompt Engineering", "Data Analytics", "Git", "GitHub", "VS Code",
    "Pandas", "NumPy", "React", "Next.js", "TypeScript", "Tailwind",
    "Framer Motion", "Figma", "Excel", "DBMS", "DSA", "OS",
  ];

  return (
    <div className="relative py-12 border-y border-border overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6"
          >
            <span className="text-lg md:text-xl font-medium text-text-muted whitespace-nowrap">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ AI ASSISTANT ============
const ANSWERS: Record<string, string> = {
  hi: "Hey! 👋 Welcome to Akshat's portfolio. Ask me about his skills, projects, certifications, or experience!",
  hello: "Hi there! Ask me anything about Akshat — his skills, projects, or career goals.",
  skills: "Akshat is proficient in Python, C, HTML, CSS, JavaScript, SQL, and has deep knowledge of ML, DSA, DBMS, and OS. He's IBM-certified in ML and Data Science.",
  projects: "His flagship project is the Movie Recommendation System — a content-based ML engine using cosine similarity. Built with Python, Pandas, NumPy, and scikit-learn.",
  education: "Akshat is a 3rd-year B.Tech CSE (AI & ML) student at Manipal University Jaipur, graduating in 2028.",
  certifications: "He holds 7+ industry certifications including Machine Learning with Python (IBM), Generative AI Prompt Engineering (IBM), Python for Data Science (IBM), and courses from Johns Hopkins.",
  contact: "You can reach Akshat at dahiyakashat10@gmail.com or +91 7015708113. Scroll to the Contact section!",
  experience: "While formally in his 3rd year, Akshat has shipped ML projects, completed IBM/Coursera certifications, and collaborated with IIT Kharagpur's Coding Ninjas 10X Club.",
  goals: "He aims to pursue research internships in NLP/Computer Vision, contribute to open-source ML, and build production-grade AI systems before graduation.",
  hiring: "Akshat is open to internships and collaborations. Reach out at dahiyakashat10@gmail.com!",
  who: "Akshat Dahiya — a 3rd-year B.Tech CSE (AI & ML) student passionate about intelligent systems, product engineering, and applied ML.",
  python: "Akshat uses Python as his primary language for ML, data analysis, and automation. He's IBM-certified in Python for Data Science and AI.",
  ml: "His ML expertise comes from IBM certifications and hands-on projects like the Movie Recommendation System using content-based filtering and cosine similarity.",
  thanks: "You're welcome! Feel free to explore more of the portfolio 🚀",
  bye: "Thanks for visiting! Come back soon 👋",
};

const DEFAULT = "Interesting question! I'm a demo assistant. Try asking about: skills, projects, certifications, education, goals, or contact info.";

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Akshat's portfolio assistant. Ask me about skills, projects, certifications, or goals." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      const key = Object.keys(ANSWERS).find((k) => userMsg.toLowerCase().includes(k));
      const reply = key ? ANSWERS[key] : DEFAULT;
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    }, 600);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.8, type: "spring" }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40 hover:scale-110 transition-transform"
        aria-label="AI Assistant"
        data-hover
      >
        <MessageCircle className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-8 z-50 ai-bubble"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Portfolio Assistant</div>
                  <div className="status-online">Online</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} data-hover>
                <X className="w-4 h-4 text-text-muted" />
              </button>
            </div>
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      m.role === "user"
                        ? "bg-accent text-white rounded-br-sm"
                        : "bg-surface border border-border rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 p-3 border-t border-border">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-surface border border-border rounded-full px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <button
                onClick={send}
                className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                data-hover
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============ FOOTER ============
export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <span className="font-semibold tracking-tight">{PERSONAL.name}</span>
            </div>
            <p className="text-sm text-text-muted max-w-md">
              {PERSONAL.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-3">
                Navigate
              </div>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-text-muted hover:text-text transition-colors"
                      data-hover
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-3">
                Projects
              </div>
              <ul className="space-y-2">
                {PROJECTS.map((p) => (
                  <li key={p.title}>
                    <a
                      href="#projects"
                      className="text-sm text-text-muted hover:text-text transition-colors"
                      data-hover
                    >
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-3">
                Contact
              </div>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>{PERSONAL.email}</li>
                <li>{PERSONAL.phone}</li>
                <li>{PERSONAL.location}</li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-3">
                Status
              </div>
              <div className="status-online">{PERSONAL.status}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-dim">
          <div>
            © {new Date().getFullYear()} {PERSONAL.name}. Crafted with intention.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 15 · TypeScript · Tailwind</span>
            <kbd className="px-2 py-1 rounded bg-surface border border-border text-[10px] font-mono">
              K to navigate
            </kbd>
          </div>
        </div>
      </div>
    </footer>
  );
}
