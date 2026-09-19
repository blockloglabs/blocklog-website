'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Traditional Logging',
    subtitle: 'CloudWatch, Datadog, Splunk',
    description: 'Records what happened.',
    color: 'text-slate-600',
    badgeColor: 'bg-slate-100 text-slate-600 border-slate-200',
    cardClass: 'border-slate-200 bg-white',
    headerClass: 'bg-slate-50 border-b-slate-200',
    rows: [
      { value: 'Events captured', note: 'No integrity guarantee' },
      { value: 'Log storage', note: 'Mutable, deletable' },
      { value: 'Search & filter', note: 'No chain of custody' },
      { value: null },
    ],
  },
  {
    title: 'SIEM',
    subtitle: 'Splunk SIEM, Microsoft Sentinel',
    description: 'Detects incidents.',
    color: 'text-slate-600',
    badgeColor: 'bg-slate-100 text-slate-600 border-slate-200',
    cardClass: 'border-slate-200 bg-white',
    headerClass: 'bg-slate-50 border-b-slate-200',
    rows: [
      { value: 'Security alerts', note: 'Reactive, not preventive' },
      { value: 'Threat detection', note: 'Not evidence-grade' },
      { value: 'Compliance reports', note: 'Not cryptographic' },
      { value: null },
    ],
  },
  {
    title: 'Blocklog',
    subtitle: 'AI Compliance Infrastructure',
    description: 'Produces regulator-ready evidence.',
    color: 'text-blue-600',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
    cardClass: 'border-blue-200 bg-white ring-2 ring-blue-600 ring-offset-2',
    headerClass: 'bg-blue-600 border-b-blue-700',
    rows: [
      { value: 'Immutable audit trail', note: 'Cryptographically sealed' },
      { value: 'Tamper detection', note: 'SHA-256 + Merkle tree' },
      { value: 'Evidence packages', note: 'Regulator-ready export' },
      { value: 'Decision provenance', note: 'End-to-end traceability' },
    ],
  },
];

const RowDot = ({ filled, accent }: { filled: boolean; accent?: boolean }) => (
  <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${filled ? (accent ? 'bg-blue-600' : 'bg-slate-200') : 'bg-red-50'}`}>
    {filled ? (
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
        <path d="M1.5 4.5l2 2L7.5 2" stroke={accent ? 'white' : '#64748b'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden="true">
        <path d="M1.5 1.5l3 3M4.5 1.5l-3 3" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" />
      </svg>
    )}
  </div>
);

export function WhyBlocklogSection() {
  return (
    <section className="section-shell py-24 lg:py-32 bg-slate-50" aria-labelledby="why-title">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">Category positioning</span>
          <h2
            id="why-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Blocklog is not a logging tool.
          </h2>
          <p className="section-subheading text-center">
            Existing tools capture events. Blocklog creates evidence.
            These are fundamentally different things when a regulator is asking questions.
          </p>
        </motion.div>

        {/* Three column comparison */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              className={`professional-card flex h-full flex-col rounded-2xl border overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_26px_rgba(37,99,235,0.10)] ${cat.cardClass}`}
            >
              {/* Card header */}
              <div
                className={`px-5 py-5 border-b ${cat.headerClass} ${cat.title === 'Blocklog' ? '' : 'border-b-slate-100'}`}
              >
                <span
                  className={`inline-block text-[10.5px] font-bold uppercase tracking-[0.09em] px-2.5 py-1 rounded-full border mb-2 ${cat.badgeColor}`}
                >
                  {cat.title}
                </span>
                <p className={`text-[12.5px] font-medium mb-1 ${cat.title === 'Blocklog' ? 'text-blue-200' : 'text-slate-400'}`}>
                  {cat.subtitle}
                </p>
                <p
                  className={`text-[1.0625rem] font-semibold leading-snug ${cat.title === 'Blocklog' ? 'text-white' : 'text-slate-800'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Rows */}
              <div className="px-5 py-4 flex flex-1 flex-col gap-3">
                {cat.rows.map((row, j) =>
                  row.value ? (
                    <div key={j} className="flex items-start gap-3">
                      <RowDot filled accent={cat.title === 'Blocklog'} />
                      <div>
                        <span className="text-[13px] font-medium text-slate-800 leading-none">
                          {row.value}
                        </span>
                        {row.note && (
                          <p className="text-[11.5px] text-slate-400 mt-0.5">{row.note}</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div key={j} className="h-6 flex items-center gap-3">
                      <RowDot filled={false} />
                      <span className="text-[12px] text-slate-300 italic">Not available</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[13px] text-slate-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Blocklog works alongside your existing logging infrastructure — it doesn&apos;t replace it.
        </motion.p>
      </div>
    </section>
  );
}
