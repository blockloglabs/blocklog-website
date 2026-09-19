"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { ArrowRight, Code, AlertTriangle } from "lucide-react";

type Param = {
  name: string;
  type: string;
  description: string;
};

type ReturnMethod = {
  name: string;
  description: string;
};

type ApiSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  signature: string;
  params?: Param[];
  warning?: string;
  returns?: { label: string; methods: ReturnMethod[] };
  notes?: string[];
  example: string;
};

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[13.5px] leading-relaxed text-amber-900 flex items-start gap-2.5">
      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
      <div>
        <strong className="font-semibold">Note — </strong>
        {children}
      </div>
    </div>
  );
}

function NoteList({ notes }: { notes: string[] }) {
  return (
    <ul className="mt-4 space-y-1.5 text-[13px] leading-relaxed text-slate-600">
      {notes.map((n, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-slate-400 font-bold">—</span>
          <span>{n}</span>
        </li>
      ))}
    </ul>
  );
}

function ApiSection({ id, eyebrow, title, description, signature, params, warning, returns, notes, example }: ApiSectionProps) {
  return (
    <section id={id} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-mono)' }}>
          {eyebrow}
        </span>
      </div>
      <h2 className="text-[1.25rem] font-bold tracking-tight text-slate-900 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
        {title}
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{description}</p>
      {warning && <Callout>{warning}</Callout>}
      
      <div className="mt-4">
        <CodeTerminal title="signature" language="python" code={signature} />
      </div>

      {params && params.length > 0 && (
        <div className="mt-5">
          <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-3">Parameters</h3>
          <ul className="space-y-2.5 text-[13.5px] leading-relaxed">
            {params.map((param) => (
              <li key={param.name} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                <code className="text-blue-700 font-bold font-mono text-[13px]">{param.name}</code>
                <span className="text-slate-500 font-mono text-[12px]"> · {param.type}</span>
                <p className="mt-1 text-slate-600 text-[13px]">{param.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {returns && returns.methods.length > 0 && (
        <div className="mt-5">
          <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Returns: <code className="text-slate-900 font-mono text-[13px]">{returns.label}</code>
          </h3>
          <ul className="space-y-2.5 text-[13.5px] leading-relaxed">
            {returns.methods.map((m) => (
              <li key={m.name} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                <code className="text-slate-900 font-semibold font-mono text-[13px]">{m.name}</code>
                <p className="mt-1 text-slate-600 text-[13px]">{m.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5">
        <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">Example</h3>
        <CodeTerminal title="example.py" language="python" code={example} />
      </div>

      {notes && notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
}

const sections: ApiSectionProps[] = [
  {
    id: "init",
    eyebrow: "Method",
    title: "blocklog.init()",
    description: "Initialize the global SDK configuration. Call once at application startup.",
    signature: `def init(
    api_key: str | None = None,
    *,
    base_url: str | None = None,
    signing_key: str | None = None,
    timeout: float | None = None,
    max_retries: int | None = None,
    debug: bool = False,
) -> BlocklogClient`,
    params: [
      { name: "api_key", type: "str, optional", description: "Key for verification. Falls back to BLOCKLOG_API_KEY." },
      { name: "base_url", type: "str, optional", description: "Custom API endpoint override. Falls back to BLOCKLOG_BASE_URL." },
      { name: "signing_key", type: "str, optional", description: "HMAC-SHA256 key for tamper-evident log signatures. Falls back to BLOCKLOG_SDK_SIGNING_KEY." },
      { name: "timeout", type: "float, optional", description: "Request timeout in seconds. Default is 10." },
      { name: "max_retries", type: "int, optional", description: "Ingestion retries. Default is 3." },
    ],
    example: `import blocklog
blocklog.init(api_key="blk_live_xxxx", debug=True)`,
  },
  {
    id: "agent",
    eyebrow: "Decorator",
    title: "@blocklog.agent",
    description: "Trace an AI agent function, linking it to a Blocklog session. Handles sync and async functions automatically.",
    signature: `def agent(
    func: F | None = None,
    *,
    name: str | None = None,
    version: str = "1.0",
    tags: list[str] | None = None,
    metadata: dict[str, Any] | None = None,
) -> F | Callable[[F], F]`,
    params: [
      { name: "name", type: "str, optional", description: "Human-readable agent name. Defaults to func.__name__." },
      { name: "version", type: "str", description: "Semver-style version string. Default is \"1.0\"." },
      { name: "tags", type: "list[str], optional", description: "Optional list of string tags." },
      { name: "metadata", type: "dict, optional", description: "Arbitrary extra data attached to the agent session." },
    ],
    warning: "Class decoration only emits AGENT_START. For full lifecycle tracing, decorate the specific method (e.g. run, execute) rather than the class itself.",
    example: `@blocklog.agent(name="stock-trader", version="2.0", tags=["prod"])
def run_trading(ticker):
    pass`,
  },
  {
    id: "tool",
    eyebrow: "Decorator",
    title: "@blocklog.tool",
    description: "Wrap a helper function or external API call to record it as a TOOL_CALL event. Inherits trace context from the surrounding @agent.",
    signature: `def tool(
    func: F | None = None,
    *,
    name: str | None = None,
    schema: dict[str, Any] | None = None,
    tags: list[str] | None = None,
    metadata: dict[str, Any] | None = None,
) -> F | Callable[[F], F]`,
    params: [
      { name: "name", type: "str, optional", description: "Human-readable tool name. Defaults to func.__name__." },
      { name: "schema", type: "dict, optional", description: "Optional dict describing the input schema." },
      { name: "tags", type: "list[str], optional", description: "Optional string tags." },
      { name: "metadata", type: "dict, optional", description: "Arbitrary extra data." },
    ],
    example: `@blocklog.tool(name="fetch-price", tags=["market-data"])
def get_price(ticker):
    return 189.30`,
  },
  {
    id: "decision",
    eyebrow: "Context Manager",
    title: "blocklog.decision()",
    description: "Define a block for recording structured inputs, outputs, and review tasks associated with an AI decision.",
    signature: `def decision(
    *,
    type: str,
    asset: str | None = None,
    confidence: float | None = None,
    metadata: dict[str, Any] | None = None,
    agent_id: str | None = None,
    trace_id: str | None = None,
) -> Generator[DecisionContext, None, None]`,
    params: [
      { name: "type", type: "str", description: "Decision type identifier (e.g. \"CREDIT_APPROVAL\")." },
      { name: "asset", type: "str, optional", description: "Asset or entity this decision evaluates." },
      { name: "confidence", type: "float, optional", description: "Model confidence score from 0.0 to 1.0." },
      { name: "metadata", type: "dict, optional", description: "Extra structured audit fields." },
      { name: "agent_id", type: "str, optional", description: "Links this decision to a specific agent session." },
      { name: "trace_id", type: "str, optional", description: "Links this decision to a specific trace." },
    ],
    returns: {
      label: "DecisionContext",
      methods: [
        { name: "record_input(**kwargs)", description: "Record structured inputs. Returns self." },
        { name: "record_output(**kwargs)", description: "Record structured outputs. Returns self." },
        { name: "tag(*tags)", description: "Attach string labels. Returns self." },
        { name: "request_approval(reason, reviewer=None)", description: "Non-blocking request for human approval. Returns self." },
        { name: "verify()", description: "Verify the decision after the with block exits." },
      ],
    },
    example: `with blocklog.decision(type="BUY", asset="AAPL", confidence=0.9) as d:
    d.record_input(price=189.30)
    d.tag("high-conviction")
    d.record_output(order_id="ord_99")`,
  },
  {
    id: "approval-request",
    eyebrow: "Governance Method",
    title: "blocklog.approval.request()",
    description: "Request human review for an action. Triggers webhooks and Slack notifications asynchronously.",
    signature: `def request(
    decision_id: str | None = None,
    *,
    reason: str,
    reviewer: str | None = None,
    log_id: str | None = None,
    metadata: dict[str, Any] | None = None,
) -> dict[str, Any]`,
    params: [
      { name: "decision_id", type: "str, optional", description: "ID of the decision this approval request relates to." },
      { name: "reason", type: "str", description: "Why human review is required." },
      { name: "reviewer", type: "str, optional", description: "Email or identifier of the assigned reviewer." },
      { name: "log_id", type: "str, optional", description: "ID of a specific log entry if not tied to a decision." },
      { name: "metadata", type: "dict, optional", description: "Arbitrary extra audit data." },
    ],
    notes: ["Related: blocklog.approval.reject(), escalate(), list_overrides(), and audit_trail() round out the human-in-the-loop workflow."],
    example: `blocklog.approval.request(
    decision_id="dec_123",
    reason="Price exceeds risk limits",
    reviewer="cro@company.com"
)`,
  },
  {
    id: "replay",
    eyebrow: "Forensic Method",
    title: "blocklog.replay()",
    description: "Instantiate a session to examine execution traces, staleness heatmaps, and counterfactual outcomes.",
    signature: `def replay(
    trace_id: str,
    *,
    token_id: str | None = None,
    metadata: dict[str, Any] | None = None,
) -> ReplaySession`,
    params: [
      { name: "trace_id", type: "str", description: "Trace ID to reconstruct." },
      { name: "token_id", type: "str, optional", description: "Restrict the replay to a specific token within the trace." },
      { name: "metadata", type: "dict, optional", description: "Extra context attached to the replay session." },
    ],
    example: `session = blocklog.replay("trace-uuid")
cause = session.root_cause()
print(cause["description"])`,
  },
  {
    id: "verify-log",
    eyebrow: "Verification Method",
    title: "blocklog.verify.log()",
    description: "Confirm a single log entry has not been tampered with since creation.",
    signature: `def log(log_id: str) -> dict[str, Any]`,
    params: [{ name: "log_id", type: "str", description: "ID of the log entry to verify." }],
    example: `result = blocklog.verify.log("log-uuid")
assert result["status"] == "verified"`,
  },
];

type EventRow = {
  event: string;
  causality: string;
  firedWhen: string;
};

type EventGroup = {
  label?: string;
  rows: EventRow[];
};

type IntegrationProps = {
  id: string;
  name: string;
  description: string;
  setup: string;
  usage?: string;
  usageLabel?: string;
  eventGroups: EventGroup[];
  notes?: string[];
};

function EventTable({ rows }: { rows: EventRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">Event</th>
            <th className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">Causality type</th>
            <th className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">Fired when</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.event} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 py-2.5 align-top"><code className="text-blue-700 font-mono text-[12.5px] font-semibold">{r.event}</code></td>
              <td className="px-4 py-2.5 align-top"><code className="text-slate-600 font-mono text-[12.5px]">{r.causality}</code></td>
              <td className="px-4 py-2.5 align-top text-[13px] leading-relaxed text-slate-600">{r.firedWhen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IntegrationSection({ id, name, description, setup, usage, usageLabel, eventGroups, notes }: IntegrationProps) {
  return (
    <section id={id} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
        Integration
      </span>
      <h3 className="text-[1.25rem] font-bold tracking-tight text-slate-900">{name}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{description}</p>

      <div className="mt-5">
        <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">Setup</h4>
        <CodeTerminal title="setup.py" language="python" code={setup} />
      </div>

      {usage && (
        <div className="mt-5">
          <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">{usageLabel ?? "Usage"}</h4>
          <CodeTerminal title="usage.py" language="python" code={usage} />
        </div>
      )}

      <div className="mt-6 space-y-5">
        <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-400">Events Emitted</h4>
        {eventGroups.map((group, i) => (
          <div key={i}>
            {group.label && <p className="mb-2 text-[13px] font-bold text-slate-800">{group.label}</p>}
            <EventTable rows={group.rows} />
          </div>
        ))}
      </div>

      {notes && notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
}

const integrations: IntegrationProps[] = [
  {
    id: "langchain",
    name: "LangChain",
    description: "Attach a callback handler to any chain, agent, or LLM to capture chain, model, and tool lifecycle events.",
    setup: `import blocklog

client = blocklog.init(api_key="blk_...")
handler = client.instrument_langchain()`,
    usage: `chain.invoke(inputs, config={"callbacks": [handler]})`,
    eventGroups: [
      {
        rows: [
          { event: "agent.chain.started", causality: "chain_start", firedWhen: "A chain begins; includes inputs and input_keys." },
          { event: "agent.chain.completed", causality: "chain_end", firedWhen: "A chain finishes successfully; includes outputs." },
          { event: "agent.chain.errored", causality: "chain_error", firedWhen: "A chain raises an exception." },
          { event: "agent.model.started", causality: "llm_start", firedWhen: "An LLM call begins; includes serialized model info and prompts." },
          { event: "agent.model.completed", causality: "llm_end", firedWhen: "An LLM call finishes; includes the full response." },
          { event: "agent.model.errored", causality: "llm_error", firedWhen: "An LLM call raises an exception." },
          { event: "agent.tool.started", causality: "tool_start", firedWhen: "A tool begins execution; includes the raw input string." },
          { event: "agent.tool.completed", causality: "tool_end", firedWhen: "A tool finishes; includes output." },
          { event: "agent.tool.errored", causality: "tool_error", firedWhen: "A tool raises an exception." },
        ],
      },
    ],
    notes: [
      "Every event carries a span_id, a parent_run_id for causality linking, and an agent_metadata block with framework metadata.",
    ],
  },
  {
    id: "langgraph",
    name: "LangGraph",
    description: "Extends the LangChain handler pattern with graph-native event families. Inspects the serialized payload to emit graph, node, and subgraph events accurately.",
    setup: `import blocklog

client = blocklog.init(api_key="blk_...")
handler = client.instrument_langgraph()`,
    usage: `result = graph.invoke(state, config={"callbacks": [handler]})

# Or via RunnableConfig
from langchain_core.runnables import RunnableConfig
result = graph.invoke(state, config=RunnableConfig(callbacks=[handler]))`,
    eventGroups: [
      {
        label: "Graph lifecycle",
        rows: [
          { event: "agent.graph.started", causality: "graph_start", firedWhen: "The top-level CompiledGraph begins; includes graph_name, inputs, and input_keys." },
          { event: "agent.graph.completed", causality: "graph_end", firedWhen: "The graph finishes successfully; includes outputs." },
          { event: "agent.graph.errored", causality: "graph_error", firedWhen: "The graph raises an unhandled exception." },
        ],
      },
      {
        label: "Node lifecycle",
        rows: [
          { event: "agent.graph.node.started", causality: "node_start", firedWhen: "A node begins; includes node_name and inputs." },
          { event: "agent.graph.node.completed", causality: "node_end", firedWhen: "A node finishes; includes node_name and outputs." },
          { event: "agent.graph.node.errored", causality: "node_error", firedWhen: "A node raises an exception; includes node_name and error details." },
        ],
      },
      {
        label: "Subgraph lifecycle",
        rows: [
          { event: "agent.graph.subgraph.started", causality: "subgraph_start", firedWhen: "A nested subgraph begins; includes subgraph_name and inputs." },
          { event: "agent.graph.subgraph.completed", causality: "subgraph_end", firedWhen: "A nested subgraph finishes; includes outputs." },
        ],
      },
      {
        label: "Checkpoint lifecycle",
        rows: [
          { event: "agent.graph.checkpoint.started", causality: "checkpoint_start", firedWhen: "LangGraph is about to write a checkpoint; includes thread_id and checkpoint_ns." },
          { event: "agent.graph.checkpoint.completed", causality: "checkpoint_end", firedWhen: "A checkpoint is persisted; includes checkpoint_id, thread_id, and checkpoint_ns." },
        ],
      },
    ],
    notes: [
      "All agent.model.* and agent.tool.* events are also emitted for calls made inside nodes.",
      "State dicts are safely serialized before emission.",
    ],
  },
  {
    id: "openai-sdk",
    name: "OpenAI SDK",
    description: "Instruments create methods on OpenAI resource classes directly. Every OpenAI(), AsyncOpenAI(), and AzureOpenAI() instance is instrumented automatically.",
    setup: `import blocklog

client = blocklog.init(api_key="blk_...")
client.instrument_openai_agents()`,
    usage: `import openai
from blocklog.integrations.openai_agents import instrument_openai

blocklog_client = blocklog.init(api_key="blk_...")
openai_client = openai.OpenAI(api_key="...")

instrument_openai(blocklog_client, openai_client=openai_client)`,
    usageLabel: "Instrument a single instance instead",
    eventGroups: [
      {
        rows: [
          { event: "agent.model.started", causality: "llm_start", firedWhen: "A chat.completions.create or responses.create call begins; includes model, messages, and request parameters." },
          { event: "agent.model.completed", causality: "llm_end", firedWhen: "The call finishes; includes the full response, token usage, duration_s, and streamed flag." },
          { event: "agent.model.errored", causality: "llm_error", firedWhen: "The call raises an exception." },
        ],
      },
    ],
    notes: [
      "Streaming is handled transparently — chunks are re-yielded unmodified, and agent.model.completed fires once the stream is fully consumed.",
      "Async create methods are wrapped with an async-native path automatically.",
    ],
  },
  {
    id: "litellm",
    name: "LiteLLM",
    description: "Registers via litellm.callbacks using LiteLLM's CustomLogger base class with no monkey-patching required.",
    setup: `import blocklog

client = blocklog.init(api_key="blk_...")
handler = client.instrument_litellm()`,
    usage: `import litellm

# Replace or append to existing callbacks
litellm.callbacks = [handler]`,
    eventGroups: [
      {
        rows: [
          { event: "agent.model.pre_call", causality: "llm_pre_call", firedWhen: "Before the HTTP request is dispatched; includes model, messages, stream, and call ID." },
          { event: "agent.model.post_call", causality: "llm_post_call", firedWhen: "After the API responds, before the success/failure split." },
          { event: "agent.model.stream_chunk", causality: "llm_stream_chunk", firedWhen: "For each individual chunk on the sync streaming path." },
          { event: "agent.model.completed", causality: "llm_end", firedWhen: "A call finishes successfully (sync or async); includes response, usage, and cost." },
          { event: "agent.model.errored", causality: "llm_error", firedWhen: "A call fails (sync or async); includes error_type and duration_s." },
        ],
      },
    ],
    notes: [
      "span_id is derived from litellm_call_id for consistent tracing across pre-call, post-call, and success/failure hooks.",
    ],
  },
];

const commonBehaviour = [
  "Concurrent run safety — LangChain/LangGraph key state by run_id, LiteLLM by litellm_call_id, and OpenAI by a ContextVar, so parallel executions never clobber each other.",
  "Context inheritance — trace_id, session_id, and agent_id are pulled automatically from active Blocklog context.",
  "Safe serialization — Pydantic v1 (.dict()) and v2 (.model_dump()) models, plain Python types, and arbitrary objects are safely handled.",
  "Error events always fire — on any exception, an errored event is emitted before propagation so audit trails are never incomplete.",
];

export default function PythonSdkDocsPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <header>
        <span className="eyebrow mb-2">SDK Reference</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Python SDK Reference
        </h1>
        <p className="section-subheading max-w-2xl">
          Method signatures, parameter schemas, return types, runnable code examples, and framework integrations for the Blocklog Python client.
        </p>
        <nav className="mt-4 flex flex-wrap gap-2 text-xs">
          <a
            href="#reference"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            Core SDK Methods
          </a>
          <a
            href="#integrations"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            Framework Integrations
          </a>
        </nav>
      </header>

      <div id="reference" className="space-y-8">
        {sections.map((section) => (
          <ApiSection key={section.id} {...section} />
        ))}
      </div>

      <div className="space-y-8 pt-8 border-t border-slate-200">
        <div>
          <span className="eyebrow mb-2">Framework Instrumentation</span>
          <h2 className="text-[1.75rem] font-bold text-slate-900 tracking-tight mb-2" id="integrations" style={{ fontFamily: 'var(--font-display)' }}>
            Framework Integrations
          </h2>
          <p className="text-[14px] leading-relaxed text-slate-600">
            Built-in instrumentation for LangChain, LangGraph, the OpenAI SDK, and LiteLLM. Each integration wires into native hooks and emits structured audit events to the Blocklog ingest API.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
          <h3 className="text-[14px] font-bold text-blue-900 mb-2">Common Behavior Across All Integrations</h3>
          <NoteList notes={commonBehaviour} />
        </div>

        {integrations.map((integration) => (
          <IntegrationSection key={integration.id} {...integration} />
        ))}
      </div>

      <nav className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          href="/docs/api-reference"
        >
          REST API Reference
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          href="/docs/ts-sdk"
        >
          <Code className="w-4 h-4 text-blue-600" />
          TypeScript SDK Reference
        </Link>
      </nav>
    </div>
  );
}