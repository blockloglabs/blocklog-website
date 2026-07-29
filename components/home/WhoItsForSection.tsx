'use client';

import { motion } from 'framer-motion';

const audiences = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 11h20M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Banks & Financial Services',
    regulation: 'RBI AI/ML Guidelines',
    description:
      'Meet RBI AI/ML governance requirements and generate tamper-evident audit trails for credit decisioning, risk scoring, and fraud detection systems.',
    useCase: 'Credit decision audit trails',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'NBFCs & Fintech',
    regulation: 'SEBI Regulation 16C',
    description:
      'Demonstrate responsible AI usage to SEBI and produce cryptographic evidence packages for automated lending decisions and algorithmic trading systems.',
    useCase: 'Lending decision provenance',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22c4.97 0 9-4.03 9-9S16.97 4 12 4 3 8.03 3 13s4.03 9 9 9z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 13s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 4V2M12 22v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Healthcare Providers',
    regulation: 'HIPAA · DPDP Act',
    description:
      'Maintain HIPAA and DPDP-compliant AI audit trails for clinical decision support systems. Prove transparency and human oversight to healthcare regulators.',
    useCase: 'Clinical AI transparency',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Government & Public Sector',
    regulation: 'DPDP Act · ISO 42001',
    description:
      'Create immutable records of AI-assisted decisions for public accountability. Generate cryptographic proof that satisfies RTI and parliamentary oversight requirements.',
    useCase: 'Public accountability records',
  },
];

export function WhoItsForSection() {
  return (
    <section className="section-shell py-24 lg:py-32 bg-slate-50" aria-labelledby="who-title">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">Built for regulated industries</span>
          <h2
            id="who-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Who is Blocklog for?
          </h2>
          <p className="text-center text-[1rem] text-slate-500 max-w-xl mx-auto">
            If your organisation uses AI to make decisions that affect people, 
            you have a regulatory obligation to prove how those decisions were made.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="professional-card group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_26px_rgba(37,99,235,0.10)] hover:border-blue-200 transition-all duration-200 cursor-default"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
                {audience.icon}
              </div>

              <h3
                className="text-[0.9375rem] font-semibold text-slate-900 mb-1.5 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {audience.title}
              </h3>

              <span className="inline-block text-[10.5px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full mb-3 uppercase tracking-[0.06em]">
                {audience.regulation}
              </span>

              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 flex-1">
                {audience.description}
              </p>

              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3L10 3" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11.5px] font-medium text-slate-500">{audience.useCase}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
