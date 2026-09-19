import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Terminal, FileText, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation — Blocklog AI Infrastructure',
  description: 'Technical documentation, SDK references, API specs, and compliance integration guides.',
};

const docGroups = [
  {
    title: 'Getting Started',
    items: [
      {
        eyebrow: 'Quickstart',
        title: '5 Minutes to First Log',
        description: 'Install the SDK, configure credentials, and send your first cryptographically anchored audit log.',
        href: '/docs/quickstart',
        icon: <Zap className="w-4 h-4 text-blue-600" />,
      },
      {
        eyebrow: 'Core Concepts',
        title: 'Decisions, Cryptography & Accountability',
        description: 'Understand the cryptographic foundations of tamper-evident logging and why Blocklog exists.',
        href: '/docs/concepts',
        icon: <BookOpen className="w-4 h-4 text-blue-600" />,
      },
    ],
  },
  {
    title: 'SDK & API References',
    items: [
      {
        eyebrow: 'Python SDK',
        title: 'Python SDK Reference',
        description: 'Method signatures, parameter schemas, return types, and runnable examples for the Python client.',
        href: '/docs/python-sdk',
        icon: <Terminal className="w-4 h-4 text-blue-600" />,
      },
      {
        eyebrow: 'TypeScript SDK',
        title: 'TypeScript / Node.js Reference',
        description: 'Full TypeScript typings, async tracing, and integration patterns for Web and Node runtime environments.',
        href: '/docs/ts-sdk',
        icon: <Code className="w-4 h-4 text-blue-600" />,
      },
      {
        eyebrow: 'REST API',
        title: 'REST API Reference',
        description: 'Ingest logs, verify integrity, manage incidents, and trigger human review via HTTPS API.',
        href: '/docs/api-reference',
        icon: <FileText className="w-4 h-4 text-blue-600" />,
      },
    ],
  },
];

export default function DocsIndexPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <span className="eyebrow mb-2">Developer &amp; Compliance Hub</span>
        <h1
          className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Blocklog Documentation
        </h1>
        <p className="section-subheading max-w-2xl">
          Tamper-evident audit logging and AI forensic infrastructure. Start with the quickstart, then explore SDK references, API specs, and compliance workflows.
        </p>
      </div>

      {/* Featured Quickstart Box */}
      <Link href="/docs/quickstart" className="block group mb-10">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 hover:border-blue-300 transition-all shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-white/80 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mb-2">
                Recommended Start
              </span>
              <h2 className="text-[1.15rem] font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                Quickstart — 5 Minutes to First Log
              </h2>
              <p className="text-[13.5px] text-slate-600">
                Set up credentials, install `@blocklog/sdk`, and anchor your first AI decision event.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>

      {/* Groups */}
      <div className="space-y-10">
        {docGroups.map((group) => (
          <div key={group.title}>
            <h2
              className="text-[1.1rem] font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {group.title}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className="group block">
                  <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {item.eyebrow}
                        </span>
                      </div>
                      <h3 className="text-[14.5px] font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-[12.5px] font-semibold text-blue-600 group-hover:gap-1.5 transition-all">
                      Read Docs <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}