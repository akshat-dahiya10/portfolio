"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Code2, Link, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";// ✅ NEW
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ UPDATED SUBMIT FUNCTION
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c0il9ha",   // 🔥 replace
        "template_jiqz80i",  // 🔥 replace
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "plIKEFFyVv3QMRcMZ"    // 🔥 replace
      )
      .then(() => {
        setSent(true);
        setLoading(false);

        setTimeout(() => {
          setSent(false);
          setForm({ name: "", email: "", message: "" });
        }, 2500);
      })
      .catch(() => {
        alert("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* FORM */}
        <motion.form
          onSubmit={onSubmit}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <h3 className="text-2xl font-semibold">Let's start a conversation.</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="input"
            />

            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="input"
            />
          </div>

          <textarea
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="input h-32"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex justify-center items-center gap-2"
          >
            {loading ? (
              "Sending..."
            ) : sent ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Sent!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
