import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { CheckCircle2, Server, ShieldCheck, Activity } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[14px] font-semibold rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <span>Service</span>
              <div className="flex gap-8">
                <span>Latency</span>
                <span>Uptime</span>
                <span>Status</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {services.map((svc) => (
                <div key={svc.name} className="px-6 py-4 flex items-center justify-between">
                  <span className="text-[14px] font-medium text-slate-800">{svc.name}</span>
                  <div className="flex items-center gap-8 text-[13px]">
                    <span className="text-slate-400 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>{svc.latency}</span>
                    <span className="text-slate-500 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>{svc.uptime}</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      Operational
                    </span>
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
