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
  guarantee?: string;
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
    tagline: "In 15 days you will know exactly where your revenue is leaking, what each leak is costing you, and which fixes pay back first.",
    description: "The Diagnostic is the foundation of everything, and it removes the guessing. We examine fourteen fields across six categories, interview your team, and read your actual data. You walk away with a ranked list of every place money is leaving your business and the recoverable value attached to each one. From that point on, every decision you make about what to fix comes with a number next to it. We recommend nothing until we have found where the money goes.",
    fee: "$2,500, fixed. Credited in full against System Architecture if you proceed within 60 days.",
    guarantee: "If the Diagnostic does not surface at least three times its own fee in recoverable revenue, you do not move to the next phase and you do not pay for it. You keep the Priority Matrix regardless. We only build when the numbers justify building.",
    deliverables: [
      "Revenue Leak Report",
      "Priority Matrix — ranked by impact and effort",
      "90-Day Action Plan",
      "Delivery call with full walkthrough",
    ],
    expanded: [
      {
        area: "Pricing Architecture",
        detail: "We show you where your prices sit against your real cost of delivery, your competitors, and what guests already believe you are worth. Most hospitality businesses undercharge their best offerings by 15 to 30 percent and never know it.",
      },
      {
        area: "Booking Flow Analysis",
        detail: "We trace every friction point between an interested guest and a completed booking, and show you exactly where people drop off and which small changes recover the most bookings.",
      },
      {
        area: "Online Reputation Signals",
        detail: "Reviews, response patterns, and sentiment. We show you what your online presence is telling potential guests about you before they ever make contact.",
      },
      {
        area: "Channel Mix & Distribution",
        detail: "We map where your bookings actually come from, referral versus walk-in versus online, and show you where you are dangerously over-dependent on a single source.",
      },
    ],
  },
  {
    number: "02",
    title: "System Architecture",
    duration: "6 to 10 weeks",
    tagline: "We build the systems your Diagnostic identified and install them inside your operation, so the revenue you have been missing actually starts showing up.",
    description: "Knowing where revenue leaks is worth nothing if the fixes never get built. This is where they get built. We take the highest-return gaps from your Priority Matrix and turn them into live systems: pricing rebuilt and in production, booking friction removed, channels and partnerships activated. Then we install each system inside your operation and train your team to run it, so the change holds after we step back. The two reasons revenue fixes usually die, nobody executes them and the staff resists them, are the two things this phase exists to solve. Engagements are scoped to three to five modules, sequenced by dependency and impact, priced per module. This is not an open-ended rebuild.",
    fee: "Modules from $800, most engagements $6,000 to $14,000. Scoped per module from Diagnostic findings.",
    deliverables: [
      "Revenue System Blueprint",
      "Pricing & packaging redesign, installed",
      "Channel & partnership strategy, activated",
      "Systems built, integrated, and live with your team",
    ],
    expanded: [
      {
        area: "Pricing Model Redesign",
        detail: "We build pricing architectures that capture value accurately, tiered offerings, package structures, seasonal logic, and upsell sequences, then put them into production.",
      },
      {
        area: "Conversion Infrastructure",
        detail: "We build and install the systems that move guests from discovery to booking to repeat. Every touchpoint mapped, rebuilt, and switched on.",
      },
      {
        area: "Partnership & Channel Activation",
        detail: "We identify your highest-value B2B relationships and distribution channels, then structure and activate them so the revenue actually starts flowing.",
      },
      {
        area: "Installation & Team Training",
        detail: "We work inside your operation to install each system and train your team to run it, so the architecture holds after we step back. Accountable for the systems going live, not just the plan.",
      },
    ],
  },
  {
    number: "03",
    title: "Ongoing Partnership",
    duration: "Monthly",
    tagline: "We stay in and run the systems with you, so the gains compound instead of decaying the moment we would otherwise walk out the door.",
    description: "Built systems decay without an owner. Prices drift back, staff slip to old habits, the partnerships you activated go quiet. Ongoing Partnership keeps that from happening. We stay embedded and accountable for the numbers, reviewing conversion, average spend, repeat rate, and review velocity every week, and running a full performance deep-dive every quarter. You also keep access to everything in your Priority Matrix that was not built in Phase 2, so the next tier of gains keeps arriving. This is priced against the revenue your systems protect and compound, not against hours on a clock.",
    fee: "From $2,500/month, scoped to systems under management. Minimum term: 3 months on the sequential path, 9 months on the committed partnership.",
    deliverables: [
      "Weekly metric tracking and iteration",
      "Hands-on ownership of the live systems",
      "Partnership activation and growth",
      "Quarterly performance reviews",
    ],
    expanded: [
      {
        area: "Embedded Execution",
        detail: "We stay inside your operation running the systems we built, present and accountable for the outcomes, not handing you a dashboard and leaving.",
      },
      {
        area: "Metric Tracking",
        detail: "Every week we review the indicators that matter: conversion rate, average spend, repeat booking rate, review velocity. Data drives every decision.",
      },
      {
        area: "Quarterly Performance Reviews",
        detail: "Structured deep-dives every three months across pricing health, channel mix, partnership velocity, and conversion trends, each producing a focused next-quarter action set.",
      },
    ],
  },
];

export default function MethodClient() {
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
          Know exactly where your revenue is leaking.
          <br />
          <em className="text-gold not-italic">Close the leaks.</em>
          <br />
          Keep them closed.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl space-y-5"
        >
          <p>
            Most hospitality and wellness businesses are quietly losing revenue in places the owner never sees. Underpriced rooms and treatments. Bookings lost to friction nobody tracks. Channels they lean on too hard. We find every leak, put a number on each one, build the systems that close them, and stay in to keep them closed.
          </p>
          <p>
            Three phases, one direction. You start by seeing exactly where the money goes. You move to building the systems that recover it. You end with those systems run and compounding month over month. You can walk the phases one decision at a time, or commit to the whole arc from day one.
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
                            {phase.guarantee && (
                              <div className="mt-6 pt-5 border-t border-gold/15">
                                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-2">
                                  Guarantee
                                </p>
                                <p className="font-body text-sm text-cream/70 leading-relaxed">
                                  {phase.guarantee}
                                </p>
                              </div>
                            )}
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

      {/* Two ways to engage */}
      <section className="border-t border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <ScrollReveal className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                Two Ways To Engage
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Two ways to work with us.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal delay={0}>
              <div className="border border-gold/20 bg-plum-mid/10 p-8 h-full">
                <p className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">
                  Track One
                </p>
                <h3 className="font-display text-cream text-2xl font-light mb-4">
                  The Path
                </h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed">
                  Diagnostic, then Architecture, then Partnership. Three stages, three decisions. You commit one step at a time and only continue when the numbers justify it. Your Diagnostic fee is credited in full against Architecture when you proceed. This is the careful route, and it works.
                </p>
                <div className="mt-6 pt-5 border-t border-gold/15">
                  <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-2">
                    Term
                  </p>
                  <p className="font-body text-sm text-cream/70 leading-relaxed">
                    Retainer minimum, 3 months.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border border-gold/40 bg-plum-mid/20 p-8 h-full">
                <p className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">
                  Track Two
                </p>
                <h3 className="font-display text-cream text-2xl font-light mb-4">
                  The Partnership
                </h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed">
                  One agreement across all three phases, for operators ready to move now. Your Diagnostic is credited in full, your build moves to the front of the queue, and we run the system with you from day one. This is the path built for the businesses we most want to work with, and it is the one that compounds fastest, because there is no pause between finding the leaks, closing them, and keeping them closed.
                </p>
                <div className="mt-6 pt-5 border-t border-gold/15">
                  <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-2">
                    Term
                  </p>
                  <p className="font-body text-sm text-cream/70 leading-relaxed">
                    Partnership term, 9 months.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
              $2,500. 15 days. Credited toward Phase 2 if you proceed. The rest follows from what we find.
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
