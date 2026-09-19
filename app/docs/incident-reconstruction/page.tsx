"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { ArrowRight, ShieldAlert, GitFork, RefreshCw, FileSearch } from "lucide-react";

const setupCode = `import os
import random
from uuid import uuid4
import blocklog

# Initialize SDK
blocklog.init(api_key=os.environ.get("BLOCKLOG_API_KEY", "blk_demo_key"))
WORKFLOW_ID = str(uuid4())

@blocklog.tool(name="fetch-price")
def fetch_price(ticker: str) -> float:
    return {"TSLA": 412.50, "AAPL": 189.30}.get(ticker, 250.0)

@blocklog.tool(name="check-risk-limits")
def check_risk_limits(ticker: str, qty: int, price: float) -> dict:
    trade_value = qty * price
    return {
        "approved": trade_value < 50_000,
        "trade_value": trade_value,
        "limit": 50_000,
    }

@blocklog.agent(name="market-analyst", version="2.1")
def analyst_agent(ticker: str) -> dict:
    price = fetch_price(ticker)
    score = 0.85
    signal = "BUY"

    with blocklog.decision(
        type="SIGNAL",
        asset=ticker,
        confidence=score,
        metadata={"workflow_id": WORKFLOW_ID},
    ) as d:
        d.record_input(price=price)
        d.record_output(signal=signal, score=score)

    return {"ticker": ticker, "price": price, "signal": signal, "decision_id": d.id}

@blocklog.agent(name="risk-manager", version="1.5")
def risk_agent(ticker: str, price: float, qty: int, analyst_dec_id: str) -> dict:
    risk = check_risk_limits(ticker, qty, price)

    with blocklog.decision(
        type="RISK_APPROVAL",
        asset=ticker,
        confidence=1.0 if risk["approved"] else 0.0,
        metadata={"workflow_id": WORKFLOW_ID},
    ) as d:
        d.record_input(qty=qty, price=price, analyst_decision_id=analyst_dec_id)
        d.record_output(approved=risk["approved"])

        if not risk["approved"]:
            d.request_approval(
                reason=f"Value \${risk['trade_value']:.0f} exceeds limit \${risk['limit']:.0f}",
                reviewer="cro@fund.com",
            )

    return {**risk, "risk_decision_id": d.id}

if __name__ == "__main__":
    TICKER = "TSLA"
    QTY = 150  # 150 * 412.50 = $61,875

    analysis = analyst_agent(TICKER)
    risk_status = risk_agent(TICKER, analysis["price"], QTY, analysis["decision_id"])`;

const replayCode = `import blocklog

# 1. Initialize forensic replay session for the trace
session = blocklog.replay(trace_id="trc_8f92a10b4c7e")

# 2. Iterate through causal timeline in sequence
for event in session.timeline():
    print(f"[{event.get('at')}] {event.get('item_type')}: {event.get('summary')}")

# 3. Request automated root cause inference
cause = session.root_cause()
if cause["detected"]:
    print(f"Incident: {cause['root_cause_type']}")
    print(f"Explanation: {cause['description']}")
    print(f"Remediation: {cause['remediation']}")`;

export default function IncidentReconstructionDocsPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <header>
        <span className="eyebrow mb-2">Forensics & Replay</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AI Agent Incident Reconstruction
        </h1>
        <p className="section-subheading max-w-2xl">
          Walkthrough of a multi-agent hedge fund workflow where a risk limit violation triggers a human-in-the-loop review and downstream forensic replay.
        </p>
      </header>

      {/* Overview Cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <GitFork className="h-4 w-4 text-blue-600" />
            <span
              className="text-[11px] font-bold uppercase tracking-wider text-slate-500"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Workflow Pattern
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-900">Analyst → Risk → Executor</p>
          <p className="mt-1 text-xs text-slate-500">Autonomous multi-agent chain</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="h-4 w-4 text-amber-600" />
            <span
              className="text-[11px] font-bold uppercase tracking-wider text-slate-500"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Incident Trigger
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-900">Risk Limit Violation</p>
          <p className="mt-1 text-xs text-slate-500">Value exceeds $50,000 threshold</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="h-4 w-4 text-emerald-600" />
            <span
              className="text-[11px] font-bold uppercase tracking-wider text-slate-500"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Resolution Path
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-900">HITL Review + Replay</p>
          <p className="mt-1 text-xs text-slate-500">Causal timeline & root cause</p>
        </div>
      </section>

      {/* Step 1: Multi-Agent Setup */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <span
            className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Step 01
          </span>
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Multi-Agent Instrumentation Setup
          </h2>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">
            An analyst agent produces a trading signal, a risk agent checks portfolio limits, and an executor fills the trade. A single <code className="text-xs bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-mono">WORKFLOW_ID</code> binds the execution context across the workflow so every decision and tool call can be reconstructed later.
          </p>
        </div>
        <CodeTerminal code={setupCode} language="python" title="multi_agent_workflow.py" />
      </section>

      {/* Step 2: Query Forensics and Root Cause */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <span
            className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Step 02
          </span>
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Query Forensics and Automated Root Cause
          </h2>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">
            Once an exception or human review request is raised, the forensic replay API reconstructs the timeline, surfaces the causal chain, and helps identify the root cause behind the incident.
          </p>
        </div>
        <CodeTerminal code={replayCode} language="python" title="forensic_replay.py" />
      </section>

      {/* Key Architectural Takeaways */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
        <div className="flex items-center gap-2 mb-3">
          <FileSearch className="h-4 w-4 text-blue-600" />
          <h3
            className="text-sm font-bold uppercase tracking-wider text-slate-900"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            What this example demonstrates
          </h3>
        </div>
        <ul className="space-y-2.5 text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            <span><strong className="text-slate-900">Deterministic Context Binding:</strong> A shared workflow identifier links the signal, risk evaluation, and review path into one auditable trail.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            <span><strong className="text-slate-900">Explicit Decision Objects:</strong> Risk approval becomes an explicit, verifiable decision entity rather than an opaque internal boolean check.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            <span><strong className="text-slate-900">Unified Lifecycle:</strong> Human escalation and post-incident replay investigation belong to the exact same cryptographic audit trail.</span>
          </li>
        </ul>
      </section>

      {/* Navigation Footer */}
      <nav className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between items-center">
        <Link
          href="/docs/python-sdk"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
        >
          ← Python SDK Reference
        </Link>
        <Link
          href="/docs/api-reference"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          REST API Reference <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
    </div>
  );
}