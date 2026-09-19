import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Shield, Building2, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Blocklog AI Compliance Infrastructure',
  description: 'Blocklog Technologies Pvt. Ltd. is the pioneer in AI decision evidence infrastructure for regulated enterprises.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-white min-h-screen">
        <div className="site-container max-w-4xl pt-10">
          <div className="text-center mb-14">
            <span className="eyebrow mb-3">Our Mission</span>
            <h1
              className="text-[2.5rem] sm:text-[3.5rem] font-bold text-slate-900 tracking-tight mb-4 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Logs are claims.
              <br />
              <span className="text-blue-600">Blocklog makes them proof.</span>
            </h1>
            <p className="section-subheading text-center">
              Blocklog was founded with a singular purpose: to give regulated enterprises complete cryptographic confidence when operating AI decision systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">Tamper-Evident</h2>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Using SHA-256 hash chains and Merkle trees to guarantee that audit records cannot be altered or retroactively faked.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">Indian Regulation First</h2>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Purpose-built to satisfy DPDP Act 2023, RBI AI/ML guidelines, and SEBI Regulation 16C obligations out of the box.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">Zero Vendor Lock-in</h2>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Open verification tool guarantees that auditors can verify evidence packages independently without Blocklog runtime dependencies.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
