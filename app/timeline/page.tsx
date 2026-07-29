import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Shield, Cpu, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform Architecture & Roadmap — Blocklog',
  description: 'The four-layer security architecture underpinning Blocklog: Blocklog Core, Traceflow, Sentinel, and BlackVault.',
};

const layers = [
  {
    name: 'Blocklog — Immutable Core',
    tagline: 'The Cryptographic Ledger',
    question: 'Can we prove why this decision happened?',
    status: 'Active · Core Layer',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Append-only governance record store with SHA-256 hash chaining, Merkle tree aggregations, and automated evidence exports.',
    features: [
      'Append-only record store with hash chaining',
      'Forensic replay & decision reconstruction',
      'Automated DPDP & RBI regulatory export',
      'Ed25519 cryptographic attestations',
    ],
  },
  {
    name: 'Traceflow — Agent Telemetry',
    tagline: 'Execution & Orchestration',
    question: 'What exactly did the agent do?',
    status: 'Active · Ingestion Layer',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Deep orchestration telemetry capturing prompt variations, tool call chains, browser actions, and retrieval context in real time.',
    features: [
      'OpenTelemetry & LangChain native hooks',
      'Stale input & retrieval staleness tracking',
      'Latency & token cost breakdown',
      'Multi-agent handoff tracing',
    ],
  },
  {
    name: 'Sentinel — Authorization Gate',
    tagline: 'Runtime Enforcement',
    question: 'Should the agent be allowed to do this action?',
    status: 'Active · Governance Layer',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Human-in-the-loop gate sitting in the execution path. Holds high-risk financial or data operations until authorized.',
    features: [
      'Configurable risk threshold triggers',
      'Slack & Webhook approval workflows',
      'Cryptographically signed human overrides',
      'Automated rollback on rejection',
    ],
  },
  {
    name: 'BlackVault — Isolated Sandbox',
    tagline: 'Confidential Execution',
    question: 'How do we safely execute high-risk actions?',
    status: 'Enterprise VPC Option',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    description: 'Hardware-enforced confidential computing environment for processing sensitive financial transactions or untrusted LLM outputs.',
    features: [
      'Hardware enclaves (AWS Nitro / GCP Confidential)',
      'Memory encryption during processing',
      'Zero plaintext exposure to cloud provider',
      'Formal mathematical proof generation',
    ],
  },
];

export default function TimelinePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-4xl pt-10">
          <div className="text-center mb-16">
            <span className="eyebrow mb-3">Platform Architecture</span>
            <h1
              className="text-[2.5rem] sm:text-[3.25rem] font-bold text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Four Layers of AI Governance.
            </h1>
            <p className="text-[1.0625rem] text-slate-600 max-w-2xl mx-auto">
              From low-overhead telemetry ingestion to immutable cryptographic proof, Blocklog provides a multi-layer defense against AI audit risks.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {layers.map((layer, index) => (
              <div
                key={layer.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      LAYER 0{index + 1} · {layer.tagline}
                    </span>
                    <h2
                      className="text-[1.35rem] font-bold text-slate-900"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {layer.name}
                    </h2>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full border self-start sm:self-auto ${layer.badgeClass}`}>
                    {layer.status}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-blue-900 text-[13.5px] font-semibold mb-4">
                  Key Question Answered: &quot;{layer.question}&quot;
                </div>

                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6">
                  {layer.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  {layer.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[13px] text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-slate-900 text-white rounded-2xl p-8">
            <h2 className="text-[1.35rem] font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Explore how Blocklog integrates with your tech stack
            </h2>
            <p className="text-[13.5px] text-slate-400 mb-6">
              Full documentation for Python, Node.js, REST APIs, and OpenTelemetry pipelines.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14px] rounded-xl transition-all"
            >
              Read Architecture Docs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
