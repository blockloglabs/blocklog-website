import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Blocklog',
  description: 'Blocklog Technologies Pvt. Ltd. Privacy Policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-3xl pt-10">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm prose prose-slate max-w-none">
            <span className="eyebrow mb-2">Legal</span>
            <h1
              className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-[13px] text-slate-500 mb-8">
              Effective Date: July 28, 2024 · Blocklog Security Technologies Pvt. Ltd.
            </p>

            <div className="space-y-6 text-[14px] text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">1. Overview</h2>
                <p>
                  Blocklog Technologies Pvt. Ltd. (&quot;Blocklog&quot;, &quot;we&quot;, &quot;our&quot;) provides AI compliance infrastructure, cryptographic audit logs, and evidence packaging software. This Privacy Policy describes how we collect, use, and handle information when you use our website, services, and APIs under applicable Indian data privacy regulations, including the Digital Personal Data Protection (DPDP) Act 2023.
                </p>
              </section>

              <section>
                <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">2. Information We Collect</h2>
                <p>
                  We collect information necessary to provide and secure our compliance infrastructure:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Account Information:</strong> Name, work email address, job title, and organization name.</li>
                  <li><strong>Usage Data:</strong> API logs, event counts, decision trace volume, and administrative telemetry.</li>
                  <li><strong>Audit Metadata:</strong> Hashes, timestamps, model versions, and cryptographic proofs processed via Blocklog SDKs.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">3. Data Residency &amp; Sovereignty</h2>
                <p>
                  For hosted SaaS customers, all data and audit metadata are stored within ISO 27001-certified data centers located in India. For Enterprise VPC customers, all decision data remains strictly inside the customer&apos;s cloud infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2">4. Contact Information</h2>
                <p>
                  For inquiries regarding data protection or DPDP Act compliance, please contact our Data Protection Officer at{' '}
                  <a href="mailto:founder@blocklogsecurity.com" className="text-blue-600 font-medium hover:underline">
                    founder@blocklogsecurity.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}