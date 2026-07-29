'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const reassurancePoints = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1L2 3.5V8c0 3.5 2.75 6.5 6 7 3.25-.5 6-3.5 6-7V3.5L8 1z" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinejoin="round" />
        <path d="M5.5 8l2 2L10.5 6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: 'No credit card required',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 8h12M8 2v12M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    text: 'Deployment support included',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.1" fill="none" />
        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Designed for regulated enterprises',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.1" fill="none" />
        <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    text: 'Setup in under 5 minutes',
  },
];

const statStrip = [
  { value: '5,000', label: 'free decision traces / mo' },
  { value: '<5 min', label: 'to first evidence package' },
  { value: '24 hr', label: 'audit turnaround target' },
];

export function FinalCTASection() {
  return (
    <section className="relative py-20 lg:py-24 bg-slate-900 overflow-hidden" aria-labelledby="final-cta-title">
      {/* Faint grid, echoes the hero's background language on a dark ground */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center">
              <motion.svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
                animate={{ opacity: [1, 0.75, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M14 2L3 6V14c0 6.5 4.5 12 11 13.5C20.5 26 25 20.5 25 14V6L14 2z"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M9.5 14l3 3L18.5 11"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="final-cta-title"
            className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold text-white tracking-tight mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            The next audit shouldn&apos;t become an emergency.
          </motion.h2>

          <motion.p
            className="text-center text-[1.15rem] sm:text-[1.25rem] text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Know exactly what evidence you have before regulators ask.
            <br className="hidden sm:block" />
            Start for free with 5,000 monthly decision traces, or book an enterprise consultation.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/get-started"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[15px] font-semibold rounded-xl transition-all shadow-[0_0_0_1px_rgba(96,165,250,0.3),0_4px_16px_rgba(37,99,235,0.4)] hover:shadow-[0_0_0_1px_rgba(96,165,250,0.4),0_6px_24px_rgba(37,99,235,0.5)] hover:-translate-y-px"
            >
              Start for Free
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="https://cal.com/blocklog/compliance-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 text-white text-[15px] font-semibold rounded-xl border border-white/15 hover:border-white/30 transition-all hover:-translate-y-px"
            >
              Book Compliance Call
            </Link>
          </motion.div>

          {/* Stat strip — concrete numbers instead of empty space */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto mb-10 pb-10 border-b border-white/10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {statStrip.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
              >
                <div
                  className="text-[1.5rem] sm:text-[1.75rem] font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[11.5px] text-slate-500 leading-snug mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reassurance strip */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {reassurancePoints.map((point, i) => (
              <motion.div
                key={point.text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              >
                <div className="text-slate-500">{point.icon}</div>
                <span className="text-[12.5px] text-slate-400">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}