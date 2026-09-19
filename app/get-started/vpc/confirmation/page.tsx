import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default async function VpcConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{
    requestId?: string;
    email?: string;
    timeframe?: string;
  }>;
}) {
  const { requestId, email, timeframe } = await searchParams;

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-3xl pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="eyebrow mb-2">Request Received</span>
            <h1
              className="text-[2.25rem] font-bold text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              VPC Deployment Request Captured
            </h1>
            <p className="section-subheading text-center mb-8">
              Thank you. Our compliance engineering team will review your infrastructure requirements and contact you with deployment instructions and licensing packages.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-8 text-left">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Request ID
                </span>
                <span className="text-[13px] font-semibold text-slate-900 font-mono break-all" style={{ fontFamily: 'var(--font-mono)' }}>
                  {requestId || "REQ-VPC-PENDING"}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Contact Email
                </span>
                <span className="text-[13px] font-semibold text-slate-900 break-all">
                  {email || "Provided in request"}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Expected Response
                </span>
                <span className="text-[13px] font-semibold text-slate-900">
                  {timeframe || "Within 24 hours"}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/vpc-deployment"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                Review VPC Deployment Docs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-started"
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[14px] rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to deployment options
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
