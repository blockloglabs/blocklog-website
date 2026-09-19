"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { ArrowRight, AlertTriangle, Terminal } from "lucide-react";

type Field = {
  name: string;
  type: string;
  description: string;
};

type ListItem = {
  name: string;
  description: string;
};

type ApiSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  signature: string;
  paramsLabel?: string;
  params?: Field[];
  warning?: string;
  list?: { label: string; items: ListItem[] };
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

function ApiSection({ id, eyebrow, title, description, signature, paramsLabel = "Parameters", params, warning, list, notes, example }: ApiSectionProps) {
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
        <CodeTerminal title="signature.ts" language="typescript" code={signature} />
      </div>

      {params && params.length > 0 && (
        <div className="mt-5">
          <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-3">{paramsLabel}</h3>
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

      {list && list.items.length > 0 && (
        <div className="mt-5">
          <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">{list.label}</h3>
          <ul className="space-y-2.5 text-[13.5px] leading-relaxed">
            {list.items.map((item) => (
              <li key={item.name} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                <code className="text-slate-900 font-semibold font-mono text-[13px]">{item.name}</code>
                <p className="mt-1 text-slate-600 text-[13px]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5">
        <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">Example</h3>
        <CodeTerminal title="example.ts" language="typescript" code={example} />
      </div>

      {notes && notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
}

const sections: ApiSectionProps[] = [
  {
    id: "constructor",
    eyebrow: "Constructor",
    title: "new BlocklogClient()",
    description: "The main entry point and orchestration layer. Coordinates configuration, tracing, the event pipeline, queues, and transport.",
    signature: `new BlocklogClient(
  config: BlocklogConfig,
  dependencies?: ClientDependencies
)`,
    params: [
      { name: "config", type: "BlocklogConfig", description: "Configuration object. See BlocklogConfig below." },
      { name: "dependencies", type: "ClientDependencies, optional", description: "Dependency injection overrides for testing." },
    ],
    list: {
      label: "Key Client Properties",
      items: [
        { name: "decisions: DecisionsClient", description: "Create, get, list, search, update, and verify decision records." },
        { name: "traces: TracesClient", description: "Retrieve traces and trace timelines." },
        { name: "approvals: ApprovalClient", description: "Human-in-the-loop approval workflows. Aliased as client.hitl." },
        { name: "incidents: IncidentsClient", description: "Create, update, assign, resolve, and close incidents." },
        { name: "compliance: ComplianceClient", description: "Generate audits, dashboards, and exportable evidence." },
        { name: "replay: ReplayClient", description: "Reconstruct, verify, replay, and compare traces. Aliased as client.forensics." },
        { name: "traceManager: typeof TraceManager", description: "Static span-management class." },
      ],
    },
    example: `const client = new BlocklogClient({
  apiKey: 'your-api-key',
  endpoint: 'https://api.blocklogsecurity.com',
  batchSize: 100,
  flushInterval: 5000
});`,
  },
  {
    id: "configuration",
    eyebrow: "Type",
    title: "BlocklogConfig",
    description: "The configuration object passed to the BlocklogClient constructor.",
    signature: `interface BlocklogConfig {
  apiKey: string;
  endpoint?: string;
  batchSize?: number;
  flushInterval?: number;
  timeout?: number;
  retryCount?: number;
  enableSigning?: boolean;
  signingKey?: string;
  signingAlg?: 'hmac-sha256' | 'ed25519';
  enableCompression?: boolean;
  debug?: boolean;
}`,
    paramsLabel: "Fields",
    params: [
      { name: "apiKey", type: "string", description: "Required. Your Blocklog API key." },
      { name: "endpoint", type: "string, optional", description: "Override the default API base URL." },
      { name: "batchSize", type: "number, optional", description: "Events per batch flush. Default is 100." },
      { name: "flushInterval", type: "number, optional", description: "Milliseconds between automatic flushes." },
      { name: "timeout", type: "number, optional", description: "Per-request timeout in milliseconds." },
      { name: "retryCount", type: "number, optional", description: "Automatic retry attempts on failure." },
      { name: "enableSigning", type: "boolean, optional", description: "Turn on tamper-evident event signing." },
      { name: "signingKey", type: "string, optional", description: "Key used for signing when enableSigning is true." },
      { name: "signingAlg", type: "'hmac-sha256' | 'ed25519', optional", description: "Signing algorithm. Defaults to hmac-sha256." },
      { name: "enableCompression", type: "boolean, optional", description: "Compress event payloads before sending." },
      { name: "debug", type: "boolean, optional", description: "Log outbound requests to console in development." },
    ],
    example: `const client = new BlocklogClient({
  apiKey: process.env.BLOCKLOG_API_KEY!,
  enableSigning: true,
  signingAlg: 'hmac-sha256',
  debug: process.env.NODE_ENV !== 'production'
});`,
  },
  {
    id: "event-methods",
    eyebrow: "Event Methods",
    title: "client.event() / client.enqueue()",
    description: "Send a single event immediately with event(), or buffer it for batched delivery with enqueue().",
    signature: `event(eventType: string, payload: any, options?: EventOptions): Promise<IngestResponse>
enqueue(eventType: string, payload: any, options?: EventOptions): Promise<IngestResponse | null>`,
    params: [
      { name: "eventType", type: "string", description: "Event type identifier, e.g. \"AGENT_RUN\" or \"TOOL_CALL\"." },
      { name: "payload", type: "any", description: "Event payload data. Must be serializable." },
      { name: "options", type: "EventOptions, optional", description: "metadata, trace_id, span_id, and timestamp overrides." },
    ],
    example: `await client.event('AGENT_RUN', {
  agent_id: 'credit-scoring-v2',
  input: { applicant_id: 'app_8819', score: 742 },
  output: { approved: true, limit: 500000 }
});`,
  },
  {
    id: "add-hook",
    eyebrow: "Middleware Method",
    title: "client.addHook()",
    description: "Register a middleware hook that can transform, enrich, validate, or filter outbound events.",
    signature: `addHook(hook: MiddlewareHook): BlocklogClient

type MiddlewareHook = (event: EventEnvelope) => EventEnvelope | Promise<EventEnvelope> | null`,
    params: [
      { name: "hook", type: "MiddlewareHook", description: "Receives an EventEnvelope and returns modified envelope, or null to drop." },
    ],
    example: `client.addHook((event) => {
  event.metadata = { ...event.metadata, environment: 'production' };
  return event;
});`,
  },
  {
    id: "lifecycle-methods",
    eyebrow: "Lifecycle",
    title: "client.flush() / shutdown() / health()",
    description: "Manage the client's buffered events and background resources.",
    signature: `flush(): Promise<IngestResponse>
shutdown(): Promise<void>
health(): Promise<HealthStatus>`,
    list: {
      label: "Lifecycle Methods",
      items: [
        { name: "flush()", description: "Flushes the pipeline, buffer, and queues immediately." },
        { name: "shutdown()", description: "Flushes all buffers, persists the queue, and cleanly stops background timers." },
        { name: "health()", description: "Returns { healthy, queueDepth, pendingEvents, transportReady }." },
      ],
    },
    example: `await client.flush();

const health = await client.health();
console.log(health.healthy); // true`,
  },
  {
    id: "trace-agent",
    eyebrow: "Decorator",
    title: "@traceAgent",
    description: "Trace an AI agent method automatically, emitting AGENT_START, AGENT_COMPLETE, and AGENT_ERROR events.",
    signature: `function traceAgent(options: AgentOptions | string)`,
    params: [
      { name: "options", type: "AgentOptions | string", description: "Agent name string, or an options object: { name, version, tags, metadata }." },
    ],
    example: `class CreditAgent {
  @traceAgent('credit-decisioning')
  async evaluateRisk(applicantId: string): Promise<DecisionResult> {
    return { status: 'APPROVED' };
  }
}`,
  },
  {
    id: "trace-manager",
    eyebrow: "Tracing",
    title: "TraceManager",
    description: "Static class managing span lifecycle and context propagation across async operations via AsyncLocalStorage.",
    signature: `class TraceManager {
  static startSpan(name: string, options?: SpanOptions): Span
  static endSpan(span: Span | string, status?: string): void
  static currentSpan(): Span | undefined
  static parentSpan(): Span | undefined
  static runWithSpan<T>(span: Span, fn: () => Promise<T>): Promise<T>
}`,
    example: `const span = TraceManager.startSpan('evaluate-loan');
const result = await TraceManager.runWithSpan(span, async () => {
  return await processLoan();
});
TraceManager.endSpan(span, 'success');`,
  },
];

type HookRow = {
  method: string;
  description: string;
};

type IntegrationProps = {
  id: string;
  name: string;
  description: string;
  setup: string;
  usage: string;
  usageLabel?: string;
  hooks: HookRow[];
  notes?: string[];
};

function HookTable({ rows }: { rows: HookRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">Method</th>
            <th className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.method} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 py-2.5 align-top"><code className="text-blue-700 font-mono text-[12.5px] font-semibold">{r.method}</code></td>
              <td className="px-4 py-2.5 align-top text-[13px] leading-relaxed text-slate-600">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IntegrationSection({ id, name, description, setup, usage, usageLabel, hooks, notes }: IntegrationProps) {
  return (
    <section id={id} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
        Integration
      </span>
      <h3 className="text-[1.25rem] font-bold tracking-tight text-slate-900">{name}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{description}</p>

      <div className="mt-5">
        <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">Setup</h4>
        <CodeTerminal title="setup.ts" language="typescript" code={setup} />
      </div>

      <div className="mt-5">
        <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">{usageLabel ?? "Automatic Tracing"}</h4>
        <CodeTerminal title="usage.ts" language="typescript" code={usage} />
      </div>

      <div className="mt-6">
        <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-2">Manual Tracing Hooks</h4>
        <HookTable rows={hooks} />
      </div>

      {notes && notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
}

const integrations: IntegrationProps[] = [
  {
    id: "langchain",
    name: "LangChain",
    description: "Wraps LangChain's callback system to trace chains, tools, LLM calls, and agents automatically.",
    setup: `import { BlocklogClient, setGlobalClient, instrumentLangChain } from '@blocklog/sdk';

const client = new BlocklogClient({ apiKey: 'your-api-key' });
setGlobalClient(client);

const tracer = instrumentLangChain();`,
    usage: `import { AgentExecutor, createOpenAIFunctionsAgent } from 'langchain/agents';

const agent = await createOpenAIFunctionsAgent(llm, tools, prompt);
const executor = new AgentExecutor({ agent, tools, verbose: true });

// Execution is automatically traced
const result = await executor.invoke({ input: 'Evaluate credit eligibility' });`,
    hooks: [
      { method: "handleChainStart(chain, inputs, runId)", description: "Mark a chain's start. chain is { name, metadata? }." },
      { method: "handleChainEnd(outputs, runId)", description: "Mark a chain's successful completion." },
      { method: "handleToolStart(tool, input, runId)", description: "Mark a tool call's start." },
      { method: "handleToolEnd(output, runId)", description: "Mark a tool call's completion." },
      { method: "handleLLMStart(llm, prompts, runId)", description: "Mark an LLM call's start." },
      { method: "handleLLMEnd(output, runId)", description: "Mark an LLM call's completion." },
    ],
  },
  {
    id: "openai-agents",
    name: "OpenAI Agents",
    description: "Traces OpenAI chat completion calls, tool/function calls, and messages exchanged during an agent run.",
    setup: `import { BlocklogClient, setGlobalClient, instrumentOpenAIAgents } from '@blocklog/sdk';

const client = new BlocklogClient({ apiKey: 'your-api-key' });
setGlobalClient(client);

const hooks = instrumentOpenAIAgents();`,
    usage: `import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: 'your-openai-key' });

// Chat completions, tool calls, and messages are automatically traced
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Process application' }]
});`,
    hooks: [
      { method: "onAgentRunStart(agentId, input)", description: "Mark the start of an agent run." },
      { method: "onAgentRunEnd(agentId, output)", description: "Mark an agent run's successful completion." },
      { method: "onAgentRunError(agentId, error)", description: "Mark an agent run's failure." },
      { method: "onToolCall(toolName, args)", description: "Record a tool call's name and arguments." },
      { method: "onMessage(role, content)", description: "Record a message exchanged during the run." },
    ],
  },
];

export default function TypeScriptSdkDocsPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <header>
        <span className="eyebrow mb-2">SDK Reference</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          TypeScript / Node.js SDK Reference
        </h1>
        <p className="section-subheading max-w-2xl">
          Constructor, configuration, event streaming, decorators, tracing, and framework integrations for TypeScript and Node.js.
        </p>
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
            Native instrumentation for LangChain and OpenAI Agents. Wires into callback systems to trace chains, tools, and LLM calls automatically.
          </p>
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
          href="/docs/python-sdk"
        >
          <Terminal className="w-4 h-4 text-blue-600" />
          Python SDK Reference
        </Link>
      </nav>
    </div>
  );
}