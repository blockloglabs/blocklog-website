"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, ArrowLeft, Check, Server } from "lucide-react";
import { buildMarketingApiUrl } from "@/lib/platform";

type FormState = {
  companyName: string;
  contactName: string;
  workEmail: string;
  jobTitle: string;
  companySize: string;
  cloudProvider: string;
  deploymentType: string;
  dailyLogVolume: string;
  ssoRequired: string;
  airGapped: string;
  additionalRequirements: string;
};

type DeploymentRequestResponse = {
  request_id: string;
  organization_id: string;
  company_name: string;
  work_email: string;
  status: string;
  created_at: string;
  expected_response_timeframe: string;
};

const initialState: FormState = {
  companyName: "",
  contactName: "",
  workEmail: "",
  jobTitle: "",
  companySize: "",
  cloudProvider: "AWS",
  deploymentType: "Docker Compose",
  dailyLogVolume: "",
  ssoRequired: "Yes",
  airGapped: "No",
  additionalRequirements: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-slate-500 block mb-1.5">
      {children}
    </label>
  );
}

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

export default function VpcDeploymentPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(buildMarketingApiUrl("/onboarding/deployment-request"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: form.companyName,
          contact_name: form.contactName,
          work_email: form.workEmail,
          job_title: form.jobTitle,
          company_size: form.companySize,
          cloud_provider: form.cloudProvider,
          deployment_type: form.deploymentType,
          daily_log_volume: form.dailyLogVolume,
          sso_required: form.ssoRequired === "Yes",
          air_gapped: form.airGapped === "Yes",
          additional_requirements: form.additionalRequirements,
        }),
      });

      const payload = (await response.json()) as DeploymentRequestResponse | { detail?: string };
      if (!response.ok) {
        const message =
          "detail" in payload && typeof payload.detail === "string"
            ? payload.detail
            : "Unable to submit deployment request.";
        throw new Error(message);
      }

      const successPayload = payload as DeploymentRequestResponse;

      const search = new URLSearchParams({
        requestId: successPayload.request_id,
        email: successPayload.work_email,
        timeframe: successPayload.expected_response_timeframe,
      });

      router.push(`/get-started/vpc/confirmation?${search.toString()}`);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit deployment request."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        <div className="site-container max-w-6xl pt-6">
          <div className="mb-6">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to deployment options
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] items-start">
            {/* Left Info Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:sticky lg:top-24">
              <span className="eyebrow mb-2">Enterprise Onboarding</span>
              <h1
                className="text-[2rem] font-bold text-slate-900 tracking-tight mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Deploy inside your private VPC.
              </h1>
              <p className="text-[14px] text-slate-600 leading-relaxed mb-6">
                Share your infrastructure requirements. Our security engineers will guide you through licensing, architecture validation, and Docker/Kubernetes deployment.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                {[
                  "Complete tenant isolation with zero external data egress",
                  "Support for AWS, GCP, Azure, and bare-metal air-gapped networks",
                  "Automated DPDP, RBI, and SEBI compliance mapping",
                  "Dedicated compliance engineer & 24/7 SLA guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13px] text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3">
                <Server className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-[12.5px] text-blue-900 font-medium leading-snug">
                  Deployable via Docker Compose or Helm chart in under 30 minutes.
                </p>
              </div>
            </div>

            {/* Right Form Card */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="space-y-8">
                {/* Company Information */}
                <div>
                  <h2 className="text-[15px] font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
                    1. Organization &amp; Contact
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <FieldLabel>Company Name</FieldLabel>
                      <input
                        className={inputClassName}
                        value={form.companyName}
                        onChange={(e) => updateField("companyName", e.target.value)}
                        placeholder="e.g. Acme Financial Technologies"
                        required
                      />
                    </div>
                    <div>
                      <FieldLabel>Contact Name</FieldLabel>
                      <input
                        className={inputClassName}
                        value={form.contactName}
                        onChange={(e) => updateField("contactName", e.target.value)}
                        placeholder="e.g. Jane Doe"
                        required
                      />
                    </div>
                    <div>
                      <FieldLabel>Work Email</FieldLabel>
                      <input
                        className={inputClassName}
                        type="email"
                        value={form.workEmail}
                        onChange={(e) => updateField("workEmail", e.target.value)}
                        placeholder="jane@company.com"
                        required
                      />
                    </div>
                    <div>
                      <FieldLabel>Job Title</FieldLabel>
                      <input
                        className={inputClassName}
                        value={form.jobTitle}
                        onChange={(e) => updateField("jobTitle", e.target.value)}
                        placeholder="e.g. VP Engineering / CISO"
                        required
                      />
                    </div>
                    <div>
                      <FieldLabel>Company Size</FieldLabel>
                      <input
                        className={inputClassName}
                        value={form.companySize}
                        onChange={(e) => updateField("companySize", e.target.value)}
                        placeholder="e.g. 500-1,000 employees"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Infrastructure */}
                <div>
                  <h2 className="text-[15px] font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
                    2. Infrastructure &amp; Volume
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <FieldLabel>Cloud Provider</FieldLabel>
                      <select
                        className={inputClassName}
                        value={form.cloudProvider}
                        onChange={(e) => updateField("cloudProvider", e.target.value)}
                      >
                        {["AWS", "Azure", "GCP", "Bare Metal / On-Prem", "Other"].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <FieldLabel>Deployment Method</FieldLabel>
                      <select
                        className={inputClassName}
                        value={form.deploymentType}
                        onChange={(e) => updateField("deploymentType", e.target.value)}
                      >
                        {["Docker Compose", "Kubernetes / Helm", "ECS / Fargate", "Air-Gapped Container"].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel>Expected Daily Decision Volume</FieldLabel>
                      <input
                        className={inputClassName}
                        value={form.dailyLogVolume}
                        onChange={(e) => updateField("dailyLogVolume", e.target.value)}
                        placeholder="e.g. 50,000 decisions / day"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Security & Compliance */}
                <div>
                  <h2 className="text-[15px] font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
                    3. Security &amp; Compliance Requirements
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <FieldLabel>SAML / SSO Required?</FieldLabel>
                      <select
                        className={inputClassName}
                        value={form.ssoRequired}
                        onChange={(e) => updateField("ssoRequired", e.target.value)}
                      >
                        {["Yes", "No"].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <FieldLabel>Air-Gapped Environment?</FieldLabel>
                      <select
                        className={inputClassName}
                        value={form.airGapped}
                        onChange={(e) => updateField("airGapped", e.target.value)}
                      >
                        {["No", "Yes"].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel>Additional Requirements / Regulatory Scope</FieldLabel>
                      <textarea
                        className={`${inputClassName} min-h-28 resize-y`}
                        value={form.additionalRequirements}
                        onChange={(e) => updateField("additionalRequirements", e.target.value)}
                        placeholder="e.g. RBI AI/ML guidelines, DPDP Act compliance timeline, HIPAA requirements, custom retention policies."
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14.5px] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Deployment Request"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[12.5px] text-slate-500">
                    Response within 24 hours · NDA available
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}