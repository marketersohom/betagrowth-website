"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";

const auditAreas = [
  "Pricing Architecture",
  "Booking Flow Analysis",
  "Online Reputation",
  "Package & Upsell Structure",
  "Channel Mix & Distribution",
  "Google Business Presence",
  "Conversion Path Audit",
  "Competitive Positioning",
  "Partnership & Referral Gaps",
  "Retention & Repeat Rate",
  "Staff Revenue Contribution",
  "Seasonal Revenue Patterns",
];

const deliverables = [
  {
    number: "01",
    title: "Revenue Leak Report",
    description: "A complete audit across 12 areas identifying exactly where and how much revenue your business is losing. Specific findings, not general recommendations.",
    detail: "30 to 50 pages. Formatted for decision-making, not reading.",
  },
  {
    number: "02",
    title: "Priority Matrix",
    description: "Every identified leak ranked by impact and implementation effort. You know immediately what to fix first, what to fix later, and what to ignore.",
    detail: "A one-page execution order you can hand directly to your team.",
  },
  {
    number: "03",
    title: "90-Day Action Plan",
    description: "A sequenced roadmap for the first quarter. Specific actions, owners, and success metrics. No ambiguity about what happens next.",
    detail: "Week-by-week breakdown with clear milestones.",
  },
];

const whoItIsFor = [
  "Hospitality businesses doing $500K to $10M USD annually",
  "Wellness and spa operators with 3 or more staff",
  "Professional service firms with existing client base",
  "Businesses that have plateaued in revenue despite high utilization",
  "Owners who suspect they are underpriced but lack the data to act",
  "Operations with booking or conversion friction they cannot diagnose",
];

const faq = [
  {
    q: "What happens in 15 days?",
    a: "Days 1 to 3: intake, data collection, and stakeholder interviews. Days 4 to 12: audit across all 12 areas. Days 13 to 15: report writing, priority matrix, and delivery call.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "We send a structured intake form. You need 2 to 3 hours of your time spread across the engagement, plus access to your basic financial data and booking records.",
  },
  {
    q: "Is this a consulting retainer?",
    a: "No. The Diagnostic is a standalone fixed-fee product. You receive the deliverables and choose how to act on them. Many clients then move to The Method, but there is no requirement.",
  },
  {
    q: "What if I want to implement the findings?",
    a: "We offer The Method as a full implementation engagement for clients who want hands-on execution support. We walk through this option on the delivery call.",
  },
];

export default function DiagnosticPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Diagnostic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-cream leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              Know exactly
              <br />
              <em className="text-gold not-italic">where it leaks.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl"
            >
              A 15-day revenue audit across 12 critical areas. We examine your pricing, operations, online presence, and conversion paths to produce a specific, actionable map of where your business is losing money.
            </motion.p>
          </div>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-4 border border-gold/30 p-8 bg-plum-mid/20"
          >
            <p className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">Fixed Fee</p>
            <div className="font-display text-cream leading-none mb-2" style={{ fontSize: "3rem" }}>
              $1,500
            </div>
            <p className="font-body text-cream/40 text-sm mb-6">USD. No hidden fees.</p>
            <div className="space-y-3 mb-8">
              {["15-day turnaround", "12 audit areas", "3 deliverables", "Delivery call included"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1"/>
                      <path d="M5 8L7 10L11 6" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-body text-sm text-cream/70">{item}</span>
                </div>
              ))}
            </div>
            <MagneticButton
              className="w-full py-4 bg-gold text-plum-deep font-body font-medium text-sm tracking-wide hover:bg-gold-light transition-colors duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Start the Diagnostic
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <section className="border-y border-gold/10 py-5 overflow-hidden bg-plum-deep/40">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...auditAreas, ...auditAreas].map((area, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6">
              <span className="font-body text-sm text-cream/60 tracking-wide">{area}</span>
              <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
              What you receive
            </span>
          </div>
          <h2
            className="font-display text-cream leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Three deliverables. Zero ambiguity.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {deliverables.map((d, i) => (
            <ScrollReveal key={d.number} delay={i * 0.12}>
              <div className="group border-t border-gold/20 pt-6 hover:border-gold/50 transition-colors duration-300">
                <span className="font-body text-xs text-gold tracking-[0.2em] block mb-4">{d.number}</span>
                <h3 className="font-display text-cream text-2xl font-light mb-3">{d.title}</h3>
                <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">{d.description}</p>
                <p className="font-body text-xs text-gold/70 italic">{d.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-plum-mid/20 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                  Who it is for
                </span>
              </div>
              <h2
                className="font-display text-cream leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Built for operators, not investors.
              </h2>
              <p className="font-body text-cream/60 leading-relaxed">
                The Diagnostic is designed for business owners who are actively running their operations and want specific, data-backed answers. Not a strategy session. Not a framework. A thorough examination of your specific business.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ul className="space-y-4">
                {whoItIsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M4 10L8 14L16 6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-body text-cream/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
        <ScrollReveal className="mb-12">
          <h2 className="font-display text-cream" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Common questions
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
          {faq.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <h3 className="font-body text-cream font-medium text-sm mb-2">{item.q}</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed">{item.a}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-plum-deep text-3xl lg:text-4xl font-light leading-tight mb-2">
              Ready to find your leaks?
            </h2>
            <p className="font-body text-plum-deep/70 text-sm">
              $1,500. 15 days. One decision to make.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            Start the Diagnostic
          </Link>
        </div>
      </section>
    </main>
  );
}
