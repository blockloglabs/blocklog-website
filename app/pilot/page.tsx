import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { LiveHashChainVisual } from '@/components/visuals/LiveHashChainVisual';
import { Shield, Check, ArrowRight, Calendar, AlertTriangle, FileText, Lock, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '30-Day Compliance Pilot — Blocklog',
  description: 'Deploy Blocklog for 30 days. Capture real production decisions, test replay capabilities, and deliver a forensic compliance report to your CISO and auditors.',
};

const pilotTimeline = [
  {
    step: '01',
    title: 'Deploy SDK in Under 20 Mins',
    description: 'Add @blocklog/sdk to your production AI service (hosted or VPC). Zero interruption to live user traffic.',
    code: 'npm install @blocklog/sdk',
  },
  {
    step: '02',
    title: 'Automated Decision Ingestion',
    description: 'Every model version, prompt, approval record, and decision trace is cryptographically hashed with SHA-256.',
    code: '10,000+ events/hr captured',
  },
  {
    step: '03',
    title: 'Replay & Forensic Analysis',
    description: 'Simulate auditor inquiries. Reconstruct exact model state and inputs for any decision within 200ms.',
    code: 'blocklog.replay(decision_id)',
  },
  {
    step: '04',
    title: 'Generate Audit Evidence Package',
    description: 'Export an official PDF + JSON Evidence Package mapped to DPDP Act, RBI AI/ML, or SEBI 16C guidelines.',
    code: 'Audit_Evidence_Package.pdf',
  },
  {
    step: '05',
    title: 'Deliver Executive Audit Report',
    description: 'Review the 30-day evidence package with your Chief Risk Officer, CISO, and external compliance auditors.',
    code: '30-Day Pilot Complete',
  },
];

const qualifications = [
  {
    title: 'AI System Operating in Production',
    detail: 'Making or assisting decisions in lending, credit scoring, claims, fraud, customer onboarding, or healthcare.',
  },
  {
    title: 'LangChain, LlamaIndex, OpenAI, or Custom SDK',
    detail: 'Full support for Node.js/TypeScript, Python, REST APIs, or OpenTelemetry tracing pipelines.',
  },
  {
    title: '1 Engineering Hour for Integration',
    detail: 'Deployment requires setting an API key and adding one wrapper function around your model execution.',
  },
  {
    title: 'Compliance Stakeholder Review',
    detail: 'The pilot delivers its highest value when your CRO, CISO, or Compliance Head reviews the final evidence package.',
  },
];

const disqualifications = [
  {
    title: 'General Chatbot Without Decision Authority',
    detail: 'If your AI only answers general marketing FAQs with no impact on risk, lending, or personal data compliance.',
  },
  {
    title: 'Synthetic Test Data Only',
    detail: 'Blocklog produces meaningful audit evidence from real production decisions. Test environments generate synthetic reports.',
  },
];

export default function PilotPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="site-container pt-8 pb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-[11.5px] font-semibold uppercase tracking-[0.08em] rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              30-Day Enterprise Trial
            </span>

            <h1
              className="text-[2.6rem] sm:text-[3.5rem] font-bold text-slate-900 leading-[1.08] tracking-[-0.03em] mb-6 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Prove your AI compliance in 30 days.{' '}
              <span className="text-blue-600">Before your next audit.</span>
            </h1>

            <p className="text-[1.0625rem] text-slate-600 leading-relaxed mb-8 text-pretty">
              The 30-Day Compliance Pilot produces the exact deliverable that satisfies CISOs and regulators — a cryptographically verified Audit Evidence Package from your actual production decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://cal.com/blocklog/compliance-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14.5px] rounded-xl shadow-sm transition-all"
              >
                Apply for 30-Day Pilot
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-[14.5px] rounded-xl transition-all"
              >
                View Integration Quickstart
              </Link>
            </div>
          </div>

          {/* Interactive Live Visual Component */}
          <div className="max-w-4xl mx-auto my-12">
            <LiveHashChainVisual />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3">Pilot Execution</span>
              <h2
                className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                How the 30-day pilot works
              </h2>
              <p className="text-[1rem] text-slate-500 max-w-xl mx-auto">
                From initial integration to delivering an executive evidence package to your compliance team.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {pilotTimeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span
                      className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full inline-block mb-3"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      STAGE {item.step}
                    </span>
                    <h3
                      className="text-[14px] font-semibold text-slate-900 mb-2 leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-900 p-2.5 text-[10.5px] text-slate-300 font-mono overflow-x-auto">
                    <code>{item.code}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-24 bg-white">
          <div className="site-container max-w-4xl">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3">Eligibility</span>
              <h2
                className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Is your team ready for the pilot?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Qualifications */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-[1rem] font-bold text-emerald-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Ideal Pilot Candidates
                  </h3>
                </div>

                <div className="space-y-4">
                  {qualifications.map((q) => (
                    <div key={q.title} className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                      <h4 className="text-[13.5px] font-semibold text-slate-900 mb-1">
                        {q.title}
                      </h4>
                      <p className="text-[12.5px] text-slate-600 leading-relaxed">
                        {q.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disqualifications */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <h3
                    className="text-[1rem] font-bold text-slate-800"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Not a Fit For
                  </h3>
                </div>

                <div className="space-y-4">
                  {disqualifications.map((dq) => (
                    <div key={dq.title} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <h4 className="text-[13.5px] font-semibold text-slate-800 mb-1">
                        {dq.title}
                      </h4>
                      <p className="text-[12.5px] text-slate-500 leading-relaxed">
                        {dq.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Card */}
            <div className="mt-14 p-8 rounded-2xl bg-slate-900 text-white text-center">
              <h2
                className="text-[1.5rem] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to produce your first evidence package?
              </h2>
              <p className="text-[14px] text-slate-400 mb-6 max-w-lg mx-auto">
                Schedule a 20-minute kickoff call with our compliance engineering team.
              </p>
              <Link
                href="https://cal.com/blocklog/compliance-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14.5px] rounded-xl transition-all shadow-md"
              >
                Book 30-Day Pilot Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}