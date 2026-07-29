'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How is Blocklog different from CloudWatch, Datadog, or Splunk?',
    answer:
      'CloudWatch, Datadog, and Splunk are built for operational observability — they capture events for debugging and monitoring. Blocklog captures events for regulatory compliance. The difference is cryptographic integrity: Blocklog hashes every record and chains them together so that no record can be modified, deleted, or added retroactively. Your SIEM logs can be edited by an administrator. Blocklog evidence cannot be edited by anyone.',
  },
  {
    question: 'Can Blocklog work with our existing logging infrastructure?',
    answer:
      'Yes. Blocklog is complementary to your existing logging stack. You keep CloudWatch, Splunk, or Datadog for operational monitoring. Blocklog runs alongside them, capturing compliance-relevant AI events with cryptographic guarantees. You can also import historical events from most logging systems for retroactive evidence packaging.',
  },
  {
    question: 'Does Blocklog replace our SIEM?',
    answer:
      'No. SIEMs detect security incidents. Blocklog creates compliance evidence. They solve different problems. Most enterprises run both: their SIEM for threat detection and incident response, and Blocklog for generating regulator-ready evidence when AI systems are audited.',
  },
  {
    question: 'How is evidence independently verified? Can auditors verify without accessing Blocklog?',
    answer:
      'Yes — that is a core design principle. Every evidence package contains the Merkle proofs and hash chain required to verify integrity without contacting Blocklog. We publish an open-source verification CLI on GitHub. A regulator or external auditor can download the evidence package and run verification locally with no Blocklog account or API access required.',
  },
  {
    question: 'Does Blocklog store our sensitive data? Where is data processed?',
    answer:
      'Blocklog stores cryptographic hashes and metadata — not your raw data unless you choose to include it. You control what is captured. For organisations with strict data residency requirements, Blocklog supports on-premises and private cloud deployment where all data stays within your infrastructure. The SaaS offering uses ISO 27001-certified infrastructure in India.',
  },
  {
    question: 'How does this satisfy DPDP Act requirements specifically?',
    answer:
      'The DPDP Act requires Data Fiduciaries to demonstrate accountability for how personal data is processed in automated decision-making. Blocklog generates: (1) purpose limitation logs showing what data was used and why, (2) decision audit trails for any automated decisions affecting data principals, (3) consent records linked to processing events, and (4) data retention documentation. These records satisfy the accountability obligations under § 8 and the rights-response obligations under § 11–13.',
  },
  {
    question: 'Can we deploy Blocklog on-premises or in a private cloud?',
    answer:
      'Yes. Blocklog offers a self-hosted deployment option for enterprises with strict data sovereignty requirements. The on-premises version runs as a set of Docker containers and supports AWS, GCP, Azure, and bare-metal environments. Air-gapped deployments are available for government and highly regulated banking environments. Contact us to discuss your specific infrastructure requirements.',
  },
  {
    question: 'How are hashes generated and what prevents Blocklog from modifying them?',
    answer:
      'Each event is hashed client-side using SHA-256 before transmission to Blocklog. The hash includes the event payload, a monotonic sequence number, and the previous hash — forming a chain. Merkle roots are computed in batches and optionally anchored to an RFC 3161 Trusted Timestamp Authority external to Blocklog. This architecture means even if Blocklog were compromised, any modification would break the hash chain and be immediately detectable during verification.',
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className={`border rounded-xl transition-all duration-200 ${
        isOpen
          ? 'border-blue-200 bg-blue-50/30'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        id={`faq-button-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span
          className={`text-[14px] font-semibold leading-snug transition-colors ${
            isOpen ? 'text-blue-700' : 'text-slate-800'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 transition-colors ${
            isOpen
              ? 'border-blue-300 bg-blue-100 text-blue-600'
              : 'border-slate-200 bg-slate-50 text-slate-400'
          }`}
          aria-hidden="true"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M4 1v6M1 4h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-blue-100 mb-4" aria-hidden="true" />
              <p className="text-[13.5px] text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="faq-title">
      <div className="site-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">FAQ</span>
          <h2
            id="faq-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Questions compliance leaders ask.
          </h2>
          <p className="text-center text-[1rem] text-slate-500 max-w-xl mx-auto">
            Before committing to a compliance infrastructure vendor, you should understand
            exactly how it works. We welcome scrutiny.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[13.5px] text-slate-500">
            Have a question not covered here?{' '}
            <a
              href="/contact"
              className="text-blue-600 font-medium hover:text-blue-700 underline underline-offset-2"
            >
              Speak with our compliance team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
