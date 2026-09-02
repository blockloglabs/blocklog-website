import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Shield, Lock, Server, Key, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Compliance — Blocklog AI Infrastructure',
  description: 'Enterprise security architecture, cryptographic integrity, data isolation, and SOC 2 / ISO 27001 posture.',
};

const pillars = [
  {
    icon: <Lock className="w-5 h-5 text-blue-600" />,
    title: 'SHA-256 Hash Chaining',
    description: 'Every AI decision event is hashed with SHA-256 and linked sequentially to the preceding event hash. Altering any event in historical storage invalidates all subsequent hashes.',
  },
  {
    icon: <Shield className="w-5 h-5 text-blue-600" />,
    title: 'Merkle Tree Proofs',
    description: 'Batch event aggregations use cryptographic Merkle trees. Auditors can verify single decision records in sub-seconds without exposing surrounding data.',
  },
  {
    icon: <Server className="w-5 h-5 text-blue-600" />,
    title: 'VPC & Air-Gapped Options',
    description: 'For regulated financial institutions, Blocklog deploys entirely within your AWS, GCP, or Azure VPC account. Zero data leaves your network environment.',
  },
  {
    icon: <Key className="w-5 h-5 text-blue-600" />,
    title: 'Ed25519 Cryptographic Signatures',
    description: 'Evidence exports are cryptographically signed using Ed25519 signatures, providing non-repudiation and independent verification by third-party auditors.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-white min-h-screen">
        <div className="site-container pt-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow mb-3">Enterprise Trust</span>
            <h1
              className="text-[2.5rem] sm:text-[3.25rem] font-bold text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Security &amp; Cryptographic Proofs.
            </h1>
            <p className="text-[1.0625rem] text-slate-600">
              Designed from the ground up for bank-grade auditability, zero-trust data handling, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {pillars.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h2
                  className="text-[1.15rem] font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.title}
                </h2>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-900 text-white text-center">
            <h2
              className="text-[1.5rem] font-bold mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Need a Security Architecture Review or SOC 2 Report?
            </h2>
            <p className="text-[14px] text-slate-400 mb-6">
              Our security team provides complete DPA, architecture whitepapers, and SOC 2 Type II compliance packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14px] rounded-xl transition-all"
              >
                Request Security Docs
              </Link>
              <Link
                href="https://calendly.com/founder-blocklogsecurity/audit-readiness-call-20-min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-[14px] rounded-xl transition-all"
              >
                Schedule CISO Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
