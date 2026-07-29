import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Mail, Clock, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — Blocklog AI Compliance Infrastructure',
  description: 'Get in touch with Blocklog security and compliance engineering teams.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-4xl pt-10">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3">Contact Us</span>
            <h1
              className="text-[2.5rem] sm:text-[3.25rem] font-bold text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Speak with our compliance team.
            </h1>
            <p className="text-[1.0625rem] text-slate-600 max-w-xl mx-auto">
              Have questions about DPDP Act, RBI AI/ML guidelines, VPC deployment, or security architecture? Our engineers are here to assist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                <Mail className="w-5 h-5" />
              </div>

              <h2
                className="text-[1.25rem] font-bold text-slate-900 mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Email Inquiries
              </h2>
              <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6">
                Direct email access to our founding engineering and security team.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    General &amp; Compliance
                  </span>
                  <a
                    href="mailto:founder@blocklogsecurity.com"
                    className="text-[15px] font-semibold text-blue-600 hover:text-blue-700 underline"
                  >
                    founder@blocklogsecurity.com
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </div>

              <a
                href="mailto:founder@blocklogsecurity.com?subject=Blocklog%20Compliance%20Inquiry"
                className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                Send Email
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Book Call Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h2
                className="text-[1.25rem] font-bold text-slate-900 mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Compliance Readiness Call
              </h2>
              <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6">
                Schedule a 30-minute consultation with a senior compliance architect to evaluate your AI decision trail readiness.
              </p>

              <div className="space-y-3 mb-8 text-[13px] text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Review DPDP &amp; RBI compliance gaps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Architecture &amp; VPC sizing review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sample Evidence Package demonstration</span>
                </div>
              </div>

              <Link
                href="https://cal.com/blocklog/compliance-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors"
              >
                Book Compliance Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}