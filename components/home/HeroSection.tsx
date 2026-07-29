'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const evidenceFields = [
  { label: 'MODEL VERSION', value: 'gpt-4o-2024-05-13', mono: true },
  { label: 'PROMPT VERSION', value: 'v2.3.1', mono: true },
  { label: 'DECISION TIME', value: '28 Jul 2024 · 09:14:32 IST', mono: false },
  { label: 'DATASET REF', value: 'dataset-credit-v4.2.1', mono: true },
  { label: 'USER ID', value: 'usr_9f2a3c8d', mono: true },
];

const verifiedChecks = [
  'Hash Verified',
  'Chain Integrity',
  'Cryptographic Signature',
];

export function HeroSection() {
  return (
    <section
      id="product"
      className="section-shell relative min-h-[calc(100svh-1px)] flex items-center pt-24 pb-20 overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Subtle grid background with a slow ambient drift */}
      <motion.div
        className="absolute inset-0 pointer-events-none motion-reduce:animate-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
        animate={{ backgroundPosition: ['0px 0px', '48px 48px'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] gap-12 xl:gap-20 items-center">
          {/* Left — Content */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-[11.5px] font-semibold uppercase tracking-[0.08em] rounded-full mb-6">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"
                  aria-hidden="true"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                Enterprise AI Compliance Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="max-w-full text-[2.18rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] font-bold text-slate-900 leading-[1.08] tracking-normal mb-6 break-words"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              When RBI or SEBI asks for your AI decision trail,{' '}
              <span className="text-blue-600">can you produce it within 24 hours?</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="text-[1.0625rem] text-slate-600 leading-relaxed mb-8 max-w-[540px] text-pretty"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AI regulations don&apos;t ask whether you used AI. They ask whether you can prove
              how decisions were made. Blocklog automatically creates tamper-evident evidence that
              stands up to regulatory audits.
            </motion.p>

            {/* Brand statement */}
            <motion.div
              className="mb-10 pl-5 border-l-2 border-blue-600"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p
                className="text-[1.35rem] font-semibold text-slate-800 leading-snug tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Logs are claims.
                <br />
                Blocklog makes them proof.
              </p>
            </motion.div>

            {/* Dual Primary CTAs: Start Free + Book Call */}
            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/get-started"
                className="group inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-[14.5px] font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
              >
                Start for Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="https://cal.com/blocklog/compliance-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-[14.5px] font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
              >
                Book Compliance Call
              </Link>
              <Link
                href="/docs"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-[14.5px] font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all hover:-translate-y-px"
              >
                Documentation
              </Link>
            </motion.div>

            {/* Trust note */}
            <motion.p
              className="mt-5 text-[12.5px] text-slate-500 flex items-center gap-1.5 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1L1.5 2.5V6c0 2.5 2 4.5 4.5 4.5S10.5 8.5 10.5 6V2.5L6 1z" stroke="#16a34a" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                <path d="M4 6l1.5 1.5L8.5 4" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free 5,000 decisions/mo · No credit card required · Setup in &lt;5 mins
            </motion.p>
          </div>

          {/* Right — High Contrast Evidence Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative min-w-0 lg:justify-self-end w-full max-w-[560px] mx-auto lg:mx-0"
            aria-label="Sample evidence package"
          >
            <div className="professional-card rounded-2xl border border-slate-200 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_16px_48px_rgba(37,99,235,0.14),0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-300 overflow-hidden">
              {/* Panel header */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M7 0.875L1.25 2.875V7c0 3.25 2.5 5.875 5.75 5.875S12.75 10.25 12.75 7V2.875L7 0.875z" stroke="#2563eb" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                      <path d="M4.5 7l2 2L9.5 5.5" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className="text-[12px] font-bold text-slate-800 tracking-wider uppercase"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      EVIDENCE PACKAGE
                    </span>
                  </div>
                  <p
                    className="text-[11px] font-semibold text-slate-500 font-mono"
                  >
                    #EP-2024-0847 · Q3 Audit Cycle
                  </p>
                </div>
                <span className="proof-pulse inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold rounded-full shadow-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"
                    aria-hidden="true"
                  />
                  Verified
                </span>
              </div>

              {/* Fields */}
              <div className="px-6 py-2">
                {evidenceFields.map((field, i) => (
                  <motion.div
                    key={field.label}
                    className="grid grid-cols-1 sm:grid-cols-[150px_minmax(0,1fr)] gap-1 sm:gap-4 py-3 border-b border-slate-100 last:border-0"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500">
                      {field.label}
                    </span>
                    <span
                      className={`text-[13px] font-semibold text-slate-900 sm:text-right break-words ${field.mono ? 'font-mono' : ''}`}
                    >
                      {field.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Verified checks */}
              <div className="px-6 py-4 bg-emerald-50/70 border-t border-emerald-200/80">
                <div className="flex flex-col gap-2">
                  {verifiedChecks.map((check, i) => (
                    <motion.div
                      key={check}
                      className="flex items-center gap-2.5"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0" aria-hidden="true">
                        <circle cx="7.5" cy="7.5" r="7" fill="#16a34a" />
                        <motion.path
                          d="M4.5 7.5l2.5 2.5L10.5 5"
                          stroke="white"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.55 + i * 0.1, duration: 0.35, ease: 'easeOut' }}
                        />
                      </svg>
                      <span className="text-[12.5px] font-semibold text-emerald-900">{check}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* High-Contrast SHA-256 Footer */}
              <div className="relative px-6 py-3.5 bg-[#090d16] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800/80 px-2 py-0.5 rounded font-mono flex-shrink-0">
                  SHA-256
                </span>
                <span
                  className="text-[11.5px] font-semibold text-emerald-300 font-mono truncate"
                  title="a3f9b2c1d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4"
                >
                  a3f9b2c1d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2
                </span>
                {/* Faint one-time verification sweep */}
                <motion.div
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent pointer-events-none"
                  initial={{ left: '-15%' }}
                  animate={{ left: '110%' }}
                  transition={{ duration: 1.1, delay: 0.9, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}