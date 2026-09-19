'use client';

import { motion } from 'framer-motion';
import { CodeTerminal } from '@/components/ui/CodeTerminal';

const steps = [
  {
    number: '01',
    title: 'Instrument your application.',
    description:
      'Add the Blocklog SDK with a single import. One line captures every AI decision — model version, inputs, outputs, and context — without changing existing behavior.',
    rawCode: `import { blocklog } from '@blocklog/sdk';\n\nconst result = await blocklog.trace({\n  fn: () => openai.chat.completions.create(params),\n  context: { userId: 'usr_881', workflow: 'credit' }\n});`,
    formattedCode: (
      <>
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">blocklog</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@blocklog/sdk&apos;</span>;{'\n\n'}
        <span className="text-purple-400">const</span> <span className="text-blue-300">result</span> = <span className="text-purple-400">await</span> <span className="text-blue-300">blocklog</span>.<span className="text-amber-300">trace</span>(&#123;{'\n'}
        {'  '}fn: () =&gt; <span className="text-blue-300">openai</span>.chat.completions.<span className="text-amber-300">create</span>(params),{'\n'}
        {'  '}context: &#123; userId: <span className="text-emerald-300">&apos;usr_881&apos;</span>, workflow: <span className="text-emerald-300">&apos;credit&apos;</span> &#125;{'\n'}
        &#125;);
      </>
    ),
  },
  {
    number: '02',
    title: 'Blocklog creates immutable audit evidence.',
    description:
      'Each event is hashed with SHA-256, chained into a Merkle tree, and stored in an immutable audit log. Tampering with any record breaks the entire chain.',
    rawCode: `{\n  "eventId": "evt_9f2a3c8d",\n  "hash": "a3f9b2c1d4e6f7a8b9c0...",\n  "previousHash": "d4e6f7a8b9c0d1e2...",\n  "merkleRoot": "b9c0d1e2f3a4b5c6...",\n  "timestamp": "2024-07-28T09:14:32Z"\n}`,
    formattedCode: (
      <>
        &#123;{'\n'}
        {'  '}<span className="text-blue-300">&quot;eventId&quot;</span>: <span className="text-emerald-300">&quot;evt_9f2a3c8d&quot;</span>,{'\n'}
        {'  '}<span className="text-blue-300">&quot;hash&quot;</span>: <span className="text-emerald-300">&quot;a3f9b2c1d4e6f7a8b9c0...&quot;</span>,{'\n'}
        {'  '}<span className="text-blue-300">&quot;previousHash&quot;</span>: <span className="text-emerald-300">&quot;d4e6f7a8b9c0d1e2...&quot;</span>,{'\n'}
        {'  '}<span className="text-blue-300">&quot;merkleRoot&quot;</span>: <span className="text-emerald-300">&quot;b9c0d1e2f3a4b5c6...&quot;</span>,{'\n'}
        {'  '}<span className="text-blue-300">&quot;timestamp&quot;</span>: <span className="text-emerald-300">&quot;2024-07-28T09:14:32Z&quot;</span>{'\n'}
        &#125;
      </>
    ),
  },
  {
    number: '03',
    title: 'Generate regulator-ready reports instantly.',
    description:
      'When regulators ask, export a complete, cryptographically verified evidence package in minutes. Includes model cards, decision logs, and bias reports.',
    rawCode: `const pkg = await blocklog.evidence.export({\n  period: 'Q3-2024',\n  format: 'pdf+json',\n  include: ['decisions', 'biasReport',\n            'provenance', 'accessLog']\n});`,
    formattedCode: (
      <>
        <span className="text-purple-400">const</span> <span className="text-blue-300">pkg</span> = <span className="text-purple-400">await</span> <span className="text-blue-300">blocklog</span>.evidence.<span className="text-amber-300">export</span>(&#123;{'\n'}
        {'  '}period: <span className="text-emerald-300">&apos;Q3-2024&apos;</span>,{'\n'}
        {'  '}format: <span className="text-emerald-300">&apos;pdf+json&apos;</span>,{'\n'}
        {'  '}include: [<span className="text-emerald-300">&apos;decisions&apos;</span>, <span className="text-emerald-300">&apos;biasReport&apos;</span>,{'\n'}
        {'            '}<span className="text-emerald-300">&apos;provenance&apos;</span>, <span className="text-emerald-300">&apos;accessLog&apos;</span>]{'\n'}
        &#125;);
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-emerald-300 ml-0.5 align-middle"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }}
        />
      </>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-shell py-24 lg:py-32 bg-white" aria-labelledby="how-it-works-title">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3">How it works</span>
          <h2
            id="how-it-works-title"
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            From deployment to audit-ready evidence
            <br className="hidden sm:block" />
            <span className="text-blue-600"> in three steps.</span>
          </h2>
          <p className="section-subheading text-center">
            Blocklog captures, chains, and stores every AI decision automatically.
            No batch jobs. No manual exports. No gaps in your evidence trail.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative flex min-h-full min-w-0 flex-col justify-between"
            >
              {/* Connector arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-10 -right-4 z-10"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.4 }}
                >
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              )}

              <div className="professional-card group h-full min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_26px_rgba(37,99,235,0.10)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.1em] text-blue-700 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-full transition-colors duration-300 group-hover:bg-blue-100"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  <h3
                    className="relative inline-block text-[1.1rem] font-bold text-slate-900 mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </h3>

                  <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* High Contrast Terminal Code Block */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <CodeTerminal
                    title={`step-${step.number}.${i === 0 ? 'ts' : i === 1 ? 'json' : 'ts'}`}
                    language={i === 1 ? 'json' : 'ts'}
                    code={step.rawCode}
                    formattedCode={step.formattedCode}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}