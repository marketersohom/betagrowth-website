"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import MagneticButton from "@/components/MagneticButton";

const stats = [
  { value: 48, suffix: "%", label: "Revenue growth, Year 1", context: "Amla Spa Group" },
  { value: 84, suffix: "%", label: "Revenue growth, Year 2", context: "Amla Spa Group" },
  { value: 4.6, suffix: "", label: "Google review score", context: "Up from 4.2" },
  { value: 7, suffix: "", label: "New partnerships secured", context: "Amla Spa Group" },
];

const phases = [
  {
    number: "01",
    title: "Revenue Diagnostic",
    description: "15 days. 12 audit areas. A complete map of where your revenue is leaking and exactly what is causing it.",
    deliverable: "Revenue Leak Report + Priority Matrix",
  },
  {
    number: "02",
    title: "System Architecture",
    description: "We design the revenue systems your business should have been running from the start. Pricing, positioning, partnerships, operations.",
    deliverable: "Growth Blueprint + Implementation Roadmap",
  },
  {
    number: "03",
    title: "Execution & Integration",
    description: "Hands-on build. We work alongside your team to install new systems, track metrics, and iterate until the numbers move.",
    deliverable: "Live Systems + 90-Day Performance Report",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background letterform parallax */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span
            className="font-display text-[28vw] font-light text-cream/[0.03] leading-none"
            aria-hidden="true"
          >
            B
          </span>
        </motion.div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a0d3530_0%,_transparent_70%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                Revenue Leak Architecture
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-cream leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
            >
              Your revenue
              <br />
              <em className="text-gold not-italic">is leaking.</em>
              <br />
              We find where.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="font-body text-cream/60 text-lg lg:text-xl leading-relaxed max-w-2xl mb-12"
            >
              Most businesses in hospitality, wellness, and professional services are losing 20 to 40 percent of their potential revenue to invisible gaps in pricing, positioning, and operations. We build the systems that stop it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                className="px-8 py-4 bg-gold text-plum-deep font-body font-medium text-sm tracking-wide hover:bg-gold-light transition-colors duration-300"
                onClick={() => (window.location.href = "/diagnostic")}
              >
                Start the Diagnostic
              </MagneticButton>
              <Link
                href="/method"
                className="px-8 py-4 border border-cream/20 text-cream font-body text-sm tracking-wide hover:border-cream/50 transition-colors duration-300 text-center"
              >
                See the Method
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-plum to-transparent pointer-events-none" />
      </section>

      {/* Stats bar */}
      <section className="border-y border-gold/10 bg-plum-mid/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <ScrollReveal className="mb-6">
            <p className="font-body text-xs text-gold tracking-[0.2em] uppercase text-center">
              From the Amla Spa Group engagement
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-gold text-5xl lg:text-6xl font-light mb-2">
                  <CountUp
                    end={stat.value}
                    prefix={stat.suffix === "%" ? "+" : ""}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <p className="font-body text-cream text-sm mb-1">{stat.label}</p>
                <p className="font-body text-cream/40 text-xs">{stat.context}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Leak concept */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Problem
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Revenue leak is structural, not strategic.
            </h2>
            <p className="font-body text-cream/60 leading-relaxed mb-6">
              It is not about working harder or spending more on marketing. The leak happens at the architectural level: pricing that does not reflect actual value, operations that create booking friction, online presence that loses guests before they even call.
            </p>
            <p className="font-body text-cream/60 leading-relaxed">
              Most consultants optimize what exists. We start from the architecture and rebuild it so revenue flows where it should.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {/* Visual: leak diagram */}
            <div className="relative">
              <div className="border border-gold/20 p-8 bg-plum-mid/20">
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-6">Where revenue leaks</p>
                {[
                  { label: "Pricing architecture", pct: 78 },
                  { label: "Booking & conversion friction", pct: 62 },
                  { label: "Online reputation signals", pct: 45 },
                  { label: "Partnership & channel gaps", pct: 55 },
                  { label: "Retention & repeat revenue", pct: 70 },
                ].map((item, i) => (
                  <div key={item.label} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-xs text-cream/70">{item.label}</span>
                      <span className="font-body text-xs text-gold">{item.pct}%</span>
                    </div>
                    <div className="h-px bg-cream/10 relative overflow-hidden">
                      <ScrollReveal>
                        <motion.div
                          className="h-full bg-gold absolute left-0 top-0"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        />
                      </ScrollReveal>
                    </div>
                  </div>
                ))}
                <p className="font-body text-xs text-cream/30 mt-5">
                  Percentage of audited businesses with significant gaps in each area.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three phases */}
      <section className="bg-plum-deep/60 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Method
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Three phases. Each one builds on the last.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i * 0.12}>
                <div className="relative group">
                  <div className="font-display text-8xl font-light text-cream/[0.04] absolute -top-4 -left-2 leading-none pointer-events-none">
                    {phase.number}
                  </div>
                  <div className="relative pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-body text-xs text-gold tracking-[0.2em]">
                        {phase.number}
                      </span>
                      <div className="h-px flex-1 bg-gold/20 group-hover:bg-gold/40 transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-cream text-2xl font-light mb-3">
                      {phase.title}
                    </h3>
                    <p className="font-body text-cream/55 text-sm leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    <div className="pt-4 border-t border-cream/10">
                      <p className="font-body text-xs text-gold tracking-[0.1em] uppercase mb-1">
                        Deliverable
                      </p>
                      <p className="font-body text-sm text-cream/70">{phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-12">
            <Link
              href="/method"
              className="inline-flex items-center gap-3 font-body text-sm text-gold hover:text-gold-light transition-colors duration-200"
            >
              Full method breakdown
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 5H15M11 1L15 5L11 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mx-auto opacity-40">
                <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 2.4C11.2 3.2 8.8 5.6 8 9.6H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 2.4C28.8 3.2 26.4 5.6 25.6 9.6H32V24H17.6Z" fill="#c9a84c"/>
              </svg>
            </div>
            <blockquote
              className="font-display text-cream italic leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              &ldquo;Sohom has been our growth partner for over two years now. He&apos;s practically part of our internal team. Our monthly revenue has grown 46% in the first year.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-px bg-gold" />
              <div>
                <p className="font-body text-cream text-sm font-medium">Jim Sutherland</p>
                <p className="font-body text-cream/40 text-xs">Partner, Amla Spa Group</p>
              </div>
              <div className="w-10 h-px bg-gold" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Band */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-plum-deep text-3xl lg:text-4xl font-light leading-tight mb-2">
              Find out where your revenue is going.
            </h2>
            <p className="font-body text-plum-deep/70 text-sm">
              15-day audit. Fixed fee. No ongoing commitment required.
            </p>
          </div>
          <MagneticButton
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
            onClick={() => (window.location.href = "/diagnostic")}
          >
            Get the Diagnostic — $1,500
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
