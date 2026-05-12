"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type Phase = {
  number: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  fee: string;
  selectivity?: string;
  deliverables: string[];
  expanded: { area: string; detail: string }[];
  dimmed?: boolean;
};

const phases: Phase[] = [
  {
    number: "01",
    title: "Revenue Diagnostic",
    duration: "15 days",
    tagline: "A 15-day audit of your full revenue system. We find where money is being lost before recommending anything.",
    description: "The Diagnostic is the foundation of everything. We do not guess at problems or rely on your instincts about where revenue is lost. We audit 12 specific areas systematically, interview stakeholders, and examine your data. The output is a specific, ranked list of revenue gaps.",
    fee: "$3,500, fixed. Credited in full against Phase 2 if you proceed within 60 days of delivery.",
    deliverables: [
      "Revenue Leak Report (30 to 50 pages)",
      "Priority Matrix — ranked by impact and effort",
      "90-Day Action Plan",
      "Delivery call with full walkthrough",
    ],
    expanded: [
      {
        area: "Pricing Architecture",
        detail: "We examine how your prices are set against your actual cost of delivery, competitor positioning, and customer perception. Most businesses in hospitality undercharge their top offerings by 15 to 30 percent.",
      },
      {
        area: "Booking Flow Analysis",
        detail: "Every friction point between a potential customer and a completed booking is identified. We track where people drop off and what small changes produce the largest gains in conversion.",
      },
      {
        area: "Online Reputation Signals",
        detail: "Google reviews, response patterns, sentiment analysis. We identify what your online presence communicates to potential customers before they ever contact you.",
      },
      {
        area: "Channel Mix & Distribution",
        detail: "Where is your business discoverable? What percentage of bookings come from referrals versus walk-in versus online? We map the full channel architecture and identify where you are over-dependent.",
      },
    ],
  },
  {
    number: "02",
    title: "System Architecture",
    duration: "4 to 6 weeks",
    tagline: "We design and build the growth infrastructure your business needs: positioning, funnels, operations, and client experience.",
    description: "Once the diagnostic is complete, we design the full revenue system your business should be running. This is not a patch on existing problems. It is an architectural redesign of how revenue flows through your business: pricing models, channel strategy, conversion infrastructure, partnership frameworks.",
    fee: "$8,000 to $15,000, fixed. Scoped from Diagnostic findings.",
    deliverables: [
      "Revenue System Blueprint (20 to 30 pages)",
      "Pricing Model Redesign (tier structure, packaging logic, upsell sequencing)",
      "Channel & Partnership Strategy (B2B and distribution roadmap)",
      "Implementation Roadmap (90-day execution plan with weekly milestones)",
    ],
    expanded: [
      {
        area: "Pricing Model Redesign",
        detail: "We build pricing architectures that capture value accurately. This includes tiered offerings, package structures, seasonal pricing logic, and upsell sequences.",
      },
      {
        area: "Conversion Infrastructure",
        detail: "We design the systems that move potential customers from discovery to booking to repeat. Every touchpoint is mapped and optimized.",
      },
      {
        area: "Partnership Architecture",
        detail: "Most businesses in hospitality and wellness are leaving significant revenue on the table through underdeveloped B2B partnerships. We identify and structure the highest-value relationships.",
      },
      {
        area: "Operations Alignment",
        detail: "Revenue systems fail when operations cannot support them. We align your operational capacity with the revenue architecture so growth is sustainable.",
      },
    ],
  },
  {
    number: "03",
    title: "Execution & Integration",
    duration: "3 to 6 months",
    tagline: "We stay embedded until the system is running, tested, and producing measurable results.",
    description: "Architecture without execution is a document. In Phase 3 we work directly with your team to install the systems we have designed. We track metrics weekly, iterate based on real data, and do not disengage until the numbers are moving in the right direction.",
    fee: "$6,000 to $10,000 per month. Three-month minimum.",
    deliverables: [
      "Weekly metric tracking sessions",
      "System installation and training",
      "Partnership activation support",
      "90-Day Performance Report",
    ],
    expanded: [
      {
        area: "System Installation",
        detail: "We work inside your operations to implement the systems. This means being present, hands-on, and accountable for the outcomes.",
      },
      {
        area: "Team Training",
        detail: "Systems only hold if the team understands and uses them. We run structured training sessions so your team owns the process after we leave.",
      },
      {
        area: "Metric Tracking",
        detail: "Every week we review key indicators: conversion rate, average transaction value, repeat booking rate, review velocity. We use data to drive decisions.",
      },
      {
        area: "90-Day Performance Report",
        detail: "A full audit of what was implemented, what moved, what did not, and what the business looks like at the end of the engagement.",
      },
    ],
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    duration: "Ongoing",
    selectivity: "Select clients only",
    tagline: "Reserved for clients where the system is producing measurable revenue gains and continued embedded work compounds returns.",
    description: "Some engagements continue past the 90-day performance report. Not all of them. Phase 4 is reserved for clients where the system we built is producing measurable revenue gains and where continued embedded work compounds returns rather than maintains them. This is an invitation, not a default.",
    fee: "$4,000 to $7,000 per month. Invitation-based, post-engagement.",
    deliverables: [
      "Quarterly performance audit",
      "Strategic advisory access",
      "Priority response and scheduling",
      "Annual revenue system review",
    ],
    expanded: [
      {
        area: "Strategic Oversight",
        detail: "Continuous review of the revenue architecture we built together. We watch for drift, surface emerging gaps, and adjust the system as market conditions and your business shift.",
      },
      {
        area: "Quarterly Performance Reviews",
        detail: "Structured deep-dives every three months covering pricing health, channel mix, partnership velocity, and conversion trends. Findings translate into a focused next-quarter action set.",
      },
      {
        area: "Priority Access",
        detail: "Direct line to the founder for strategic questions between reviews. Response times measured in hours rather than days, with scheduling priority over new engagements.",
      },
      {
        area: "Selective Expansion",
        detail: "As new revenue surfaces emerge — additional locations, new offerings, adjacent markets — we scope and architect them on a project basis rather than starting cold.",
      },
    ],
    dimmed: true,
  },
];

export default function MethodPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#phase-", "");
      if (!hash) return;
      const idx = phases.findIndex((p) => p.number === hash);
      if (idx >= 0) {
        setExpanded(idx);
        const el = document.getElementById(`phase-${hash}`);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        }
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <main className="pt-20">
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
            The Method
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream leading-[0.95] tracking-tight mb-8 max-w-4xl"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Structured.
          <br />
          <em className="text-gold not-italic">Sequenced.</em>
          <br />
          Built to last.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl space-y-5"
        >
          <p>
            Revenue Leak Architecture is our framework for finding structural revenue gaps and rebuilding the systems that close them.
          </p>
          <p>
            Three phases that follow a deliberate sequence. You cannot effectively redesign a revenue system without first understanding where it is broken. The Diagnostic is not optional.
          </p>
          <p>
            Engagements are scoped, fixed-fee, and sequenced. A small number of clients continue past Phase 3 into ongoing partnership.
          </p>
        </motion.div>
      </section>

      {/* Flow diagram */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0">
          {phases.map((phase, i) => (
            <div key={phase.number} className="flex flex-col lg:flex-row items-start lg:items-center flex-1">
              <ScrollReveal delay={i * 0.15} className="flex-1">
                <div
                  className={`p-6 h-full transition-opacity duration-300 ${
                    phase.dimmed
                      ? "border border-dashed border-gold/15 bg-plum-mid/[0.04] opacity-70"
                      : "border border-gold/20 bg-plum-mid/10"
                  }`}
                >
                  <span className="font-body text-xs text-gold tracking-[0.2em] block mb-2">{phase.number}</span>
                  <h3
                    className={`font-display font-light mb-1 ${
                      phase.dimmed ? "text-cream/80 text-lg" : "text-cream text-xl"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <p className="font-body text-xs text-cream/40">
                    {phase.selectivity ?? phase.duration}
                  </p>
                </div>
              </ScrollReveal>
              {i < phases.length - 1 && (
                <div className="lg:w-12 flex items-center justify-center my-2 lg:my-0 self-center">
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 24 16"
                    fill="none"
                    className={`rotate-90 lg:rotate-0 ${phases[i + 1].dimmed ? "opacity-20" : "opacity-40"}`}
                  >
                    <path
                      d="M1 8H23M16 2L22 8L16 14"
                      stroke="#c9a84c"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeDasharray={phases[i + 1].dimmed ? "3 3" : undefined}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Phase details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="space-y-3">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.number} delay={i * 0.08}>
              <div
                id={`phase-${phase.number}`}
                className="border border-gold/15 hover:border-gold/30 transition-colors duration-300 scroll-mt-24"
              >
                <button
                  className="w-full text-left px-8 py-8 flex items-start justify-between gap-8"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex gap-8 items-start flex-1 min-w-0">
                    <span className="font-body text-gold text-xs tracking-[0.2em] flex-shrink-0 pt-1">
                      {phase.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3
                          className="font-display text-cream font-light"
                          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                        >
                          {phase.title}
                        </h3>
                        <span className="font-body text-xs text-gold/60 border border-gold/20 px-2 py-1">
                          {phase.duration}
                        </span>
                        {phase.selectivity && (
                          <span className="font-body text-xs text-cream/50 border border-dashed border-gold/25 px-2 py-1 tracking-wide">
                            {phase.selectivity}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-cream/50 text-sm italic">{phase.tagline}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4V16M4 10H16" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.25, ease: [0.4, 0, 0.2, 1], delay: 0.05 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t border-gold/10">
                        <div className="grid lg:grid-cols-3 gap-12 pt-8">
                          <div className="lg:col-span-2">
                            <p className="font-body text-cream/60 text-sm leading-relaxed mb-6">
                              {phase.description}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                              {phase.expanded.map((item) => (
                                <div key={item.area} className="border-l border-gold/20 pl-4">
                                  <h4 className="font-body text-cream text-sm font-medium mb-1.5">
                                    {item.area}
                                  </h4>
                                  <p className="font-body text-cream/50 text-xs leading-relaxed">
                                    {item.detail}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-4">
                              Deliverables
                            </p>
                            <ul className="space-y-3">
                              {phase.deliverables.map((d) => (
                                <li key={d} className="flex items-start gap-3">
                                  <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                                    <svg viewBox="0 0 16 16" fill="none">
                                      <path d="M3 8L6.5 11.5L13 4.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                  <span className="font-body text-sm text-cream/65">{d}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6 pt-5 border-t border-gold/15">
                              <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-2">
                                Fee
                              </p>
                              <p className="font-body text-sm text-cream/70 leading-relaxed">
                                {phase.fee}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <ScrollReveal className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-plum-deep text-3xl lg:text-4xl font-light leading-tight mb-2">
              Start with the Diagnostic.
            </h2>
            <p className="font-body text-plum-deep/70 text-sm max-w-2xl">
              $3,500. 15 days. Credited toward Phase 2 if you proceed. The rest follows from what we find.
            </p>
          </div>
          <Link
            href="/diagnostic"
            data-cursor="cta"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            See the Diagnostic
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
