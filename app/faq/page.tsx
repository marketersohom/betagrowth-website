import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "FAQ | Hospitality Revenue Consulting Questions — Generation Beta",
  description: "Answers to common questions about revenue diagnostics, pricing, and how Generation Beta works with hotels, spas, and wellness brands across Thailand and Southeast Asia.",
};

const faqs = [
  {
    question: "What does Generation Beta do?",
    answer:
      "Generation Beta is a revenue consultancy for premium hotels, spas, and wellness brands in Thailand and Southeast Asia. It finds where a business is losing revenue, builds the systems that recover it, and runs those systems alongside the client's team.",
  },
  {
    question: "Who is Sohom Mukherjee?",
    answer:
      "Sohom Mukherjee is a hospitality and wellness revenue growth consultant based in Bangkok, Thailand, and the founder of Generation Beta. Over the past eight years he has run hundreds of revenue audits across hospitality, wellness, and professional services businesses in Thailand, Singapore, and Indonesia.",
  },
  {
    question: "Where is Generation Beta based?",
    answer:
      "Generation Beta is based in Bangkok, Thailand, and works with clients across Southeast Asia, including Thailand, Singapore, and Indonesia.",
  },
  {
    question: "What is a revenue diagnostic for a hotel or spa?",
    answer:
      "A revenue diagnostic is a structured audit that identifies exactly where a hospitality business is losing revenue, across pricing, booking flow, online reputation, and channel mix. Generation Beta delivers one in 15 days, ending with a ranked list of revenue gaps and the recoverable value of each.",
  },
  {
    question: "How much does hospitality revenue consulting cost?",
    answer:
      "Generation Beta starts with a fixed-fee 15-day revenue diagnostic at $2,500. System build engagements are scoped per module, most between $6,000 and $14,000. Ongoing partnership retainers start from $2,500 per month on the Path, or $4,999 per month on the committed Partnership, scoped to the systems under management.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "The 15-day diagnostic delivers a full picture of revenue leaks within two weeks. System builds typically run six to ten weeks. Retainer-driven gains compound across booking cycles, which is why the partnership carries a minimum term.",
  },
  {
    question: "Do you work with spas and wellness businesses, not just hotels?",
    answer:
      "Yes. Generation Beta works with spas, wellness brands, and premium hospitality businesses. The revenue system is the same across them: pricing, booking flow, reputation, and channel mix.",
  },
  {
    question: "What is Revenue Leak Architecture?",
    answer:
      "Revenue Leak Architecture is Generation Beta's framework for finding hidden revenue loss in hospitality businesses. In plain terms, it is a systematic hotel and spa revenue audit that examines fourteen fields across six categories to locate where money is being lost before recommending any fix.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
            FAQ
          </span>
        </div>

        <h1
          className="font-display text-cream leading-[0.95] tracking-tight mb-8 max-w-3xl"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Questions,
          <br />
          <em className="text-gold not-italic">answered.</em>
        </h1>

        <p className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl mb-16">
          What Generation Beta does, who runs it, how pricing works, and what to expect from a revenue diagnostic.
        </p>

        <div className="max-w-3xl divide-y divide-gold/10 border-t border-gold/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                <h2 className="font-display text-cream text-lg lg:text-xl font-light">
                  {faq.question}
                </h2>
                <span className="flex-shrink-0 text-gold transition-transform duration-200 group-open:rotate-45">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="font-body text-cream/55 text-sm leading-relaxed mt-4 max-w-2xl">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#e2c97e40_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-plum-deep text-3xl lg:text-4xl font-light leading-tight mb-2">
              Still have questions?
            </h2>
            <p className="font-body text-plum-deep/70 text-sm max-w-2xl">
              Start with the Diagnostic, or get in touch directly.
            </p>
          </div>
          <a
            href="/diagnostic"
            data-cursor="cta"
            className="px-10 py-4 bg-plum-deep text-cream font-body font-medium text-sm tracking-wide hover:bg-plum transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            See the Diagnostic
          </a>
        </div>
      </section>
    </main>
  );
}
