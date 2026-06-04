"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // ✅ VALIDATION FUNCTION
  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.includes("@")) return "Invalid email";
    if (form.message.length < 10) return "Message too short";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSent(true);

      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", message: "" });
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.form
          onSubmit={onSubmit}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <h3 className="text-2xl font-semibold">
            Let's start a conversation.
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="input"
              required
            />

            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="input"
              required
            />
          </div>

          <textarea
            placeholder="Your message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="input h-32"
            required
          />

          <button
            type="submit"
            disabled={loading || sent}
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
