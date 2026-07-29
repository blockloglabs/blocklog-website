'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    label: 'AWS Activate Startup',
    description: 'Accepted into AWS Activate',
  },
  {
    label: '400+',
    description: 'Monthly SDK Downloads',
  },
  {
    label: 'SHA-256 + Merkle',
    description: 'Cryptographic Proof',
  },
  {
    label: '10,000+',
    description: 'Audit Events / Hour',
  },
  {
    label: 'Open Documentation',
    description: 'Transparent Architecture',
  },
];

export function CredibilityStrip() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50"
      aria-label="Credibility indicators"
    >
      <div className="site-container py-5">
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative flex min-h-[64px] items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-3 py-3 text-center shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
            >
              <div className="flex flex-col items-center gap-0.5">
                <span
                  className="text-[13px] font-semibold text-slate-800"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.label}
                </span>
                <span className="text-[12.5px] text-slate-500">{stat.description}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
