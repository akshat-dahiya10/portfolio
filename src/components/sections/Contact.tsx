"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Code2, Link, AtSign, MessageCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-4">Contact</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance max-w-3xl">
            Let's build something remarkable.
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-3xl">
            Open to internships, collaborations, and meaningful conversations about AI, ML, and product engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <ContactCard
              icon={Mail}
              label="Email"
              value={PERSONAL.email}
              href={`mailto:${PERSONAL.email}`}
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value={PERSONAL.phone}
              href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={MapPin}
              label="Location"
              value={PERSONAL.location}
            />

            {/* Availability */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="text-sm font-medium">Availability</div>
              </div>
              <div className="text-lg font-medium mb-1">{PERSONAL.status}</div>
              <div className="text-sm text-text-muted">
                Typically respond within 24 hours.
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-4">
                Connect
              </div>
              <div className="flex flex-wrap gap-2">
                {[
  { icon: Code2, label: "GitHub", href: "https://github.com/akshat-dahiya10" },
  { icon: Link, label: "LinkedIn", href: "https://www.linkedin.com/in/akshat-dahiya10/" },
].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-accent hover:text-accent transition-colors text-sm text-text-muted"
                    data-hover
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-3">
                Location
              </div>
              <div className="relative h-40 rounded-xl bg-surface overflow-hidden">
                <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="160" fill="url(#map-grid)" />
                  {/* Roads */}
                  <path d="M 0 80 Q 100 40 200 80 T 400 80" stroke="rgba(99,102,241,0.3)" strokeWidth="2" fill="none" />
                  <path d="M 200 0 Q 180 80 200 160" stroke="rgba(168,85,247,0.3)" strokeWidth="2" fill="none" />
                  {/* Pin */}
                  <circle cx="200" cy="80" r="20" fill="rgba(99,102,241,0.3)" />
                  <circle cx="200" cy="80" r="10" fill="rgba(99,102,241,0.6)" />
                  <circle cx="200" cy="80" r="4" fill="#6366f1" />
                </svg>
                <div className="absolute bottom-3 left-3 text-xs text-text-dim font-mono">
                  SONIPAT · HARYANA · IN
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-4">
                Send a Message
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Let's start a conversation.
              </h3>
              <p className="text-text-muted text-sm">
                Fill out the form and I'll get back to you shortly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
                required
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@example.com"
                type="email"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-text-dim uppercase tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, opportunity, or idea..."
                rows={5}
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="btn-primary w-full justify-center"
              data-hover
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            <div className="text-xs text-text-dim text-center">
              Your information is never shared with third parties.
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="glass rounded-2xl p-6 flex items-start gap-4 card-hover">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-accent/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-text-dim uppercase tracking-wider mb-1">
          {label}
        </div>
        <div className="text-base font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} data-hover>{content}</a>
  ) : (
    content
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-text-dim uppercase tracking-wider mb-2 block">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
