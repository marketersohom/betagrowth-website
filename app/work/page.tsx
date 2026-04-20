"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const amlaStats = [
  { value: 48, suffix: "%", label: "Revenue growth", period: "Year 1" },
  { value: 84, suffix: "%", label: "Revenue growth", period: "Year 2" },
  { value: 7, suffix: "", label: "New partnerships", period: "Secured" },
  { value: 32, suffix: "%", label: "Booking errors reduced", period: "Operations" },
  { value: 4.6, suffix: "", label: "Google review score", period: "Up from 4.2" },
];

const tonyStats = [
  { value: 36, suffix: "%", label: "Coaching enquiries", period: "Increase" },
  { value: 270, suffix: "+", label: "Book waitlist", period: "Pre-launch" },
  { value: 3, suffix: "", label: "Investor conversations", period: "Initiated" },
];

export default function WorkPage() {
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
            Work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Results, not
          <br />
          <em className="text-gold not-italic">presentations.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl"
        >
          Two engagements. Specific numbers. No generic case study language.
        </motion.p>
      </section>

      {/* Amla Spa Group */}
      <section id="amla" className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <ScrollReveal className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs text-cream/40 tracking-[0.15em] uppercase">Case Study 01</span>
                <div className="h-px flex-1 max-w-[3rem] bg-gold/20" />
              </div>
              <h2
                className="font-display text-cream leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Amla Spa Group
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Wellness & Spa", "Bangkok", "Revenue Architecture", "Operations"].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                Amla Spa Group came to us at a plateau. Three locations, strong reputation, high utilization, and flat revenue. The issue was not their service quality. It was that their pricing, operations, and online presence were not structured to capture the value they were already delivering.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-5">
              <div className="border border-gold/20 p-6 bg-plum-mid/20">
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-6">Engagement scope</p>
                <ul className="space-y-3">
                  {[
                    "Full Revenue Diagnostic",
                    "Pricing Architecture Redesign",
                    "Booking System Overhaul",
                    "Partnership Program Build",
                    "Google Reputation Recovery",
                    "Staff Upsell Training",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-body text-sm text-cream/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {amlaStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="border-t border-gold/20 pt-4">
                  <div className="font-display text-gold leading-none mb-2" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                    {stat.suffix === "%" && <span className="text-2xl align-top mt-1 inline-block">+</span>}
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix !== "%" ? stat.suffix : ""}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                    {stat.suffix === "%" && "%"}
                  </div>
                  <p className="font-body text-cream text-sm">{stat.label}</p>
                  <p className="font-body text-cream/40 text-xs">{stat.period}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The Diagnostic findings</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                The audit revealed three primary leak points. First, their entry-level treatments were priced 22 percent below competitors with inferior facilities, suppressing overall price perception. Second, their online booking flow had six unnecessary steps between intent and confirmation, creating a 45 percent drop-off rate. Third, their Google Business profile had 38 unanswered negative reviews suppressing conversion from search.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                None of these were visible to the team because each individual issue appeared small. The compounding effect was significant.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h3 className="font-display text-cream text-2xl font-light mb-4">What we built</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                We redesigned their full pricing architecture with a four-tier structure aligned to their actual cost and value delivery. The booking flow was rebuilt to three steps. We developed and executed a review response strategy over 90 days, recovering their rating from 4.2 to 4.6.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The partnership program was the highest-impact element. Seven corporate wellness partnerships were activated in the first year, providing a predictable B2B revenue layer that had not previously existed.
              </p>
            </ScrollReveal>
          </div>

          {/* Testimonial */}
          <ScrollReveal className="mt-16 border-t border-gold/10 pt-12">
            <div className="max-w-2xl">
              <blockquote className="font-display text-cream italic text-xl lg:text-2xl font-light leading-relaxed mb-6">
                &ldquo;The diagnostic alone paid for itself in the first month. What Sohom identified in pricing architecture was something we had completely missed despite three years in business.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" />
                <div>
                  <p className="font-body text-cream text-sm font-medium">Arunrung Sutherland</p>
                  <p className="font-body text-cream/40 text-xs">Director, Amla Spa Group</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tony Meechai */}
      <section id="tony" className="border-t border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <ScrollReveal className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs text-cream/40 tracking-[0.15em] uppercase">Case Study 02</span>
                <div className="h-px flex-1 max-w-[3rem] bg-gold/20" />
              </div>
              <h2
                className="font-display text-cream leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Tony Meechai
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Professional Services", "Executive Coaching", "Positioning", "Brand Authority"].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                Tony Meechai is an executive coach with 15 years of experience and strong informal referral traffic. The problem was invisible: his positioning was too broad, his pricing was referral-calibrated rather than value-calibrated, and he had no systematic way to capture demand beyond personal relationships.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-5">
              <div className="border border-gold/20 p-6 bg-plum-mid/20">
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-6">Engagement scope</p>
                <ul className="space-y-3">
                  {[
                    "Positioning Audit",
                    "Offer Architecture Redesign",
                    "Content & Authority Strategy",
                    "Book Launch Framework",
                    "Investor Positioning",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-body text-sm text-cream/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-2xl">
            {tonyStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="border-t border-gold/20 pt-4">
                  <div className="font-display text-gold leading-none mb-2" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                    {stat.suffix === "%" && <span className="text-2xl align-top mt-1 inline-block">+</span>}
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix !== "%" ? stat.suffix : ""}
                      decimals={0}
                    />
                    {stat.suffix === "%" && "%"}
                  </div>
                  <p className="font-body text-cream text-sm">{stat.label}</p>
                  <p className="font-body text-cream/40 text-xs">{stat.period}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The positioning problem</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                Tony&apos;s existing positioning described what he did — executive coaching — rather than the specific outcome he reliably produced. This is extremely common in professional services. It means he competed on price with coaches who were less experienced rather than commanding a premium for specific, documented outcomes.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The diagnostic identified three specific case studies where his coaching had directly contributed to a client&apos;s business expansion. None of these were visible in his public positioning.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The rebuild</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                We rebuilt his offer architecture around a specific, deliverable outcome rather than a service description. His book, which had been a personal project, was repositioned as a lead generation and authority mechanism. A structured pre-launch strategy produced 270 waitlist sign-ups before the manuscript was complete.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The revised positioning opened three investor conversations for a coaching platform he had been developing — an asset that had been invisible under his previous positioning.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-plum-deep text-3xl lg:text-4xl font-light leading-tight mb-2">
              Your results start with the Diagnostic.
            </h2>
            <p className="font-body text-plum-deep/70 text-sm">
              15 days to understand exactly what is holding your revenue back.
            </p>
          </div>
          <Link
            href="/diagnostic"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            Start the Diagnostic
          </Link>
        </div>
      </section>
    </main>
  );
}
