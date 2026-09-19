"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Lock, Layers, Cpu, type LucideIcon } from "lucide-react";

function ConceptCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
        {eyebrow}
      </span>
      <h2 className="text-[1.2rem] font-bold tracking-tight text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      <div className="text-[14px] leading-relaxed text-slate-600 space-y-3">{children}</div>
    </article>
  );
}

function MiniCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 transition-all">
      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-[15px] font-bold text-slate-900 mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}

const integrityLayers = [
  { title: "Append-only storage", description: "API endpoints expose no edit or delete operations. The log stream is synchronized to immutable WORM storage." },
  { title: "Cryptographic hash chaining", description: "Logs are chained sequentially with SHA-256, so downstream tampering immediately invalidates the entire chain." },
  { title: "Merkle batching", description: "Periodic batches construct Merkle trees so a single Merkle root can represent and prove inclusion for any decision." },
  { title: "Ed25519 signing", description: "Evidence packages and Merkle roots are signed for long-term independent verification outside the operational database." },
];

export default function CoreConceptsDocsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <header>
        <span className="eyebrow mb-2">Core Concepts</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Decisions, Cryptography, and Accountability
        </h1>
        <p className="section-subheading max-w-2xl">
          Understand why Blocklog exists, how cryptographic evidence is structured, and how it satisfies regulatory scrutiny.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <ConceptCard eyebrow="Philosophy" title="Observability vs. Accountability">
          <p>
            Traditional observability tools such as Datadog and Splunk are optimized for speed, indexing, and operational debugging. That makes them excellent for searchability, but not ideal for non-repudiable evidence when administrators or compromised credentials can alter log history.
          </p>
          <p>
            Blocklog is purpose-built for <strong className="text-slate-900">regulatory accountability</strong>. The goal is to preserve mathematical proof of system state, inputs, model versions, and human approvals in a format that regulators can independently verify without trusting the application database.
          </p>
        </ConceptCard>

        <ConceptCard eyebrow="Architecture" title="The Four Layers of Integrity">
          <div className="space-y-3.5">
            {integrityLayers.map((layer) => (
              <div key={layer.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-[13.5px] font-bold text-slate-900">{layer.title}</h3>
                <p className="mt-0.5 text-[12.5px] leading-normal text-slate-600">{layer.description}</p>
              </div>
            ))}
          </div>
        </ConceptCard>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-7">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
          Why This Matters For Indian Regulations
        </span>
        <p className="text-[14px] leading-relaxed text-blue-950 font-medium">
          Under DPDP Act 2023 and RBI AI/ML guidelines, Data Fiduciaries and regulated lenders are legally accountable for proving how automated decisions were computed. It is not enough to show that a decision occurred — you must be able to reconstruct the exact model version, input features, prompt templates, and human approval trail.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <MiniCard
          icon={Cpu}
          title="Decision Logging"
          description="Preserve why an action was taken, including inputs, prompt versions, confidence scores, and authorizing actors."
        />
        <MiniCard
          icon={Lock}
          title="Cryptographic Signing"
          description="Logs are sealed with SHA-256 and Ed25519 signatures, enabling non-repudiation and independent auditor verification."
        />
        <MiniCard
          icon={Layers}
          title="Forensic Reconstruction"
          description="Reconstruct decision timelines, model lineages, and human intervention trails within 200ms."
        />
      </section>

      <nav className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          href="/docs/python-sdk"
        >
          <Terminal className="w-4 h-4" />
          Python SDK Reference
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          href="/docs/quickstart"
        >
          Quickstart Guide
        </Link>
      </nav>
    </div>
  );
}