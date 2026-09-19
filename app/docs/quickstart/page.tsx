"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";

const installCommand = `pip install blocklog`;
const credentialCommand = `export BLOCKLOG_API_KEY="blk_live_xxxxxxxxx"`;
const quickstartCode = `import os
import blocklog

# 1. Initialize the SDK (loads from environment variables)
blocklog.init(api_key=os.environ.get("BLOCKLOG_API_KEY", "blk_demo_key"))

# 2. Instrument a tool dependency
@blocklog.tool(name="fetch-spot-price")
def check_price(ticker: str) -> float:
    return 412.50

# 3. Instrument the agent execution
@blocklog.agent(name="quickstart-trader")
def run_agent():
    price = check_price("TSLA")

    with blocklog.decision(type="BUY", asset="TSLA") as d:
        d.record_input(price=price)
        d.record_output(order_id="ord_123")

    print(f"Decision recorded: {d.id}")

    try:
        verification = blocklog.verify.decision(d.id)
        print(f"Verification status: {verification.get('status', 'verified')}")
    except Exception as e:
        print(f"Verification failed: {e}")

if __name__ == "__main__":
    run_agent()`;

export default function QuickstartDocsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <header>
        <span className="eyebrow mb-2">Getting Started</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Quickstart — 5 Minutes to First Log
        </h1>
        <p className="section-subheading max-w-2xl">
          Install the Python SDK, configure your credentials, and anchor your first cryptographically verified AI decision trail.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
              Step 01
            </span>
            <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">Install the SDK</h2>
            <p className="text-[13.5px] text-slate-600 mb-4">
              Install the official Blocklog Python SDK via pip.
            </p>
          </div>
          <CodeTerminal title="terminal" language="bash" code={installCommand} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
              Step 02
            </span>
            <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">Configure Credentials</h2>
            <p className="text-[13.5px] text-slate-600 mb-4">
              Set your Blocklog API key as an environment variable.
            </p>
          </div>
          <CodeTerminal title="env" language="bash" code={credentialCommand} />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
            Step 03
          </span>
          <h2 className="text-[1.2rem] font-bold text-slate-900 mb-2">Ingest and verify your first log</h2>
          <p className="text-[13.5px] text-slate-600 leading-relaxed">
            Create an <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-[13px]">ingest.py</code> script to trace an agent execution, record a decision, and verify its integrity against the ledger.
          </p>
        </div>
        <CodeTerminal title="ingest.py" language="python" code={quickstartCode} />
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <h3 className="text-[15px] font-bold text-emerald-900">Execution Summary</h3>
        </div>
        <p className="text-[13.5px] text-emerald-800 leading-relaxed">
          The SDK manages the trace session, registers a <code className="bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-900 font-mono text-[12.5px]">TOOL_CALL</code> event, submits the SHA-256 hashed decision payload, and verifies the integrity chain via the Blocklog backend.
        </p>
      </section>

      <nav className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          href="/docs/concepts"
        >
          Explore Core Concepts
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