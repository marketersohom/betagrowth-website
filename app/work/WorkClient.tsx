"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const spaStats = [
  { value: 46, suffix: "%", label: "Revenue growth", period: "Year 1" },
  { value: 84, suffix: "%", label: "Revenue growth", period: "Year 2" },
  { value: 11, suffix: "", label: "New partnerships", period: "Secured" },
  { value: 32, suffix: "%", label: "Booking errors reduced", period: "Operations" },
  { value: 92, suffix: "%", label: "Increase in AOV", period: "Operations" },
  { value: 28, suffix: "%", label: "Expat retention rate", period: "Increase" },
];

const coachStats = [
  { value: 36, suffix: "%", label: "Coaching enquiries", period: "Increase" },
  { value: 270, suffix: "+", label: "Book waitlist", period: "Pre-launch" },
  { value: 3, suffix: "", label: "Investor conversations", period: "Initiated" },
];

const retreatStats = [
  { value: 18, suffix: "%", label: "Booking conversion", period: "No discounts" },
  { value: 4, suffix: " of 6", label: "Recommendations live", period: "Within 90 days" },
];

const peptideStats = [
  { value: 86, suffix: "%", label: "Enquiries", period: "First 12 months" },
  { value: 39, suffix: "%", label: "Enquiry-to-purchase rate", period: "First 12 months" },
  { value: 90, suffix: "%", label: "Average order value", period: "First 12 months" },
  { value: 58.78, suffix: "%", label: "Average customer LTV", period: "First 12 months" },
];

export default function WorkClient() {
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
          Where the system
          <br />
          <em className="text-gold not-italic">works.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl"
        >
          Hospitality growth case studies with real numbers. A luxury spa revenue case study from Phuket, an executive coaching positioning engagement, a wellness retreat diagnostic in India, and a 12-month growth partnership with a UK research peptide brand, all from live revenue architecture engagements.
        </motion.p>
      </section>

      {/* Premium spa & hydrotherapy group */}
      <section id="spa-group" className="border-t border-gold/10">
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
                Premium Spa &amp; Hydrotherapy Group
              </h2>
              <p className="font-body text-gold/80 text-sm tracking-wide mb-5">
                Luxury spa revenue case study: +84% revenue growth through spa pricing architecture &amp; booking optimization
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Wellness & Spa", "Phuket, Thailand", "Revenue Architecture", "Operations"].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                This premium spa and hydrotherapy group in Phuket came to us at a plateau. Three locations, strong reputation, high utilization, and flat revenue. The issue was not their service quality. It was that their spa pricing strategy, operations, and online presence were not structured to capture the value they were already delivering.
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
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
            {spaStats.map((stat, i) => (
              <ScrollReveal key={`${stat.label}-${stat.period}`} delay={i * 0.08}>
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

          <ScrollReveal className="mb-16">
            <p className="font-body text-cream/70 text-base leading-relaxed max-w-3xl">
              Through our engagement with this Phuket spa and hydrotherapy group, we rebuilt pricing architecture and eliminated booking friction to drive a 46% increase in year-over-year revenue in Year 1, compounding to an 84% increase in Year 2. Average order value increased 92%, expat guest retention rose 28%, and eleven new corporate wellness partnerships were secured.
            </p>
          </ScrollReveal>

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
                We redesigned their full spa pricing architecture with a four-tier structure aligned to their actual cost and value delivery. The booking flow was rebuilt to three steps. Through this spa AOV optimization, average order value rose 92 percent, and a loyalty and communication overhaul aimed at the expat guest base lifted expat retention by 28 percent — measurable wellness pricing strategy results within two quarters.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The partnership program was the highest-impact element. Eleven corporate wellness partnerships were activated in the first year, providing a predictable B2B revenue layer that had not previously existed.
              </p>
            </ScrollReveal>
          </div>

          {/* Testimonial */}
          <ScrollReveal className="mt-16 border-t border-gold/10 pt-12">
            <div className="max-w-2xl">
              <blockquote className="font-display text-cream italic text-xl lg:text-2xl font-light leading-relaxed mb-6">
                &ldquo;Sohom has been our growth partner for over two years now. He&apos;s practically part of our internal team. Our monthly revenue grew 46% in the first year and another 84% in the second.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" />
                <div>
                  <p className="font-body text-cream text-sm font-medium">Partner</p>
                  <p className="font-body text-cream/40 text-xs">Premium spa &amp; hydrotherapy group, Phuket</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Executive coaching */}
      <section id="executive-coaching" className="border-t border-gold/10 bg-plum-mid/10">
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
                Executive Coaching
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Professional Services", "Executive Coaching", "Positioning", "Brand Authority"].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                The client is an executive coach with 15 years of experience and strong informal referral traffic. The problem was invisible: his positioning was too broad, his pricing was referral-calibrated rather than value-calibrated, and he had no systematic way to capture demand beyond personal relationships.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 max-w-2xl">
            {coachStats.map((stat, i) => (
              <ScrollReveal key={`${stat.label}-${stat.period}`} delay={i * 0.08}>
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
          <ScrollReveal className="mb-4">
            <p className="font-body text-cream/70 text-base leading-relaxed max-w-3xl">
              Through our positioning and offer-architecture engagement with an executive coaching practice, we repositioned the practice around outcome-based value to drive a 36% increase in coaching enquiries, with a 270+ waitlist secured ahead of his book launch and three investor conversations initiated.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body text-cream/45 text-xs italic max-w-2xl mb-16 leading-relaxed">
              Pre-launch positioning engagement. Revenue results pending book launch, August 2026.
            </p>
          </ScrollReveal>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The positioning problem</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                His existing positioning described what he did, executive coaching, rather than the specific outcome he reliably produced. This is extremely common in professional services. It means he competed on price with coaches who were less experienced, rather than commanding a premium for specific, documented outcomes.
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
                The revised positioning opened three investor conversations for a coaching platform he had been developing, an asset that had been invisible under his previous positioning.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wellness retreat */}
      <section id="wellness-retreat" className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <ScrollReveal className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs text-cream/40 tracking-[0.15em] uppercase">Case Study 03</span>
                <div className="h-px flex-1 max-w-[3rem] bg-gold/20" />
              </div>
              <h2
                className="font-display text-cream leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Boutique Health &amp; Wellness Retreat Group
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Hospitality & Wellness", "North & South India", "Revenue Diagnostic", "Guest Persona"].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                A wellness retreat company running several lifestyle and luxury brands across multiple locations in North and South India, with a product and on-site experience stronger than many competitors. The problem was invisible: the company had never defined its core ideal guest, so the website, pricing, and pre-booking calls were each built around a different idea of who they were selling to. Revenue was unpredictable and often stalled for months.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-5">
              <div className="border border-gold/20 p-6 bg-plum-mid/20">
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-6">Engagement scope</p>
                <ul className="space-y-3">
                  {[
                    "15-Day Diagnostic",
                    "Revenue Leak Report",
                    "Priority Matrix, ranked by impact and effort",
                    "90-Day Action Plan",
                    "Delivery call with full walkthrough",
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 max-w-2xl">
            {retreatStats.map((stat, i) => (
              <ScrollReveal key={`${stat.label}-${stat.period}`} delay={i * 0.08}>
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
          <ScrollReveal className="mb-4">
            <p className="font-body text-cream/70 text-base leading-relaxed max-w-3xl">
              Through our 15-Day Diagnostic with a multi-brand wellness retreat company, we identified the missing ideal guest persona behind their revenue leaks and built six recommendations around it. Their in-house team implemented four, driving an 18% increase in booking conversion among target guests within 90 days, with no discounting.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body text-cream/45 text-xs italic max-w-2xl mb-16 leading-relaxed">
              Diagnostic-only engagement. Recommendations were implemented by the client&apos;s in-house team.
            </p>
          </ScrollReveal>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The persona problem</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                The company had never defined its core ideal guest. This is the most common gap we find, and it made everything downstream haphazard. The website read like a travel portal rather than a premium destination, so heavy discounting was doing the work positioning should have done. Pre-booking calls were handled by temps reading a script so generic it could have sold soap.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The in-house team was capable, but most of its work improved on what predecessors had built. No one had looked at the full picture, so the website, pricing, guest calls, retention, and partnerships each ran in its own silo, with no system for lifetime value and no outbound partnership channel.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The recommendations</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                We started by defining the ideal guest persona, then built every recommendation around the behavioral and cognitive biases that shape how that guest decides to book. The findings were delivered as a Revenue Leak Report, a priority matrix ranked by impact and effort, and a 90-day action plan, walked through in full on a delivery call.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The in-house team implemented four of the six recommendations. Within the first 90 days, booking conversion among their target guests rose 18% without a single discount, in line with what the diagnostic had projected.
              </p>
            </ScrollReveal>
          </div>

          {/* Testimonial */}
          <ScrollReveal className="mt-16 border-t border-gold/10 pt-12">
            <div className="max-w-2xl">
              <blockquote className="font-display text-cream italic text-xl lg:text-2xl font-light leading-relaxed mb-6">
                &ldquo;I wish we had met Generation Beta a couple of years ago. None of the consultants we had worked with ever pointed out so much truth, let alone in 15 days. Most agencies were more focused on stretching the retainer than finding what was actually causing the problem. Once we had the leak report, the whole journey became simple and logical. Ninety days later, we are getting pretty much the results they predicted.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" />
                <div>
                  <p className="font-body text-cream text-sm font-medium">Managing Director</p>
                  <p className="font-body text-cream/40 text-xs">Boutique health &amp; wellness retreat group, India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research peptide brand */}
      <section id="peptide-brand" className="border-t border-gold/10 bg-plum-mid/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <ScrollReveal className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs text-cream/40 tracking-[0.15em] uppercase">Case Study 04</span>
                <div className="h-px flex-1 max-w-[3rem] bg-gold/20" />
              </div>
              <h2
                className="font-display text-cream leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Research Peptide Brand, UK
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Wellness", "UK to Europe, US & SEA", "Brand Authority", "Growth Partnership"].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                A single-brand research peptide distributor in the United Kingdom, selling individual peptides and stacks to buyers mostly across Europe, the US, and Southeast Asia. Peptides are a regulated category, the rules differ from country to country, and in some markets they are banned outright. The business had full legal paperwork, a large inventory, and a word-of-mouth customer base. The problem was invisible: to search engines and first-time visitors abroad, the brand looked no different from a bot or a scam. Their previous agency pushed Meta and Google ads, the accounts were banned three times in the first month, and the inventory sat unsold.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-5">
              <div className="border border-gold/20 p-6 bg-plum-mid/20">
                <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-6">Engagement scope</p>
                <ul className="space-y-3">
                  {[
                    "Brand & Seller Persona Build",
                    "Website & Messaging Rebuild",
                    "Offer Architecture Redesign",
                    "Customer Journey & Operating System",
                    "AI Chat, Service Layer & Staff Training",
                    "Community & Partnership Channels",
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6 max-w-4xl">
            {peptideStats.map((stat, i) => (
              <ScrollReveal key={`${stat.label}-${stat.period}`} delay={i * 0.08}>
                <div className="border-t border-gold/20 pt-4">
                  <div className="font-display text-gold leading-none mb-2" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                    {stat.suffix === "%" && <span className="text-2xl align-top mt-1 inline-block">+</span>}
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix !== "%" ? stat.suffix : ""}
                      decimals={stat.value % 1 !== 0 ? 2 : 0}
                    />
                    {stat.suffix === "%" && "%"}
                  </div>
                  <p className="font-body text-cream text-sm">{stat.label}</p>
                  <p className="font-body text-cream/40 text-xs">{stat.period}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mb-4">
            <p className="font-body text-cream/70 text-base leading-relaxed max-w-3xl">
              Through our 12-month growth partnership with a UK research peptide brand, we closed the trust gap across earned, owned, and paid channels to drive an 86% increase in enquiries, a 39% lift in enquiry-to-purchase rate, a 90% increase in average order value, and a 58.78% increase in average customer lifetime value.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body text-cream/45 text-xs italic max-w-2xl mb-16 leading-relaxed">
              12-month growth partnership, followed by a 4-month handover: hiring, training, and sign-off of the client&apos;s in-house team.
            </p>
          </ScrollReveal>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The trust problem</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                The paperwork was in order, but none of it showed where it mattered. Visitors from other countries could not tell the website apart from a bot or a scam, and search engines had no signals that the business was real. In a regulatory grey area, a site with no personality and no targeted outreach sits like a brochure, and that is what it had become.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                The offer made it harder. Stacks were organised by product and price rather than by what the buyer was trying to achieve, so even interested visitors had to work out what to buy on their own. Paid ads were never going to fix a trust gap, and three banned accounts in the first month proved it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h3 className="font-display text-cream text-2xl font-light mb-4">The rebuild</h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed mb-4">
                We built the brand and a seller persona, rebuilt the website and messaging to answer every pain point the ideal customer might have, and established full-cycle authority across earned, owned, and paid channels. Stacks were remodelled around buyer goals rather than product and price. We mapped the customer journey, then built and installed the operating system to run it, with contingencies.
              </p>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                To close the trust gap in the last mile, we added AI chat with a human oversight layer, built a customer service layer, and trained the service staff to build trust in every conversation. A customer community and partnership channels gave the brand reach that did not depend on ad platforms. After the 12 months, we spent four more helping them hire an in-house team, trained it to manage the architecture, and signed off.
              </p>
            </ScrollReveal>
          </div>

          {/* Testimonial */}
          <ScrollReveal className="mt-16 border-t border-gold/10 pt-12">
            <div className="max-w-2xl">
              <blockquote className="font-display text-cream italic text-xl lg:text-2xl font-light leading-relaxed mb-6">
                &ldquo;It was a unique journey. Not everyone understands the complexity of building a peptide brand, but Generation Beta did, and we are ever so thankful to them.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" />
                <div>
                  <p className="font-body text-cream text-sm font-medium">Founder</p>
                  <p className="font-body text-cream/40 text-xs">Research peptide brand, UK</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <ScrollReveal className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
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
            data-cursor="cta"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            Start the Diagnostic
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
