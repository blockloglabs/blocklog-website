"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { Activity, ArrowRight, Gauge, Layers, Radio, HelpCircle, CheckCircle2 } from "lucide-react";

// Code samples
const envConfig = `OTEL_ENABLED=true
OTEL_EXPORTER_OTLP_ENDPOINT=http://your-collector:4317`;

const envFull = `# Endpoint — where your collector is listening
OTEL_EXPORTER_OTLP_ENDPOINT=http://your-collector:4317

# Protocol — "grpc" (default) or "http"
OTEL_EXPORTER_PROTOCOL=grpc

# Auth header, if your collector requires it
OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer <token>

# Sampling — fraction of traces to record (0.0–1.0, default 1.0)
OTEL_TRACES_SAMPLE_RATE=0.2

# How often metrics are pushed, in milliseconds (default 60000)
OTEL_METRICS_EXPORT_INTERVAL_MS=60000`;

const dockerCompose = `services:
  blocklog:
    image: blocklog/blocklog:latest
    environment:
      OTEL_ENABLED: "true"
      OTEL_EXPORTER_OTLP_ENDPOINT: "http://otel-collector:4317"
      OTEL_SERVICE_NAME: "blocklog"`;

const grafanaAgentConfig = `# grafana-agent.yaml (River syntax)
otelcol.receiver.otlp "default" {
  grpc { endpoint = "0.0.0.0:4317" }
  http { endpoint = "0.0.0.0:4318" }

  output {
    traces  = [otelcol.exporter.otlp.tempo.input]
    metrics = [otelcol.exporter.prometheus.default.input]
    logs    = [otelcol.exporter.loki.default.input]
  }
}`;

const collectorYaml = `# otel-collector-config.yaml
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317
      http:
        endpoint: 0.0.0.0:4318

exporters:
  # Replace with your backend — Jaeger, Datadog, Honeycomb, etc.
  otlp/jaeger:
    endpoint: jaeger:4317
    tls:
      insecure: true

service:
  pipelines:
    traces:
      receivers: [otlp]
      exporters: [otlp/jaeger]
    metrics:
      receivers: [otlp]
      exporters: [otlp/jaeger]
    logs:
      receivers: [otlp]
      exporters: [otlp/jaeger]`;

function StepCard({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <div>
        <span
          className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {step}
        </span>
        <h2
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div>{children}</div>
    </article>
  );
}

const signals = [
  {
    icon: <Activity className="h-4 w-4 text-indigo-600" />,
    label: "Traces",
    badge: "text-indigo-700 bg-indigo-50 border-indigo-200",
    description: "Every API request, database transaction, cryptographic hash verification, and background worker job — linked into end-to-end distributed traces.",
  },
  {
    icon: <Gauge className="h-4 w-4 text-emerald-600" />,
    label: "Metrics",
    badge: "text-emerald-700 bg-emerald-50 border-emerald-200",
    description: "Ingestion throughput, verification latencies, proof validation rates, and Celery queue depths — exported periodically via OTLP metrics.",
  },
  {
    icon: <Layers className="h-4 w-4 text-amber-600" />,
    label: "Logs",
    badge: "text-amber-700 bg-amber-50 border-amber-200",
    description: "Structured JSON logs with trace_id and span_id automatically injected, connecting raw server diagnostics to high-level agent decisions.",
  },
];

const signalTable = [
  { signal: "Traces", exporter: "OTLPSpanExporter", processor: "BatchSpanProcessor", interval: "On flush / 5 s max", color: "text-indigo-700" },
  { signal: "Metrics", exporter: "OTLPMetricExporter", processor: "PeriodicExportingMetricReader", interval: "60 s (configurable)", color: "text-emerald-700" },
  { signal: "Logs", exporter: "OTLPLogExporter", processor: "BatchLogRecordProcessor", interval: "On flush / 5 s max", color: "text-amber-700" },
];

export default function OtelDocsPage() {
  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <header>
        <span className="eyebrow mb-2">Observability</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Export Telemetry via OpenTelemetry
        </h1>
        <p className="section-subheading max-w-2xl">
          Stream traces, metrics, and application logs directly to Datadog, Grafana Cloud, Honeycomb, New Relic, or internal OTel collectors with zero code modifications.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {signals.map((s) => (
            <span
              key={s.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${s.badge}`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {s.icon}
              {s.label}
            </span>
          ))}
        </div>
      </header>

      {/* What ships */}
      <section className="space-y-4">
        <h2
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Supported Telemetry Signals
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {signals.map(({ label, icon, badge, description }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${badge}`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {icon}
                {label}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 1 – Enable */}
      <StepCard
        step="Step 01"
        title="Enable OTel with Environment Variables"
        description="Set these two variables in your deployment environment or .env file. All other exporter options have production-safe defaults."
      >
        <CodeTerminal code={envConfig} language="bash" title=".env" />
        <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs text-slate-700 leading-relaxed">
          <strong>Network note:</strong> Ensure the collector endpoint is reachable from the Blocklog container. Use an internal DNS name or host IP rather than <code className="font-mono bg-blue-100/70 px-1 py-0.5 rounded">localhost</code> when running in Docker.
        </div>
      </StepCard>

      {/* Step 2 – Docker Compose */}
      <StepCard
        step="Step 02"
        title="Inject Variables into Compose / ECS"
        description="Pass the collector target and service name to your Blocklog container definition."
      >
        <CodeTerminal code={dockerCompose} language="yaml" title="docker-compose.yml" />
      </StepCard>

      {/* Step 3 – Collector config */}
      <StepCard
        step="Step 03"
        title="Configure the OTel Collector Pipeline"
        description="Blocklog transmits data using standard OTLP over gRPC (port 4317) or HTTP (port 4318). Below is a production collector pipeline routing to Jaeger and Prometheus."
      >
        <CodeTerminal code={collectorYaml} language="yaml" title="otel-collector-config.yaml" />
      </StepCard>

      {/* Grafana Agent */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <Radio className="h-4 w-4 text-blue-600" />
          <h2
            className="text-base font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Alternative: Grafana Agent (Alloy / River Syntax)
          </h2>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          If your observability stack uses Grafana Cloud or self-hosted Tempo and Loki, configure Grafana Agent to receive OTLP signals natively:
        </p>
        <CodeTerminal code={grafanaAgentConfig} language="text" title="grafana-agent.alloy" />
      </section>

      {/* Full variable reference */}
      <section className="space-y-4">
        <h2
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Environment Configuration Reference
        </h2>
        <CodeTerminal code={envFull} language="bash" title=".env.complete" />
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-600" style={{ fontFamily: "var(--font-mono)" }}>
                <th className="px-5 py-3">Variable</th>
                <th className="px-5 py-3">Default</th>
                <th className="px-5 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { key: "OTEL_ENABLED", default: "false", desc: "Enables trace, metric, and log export pipelines." },
                { key: "OTEL_EXPORTER_OTLP_ENDPOINT", default: "http://localhost:4317", desc: "Collector destination URL (gRPC: 4317, HTTP: 4318)." },
                { key: "OTEL_SERVICE_NAME", default: "blocklog", desc: "Service name tag emitted with all telemetry records." },
                { key: "OTEL_EXPORTER_PROTOCOL", default: "grpc", desc: "Wire protocol: 'grpc' or 'http'." },
                { key: "OTEL_EXPORTER_OTLP_HEADERS", default: "—", desc: "Optional header string (e.g. 'Authorization=Bearer <token>')." },
                { key: "OTEL_TRACES_SAMPLE_RATE", default: "1.0", desc: "Trace sampling ratio (1.0 = 100%, 0.1 = 10%)." },
                { key: "OTEL_METRICS_EXPORT_INTERVAL_MS", default: "60000", desc: "Metrics push cadence in milliseconds." },
              ].map(({ key, default: def, desc }) => (
                <tr key={key} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-xs font-bold text-blue-700">{key}</td>
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-500">{def}</td>
                  <td className="px-5 py-3.5 text-xs text-slate-600 leading-relaxed">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Signal pipeline reference */}
      <section className="space-y-4">
        <h2
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Signal Pipeline Reference
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-600" style={{ fontFamily: "var(--font-mono)" }}>
                <th className="px-5 py-3">Signal</th>
                <th className="px-5 py-3">Exporter Type</th>
                <th className="px-5 py-3">Batch Processor</th>
                <th className="px-5 py-3">Default Cadence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {signalTable.map(({ signal, exporter, processor, interval, color }) => (
                <tr key={signal} className="hover:bg-slate-50/60 transition-colors">
                  <td className={`px-5 py-3.5 font-bold text-xs ${color}`}>{signal}</td>
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-700">{exporter}</td>
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-700">{processor}</td>
                  <td className="px-5 py-3.5 text-xs text-slate-500">{interval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-amber-600" />
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Troubleshooting Telemetry Streams
          </h2>
        </div>
        <div className="space-y-3">
          {[
            {
              q: "No telemetry records appearing in your backend",
              a: "Confirm OTEL_ENABLED=true is set and check container logs for connection refusal errors. Verify firewall rules allow outbound traffic to the specified collector port.",
            },
            {
              q: "Traces arrive but metrics or logs are absent",
              a: "Ensure your OpenTelemetry Collector configuration explicitly enables separate pipeline receivers for metrics and logs under service.pipelines.",
            },
            {
              q: "High data volume and ingestion costs",
              a: "Adjust OTEL_TRACES_SAMPLE_RATE to 0.1 (10% sampling) or 0.05 (5% sampling). Health check probes and internal pings are excluded from tracing by default.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                {q}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nav */}
      <nav className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between items-center">
        <Link
          href="/docs/vpc-deployment"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
        >
          ← VPC Deployment
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