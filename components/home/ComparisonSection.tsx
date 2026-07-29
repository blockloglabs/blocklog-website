'use client';

import { motion } from 'framer-motion';

const rows = [
  { feature: 'Tamper detection', traditional: false, blocklog: true },
  { feature: 'Immutable records', traditional: false, blocklog: true },
  { feature: 'Cryptographic verification', traditional: false, blocklog: true },
  { feature: 'Decision provenance', traditional: false, blocklog: true },
  { feature: 'Evidence packages', traditional: false, blocklog: true },
  { feature: 'Hash verification', traditional: false, blocklog: true },
  { feature: 'Audit timelines', traditional: 'Partial', blocklog: true },
  { feature: 'Chain of custody', traditional: false, blocklog: true },
  { feature: 'Retention policies', traditional: 'Partial', blocklog: true },
  { feature: 'Bias audit support', traditional: false, blocklog: true },
  { feature: 'Export for regulators', traditional: false, blocklog: true },
  { feature: 'Independent verification', traditional: false, blocklog: true },
];

const Cell = ({ value, accent, delay = 0 }: { value: boolean | string; accent?: boolean; delay?: number }) => {
  if (value === true) {
    return (
      <div className={`flex items-center justify-center gap-1.5 ${accent ? 'text-emerald-600' : 'text-emerald-500'}`}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-label="Supported" role="img">
          <circle cx="8" cy="8" r="7" fill={accent ? '#16a34a' : '#dcfce7'} />
          <motion.path
            d="M4.5 8l2.5 2.5L11.5 6"
            stroke={accent ? 'white' : '#16a34a'}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay, ease: 'easeOut' }}
          />
        </svg>
        <span className={`hidden sm:inline text-[11.5px] font-medium ${accent ? 'text-emerald-700' : 'text-emerald-600'}`}>
          Yes
        </span>
      </div>
    );
  }
  if (value === 'Partial') {
    return (
      <div className="flex items-center justify-center gap-1.5 text-amber-500">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-label="Partial support" role="img">
          <circle cx="8" cy="8" r="7" fill="#fef3c7" />
          <path d="M5 8h6" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline text-[11.5px] font-medium text-amber-600">Partial</span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-label="Not supported" role="img">
        <circle cx="8" cy="8" r="7" fill="#f1f5f9" />
        <path d="M6 6l4 4M10 6l-4 4" stroke="#94a3b8" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <span className="hidden sm:inline text-[11.5px] text-slate-400">No</span>
    </div>
  );
};

export function ComparisonSection() {
  return (
    <section className="section-shell py-16 lg:py-20 bg-white" aria-labelledby="comparison-title">
      <div className="site-container">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">Comparison</span>
          <h2
            id="comparison-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Traditional logging vs Blocklog.
          </h2>
          <p className="text-center text-[1rem] text-slate-500 max-w-xl mx-auto">
            Logging infrastructure was built for operational debugging, not regulatory evidence.
            Blocklog was purpose-built for compliance.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="min-w-[560px] rounded-2xl border border-slate-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            {/* Header */}
            <div className="grid grid-cols-[1fr,0.85fr,0.85fr] bg-slate-50 border-b border-slate-200">
              <div className="px-5 py-2.5">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  Capability
                </span>
              </div>
              <div className="px-4 py-2.5 border-l border-slate-200 text-center">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                  Traditional
                </span>
              </div>
              <div className="relative px-4 py-2.5 border-l border-slate-200 text-center bg-blue-50">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-blue-700">
                  Blocklog
                </span>
                <motion.span
                  className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"
                  aria-hidden="true"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.feature}
                className={`group grid grid-cols-[1fr,0.85fr,0.85fr] border-b border-slate-100 last:border-0 transition-colors duration-200 hover:bg-blue-50/30 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                }`}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: i * 0.025 }}
              >
                <div className="px-5 py-2 flex items-center">
                  <span className="text-[12.5px] font-medium text-slate-700">{row.feature}</span>
                </div>
                <div className="px-4 py-2 border-l border-slate-100 flex items-center justify-center">
                  <Cell value={row.traditional} delay={i * 0.025 + 0.12} />
                </div>
                <div className="px-4 py-2 border-l border-slate-100 flex items-center justify-center bg-blue-50/30 group-hover:bg-blue-50/60 transition-colors duration-200">
                  <Cell value={row.blocklog} accent delay={i * 0.025 + 0.12} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}