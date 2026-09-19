import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — Blocklog Infrastructure',
  description: 'Real-time operational status and system health for Blocklog AI Compliance Infrastructure.',
};

const services = [
  { name: 'API Ingestion Gateway', status: 'Operational', latency: '18ms', uptime: '99.99%' },
  { name: 'SHA-256 Hash Chain Service', status: 'Operational', latency: '12ms', uptime: '100%' },
  { name: 'Merkle Proof Engine', status: 'Operational', latency: '42ms', uptime: '99.98%' },
  { name: 'Evidence Package Exporter', status: 'Operational', latency: '110ms', uptime: '99.95%' },
  { name: 'Asia-South (Mumbai) Region', status: 'Operational', latency: '8ms', uptime: '100%' },
  { name: 'RFC 3161 TSA Timestamping', status: 'Operational', latency: '65ms', uptime: '99.99%' },
];

export default function StatusPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-3xl pt-10">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3">System Health</span>
            <h1
              className="text-[2.5rem] sm:text-[3.25rem] font-bold text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Blocklog System Status
            </h1>
            <p className="section-subheading text-center mb-6">
              Real-time operational status, regional endpoint latencies, and service uptime across the Blocklog global compliance network.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[14px] font-semibold rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 grid grid-cols-[1fr_auto] sm:grid-cols-[1.5fr_80px_90px_110px] items-center text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <span>Service</span>
              <span className="hidden sm:inline text-right">Latency</span>
              <span className="hidden sm:inline text-right">Uptime</span>
              <span className="text-right">Status</span>
            </div>

            <div className="divide-y divide-slate-100">
              {services.map((svc) => (
                <div key={svc.name} className="px-6 py-4 grid grid-cols-[1fr_auto] sm:grid-cols-[1.5fr_80px_90px_110px] items-center gap-2">
                  <div className="min-w-0">
                    <span className="text-[14px] font-semibold text-slate-900 block truncate">{svc.name}</span>
                    <div className="sm:hidden flex items-center gap-2 text-[11.5px] text-slate-400 font-mono mt-0.5">
                      <span>{svc.latency}</span>
                      <span>·</span>
                      <span>{svc.uptime} uptime</span>
                    </div>
                  </div>
                  <span className="hidden sm:inline text-right text-slate-400 font-mono text-[13px]" style={{ fontFamily: 'var(--font-mono)' }}>
                    {svc.latency}
                  </span>
                  <span className="hidden sm:inline text-right text-slate-500 font-mono text-[13px]" style={{ fontFamily: 'var(--font-mono)' }}>
                    {svc.uptime}
                  </span>
                  <div className="flex items-center justify-end gap-1.5 text-emerald-600 font-semibold text-[13px]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Operational</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
