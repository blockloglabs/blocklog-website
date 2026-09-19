"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { ArrowRight, Terminal } from "lucide-react";

type EndpointProps = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  title: string;
  description: string;
  request?: string;
  response?: string;
};

function MethodBadge({ method }: { method: EndpointProps["method"] }) {
  const styles = {
    GET: "bg-emerald-50 text-emerald-700 border-emerald-200",
    POST: "bg-blue-50 text-blue-700 border-blue-200",
    PUT: "bg-amber-50 text-amber-700 border-amber-200",
    DELETE: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold border ${styles[method]}`} style={{ fontFamily: 'var(--font-mono)' }}>
      {method}
    </span>
  );
}

function EndpointCard({ method, path, title, description, request, response }: EndpointProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <MethodBadge method={method} />
        <code className="text-[14px] font-bold text-slate-900 font-mono">{path}</code>
      </div>
      <h2 className="mt-3 text-[1.2rem] font-bold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{description}</p>
      
      <div className="mt-5 space-y-4">
        {request && (
          <div>
            <h3 className="text-[12.5px] font-bold uppercase tracking-wider text-slate-400 mb-2">Request</h3>
            <CodeTerminal title="Request" language="json" code={request} />
          </div>
        )}
        {response && (
          <div>
            <h3 className="text-[12.5px] font-bold uppercase tracking-wider text-slate-400 mb-2">Response · 200 OK</h3>
            <CodeTerminal title="Response" language="json" code={response} />
          </div>
        )}
      </div>
    </section>
  );
}

const endpoints: EndpointProps[] = [
  {
    method: "POST",
    path: "/api/v1/logs",
    title: "Ingest Log Event",
    description: "Submit a single audit event payload to the cryptographic ledger. Computes SHA-256 hash and returns the generated UUID.",
    request: `Headers:
X-API-Key: blk_live_xxxxxxxx
Content-Type: application/json

Body (JSON):
{
  "event_type": "CREDIT_DECISION",
  "data": {
    "applicant_id": "usr_9918",
    "credit_score": 742,
    "decision": "APPROVED",
    "model_version": "v2.1"
  },
  "source": "credit-service",
  "trace_id": "8f2a3c8d-1e0b-4a7f-9c4d-3b2a1e0f9a8b"
}`,
    response: `{
  "log_id": "c4e93b1f-7d4c-4e8b-a7f2-88cc2e8b0044",
  "company_id": "org_meridian",
  "event_type": "CREDIT_DECISION",
  "hash": "a3f9b2c1d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2",
  "created_at": "2024-07-28T09:14:32.102Z"
}`,
  },
  {
    method: "POST",
    path: "/api/v1/logs/batch",
    title: "Batch Ingest Logs",
    description: "Submit multiple events in a single HTTP request for high-throughput pipelines.",
    request: `Body (JSON):
{
  "logs": [
    {
      "event_type": "TOOL_CALL",
      "data": { "tool": "calc_risk", "output": 0.04 }
    },
    {
      "event_type": "DECISION",
      "data": { "action": "EXECUTE", "status": "CONFIRMED" }
    }
  ]
}`,
    response: `{
  "ingested": 2,
  "log_ids": [
    "c4e93b1f-7d4c-4e8b-a7f2-88cc2e8b0044",
    "e4f3a2b1-c0d9-4e8f-7a6b-5c4d3b2a1e0f"
  ],
  "merkle_root": "sha256:b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4"
}`,
  },
  {
    method: "GET",
    path: "/api/v1/logs/{log_id}/verify",
    title: "Verify Log Integrity",
    description: "Validate SHA-256 hash chains and cryptographic signature for a specific log record.",
    response: `{
  "log_id": "c4e93b1f-7d4c-4e8b-a7f2-88cc2e8b0044",
  "hash": "a3f9b2c1d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2",
  "chain_valid": true,
  "signature_valid": true,
  "verified_at": "2024-07-28T09:14:33.400Z"
}`,
  },
  {
    method: "POST",
    path: "/api/v1/forensics/replays",
    title: "Create Forensic Replay Session",
    description: "Initiate forensic timeline reconstruction and causal graph analysis for an execution trace.",
    request: `Body (JSON):
{
  "trace_id": "8f2a3c8d-1e0b-4a7f-9c4d-3b2a1e0f9a8b",
  "metadata": { "reason": "CISO Q3 Audit" }
}`,
    response: `{
  "replay_id": "rep_9f2a3c8d1e0b",
  "trace_id": "8f2a3c8d-1e0b-4a7f-9c4d-3b2a1e0f9a8b",
  "status": "READY",
  "event_count": 14,
  "created_at": "2024-07-28T09:15:00.000Z"
}`,
  },
  {
    method: "GET",
    path: "/api/v1/forensics/replays/{replay_id}/root-cause",
    title: "Forensic Root Cause Analysis",
    description: "Analyze causal dependencies across tool calls, stale inputs, and policy denials to isolate anomalies.",
    response: `{
  "detected": true,
  "root_cause_type": "STALE_CONTEXT",
  "description": "Execution relied on stale market data at path 'market.feed'.",
  "confidence": 0.95,
  "remediation": "Refresh market data feed before executing decision."
}`,
  },
  {
    method: "POST",
    path: "/api/v1/hitl/reject",
    title: "Human Override Rejection",
    description: "Record and cryptographically seal human review decisions and overrides.",
    request: `Body (JSON):
{
  "decision_id": "dec_88192a",
  "reviewer": "cro@bank.com",
  "rejection_reason": "Applicant debt-to-income ratio exceeds risk policy"
}`,
    response: `{
  "override_id": "ovr_3b2a1e0f",
  "status": "REJECTED",
  "timestamp": "2024-07-28T09:16:12.000Z",
  "signature": "ed25519:7f9a8b...3c2d1e"
}`,
  },
];

export default function ApiReferenceDocsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <header>
        <span className="eyebrow mb-2">API Reference</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          REST API Reference
        </h1>
        <p className="section-subheading max-w-2xl">
          Ingest logs, verify data integrity, manage incidents, and review human authorization workflows through the HTTPS API.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Authentication
          </span>
          <span className="text-[13.5px] font-semibold text-slate-900 font-mono">
            X-API-Key Header
          </span>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Content Type
          </span>
          <span className="text-[13.5px] font-semibold text-slate-900 font-mono">
            application/json
          </span>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Base Path
          </span>
          <span className="text-[13.5px] font-semibold text-slate-900 font-mono">
            https://api.blocklogsecurity.com/api/v1
          </span>
        </div>
      </section>

      <div className="space-y-6">
        {endpoints.map((endpoint) => (
          <EndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />
        ))}
      </div>

      <nav className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          href="/docs/incident-reconstruction"
        >
          Incident Reconstruction Guide
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          href="/docs/python-sdk"
        >
          <Terminal className="w-4 h-4 text-blue-600" />
          Python SDK Reference
        </Link>
      </nav>
    </div>
  );
}