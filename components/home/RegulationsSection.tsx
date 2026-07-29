'use client';

import { motion } from 'framer-motion';

const indianRegulations = [
  {
    code: 'DPDP',
    title: 'Digital Personal Data Protection Act 2023',
    description:
      'Demonstrate processing accountability for personal data used in AI decisions. Blocklog generates consent records, purpose logs, and data lineage trails that satisfy DPDP obligations.',
    evidence: ['Purpose limitation logs', 'Consent audit trail', 'Data access records'],
  },
  {
    code: 'RBI',
    title: 'RBI AI/ML Governance Guidelines',
    description:
      'Produce model risk documentation, explainability evidence, and decision audit trails for AI-driven credit scoring, fraud detection, and customer onboarding workflows.',
    evidence: ['Model validation records', 'Credit decision traces', 'Explainability reports'],
  },
  {
    code: 'SEBI',
    title: 'SEBI Regulation 16C',
    description:
      'Generate tamper-evident logs for algorithmic trading strategies, AI-assisted investment recommendations, and automated order management systems.',
    evidence: ['Algorithm audit logs', 'Trade decision trail', 'Change management records'],
  },
];

const globalStandards = [
  {
    code: 'ISO',
    title: 'ISO 42001 — AI Management Systems',
    description:
      'Achieve AI management system certification with comprehensive evidence of governance processes, risk assessments, bias audits, and continuous monitoring.',
    evidence: ['AI risk assessments', 'Governance evidence', 'Monitoring records'],
  },
  {
    code: 'SOC 2',
    title: 'SOC 2 Type II',
    description:
      'Demonstrate operational controls with immutable audit logs and cryptographic evidence of how sensitive data is handled in AI processing pipelines.',
    evidence: ['Access control logs', 'Data handling evidence', 'Incident records'],
  },
  {
    code: 'GDPR',
    title: 'General Data Protection Regulation',
    description:
      'Prove purpose limitation, data minimization, and human oversight with automated evidence generation for AI systems operating under GDPR jurisdiction.',
    evidence: ['Automated decision records', 'DSAR evidence packages', 'Purpose limitation logs'],
  },
  {
    code: 'HIPAA',
    title: 'Health Insurance Portability Act',
    description:
      'Maintain detailed audit controls and access logs for AI systems handling protected health information, satisfying § 164.312 technical safeguards.',
    evidence: ['PHI access logs', 'Clinical AI audit trail', 'Security incident records'],
  },
];

const RegCard = ({
  item,
  index,
  accent,
}: {
  item: (typeof indianRegulations)[0];
  index: number;
  accent: 'blue' | 'slate';
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
    className="professional-card rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:border-blue-200 transition-all duration-200"
  >
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <div
        className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.1em] ${
          accent === 'blue'
            ? 'bg-blue-50 text-blue-700 border border-blue-100'
            : 'bg-slate-100 text-slate-600 border border-slate-200'
        }`}
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {item.code}
      </div>
      <div className="min-w-0">
        <h3
          className="text-[13.5px] font-semibold text-slate-900 mb-2 leading-snug"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {item.title}
        </h3>
        <p className="text-[12.5px] text-slate-500 leading-relaxed mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.evidence.map((e) => (
            <span
              key={e}
              className="inline-flex items-center gap-1 text-[11px] text-slate-500 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded-full"
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1.5 4l2 2L6.5 2" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export function RegulationsSection() {
  return (
    <section
      id="regulations"
      className="section-shell py-24 lg:py-32 bg-white"
      aria-labelledby="regulations-title"
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
          <span className="eyebrow mb-3">Regulatory coverage</span>
          <h2
            id="regulations-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for Indian AI regulations.
            <br className="hidden sm:block" />
            <span className="text-slate-500 font-normal"> Aligned with global standards.</span>
          </h2>
          <p className="text-center text-[1rem] text-slate-500 max-w-2xl mx-auto">
            Blocklog maps every evidence package to specific regulatory requirements.
            When auditors ask for documentation, you know exactly what you have.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Indian Regulations */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-slate-200">
                {/* Indian flag emoji equivalent */}
                <div className="w-full h-full bg-gradient-to-b from-orange-500 via-white to-green-600" aria-hidden="true" />
              </div>
              <h3
                className="text-[14px] font-semibold text-slate-700 uppercase tracking-[0.08em]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Indian Regulations
              </h3>
              <div className="flex-1 h-px bg-slate-200" aria-hidden="true" />
            </motion.div>
            <div className="flex flex-col gap-4">
              {indianRegulations.map((reg, i) => (
                <RegCard key={reg.code} item={reg} index={i} accent="blue" />
              ))}
            </div>
          </div>

          {/* Global Standards */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#64748b" strokeWidth="1" fill="none" />
                  <path d="M1 6h10M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5" stroke="#64748b" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h3
                className="text-[14px] font-semibold text-slate-700 uppercase tracking-[0.08em]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Global Standards
              </h3>
              <div className="flex-1 h-px bg-slate-200" aria-hidden="true" />
            </motion.div>
            <div className="flex flex-col gap-4">
              {globalStandards.map((std, i) => (
                <RegCard key={std.code} item={std} index={i} accent="slate" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
