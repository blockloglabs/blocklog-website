import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Check, Shield, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing — Blocklog AI Compliance Infrastructure',
  description: 'Predictable, evidence-first pricing for teams, growth companies, and regulated enterprises. Start free with 5,000 decision traces per month.',
};

const plans = [
  {
    name: 'Community',
    badge: 'Free Forever',
    price: '$0',
    period: 'forever',
    description: 'For developers and small teams building initial AI prototypes and testing audit capabilities.',
    cta: 'Start for Free',
    ctaHref: '/get-started',
    ctaVariant: 'outline',
    features: [
      '5,000 decision traces / month',
      '14-day history retention',
      '1 monitored agent',
      'SHA-256 hash chaining',
      'Standard JSON evidence exports',
      'Community support',
    ],
  },
  {
    name: 'Team',
    badge: 'Most Popular',
    price: '$299',
    period: 'per month',
    description: 'For growing fintechs and healthcare teams requiring continuous audit logs and team access.',
    cta: 'Start 30-Day Trial',
    ctaHref: '/get-started?plan=team',
    ctaVariant: 'primary',
    highlighted: true,
    features: [
      '100,000 decision traces / month',
      '90-day history retention',
      'Up to 5 monitored agents',
      '3 team seats',
      'Approval workflows & human overrides',
      'PDF + JSON Audit Evidence Packages',
      'DPDP & RBI compliance mapping',
      '48-hour email support',
    ],
  },
  {
    name: 'Scale',
    badge: 'For Growth',
    price: '$799',
    period: 'per month',
    description: 'For production AI deployments with high transaction volumes and strict governance requirements.',
    cta: 'Start 30-Day Trial',
    ctaHref: '/get-started?plan=scale',
    ctaVariant: 'secondary',
    features: [
      '1,000,000 decision traces / month',
      '1-year history retention',
      'Unlimited monitored agents',
      '10 team seats',
      'Ed25519 cryptographic signing',
      'Human-in-the-loop Sentinel gate',
      'SAML SSO & RBAC',
      'Priority support (4-hour SLA)',
    ],
  },
  {
    name: 'Enterprise',
    badge: 'VPC & Air-Gapped',
    price: 'Custom',
    period: 'starting at $1,500/mo',
    description: 'For banks, NBFCs, healthcare systems, and government bodies requiring VPC or on-prem deployment.',
    cta: 'Book Enterprise Call',
    ctaHref: 'https://calendly.com/founder-blocklogsecurity/audit-readiness-call-20-min',
    ctaVariant: 'dark',
    external: true,
    features: [
      'Unlimited decision traces',
      'Custom history retention (up to 7 years)',
      'VPC deployment (AWS / Azure / GCP / Bare Metal)',
      'Zero data egress / Air-gapped option',
      'Custom regulatory report mapping',
      'Dedicated compliance engineer',
      '24/7 named SLA support & custom DPA',
    ],
  },
];

const faqs = [
  {
    q: 'What counts as a decision trace?',
    a: 'One complete AI decision execution — from initial prompt/input to final decision, regardless of how many internal LLM steps or tool calls occur. For a credit scoring system, processing one applicant is 1 decision trace.',
  },
  {
    q: 'How does the free Community plan work?',
    a: 'The Community plan is free forever and includes 5,000 decision traces every month with full SHA-256 hash chaining. No credit card is required to sign up.',
  },
  {
    q: 'What is the difference between SaaS Hosted and VPC deployment?',
    a: 'Hosted SaaS runs on ISO 27001-certified infrastructure in India managed by Blocklog. VPC deployment installs Blocklog directly inside your own cloud account (AWS, Azure, GCP) so decision traces never leave your security perimeter.',
  },
  {
    q: 'Can we upgrade or downgrade at any time?',
    a: 'Yes. You can upgrade immediately as your volume grows or switch between plans. If you downgrade, your existing forensic history is retained for 90 days before deletion.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-24 bg-slate-50 min-h-screen">
        {/* Header */}
        <section className="site-container pt-12 pb-16 text-center">
          <span className="eyebrow mb-3">Transparent Pricing</span>
          <h1
            className="text-[2.5rem] sm:text-[3.5rem] font-bold text-slate-900 tracking-tight mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Predictable infrastructure pricing.
            <br />
            <span className="text-blue-600">Start free, scale with volume.</span>
          </h1>
          <p className="text-[1.0625rem] text-slate-600 max-w-2xl mx-auto text-pretty">
            Capture decisions, generate cryptographic evidence, and satisfy regulators.
            No hidden seat taxes — pay for the decision volume your AI systems process.
          </p>
        </section>

        {/* Pricing Cards Grid */}
        <section className="site-container pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl bg-white p-6 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.highlighted
                    ? 'border-2 border-blue-600 shadow-[0_8px_30px_rgba(37,99,235,0.12)]'
                    : 'border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2
                      className="text-[1.15rem] font-bold text-slate-900"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {plan.name}
                    </h2>
                    {!plan.highlighted && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className="text-[2.25rem] font-bold text-slate-900 tracking-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[13px] text-slate-500 font-medium">
                      /{plan.period}
                    </span>
                  </div>

                  <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="h-px bg-slate-100 mb-6" aria-hidden="true" />

                  <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-4">
                    What&apos;s included:
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.ctaHref}
                  target={plan.external ? '_blank' : undefined}
                  rel={plan.external ? 'noopener noreferrer' : undefined}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                      : plan.ctaVariant === 'dark'
                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                      : plan.ctaVariant === 'secondary'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                      : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="site-container max-w-3xl pt-10">
          <div className="text-center mb-10">
            <h2
              className="text-[1.75rem] font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently asked pricing questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3
                  className="text-[15px] font-semibold text-slate-900 mb-2 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-[13.5px] text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
