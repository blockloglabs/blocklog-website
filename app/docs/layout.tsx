'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { BookOpen, Terminal, Code, Server, Radio, FileText, Zap, ShieldAlert, Cpu } from 'lucide-react';

const sidebar = [
  { label: 'Overview', href: '/docs', icon: BookOpen },
  { label: 'Quickstart', href: '/docs/quickstart', icon: Zap },
  { label: 'Core Concepts', href: '/docs/concepts', icon: Cpu },
  { label: 'Python SDK', href: '/docs/python-sdk', icon: Terminal },
  { label: 'TypeScript SDK', href: '/docs/ts-sdk', icon: Code },
  { label: 'REST API Reference', href: '/docs/api-reference', icon: FileText },
  { label: 'Incident Reconstruction', href: '/docs/incident-reconstruction', icon: ShieldAlert },
  { label: 'VPC Deployment', href: '/docs/vpc-deployment', icon: Server },
  { label: 'OpenTelemetry Integration', href: '/docs/otel', icon: Radio },
];

const externalLinks = [
  { label: 'PyPI Package ↗', href: 'https://pypi.org/project/blocklog', external: true },
  { label: 'npm Package ↗', href: 'https://www.npmjs.com/package/@blocklog/sdk', external: true },
  { label: 'GitHub Repository ↗', href: 'https://github.com/blockloglabs', external: true },
  { label: 'Compliance Support', href: '/contact', external: false },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20">
        <div className="site-container py-8">
          {/* Mobile Doc Nav Strip */}
          <div className="md:hidden mb-6 pb-4 border-b border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Documentation Topics
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {sidebar.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 xl:gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block sticky top-24 h-[calc(100vh-120px)] overflow-y-auto pr-4 border-r border-slate-200">
              <div className="mb-6">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                  Documentation
                </h2>
                <nav className="flex flex-col gap-1">
                  {sidebar.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2.5 px-3 py-2 text-[13.5px] rounded-lg transition-all ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs'
                            : 'font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                  Resources
                </h2>
                <nav className="flex flex-col gap-1">
                  {externalLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="px-3 py-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors block"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className="min-w-0 py-2">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}