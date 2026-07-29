'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Evidence Packages', href: '#evidence' },
      { label: 'Hash Verification', href: '#verification' },
      { label: 'Audit Timelines', href: '#architecture' },
      { label: 'Compliance Reports', href: '#regulations' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/docs/api' },
      { label: 'SDKs', href: '/docs/sdks' },
      { label: 'Security Whitepaper', href: '/docs/security' },
      { label: 'Compliance Guide', href: '/docs/compliance' },
      { label: 'GitHub', href: 'https://github.com/blockloglabs', external: true },
    ],
  },
  {
    title: 'Regulations',
    links: [
      { label: 'DPDP Act 2023', href: '/docs/compliance/dpdp' },
      { label: 'RBI AI Guidelines', href: '/docs/compliance/rbi' },
      { label: 'SEBI Regulation 16C', href: '/docs/compliance/sebi' },
      { label: 'ISO 42001', href: '/docs/compliance/iso42001' },
      { label: 'SOC 2', href: '/docs/compliance/soc2' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy_policy' },
      { label: 'Terms of Service', href: '/terms_of_service' },
      { label: 'Security', href: '/security' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="site-container py-16 lg:py-20">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            className="flex-shrink-0 max-w-xs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-2.5 mb-4" aria-label="Blocklog home">
              <div className="w-[30px] h-[30px] bg-blue-600 rounded-[7px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 1.5L2.5 3.5V8c0 3 2.5 5.5 5.5 5.5S13.5 11 13.5 8V3.5L8 1.5z"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M5.5 8l1.5 1.5L10.5 6"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                className="text-[15px] font-semibold text-slate-900 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Blocklog
              </span>
            </Link>
            <p className="text-[13.5px] text-slate-500 leading-relaxed">
              AI Compliance Infrastructure for regulated enterprises. Tamper-evident audit trails
              and cryptographic evidence under Indian regulations.
            </p>
            <div className="mt-5 flex items-center gap-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-medium rounded-full">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
                  aria-hidden="true"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                Systems Operational
              </span>
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.06 }}
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 mb-3">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={'external' in link && link.external ? '_blank' : undefined}
                        rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                        className="relative inline-block text-[13.5px] text-slate-500 hover:text-slate-800 transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-slate-400 after:transition-all after:duration-200 hover:after:w-full"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-14 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[12.5px] text-slate-400">
            © {new Date().getFullYear()} Blocklog Security Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-slate-400">
              Logs are claims. Blocklog makes them proof.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}