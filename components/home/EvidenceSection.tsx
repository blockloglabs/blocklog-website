'use client';

import { motion } from 'framer-motion';

const checklistItems = [
  { label: 'Model Cards', description: 'Version, architecture, training methodology' },
  { label: 'Decision Logs', description: 'Complete input/output audit trail' },
  { label: 'Prompt History', description: 'Every prompt version with timestamps' },
  { label: 'Training Data Provenance', description: 'Dataset lineage and version tracking' },
  { label: 'Human Approval Records', description: 'Override and approval workflows' },
  { label: 'Bias Audit Reports', description: 'Fairness metrics across protected groups' },
  { label: 'Data Retention Records', description: 'Lifecycle documentation per regulation' },
  { label: 'Incident Reports', description: 'Anomaly detection and response logs' },
  { label: 'Access History', description: 'Who accessed what, when, and why' },
  { label: 'Cryptographic Verification', description: 'SHA-256 hash chain for every record' },
];

const files = [
  { name: 'model-card.pdf', size: '2.1 MB', type: 'pdf', color: '#dc2626' },
  { name: 'decision-trace.json', size: '18.4 MB', type: 'json', color: '#d97706' },
  { name: 'prompt-history.csv', size: '4.7 MB', type: 'csv', color: '#16a34a' },
  { name: 'bias-report.pdf', size: '1.3 MB', type: 'pdf', color: '#dc2626' },
  { name: 'access-log.csv', size: '892 KB', type: 'csv', color: '#16a34a' },
  { name: 'provenance.json', size: '244 KB', type: 'json', color: '#d97706' },
  { name: 'retention-policy.pdf', size: '890 KB', type: 'pdf', color: '#dc2626' },
];

const FileIcon = ({ color }: { color: string }) => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true" className="flex-shrink-0">
    <path d="M2 1h9l5 5v13a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="#cbd5e1" strokeWidth="1.2" fill="white" />
    <path d="M9 1v5h5" stroke="#cbd5e1" strokeWidth="1.2" fill="none" />
    <rect x="3" y="11" width="10" height="2" rx="1" fill={color} opacity="0.9" />
    <rect x="3" y="14.5" width="7" height="1.5" rx="0.75" fill="#64748b" />
  </svg>
);

export function EvidenceSection() {
  return (
    <section className="section-shell py-24 lg:py-32 bg-slate-50 border-t border-slate-200" aria-labelledby="evidence-title">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">Evidence packages</span>
          <h2
            id="evidence-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            When regulators ask,
            <br />
            <span className="text-blue-600">respond with evidence.</span>
          </h2>
          <p className="text-center text-[1rem] text-slate-600 max-w-2xl mx-auto">
            Every audit event automatically contributes to a structured evidence package.
            No manual assembly. No missing documentation.
          </p>
        </motion.div>

        <div className="grid min-w-0 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* Left — Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <h3
              className="text-[1.1rem] font-bold text-slate-900 mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Evidence Package Includes
            </h3>
            <div className="flex flex-col gap-2.5">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="professional-card flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-[0_8px_18px_rgba(22,163,74,0.08)] transition-all duration-150 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="#15803d" className="group-hover:stroke-white transition-colors" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-slate-900 leading-none">
                      {item.label}
                    </span>
                    <p className="text-[12.5px] text-slate-600 mt-1 leading-snug">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — High-Contrast File Explorer */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0 lg:sticky lg:top-24"
          >
            <div className="professional-card w-full min-w-0 rounded-2xl border border-slate-300 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Window chrome */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 mx-2 sm:mx-4 px-3 py-1 bg-white rounded-md border border-slate-200 flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 11l3.5-3.5m0 0a3.5 3.5 0 100-5 3.5 3.5 0 000 5z" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  <span className="truncate text-[11px] font-mono font-medium text-slate-600">
                    /audit-packages/EP-2024-0847/
                  </span>
                </div>
              </div>

              {/* Folder header */}
              <div className="px-5 py-4 border-b border-slate-100 flex flex-col gap-3 sm:flex-row sm:items-center">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293L9.707 5H16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" />
                </svg>
                <div>
                  <p
                    className="text-[13.5px] font-bold text-slate-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Audit Package — Q3 2024
                  </p>
                  <p className="text-[11px] font-mono font-medium text-slate-500">
                    Generated: 28 Jul 2024 · 09:14 IST
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                    7 files
                  </span>
                </div>
              </div>

              {/* Column headers */}
              <div className="hidden px-5 py-2.5 sm:grid grid-cols-[minmax(0,1fr),76px,92px] gap-4 border-b border-slate-100 bg-slate-50/60">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-slate-500">File Name</span>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-slate-500">Size</span>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-slate-500">Status</span>
              </div>

              {/* Files */}
              <div className="px-3 py-2">
                {files.map((file, i) => (
                  <motion.div
                    key={file.name}
                    className="grid grid-cols-[minmax(0,1fr),auto] sm:grid-cols-[minmax(0,1fr),76px,92px] gap-x-4 gap-y-1 items-center px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-default border-b border-slate-100/60 last:border-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileIcon color={file.color} />
                      <span className="text-[13px] font-mono font-medium text-slate-800 truncate">
                        {file.name}
                      </span>
                    </div>
                    <span className="text-right sm:text-left text-[11.5px] font-mono text-slate-500">
                      {file.size}
                    </span>
                    <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 sm:justify-start">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <circle cx="6" cy="6" r="5.5" fill="#16a34a" />
                        <path d="M3.5 6l2 2L8.5 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[11px] text-emerald-700 font-bold">Verified</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mx-3 mb-3 p-4 bg-emerald-50/90 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 0.875L1.25 2.875V7c0 3.25 2.5 5.875 5.75 5.875S12.75 10.25 12.75 7V2.875L7 0.875z" fill="#16a34a" />
                    <path d="M4.5 7l2 2L9.5 5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[12.5px] font-bold text-emerald-900">
                    All 7 files cryptographically verified
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800 font-mono font-medium break-all">
                  Merkle Root: sha256:b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
