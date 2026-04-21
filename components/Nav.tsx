"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Method" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-plum-deep/80 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Generation Beta — Home">
          <Logo width={140} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-body text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-cream/60 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/diagnostic"
            className="ml-4 px-5 py-2 border border-gold/60 text-gold font-body text-sm tracking-wide hover:bg-gold hover:text-plum-deep transition-all duration-300"
          >
            Get Diagnostic
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="block w-6 h-px bg-cream"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-6 h-px bg-cream"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="block w-6 h-px bg-cream"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-plum-deep/95 backdrop-blur-xl border-t border-gold/10"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-2xl font-light ${
                pathname === link.href ? "text-gold" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/diagnostic"
            className="mt-2 px-5 py-3 border border-gold/60 text-gold font-body text-sm tracking-wide text-center"
          >
            Get Diagnostic — $1,500
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
