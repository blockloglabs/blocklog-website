// VerificationSection.tsx
'use client';

import { motion } from 'framer-motion';
import { LiveHashChainVisual } from '@/components/visuals/LiveHashChainVisual';

const verificationPoints = [
  {
    title: 'Open-source verification tool',
    description: 'Publish your verification CLI on GitHub — regulators can run it themselves.',
  },
  {
    title: 'No Blocklog account required',
    description: 'Verification works from the exported evidence package alone — no vendor dependency.',
  },
  {
    title: 'RFC 3161 trusted timestamps',
    description: 'Timestamps are sealed by a third-party TSA, not Blocklog. No clock manipulation possible.',
  },
];

export function VerificationSection() {
  return (
    <section
      id="verification"
      className="section-shell py-24 lg:py-32 bg-slate-50 border-t border-slate-200"
      aria-labelledby="verification-title"
    >
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow mb-3">Cryptographic integrity</span>
            <h2
              id="verification-title"
              className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-bold text-slate-900 tracking-tight mb-5 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Independent verification.
              <br />
              <span className="text-blue-600">No trust required.</span>
            </h2>
            <p className="text-[1rem] text-slate-600 leading-relaxed mb-6">
              Every audit record Blocklog produces can be independently verified by any
              party — including regulators, auditors, or your own legal team — without
              accessing the Blocklog platform.
            </p>

            <div className="space-y-4">
              {verificationPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="professional-card flex items-start gap-3 rounded-xl border border-transparent p-2 hover:border-blue-100 hover:bg-white transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <motion.path
                        d="M2 5l2 2 4-4"
                        stroke="#2563eb"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.3, delay: 0.35 + i * 0.08, ease: 'easeOut' }}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-semibold text-slate-800 mb-0.5">{point.title}</h3>
                    <p className="text-[12.5px] text-slate-500">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Moving Interactive Hash Chain Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <LiveHashChainVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}