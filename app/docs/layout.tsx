'use client';

import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import Link from 'next/link';

const sidebar = [
  { label: 'Overview', href: '/docs' },
  { label: 'Quickstart', href: '/docs/quickstart' },
  { label: 'Core Concepts', href: '/docs/concepts' },
  { label: 'Python SDK', href: '/docs/python-sdk' },
  { label: 'TypeScript SDK', href: '/docs/ts-sdk' },
  { label: 'REST API Reference', href: '/docs/api-reference' },
  { label: 'Incident Reconstruction', href: '/docs/incident-reconstruction' },
  { label: 'VPC Deployment', href: '/docs/vpc-deployment' },
  { label: 'OpenTelemetry Integration', href: '/docs/otel' },
];

const externalLinks = [
  { label: 'PyPI Package ↗', href: 'https://pypi.org/project/blocklog', external: true },
  { label: 'npm Package ↗', href: 'https://www.npmjs.com/package/@blocklog/sdk', external: true },
  { label: 'GitHub Repository ↗', href: 'https://github.com/blockloglabs', external: true },
  { label: 'Compliance Support', href: '/contact', external: false },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20">
        <div className="site-container py-8">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden md:block sticky top-24 h-[calc(100vh-120px)] overflow-y-auto pr-4 border-r border-slate-200">
              <div className="mb-6">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Documentation
                </h2>
                <nav className="flex flex-col gap-1">
                  {sidebar.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Resources
                </h2>
                <nav className="flex flex-col gap-1">
                  {externalLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="px-3 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0 py-4">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}