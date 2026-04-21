import Link from "next/link";

const footerLinks = {
  Work: [
    { href: "/work", label: "Case Studies" },
    { href: "/work#amla", label: "Amla Spa Group" },
    { href: "/work#tony", label: "Tony Meechai" },
  ],
  Services: [
    { href: "/diagnostic", label: "The Diagnostic" },
    { href: "/method", label: "The Method" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ],
  Connect: [
    { href: "/contact", label: "Contact" },
    { href: "mailto:sohom@betagrowthpartners.com", label: "sohom@betagrowthpartners.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-plum-deep border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-6">
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                  <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" fill="#c9a84c" opacity="0.4"/>
                </svg>
              </div>
              <span className="font-display text-cream text-lg font-medium">Generation Beta</span>
            </div>
            <p className="font-body text-sm text-cream/50 leading-relaxed max-w-xs">
              Revenue architecture for hospitality, wellness, and professional services. Based in Bangkok.
            </p>
            <div className="mt-6 h-px w-12 bg-gold/40" />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-body text-xs text-gold tracking-[0.15em] uppercase mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-cream/50 hover:text-cream transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Generation Beta. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/digitalsohom-mukherjee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cream/30 hover:text-gold transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <p className="font-body text-xs text-cream/30">
              betagrowthpartners.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
