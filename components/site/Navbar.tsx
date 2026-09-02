'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Product', href: '/#product' },
  { label: 'Regulations', href: '/#regulations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Pilot', href: '/pilot' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Security', href: '/security' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="site-container flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Blocklog home"
        >
          <div className="w-[32px] h-[32px] bg-blue-600 rounded-[8px] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-700 transition-colors">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[16px] font-bold text-slate-900 tracking-tight leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Blocklog
            </span>
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.08em] text-blue-600 mt-0.5">
              AI Compliance
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Dual CTAs: Start Free + Book Call */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100/80 rounded-lg transition-all"
          >
            Start Free
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="https://calendly.com/founder-blocklogsecurity/audit-readiness-call-20-min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[108px] items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[13.5px] font-semibold rounded-lg transition-colors shadow-sm"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <nav className="site-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 text-[14px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/get-started"
                  className="px-4 py-3 bg-blue-600 text-white text-[14px] font-semibold rounded-lg text-center shadow-sm flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://calendly.com/founder-blocklogsecurity/audit-readiness-call-20-min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-slate-900 text-white text-[14px] font-medium rounded-lg text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Compliance Call
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
