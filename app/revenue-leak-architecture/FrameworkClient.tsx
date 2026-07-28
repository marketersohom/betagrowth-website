"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import MagneticButton from "@/components/MagneticButton";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

// Where the Diagnostic CTA points. Swap this single value for your booking
// scheduler URL (e.g. a Cal.com link) when it is live. Defaults to the
// existing /diagnostic route so the page works today.
const BOOKING_URL = "/diagnostic";

const categories = [
  {
    number: "01",
    name: "Demand & Positioning",
    tagline: "How the market finds the business and how it reads it before contact.",
    pct: 45,
    pctLabel: "Reputation & trust signals",
  },
  {
    number: "02",
    name: "Monetization",
    tagline: "How much is captured per transaction.",
    pct: 78,
    pctLabel: "Pricing architecture",
  },
  {
    number: "03",
    name: "Conversion",
    tagline: "Turning real interest into a completed transaction.",
    pct: 62,
    pctLabel: "Booking & conversion friction",
  },
  {
    number: "04",
    name: "Retention & Lifetime Value",
    tagline: "What happens after the first transaction.",
    pct: 70,
    pctLabel: "Retention & repeat revenue",
  },
  {
    number: "05",
    name: "Delivery & Execution",
    tagline: "Where the promise is kept or broken.",
    pct: null,
    pctLabel: null,
  },
  {
    number: "06",
    name: "Partnerships & Distribution",
    tagline: "Leverage outside the business's own funnel.",
    pct: 55,
    pctLabel: "Partnership & channel gaps",
  },
];

const foundation = {
  name: "Measurement & Data Infrastructure",
  description: "The precondition for every other field. Establishes clean visibility into actual revenue, cost, and customer data before any leak can be diagnosed with precision rather than guessed at. Not a leak category itself, nothing below this line can be measured accurately without it.",
  outcome: "A verified data baseline every subsequent finding is measured against.",
};

const modifier = {
  name: "Seasonal & Demand Cycle Exposure",
  description: "Not a leak category, a modifier applied across all six. Changes how pricing, conversion friction, and retention patterns should be read depending on where the business sits in its demand cycle. Applied on top of the findings above, not audited as a standalone item.",
  outcome: "Context that prevents every other finding from being misread by ignoring the calendar.",
};

const categoryFields = {
  "Demand & Positioning": [
    {
      name: "Channel mix & distribution",
      description: "We map where revenue actually comes from and identify channels you are over-dependent on or systematically under-using.",
      outcome: "A clear picture of channel concentration risk and untapped distribution.",
    },
    {
      name: "Competitive positioning",
      description: "We map how you are actually perceived against named competitors, not how you think you're positioned, since a pricing or packaging fix built on the wrong perception fails immediately.",
      outcome: "An evidence-based read on where you sit in the market and what that means for pricing power.",
    },
    {
      name: "Reputation & trust signals",
      description: "Reviews, response patterns, and sentiment audited to expose what your digital presence tells customers before they ever contact you.",
      outcome: "A prioritized list of reputation gaps actively costing bookings right now.",
    },
  ],
  Monetization: [
    {
      name: "Pricing architecture",
      description: "We build spa pricing architecture and room-rate models by comparing your prices against cost of delivery, competitor positioning, and willingness-to-pay signals to surface where you are undercharging.",
      outcome: "Exact price points to change, and by how much.",
    },
    {
      name: "Package & upsell structure",
      description: "We examine how your offerings are bundled and sequenced, and find where you are leaving margin on the table by not packaging, tiering, or upselling at the moments guests are most willing to spend.",
      outcome: "Specific package and upsell changes mapped to actual guest behavior, not guesswork.",
    },
    {
      name: "Discount & promotional leakage",
      description: "We audit every discount, comp, and promotional mechanism against the incremental volume it actually drives, surfacing margin given away that isn't earning its keep.",
      outcome: "A ranked list of discounting that should be cut, kept, or restructured.",
    },
  ],
  Conversion: [
    {
      name: "Conversion infrastructure",
      description: "Every touchpoint between discovery and purchase is examined for the gaps that quietly leak qualified interest.",
      outcome: "The exact points where warm interest fails to become a booking.",
    },
    {
      name: "Booking & checkout flow",
      description: "Every step between intent and confirmation is mapped to find the direct booking conversion friction that silently kills revenue.",
      outcome: "A specific list of where and why prospective guests drop off before booking.",
    },
    {
      name: "Inquiry response systems",
      description: "We measure how fast and how consistently a live inquiry actually gets handled, one of the highest-leverage and most commonly ignored leaks, since most businesses have no accurate sense of their own response time or consistency.",
      outcome: "A response-time baseline and the specific fixes to close the gap.",
    },
  ],
  "Retention & Lifetime Value": [
    {
      name: "Retention & repeat revenue",
      description: "As part of a broader hospitality retention strategy, we track what happens after the first visit, whether guests come back, how often, and why the ones who don't leave money on the table permanently.",
      outcome: "A clear retention baseline and the specific interventions that move it.",
    },
    {
      name: "Loyalty infrastructure",
      description: "We assess whether retention runs on a deliberate system, CRM, email or SMS flows, a structured loyalty program, or is left entirely to chance.",
      outcome: "A built or repaired loyalty system tied to measurable repeat revenue.",
    },
  ],
  "Delivery & Execution": [
    {
      name: "Service delivery consistency",
      description: "We examine whether what actually happens at the point of delivery matches what was priced and marketed, since a gap here undermines every fix made upstream.",
      outcome: "A clear map of where delivery diverges from promise, and why.",
    },
    {
      name: "Staff execution layer",
      description: "We examine what actually happens at the point of service, staff scripting, upsell moments, consistency, since this is where a well-designed pricing and booking system either gets executed or quietly falls apart.",
      outcome: "Specific, trainable changes to how staff convert presence into revenue.",
    },
  ],
  "Partnerships & Distribution": [
    {
      name: "Partnership & referral architecture",
      description: "Through hotel partnership channel optimization, we surface the high-leverage B2B and referral relationships you are not capturing and structure them for systematic, predictable revenue.",
      outcome: "A structured list of untapped partnership and referral channels.",
    },
  ],
};

const phases = [
  { number: "01", title: "Revenue Diagnostic" },
  { number: "02", title: "System Architecture" },
  { number: "03", title: "Ongoing Partnership" },
];

export default function FrameworkClient() {
  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-[-10rem] right-[-8rem] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Framework
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-cream leading-[0.98] tracking-tight mb-8 max-w-3xl"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              Revenue does not leak by{" "}
              <em className="text-gold">accident.</em> It leaks by design.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl mb-12"
            >
              Revenue Leak Architecture is the hotel revenue audit framework we
              use to find the structural gaps that drain 20 to 40 percent of
              potential revenue from hospitality, wellness, and professional
              services businesses, then rebuild the systems that close them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <MagneticButton
                data-cursor="cta"
                className="px-8 py-4 bg-gold text-plum-deep font-body font-medium text-sm tracking-wide hover:bg-gold-light transition-colors duration-300"
                onClick={() => (window.location.href = BOOKING_URL)}
              >
                Start the Diagnostic
              </MagneticButton>
              <a
                href="#the-six-categories"
                className="font-body text-cream/70 text-sm tracking-wide border-b border-gold pb-1 hover:text-cream transition-colors duration-300"
              >
                See the six categories ↓
              </a>
            </motion.div>
          </div>

          {/* Side stat: one real proof point */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border border-gold/20 bg-plum-mid/20 p-7"
          >
            <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-5">
              Proof of method
            </p>
            <p className="font-display text-gold leading-none mb-3" style={{ fontSize: "3.2rem" }}>
              <CountUp end={84} prefix="+" suffix="%" />
            </p>
            <p className="font-body text-cream/70 text-sm leading-relaxed">
              Revenue growth, Year 2 — Amla Spa Group
            </p>
            <div className="h-px bg-cream/10 my-5" />
            <p className="font-body text-cream/40 text-xs leading-relaxed">
              A single, real engagement. The framework below is what produced it.
            </p>
          </motion.aside>
        </div>
      </section>

      {/* THESIS */}
      <section className="border-y border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Thesis
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05] mb-10 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              A leak is a structural flaw, not a performance problem.
            </h2>
            <div className="font-body text-cream/60 leading-relaxed max-w-2xl space-y-5 text-lg">
              <p>
                When revenue goes missing, most owners reach for effort or spend.
                More campaigns. Deeper discounts. A bigger ad budget. The money
                was already lost upstream, in how the business is built. Pricing
                that ignores what guests would actually pay. Booking flows that
                shed intent at every step. Reputation signals that disqualify you
                before a customer ever makes contact.
              </p>
              <p className="text-cream/80">
                You cannot market your way out of a structural leak. Most
                consultants optimise the funnel. We audit the architecture the
                funnel sits on.
              </p>
            </div>
          </ScrollReveal>

          {/* Visual: structural strata with a leak */}
          <ScrollReveal delay={0.15} className="hidden lg:block">
            <svg viewBox="0 0 440 400" fill="none" className="w-full max-w-md mx-auto" aria-hidden="true">
              <text x="40" y="34" fill="#c9a84c" fontSize="11" letterSpacing="2" fontFamily="var(--font-inter), sans-serif">SURFACE — MARKETING & SPEND</text>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <rect
                    x="40"
                    y={56 + i * 62}
                    width="300"
                    height="54"
                    fill={`rgba(201,168,76,${0.05 + i * 0.025})`}
                    stroke="#c9a84c"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                  <line x1="40" y1={56 + i * 62 + 54} x2="340" y2={56 + i * 62 + 54} stroke="#c9a84c" strokeOpacity="0.12" strokeWidth="1" />
                </g>
              ))}
              <text x="40" y="332" fill="#f0ebe2" fillOpacity="0.4" fontSize="11" letterSpacing="2" fontFamily="var(--font-inter), sans-serif">ARCHITECTURE — WHERE REVENUE IS LOST</text>
              {/* crack running through the strata */}
              <path
                d="M250 56 L238 118 L262 180 L244 242 L258 304"
                stroke="#c9a84c"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* audit scan sweeping down through the architecture (native SVG) */}
              <line x1="40" x2="340" y1="56" y2="56" stroke="#c9a84c" strokeWidth="1.5" opacity="0">
                <animate attributeName="y1" values="56;296;56" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="y2" values="56;296;56" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.7;0" dur="4.2s" repeatCount="indefinite" />
              </line>
              {/* continuously leaking droplets (native SVG) */}
              {[0, 0.63, 1.26].map((begin, i) => (
                <circle key={i} cx="258" cy="300" r="3" fill="#c9a84c" opacity="0">
                  <animate attributeName="cy" values="300;352" dur="1.9s" begin={`${begin}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.85;0" dur="1.9s" begin={`${begin}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* THE SIX CATEGORIES */}
      <section id="the-six-categories" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 scroll-mt-24">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
              The Six Categories
            </span>
          </div>
          <h2
            className="font-display text-cream leading-[1.05] mb-6 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Revenue leaks in six places. Most businesses are losing in at least
            three.
          </h2>
          <p className="font-body text-cream/55 text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
            From spa pricing architecture to direct booking conversion friction
            and hotel partnership channel optimization, each category below is
            a distinct place structural revenue goes missing.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.number} delay={i * 0.08} className="bg-plum">
              <div className="group h-full p-7 flex flex-col transition-colors duration-300 hover:bg-plum-mid/30">
                <span className="font-body text-xs text-gold tracking-[0.2em] mb-5 transition-transform duration-300 group-hover:translate-x-1">
                  {cat.number}
                </span>
                {cat.pct !== null ? (
                  <p className="font-display text-gold leading-none mb-3" style={{ fontSize: "2.4rem" }}>
                    <CountUp end={cat.pct} suffix="%" />
                  </p>
                ) : (
                  <p className="font-body text-cream/40 text-xs italic leading-relaxed mb-3 max-w-[14rem]">
                    No single number — a consistency problem, addressed field by field.
                  </p>
                )}
                <h3 className="font-display text-cream text-xl font-light leading-snug mb-2">
                  {cat.name}
                </h3>
                <p className="font-body text-cream/50 text-sm leading-relaxed mb-6">
                  {cat.tagline}
                </p>
                <div className="mt-auto h-px w-9 bg-gold transition-all duration-300 group-hover:w-16" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="font-body text-cream/30 text-xs mt-6 italic">
          Source: Generation Beta, Ghost-Shop &amp; Revenue Diagnostic Study,
          Bangkok, 2024–2026. Findings based on structured wellness
          mystery-shopping audits and hotel revenue audits across hospitality,
          wellness, and professional services in Thailand, Singapore, and
          Indonesia. Delivery & Execution
          has no research backing yet and is shown without a stat until a
          dedicated audit pass covers it.
        </p>
      </section>

      {/* THE FOURTEEN FIELDS */}
      <section id="the-fourteen-fields" className="border-y border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <ScrollReveal className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Full Breakdown
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              One foundation, six categories, fourteen fields, one modifier.
            </h2>
            <p className="font-body text-cream/55 text-base lg:text-lg leading-relaxed">
              Every Diagnostic runs this exact structure. Nothing below the
              foundation line can be measured accurately without it; nothing
              in the six categories is read correctly without the modifier
              applied on top.
            </p>
          </ScrollReveal>

          {/* Foundation */}
          <ScrollReveal className="mb-14">
            <div className="border border-gold/20 bg-plum/40 p-7 max-w-3xl">
              <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-3">
                Foundation
              </p>
              <h3 className="font-display text-cream text-xl font-light mb-3">
                {foundation.name}
              </h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-3">
                {foundation.description}
              </p>
              <p className="font-body text-gold/70 text-xs italic">
                Outcome: {foundation.outcome}
              </p>
            </div>
          </ScrollReveal>

          {/* Six categories, each with its fields */}
          <div className="space-y-16">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.number} delay={i * 0.06}>
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-body text-xs text-gold tracking-[0.2em]">
                      {cat.number}
                    </span>
                    <h3 className="font-display text-cream text-2xl font-light">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="font-body text-cream/50 text-sm leading-relaxed mb-8 max-w-2xl">
                    {cat.tagline}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                    {categoryFields[cat.name as keyof typeof categoryFields].map((field) => (
                      <div key={field.name} className="border-l border-gold/20 pl-5">
                        <h4 className="font-body text-cream text-sm font-medium mb-2">
                          {field.name}
                        </h4>
                        <p className="font-body text-cream/50 text-xs leading-relaxed mb-3">
                          {field.description}
                        </p>
                        <p className="font-body text-gold/60 text-xs italic">
                          Outcome: {field.outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Modifier */}
          <ScrollReveal className="mt-16">
            <div className="border border-dashed border-gold/25 bg-plum/20 p-7 max-w-3xl">
              <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-3">
                Modifier
              </p>
              <h3 className="font-display text-cream text-xl font-light mb-3">
                {modifier.name}
              </h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-3">
                {modifier.description}
              </p>
              <p className="font-body text-gold/70 text-xs italic">
                Outcome: {modifier.outcome}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY ARCHITECTURE */}
      <section className="border-y border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-gold" />
                <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                  Why Architecture
                </span>
              </div>
              <h2
                className="font-display text-cream leading-[1.05] mb-10 max-w-3xl"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                An audit hands you a report. Architecture hands you a{" "}
                <em className="text-gold">system.</em>
              </h2>
              <p className="font-body text-cream/60 leading-relaxed max-w-2xl text-lg mb-12">
                Checklist consulting tells you what is wrong and leaves. Revenue
                Leak Architecture treats the diagnosis as the first move, not the
                deliverable. We locate the leak, design the system that closes it,
                and stay embedded until the numbers move. The sequence is
                deliberate. You cannot redesign a revenue system you have not
                first measured.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative border-l-2 border-gold pl-8 py-2 max-w-2xl">
                <p className="font-display text-cream font-light leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  You cannot fix a leak you cannot locate.
                </p>
                <p className="font-body text-gold/60 text-xs tracking-[0.15em] uppercase mt-4">
                  Revenue Leak Architecture · First Principle
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual: labeled architecture diagram (native SVG + SMIL) */}
          <ScrollReveal delay={0.15} className="hidden lg:block">
            <div className="relative w-full max-w-2xl mx-auto">
              <ArchitectureDiagram />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE EVIDENCE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                The Evidence
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05] mb-10 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Built from the field, not the <em className="text-gold">whiteboard.</em>
            </h2>
            <p className="font-body text-cream/60 leading-relaxed max-w-2xl text-lg">
              The framework comes out of direct operator work and structured
              ghost-shopping across hospitality, wellness, and professional
              services in Southeast Asia, including Thailand, Singapore, and
              Indonesia. In the Amla Spa Group engagement, closing these
              leaks drove a 46% increase in year-over-year revenue in Year 1,
              compounding to 84% in Year 2.
            </p>
          </ScrollReveal>

          {/* Visual: compounding growth curve */}
          <ScrollReveal delay={0.15} className="hidden lg:block">
            <svg viewBox="0 0 440 300" fill="none" className="w-full max-w-md mx-auto" aria-hidden="true">
              <defs>
                <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* baseline grid */}
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="50" y1={50 + i * 50} x2="410" y2={50 + i * 50} stroke="#f0ebe2" strokeOpacity="0.08" strokeWidth="1" />
              ))}
              {/* area under curve */}
              <path d="M70 230 L240 150 L390 60 L390 250 L70 250 Z" fill="url(#growthFill)" />
              {/* rising line */}
              <path
                d="M70 230 L240 150 L390 60"
                stroke="#c9a84c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* plotted points + labels */}
              <g>
                <circle cx="240" cy="150" r="6" fill="#1a0520" stroke="#c9a84c" strokeWidth="2" />
                <text x="240" y="132" fill="#c9a84c" fontSize="16" fontWeight="600" textAnchor="middle" fontFamily="var(--font-cormorant), serif">+46%</text>
                <text x="240" y="278" fill="#f0ebe2" fillOpacity="0.4" fontSize="11" textAnchor="middle" fontFamily="var(--font-inter), sans-serif">YEAR 1</text>
              </g>
              <g>
                <circle cx="390" cy="60" r="6" fill="#1a0520" stroke="#c9a84c" strokeWidth="2" />
                <text x="390" y="42" fill="#c9a84c" fontSize="16" fontWeight="600" textAnchor="middle" fontFamily="var(--font-cormorant), serif">+84%</text>
                <text x="390" y="278" fill="#f0ebe2" fillOpacity="0.4" fontSize="11" textAnchor="middle" fontFamily="var(--font-inter), sans-serif">YEAR 2</text>
              </g>
              {/* marker riding the curve (native SVG) */}
              <circle r="5" fill="#e2c97e" cx="70" cy="230">
                <animate attributeName="cx" values="70;240;390" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="cy" values="230;150;60" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" repeatCount="indefinite" />
              </circle>
              {/* pulsing endpoint (native SVG) */}
              <circle cx="390" cy="60" r="6" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                <animate attributeName="r" values="6;20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {[
            { value: 46, label: "Revenue growth, Year 1", context: "Amla Spa Group" },
            { value: 84, label: "Revenue growth, Year 2", context: "Amla Spa Group" },
          ].map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="border border-gold/20 bg-plum-mid/20 p-7 transition-all duration-300 hover:border-gold/45 hover:-translate-y-1">
                <p className="font-display text-gold leading-none mb-3" style={{ fontSize: "2.8rem" }}>
                  <CountUp end={m.value} prefix="+" suffix="%" />
                </p>
                <p className="font-body text-cream text-sm font-medium">{m.label}</p>
                <p className="font-body text-cream/40 text-xs mt-1">{m.context}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <Link
            href="/work#amla"
            className="inline-block mt-10 font-body text-cream/80 text-sm tracking-wide border-b border-gold pb-1 hover:text-cream transition-colors duration-300"
          >
            See the case study →
          </Link>
        </ScrollReveal>
      </section>

      {/* FROM FRAMEWORK TO ENGAGEMENT */}
      <section className="border-y border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                How it runs
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05] mb-10 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              The framework becomes an engagement in three sequenced phases.
            </h2>
            <p className="font-body text-cream/60 leading-relaxed max-w-2xl text-lg mb-12">
              Diagnostic first, always. A 15-day audit across fourteen fields
              and six categories produces a complete map of where revenue is
              leaking and what is causing it. System Architecture and Ongoing
              Partnership follow from what the Diagnostic finds.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-4">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i * 0.1}>
                <div className="border border-gold/20 bg-plum-mid/10 p-6 h-full transition-all duration-300 hover:border-gold/45 hover:-translate-y-1">
                  <span className="font-body text-xs text-gold tracking-[0.2em] block mb-3">
                    {phase.number}
                  </span>
                  <h3 className="font-display text-cream text-xl font-light">
                    {phase.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <Link
              href="/method"
              className="inline-block mt-10 font-body text-cream/80 text-sm tracking-wide border-b border-gold pb-1 hover:text-cream transition-colors duration-300"
            >
              See the full Method →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <ScrollReveal className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-body text-plum-deep/60 text-xs tracking-[0.2em] uppercase mb-4">
              Start here
            </p>
            <h2 className="font-display text-plum-deep text-3xl lg:text-5xl font-light leading-tight mb-3 max-w-xl">
              Find out where your revenue is going.
            </h2>
            <p className="font-body text-plum-deep/70 text-sm max-w-2xl">
              15-day audit. Fixed fee of $2,500, credited in full toward Phase 2
              if you proceed within 60 days. No ongoing commitment required.
            </p>
          </div>
          <Link
            href={BOOKING_URL}
            data-cursor="cta"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            Get the Diagnostic
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
