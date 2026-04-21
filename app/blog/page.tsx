"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function BlogPage() {
  return (
    <main className="pt-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
            Insights
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl"
        >
          Writing on revenue architecture, growth systems, and premium brand strategy. Published when there is something worth saying.
        </motion.p>

        <ScrollReveal delay={0.3}>
          <div className="mt-24 border-t border-gold/10 pt-16 max-w-2xl">
            <p className="font-body text-cream/30 text-sm">
              No posts yet. Check back soon.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
