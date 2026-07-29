import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Shield, ArrowRight, Check, Zap, Server, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started — Blocklog AI Compliance Infrastructure',
  description: 'Start free with 5,000 decision traces per month or request an enterprise VPC deployment.',
};

export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-4xl pt-10">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="eyebrow mb-3">Onboarding</span>
            <h1
              className="text-[2.5rem] sm:text-[3.25rem] font-bold text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get started with Blocklog.
            </h1>
            <p className="text-[1.0625rem] text-slate-600 max-w-xl mx-auto">
              Choose how you want to deploy Blocklog. Start free on SaaS or set up an isolated VPC deployment for your enterprise.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* SaaS / Free Tier */}
            <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                    Instant Access
                  </span>
                </div>

                <h2
                  className="text-[1.35rem] font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Hosted SaaS — Start Free
                </h2>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6">
                  Create your account and integrate the SDK in under 5 minutes. Includes 5,000 free decision traces every month.
                </p>

                <div className="h-px bg-slate-100 mb-6" aria-hidden="true" />

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Free 5,000 decisions / month</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Instant API key &amp; SDK access</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>No credit card required</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>ISO 27001-certified Indian data residency</span>
                  </li>
                </ul>
              </div>

              <Link
                href="https://app.blocklogsecurity.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14.5px] flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* VPC / Enterprise */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                    <Server className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    Regulated Enterprise
                  </span>
                </div>

                <h2
                  className="text-[1.35rem] font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Enterprise VPC &amp; On-Prem
                </h2>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6">
                  Deploy Blocklog inside your own AWS, Azure, or GCP environment with total data sovereignty.
                </p>

                <div className="h-px bg-slate-100 mb-6" aria-hidden="true" />

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero data egress from your cloud</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Air-gapped deployment option</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Custom regulatory report mapping</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[13.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>24/7 named SLA &amp; compliance engineer</span>
                  </li>
                </ul>
              </div>

              <Link
                href="https://cal.com/blocklog/compliance-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[14.5px] flex items-center justify-center gap-2 transition-all"
              >
                Schedule VPC Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="mt-12 text-center flex items-center justify-center gap-2 text-[13px] text-slate-500">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Encrypted with SHA-256 and stored on immutable audit logs</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
