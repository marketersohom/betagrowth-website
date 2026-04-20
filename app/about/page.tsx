"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const sectors = [
  {
    name: "Hospitality",
    description: "Hotels, resorts, boutique properties. Revenue architecture, pricing, channel mix, and partnership programs.",
  },
  {
    name: "Wellness & Spa",
    description: "Day spas, wellness centers, therapeutic practices. Pricing structure, booking systems, corporate partnerships.",
  },
  {
    name: "Professional Services",
    description: "Coaches, consultants, advisors. Offer architecture, positioning, authority building, and client acquisition systems.",
  },
  {
    name: "F&B",
    description: "Independent restaurants and beverage brands. Revenue per cover, private dining, event revenue, brand positioning.",
  },
];

const principles = [
  {
    number: "01",
    title: "Diagnosis before prescription",
    description: "We do not recommend solutions before we understand the specific problem. The Diagnostic is not optional because guessing at the cause of revenue loss is expensive.",
  },
  {
    number: "02",
    title: "Specific over general",
    description: "Generic advice is everywhere. Our value is in specific findings tied to your specific business. If a recommendation cannot be traced to a data point in your own operation, we do not make it.",
  },
  {
    number: "03",
    title: "Systems, not sprints",
    description: "One-time improvements degrade. We build systems that continue to function after the engagement ends because the goal is durable revenue growth, not a good month.",
  },
  {
    number: "04",
    title: "Fixed scope, fixed fee",
    description: "Scope creep destroys engagements. Every project is scoped precisely before it starts. You know what you are getting and what it costs before any work begins.",
  },
];

export default function AboutPage() {
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
            About
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream leading-[0.95] tracking-tight mb-8 max-w-4xl"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Built for
          <br />
          <em className="text-gold not-italic">operators.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl"
        >
          Generation Beta is a revenue growth practice focused on hospitality, wellness, and professional services. We specialize in finding the structural reasons businesses are not capturing the revenue they have already earned the right to.
        </motion.p>
      </section>

      {/* Founder */}
      <section className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Photo placeholder */}
            <ScrollReveal className="lg:col-span-4">
              <div className="relative">
                <div className="aspect-[3/4] bg-plum-mid/40 border border-gold/15 flex items-end p-6 overflow-hidden">
                  {/* Abstract portrait placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gold/10 border border-gold/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-plum-deep/60 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <p className="font-display text-cream text-2xl font-light">Sohom Mukherjee</p>
                    <p className="font-body text-gold text-xs tracking-[0.15em] uppercase mt-1">Founder</p>
                  </div>
                </div>
                {/* Gold accent line */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b border-r border-gold/25 pointer-events-none" />
              </div>
            </ScrollReveal>

            {/* Story */}
            <ScrollReveal delay={0.15} className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-gold" />
                <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                  Founder
                </span>
              </div>
              <h2
                className="font-display text-cream leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Sohom Mukherjee
              </h2>
              <div className="space-y-5 font-body text-cream/60 text-sm leading-relaxed">
                <p>
                  I started Generation Beta because I kept seeing the same problem across every business I worked with in Southeast Asia: strong operations, loyal customers, and completely preventable revenue loss. The cause was always structural. Pricing set by intuition rather than data. Booking systems that frustrated customers before they arrived. Online presence that undersold what was actually being delivered.
                </p>
                <p>
                  I have spent the past eight years working with hospitality, wellness, and professional service businesses across Thailand, Singapore, and India. The pattern is consistent regardless of size or sector: most revenue problems are not marketing problems. They are architecture problems.
                </p>
                <p>
                  Generation Beta was built to solve exactly this. The Diagnostic methodology came from hundreds of audits distilled into the 12 areas that account for the vast majority of preventable revenue loss. The Method is how we build the systems that fix what we find.
                </p>
                <p>
                  I work with a small number of clients at any one time to maintain the depth of engagement that produces real results. If you are looking for someone to validate your existing strategy, I am probably not the right partner. If you want specific answers to specific problems, let us talk.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-1">Location</p>
                  <p className="font-body text-sm text-cream/70">Bangkok, Thailand</p>
                </div>
                <div>
                  <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-1">Focus</p>
                  <p className="font-body text-sm text-cream/70">SEA + South Asia</p>
                </div>
                <div>
                  <p className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-1">Languages</p>
                  <p className="font-body text-sm text-cream/70">English, Bengali, Hindi</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-t border-gold/10 bg-plum-deep/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                Sectors
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Where we work.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.name} delay={i * 0.1}>
                <div className="border-t border-gold/20 pt-5 h-full">
                  <h3 className="font-display text-cream text-xl font-light mb-3">{sector.name}</h3>
                  <p className="font-body text-cream/50 text-sm leading-relaxed">{sector.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                How we work
              </span>
            </div>
            <h2
              className="font-display text-cream leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Four principles. No exceptions.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
            {principles.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.1}>
                <div className="flex gap-6">
                  <span className="font-body text-xs text-gold tracking-[0.2em] flex-shrink-0 pt-1">{p.number}</span>
                  <div>
                    <h3 className="font-display text-cream text-xl font-light mb-3">{p.title}</h3>
                    <p className="font-body text-cream/55 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-plum-deep text-3xl lg:text-4xl font-light leading-tight mb-2">
              Ready to work together?
            </h2>
            <p className="font-body text-plum-deep/70 text-sm">
              Start with the Diagnostic. Everything follows from what we find.
            </p>
          </div>
          <Link
            href="/diagnostic"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            Get the Diagnostic
          </Link>
        </div>
      </section>
    </main>
  );
}
