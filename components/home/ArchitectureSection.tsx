'use client';

import { motion } from 'framer-motion';

const flowNodes = [
  {
    id: 'application',
    label: 'Application',
    sublabel: 'Your AI system',
    description: 'Any AI-powered application — credit scoring, chatbots, document processing, or decision engines.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 19h10M11 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8.5h6M6 11h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'sdk',
    label: 'Blocklog SDK',
    sublabel: 'Python · TypeScript · REST',
    description: 'One import. Captures model version, prompt, output, latency, user context, and metadata automatically.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <polyline points="8,6 3,11 8,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,6 19,11 14,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="4" x2="10" y2="18" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'store',
    label: 'Immutable Audit Store',
    sublabel: 'Hash-chained · Append-only',
    description: 'Every event is SHA-256 hashed and chained. No record can be modified or deleted without breaking the chain.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="16" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M7 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'verification',
    label: 'Verification Engine',
    sublabel: 'Merkle Tree proofs',
    description: 'Merkle tree construction enables proof of any record without revealing others. Independent, open-source verification.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L3 7v5c0 5.5 3.5 9.5 8 10.5C16.5 21.5 20 17.5 20 12V7L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M7.5 11.5l2.5 2.5L14.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'evidence',
    label: 'Evidence Package',
    sublabel: 'PDF · JSON · CSV',
    description: 'Structured export containing all required documentation. Mapped to your specific regulatory requirements.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8L14 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M14 2v6h6M8 13h6M8 17h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'regulator',
    label: 'Regulator',
    sublabel: 'RBI · SEBI · DPDP',
    description: 'Submit cryptographically verified evidence packages to RBI, SEBI, or any regulatory body within 24 hours of request.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 21h16M4 21V9l7-7 7 7v12M9 21v-6h4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    isLast: true,
  },
];

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="section-shell py-24 lg:py-32 bg-white"
      aria-labelledby="architecture-title"
    >
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">Architecture</span>
          <h2
            id="architecture-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for engineers.
            <br />
            <span className="text-slate-500 font-normal">Trusted by compliance.</span>
          </h2>
          <p className="text-center text-[1rem] text-slate-500 max-w-2xl mx-auto">
            Simple to integrate. Impossible to tamper with. The architecture is transparent,
            open-source verifiable, and designed for regulated environments.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {flowNodes.map((node, i) => (
            <motion.div
              key={node.id}
              className="relative h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              >
              {i < flowNodes.length - 1 && i % 3 !== 2 && (
                <div className="hidden xl:flex absolute top-8 -right-4 z-10 items-center" aria-hidden="true">
                  <motion.div
                    className="h-px w-8 bg-gradient-to-r from-blue-300 to-slate-300"
                    initial={{ scaleX: 0, transformOrigin: 'left' }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  />
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#94a3b8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div className={`professional-card flex h-full flex-col rounded-2xl border bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_24px_rgba(37,99,235,0.10)] hover:border-blue-200 transition-all duration-200 ${i === flowNodes.length - 1 ? 'border-blue-200 bg-blue-50' : 'border-slate-200'}`}>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === flowNodes.length - 1 ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                    {node.icon}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                  <h3
                    className="text-[14px] font-semibold text-slate-900 leading-snug mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {node.label}
                  </h3>
                  <p
                    className="text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-[0.06em]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {node.sublabel}
                  </p>
                  <p className="text-[12.5px] text-slate-500 leading-relaxed">
                    {node.description}
                  </p>
                </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-2 text-[12.5px] text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          Typically deployed in under 30 minutes with existing infrastructure
        </motion.div>
      </div>
    </section>
  );
}
