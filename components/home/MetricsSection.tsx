'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  {
    value: '10,000+',
    unit: 'audit events/hour',
    description: 'Production-tested ingestion pipeline. Handles peak load from enterprise AI workloads without dropping events.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 14l4-4 3 3 5-6 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'Sub-second',
    unit: 'verification latency',
    description: 'Any evidence record can be independently verified in under 200ms. Cryptographic proof without waiting.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'SHA-256',
    unit: 'hash algorithm',
    description: 'Every record is hashed with SHA-256 and chained to its predecessor. Industry-standard cryptography, no proprietary schemes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M7 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="12.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: 'Merkle Tree',
    unit: 'proof generation',
    description: 'Tamper detection at scale. Any modification to any record in any batch is mathematically detectable without scanning all records.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="3" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="5" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="15" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="3" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="7" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="13" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="17" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10 5v4M10 5l-5 4M10 5l5 4M5 13v2M5 13l-2 2M5 13l2 2M15 13v2M15 13l-2 2M15 13l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const MetricCard = ({ metric, index }: { metric: typeof metrics[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      className="professional-card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_26px_rgba(37,99,235,0.10)] hover:border-blue-200 transition-all duration-200 group"
    >
      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
        {metric.icon}
      </div>

      <div className="mb-1">
        <span
          className="text-[2rem] font-bold text-slate-900 tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {metric.value}
        </span>
      </div>
      <p
        className="text-[12.5px] font-semibold text-blue-600 uppercase tracking-[0.07em] mb-3"
      >
        {metric.unit}
      </p>
      <p className="text-[13px] text-slate-500 leading-relaxed flex-1">{metric.description}</p>
    </motion.div>
  );
};

export function MetricsSection() {
  return (
    <section className="section-shell py-24 lg:py-32 bg-white" aria-labelledby="metrics-title">
      <div className="site-container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">Performance</span>
          <h2
            id="metrics-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Proof, not promises.
          </h2>
          <p className="text-center text-[1rem] text-slate-500 max-w-xl mx-auto">
            Published benchmarks, open architecture, and no proprietary black boxes.
            You should be able to verify everything Blocklog claims.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.unit} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
