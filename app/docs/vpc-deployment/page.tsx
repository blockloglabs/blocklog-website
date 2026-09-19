"use client";

import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import {
  ShieldCheck,
  Server,
  Database,
  Cpu,
  Lock,
  ArrowRight,
  HardDrive,
  FileCheck2,
  CheckCircle2,
  HelpCircle,
  RefreshCw,
  KeyRound,
} from "lucide-react";

// Code snippets
const cloneBackendCmd = `# You will receive the Docker image via email after license activation.
# Load the image, then set up your environment:
docker load -i blocklog-backend.tar
cp .env.example .env`;

const backendEnvConfig = `# License (provided via email — 30-day free trial, then paid)
BLOCKLOG_LICENSE_KEY=bl_live_your_key_here

# Security — generate long random strings for each
JWT_SECRET_KEY=generate_a_long_random_string
API_KEY_SALT=generate_another_random_string

# Database
DATABASE_URL=postgresql://user:password@db_host:5432/blocklog

# Redis
REDIS_URL=redis://redis_host:6379/0

# CORS — add your dashboard domain here
CORS_ORIGINS=http://localhost:3000,https://your-dashboard-domain.com`;

const startBackendCmd = `# Run database migrations
make migrate

# Start the full stack
make prod-up`;

const dashboardEnvConfig = `# Load the dashboard image received via email:
docker load -i blocklog-dashboard.tar

# Configure backend URL
NEXT_PUBLIC_BLOCKLOG_API_BASE_URL=https://your-backend-url/api/v1`;

const startDashboardCmd = `docker-compose up -d
# Dashboard available at http://localhost:3000`;

const verifyDeployCmd = `# Check service health
docker compose ps
docker compose logs -f api

# Test the API
curl http://localhost:8000/health

# Open the dashboard
open http://localhost:3000`;

const updateCmd = `# Backend
docker load -i blocklog-backend-vX.Y.Z.tar
docker compose up -d

# Dashboard
docker load -i blocklog-dashboard-vX.Y.Z.tar
docker-compose up -d`;

const awsSecretCmd = `aws secretsmanager create-secret \\
  --name blocklog/jwt-secret \\
  --secret-string "your_jwt_secret"`;

const troubleshootCmds = {
  wontStart: `docker compose logs api
# Check for missing env variables or DB connection errors`,
  migrationFail: `docker compose logs db
make migrate`,
  licenseValidation: `# Ensure outbound access to licenses.blocklog.dev is not blocked
docker compose logs api | grep license`,
  corsError: `# Add your dashboard URL to CORS_ORIGINS in backend .env, then restart
docker compose restart api`,
  charts: `# Add to docker-compose.yml under the dashboard service:
mem_limit: 512m`,
};

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
        <h3
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div>{children}</div>
    </article>
  );
}

function InfoBox({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-4">
      <p
        className="mb-1 text-[11px] font-bold uppercase tracking-wider text-blue-700"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </p>
      <div className="text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

export default function SelfHostingDocsPage() {
  return (
    <div className="max-w-4xl space-y-12">
      {/* ── Page Header ── */}
      <header>
        <span className="eyebrow mb-2">Self-Hosting & Enterprise</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Run Blocklog in Your Private VPC
        </h1>
        <p className="section-subheading max-w-2xl">
          Deploy the backend and compliance dashboard inside your isolated cloud perimeter (AWS, GCP, Azure, or bare metal). Your audit logs never leave your infrastructure.
        </p>
      </header>

      {/* ── Data Guarantee ── */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          <h2
            className="text-sm font-bold uppercase tracking-wider text-emerald-900"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Zero Data Exfiltration Guarantee
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          When self-hosted, all agent logs, decision traces, payloads, and cryptographic state stay entirely within your private subnet. Blocklog only validates your license key against{" "}
          <code className="text-xs bg-emerald-100/70 text-emerald-900 px-1.5 py-0.5 rounded font-mono">licenses.blocklog.dev</code> — zero customer log payload is ever transmitted externally.
        </p>
      </div>

      {/* ── License & Onboarding ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck2 className="h-4 w-4 text-blue-600" />
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Licensing & Image Delivery
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          After completing onboarding, you will receive an enterprise delivery email containing:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              title: "blocklog-backend.tar",
              desc: "Core FastAPI, Celery workers, and cryptographic engine",
            },
            {
              title: "blocklog-dashboard.tar",
              desc: "Next.js engineering dashboard & audit portal",
            },
            {
              title: "BLOCKLOG_LICENSE_KEY",
              desc: "30-day evaluation trial key, upgradeable to enterprise",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <code className="text-xs font-bold text-blue-700 font-mono">{item.title}</code>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Prerequisites ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-blue-600" />
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Prerequisites & Infrastructure Requirements
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: <Cpu className="h-4 w-4 text-blue-600" />,
              label: "Container Runtime",
              value: "Docker 24+ & Docker Compose v2 (single-node) or Kubernetes 1.26+",
            },
            {
              icon: <Database className="h-4 w-4 text-emerald-600" />,
              label: "Relational Database",
              value: "PostgreSQL 14+ (Amazon RDS, Cloud SQL, Azure Database, or native)",
            },
            {
              icon: <HardDrive className="h-4 w-4 text-amber-600" />,
              label: "In-Memory Broker",
              value: "Redis 6.2+ (Amazon ElastiCache, MemoryStore, or standalone)",
            },
            {
              icon: <Lock className="h-4 w-4 text-purple-600" />,
              label: "Secrets / KMS",
              value: "AWS KMS / Secrets Manager, GCP Secret Manager, or HashiCorp Vault",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-1.5"
            >
              <div className="flex items-center gap-2">
                {icon}
                <span
                  className="text-[11px] font-bold uppercase tracking-wider text-slate-500"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {label}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5-Step Deployment ── */}
      <section className="space-y-6">
        <div>
          <span className="eyebrow mb-1">Step-by-Step Guide</span>
          <h2
            className="text-xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Deploying via Docker Compose
          </h2>
        </div>

        <StepCard
          step="Step 01"
          title="Load the Backend Docker Image"
          description="Load the secure Docker artifact from your delivery bundle, then generate your environment file."
        >
          <CodeTerminal code={cloneBackendCmd} language="bash" title="terminal" />
        </StepCard>

        <StepCard
          step="Step 02"
          title="Configure Backend Environment Variables"
          description="Populate your .env file with your database URI, Redis credentials, license key, and signing salts."
        >
          <CodeTerminal code={backendEnvConfig} language="bash" title=".env" />
          <div className="mt-4">
            <InfoBox label="Production Security Recommendation">
              Never store cryptographic salts or signing secrets in plain text in production. Use AWS Secrets Manager, HashiCorp Vault, or your cloud provider&apos;s key management service.
            </InfoBox>
          </div>
        </StepCard>

        <StepCard
          step="Step 03"
          title="Initialize Database & Start Backend Services"
          description="Execute database schema migrations and boot the API workers, hash sealer, and TLS reverse proxy."
        >
          <CodeTerminal code={startBackendCmd} language="bash" title="terminal" />
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              { svc: "api", desc: "Core FastAPI engine on port 8000" },
              { svc: "worker", desc: "Celery workers for cryptographic sealing" },
              { svc: "beat", desc: "Periodic batch anchoring scheduler" },
              { svc: "nginx", desc: "Reverse proxy handling TLS & headers" },
            ].map(({ svc, desc }) => (
              <div key={svc} className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs">
                <code className="font-bold text-blue-700 font-mono">{svc}</code>
                <span className="text-slate-600">{desc}</span>
              </div>
            ))}
          </div>
        </StepCard>

        <StepCard
          step="Step 04"
          title="Deploy Compliance Dashboard"
          description="Load the dashboard container and wire it to your backend API endpoint."
        >
          <CodeTerminal code={dashboardEnvConfig} language="bash" title=".env.dashboard" />
          <div className="mt-4">
            <CodeTerminal code={startDashboardCmd} language="bash" title="terminal" />
          </div>
        </StepCard>

        <StepCard
          step="Step 05"
          title="Verify Services Health"
          description="Confirm container health status, query the readiness probe, and access the compliance web UI."
        >
          <CodeTerminal code={verifyDeployCmd} language="bash" title="terminal" />
        </StepCard>
      </section>

      {/* ── Secrets Management ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4 text-blue-600" />
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Production Secrets Management
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          For production deployments, store cryptographic signing keys and database connection strings in AWS Secrets Manager, HashiCorp Vault, or Google Cloud Secret Manager rather than unencrypted environment files.
        </p>
        <CodeTerminal code={awsSecretCmd} language="bash" title="aws-secretsmanager.sh" />
      </section>

      {/* ── Upgrades ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4 text-blue-600" />
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Upgrading to a New Release
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          When receiving updated release bundles, load the new container images and perform zero-downtime rolling service restarts:
        </p>
        <CodeTerminal code={updateCmd} language="bash" title="upgrade.sh" />
      </section>

      {/* ── Architecture & Data Access ── */}
      <section className="space-y-4">
        <h2
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Data Isolation Matrix
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-600" style={{ fontFamily: "var(--font-mono)" }}>
                <th className="px-5 py-3">Telemetry / Data Asset</th>
                <th className="px-5 py-3">Blocklog Cloud (External)</th>
                <th className="px-5 py-3">Your Private VPC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "Agent Execution Logs & Inputs", cloud: "✗ Never transmitted", vpc: "✓ Persisted locally" },
                { name: "Decisions & Tool Arguments", cloud: "✗ Never transmitted", vpc: "✓ Persisted locally" },
                { name: "Cryptographic Merkle Roots", cloud: "✗ Never transmitted", vpc: "✓ Generated locally" },
                { name: "Instance Version & Uptime", cloud: "✓ Telemetry only", vpc: "✓ Stored locally" },
                { name: "License Validation State", cloud: "✓ Ping status only", vpc: "✓ Cached locally" },
              ].map((row) => (
                <tr key={row.name} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-slate-900">{row.name}</td>
                  <td className="px-5 py-3.5 text-slate-600">{row.cloud}</td>
                  <td className="px-5 py-3.5 font-semibold text-emerald-700">{row.vpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Hardware Recommendations ── */}
      <section className="space-y-4">
        <h2
          className="text-lg font-bold text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Sizing & Hardware Recommendations
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              tier: "Evaluation / Staging",
              specs: ["2 vCPU", "4 GB RAM", "50 GB NVMe SSD", "Single-instance SQLite / Postgres"],
            },
            {
              tier: "Production Standard",
              specs: ["4 vCPU", "8 GB RAM", "100+ GB SSD", "Managed PostgreSQL (RDS / Cloud SQL)"],
            },
            {
              tier: "High-Volume Enterprise",
              specs: ["8+ vCPU", "16+ GB RAM", "Multi-AZ Postgres", "Dedicated Redis cluster"],
            },
          ].map(({ tier, specs }) => (
            <div key={tier} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span
                className="text-[11px] font-bold uppercase tracking-wider text-blue-700"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tier}
              </span>
              <ul className="mt-3 space-y-2">
                {specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Troubleshooting ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-amber-600" />
          <h2
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Troubleshooting Common Issues
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Services won&apos;t start</h3>
            <p className="text-xs text-slate-600">Check for missing environment variables or database connection errors.</p>
            <CodeTerminal code={troubleshootCmds.wontStart} language="bash" title="troubleshoot" />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900">License validation timeout</h3>
            <p className="text-xs text-slate-600">Ensure outbound HTTPS access to <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800">licenses.blocklog.dev</code> is permitted through your VPC security group.</p>
            <CodeTerminal code={troubleshootCmds.licenseValidation} language="bash" title="troubleshoot" />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Dashboard CORS error</h3>
            <p className="text-xs text-slate-600">Add the dashboard domain to <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800">CORS_ORIGINS</code> in your backend <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800">.env</code>, then restart.</p>
            <CodeTerminal code={troubleshootCmds.corsError} language="bash" title="troubleshoot" />
          </div>
        </div>
      </section>

      {/* ── Navigation Footer ── */}
      <nav className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between items-center">
        <Link
          href="/docs/otel"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
        >
          ← OpenTelemetry Integration
        </Link>
        <Link
          href="/docs/quickstart"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          Quickstart Guide <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
    </div>
  );
}