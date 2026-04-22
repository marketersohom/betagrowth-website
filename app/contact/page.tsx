"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "existing-client",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xwvawloz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          subject: formState.subject,
          message: formState.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Diagnostic redirect band */}
      <section className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
                <circle cx="9" cy="9" r="8" stroke="#c9a84c" strokeWidth="1"/>
                <path d="M9 5V9.5M9 12V12.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <p className="font-body text-sm text-cream/80">
                New to Generation Beta? The Diagnostic is the right starting point.
              </p>
            </div>
            <Link
              href="/diagnostic"
              className="font-body text-xs text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-plum-deep transition-all duration-200 whitespace-nowrap"
            >
              See the Diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
            Contact
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Let us
          <br />
          <em className="text-gold not-italic">talk.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-xl"
        >
          For existing clients, partnership enquiries, and press. New business starts with the Diagnostic.
        </motion.p>
      </section>

      {/* Contact section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Contact info */}
          <ScrollReveal className="lg:col-span-4">
            <div className="space-y-10">
              <div>
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-4">Direct contact</p>
                <div className="space-y-4">
                  <a
                    href="mailto:sohom@betagrowthpartners.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                      <svg viewBox="0 0 20 20" fill="none">
                        <rect x="2" y="4" width="16" height="12" rx="1" stroke="#c9a84c" strokeWidth="1.2"/>
                        <path d="M2 7L10 12L18 7" stroke="#c9a84c" strokeWidth="1.2"/>
                      </svg>
                    </div>
                    <span className="font-body text-sm text-cream/70 group-hover:text-cream transition-colors duration-200 break-all">
                      sohom@betagrowthpartners.com
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-4">Location</p>
                <p className="font-body text-sm text-cream/60 leading-relaxed">
                  Bangkok, Thailand
                  <br />
                  Available for travel across SEA
                </p>
              </div>

              <div>
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-4">Response time</p>
                <p className="font-body text-sm text-cream/60 leading-relaxed">
                  Within 24 hours on business days.
                </p>
              </div>

              <div className="border-t border-gold/10 pt-8">
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-4">This form is for</p>
                <ul className="space-y-2">
                  {[
                    "Existing clients",
                    "Partnership enquiries",
                    "Press and media",
                    "Speaking engagements",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      <span className="font-body text-xs text-cream/50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.15} className="lg:col-span-8">
            {submitted ? (
              <div className="border border-gold/20 p-12 flex flex-col items-start justify-center h-full min-h-[400px]">
                <div className="w-10 h-10 mb-6">
                  <svg viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="#c9a84c" strokeWidth="1.2"/>
                    <path d="M12 20L17.5 25.5L28 14" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-cream text-2xl font-light mb-3">Message received.</h3>
                <p className="font-body text-cream/55 text-sm leading-relaxed max-w-md">
                  Your message has been received. We will be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs text-cream/50 tracking-[0.1em] uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border border-cream/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-cream/50 tracking-[0.1em] uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border border-cream/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-cream/50 tracking-[0.1em] uppercase block mb-2">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-transparent border border-cream/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="font-body text-xs text-cream/50 tracking-[0.1em] uppercase block mb-2">
                    Regarding
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-plum border border-cream/15 px-4 py-3 font-body text-sm text-cream focus:outline-none focus:border-gold/50 transition-colors duration-200 appearance-none"
                  >
                    <option value="existing-client">Existing client enquiry</option>
                    <option value="partnership">Partnership enquiry</option>
                    <option value="press">Press or media</option>
                    <option value="speaking">Speaking engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs text-cream/50 tracking-[0.1em] uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border border-cream/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200 resize-none"
                    placeholder="Tell us what you need"
                  />
                </div>

                {error && (
                  <p className="font-body text-sm text-red-400 leading-relaxed">
                    Something went wrong. Please email us directly at{" "}
                    <a
                      href="mailto:sohom@betagrowthpartners.com"
                      className="underline underline-offset-2 hover:text-cream transition-colors duration-200"
                    >
                      sohom@betagrowthpartners.com
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-10 py-4 bg-gold text-plum-deep font-body font-medium text-sm tracking-wide hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
