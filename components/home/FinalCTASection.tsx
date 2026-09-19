'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const freePromises = ['No credit card required', 'Setup in under 5 minutes'];
const enterprisePromises = ['Deployment support included', 'Designed for regulated enterprises'];

const stats = [
  { value: '5,000', label: 'free decision traces per month' },
  { value: '<5 min', label: 'to your first evidence package' },
  { value: '24 hr', label: 'audit turnaround target' },
];

// Illustrative data. Each entry's "prev" is the previous entry's "hash",
// which is the property that makes the log tamper-evident.
const ledger = [
  { action: 'Credit limit approved', hash: '3f9a…c21e', prev: '0000…0000' },
  { action: 'Claim routed to manual review', hash: '8b41…d7a0', prev: '3f9a…c21e' },
  { action: 'Identity check flagged', hash: 'e6c2…19b5', prev: '8b41…d7a0' },
  { action: 'Model version updated', hash: '5d07…a3f8', prev: 'e6c2…19b5' },
];

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                              */
/* -------------------------------------------------------------------------- */

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PromiseList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3.5 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-[13.5px] text-slate-400">
          <span className="text-blue-400">
            <CheckIcon />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ledger: the one animated moment. Entries verify top to bottom, one link   */
/*  at a time, once, when scrolled into view.                                 */
/* -------------------------------------------------------------------------- */

function LedgerCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [verified, setVerified] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setVerified(ledger.length);
      return;
    }

    const timers = ledger.map((_, i) => setTimeout(() => setVerified(i + 1), 650 + i * 520));
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion]);

  const complete = verified === ledger.length;

  return (
    <div
      ref={ref}
      role="group"
      aria-label="Example of a tamper-evident decision trace ledger"
      className="rounded-xl border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
        <span className="text-[13.5px] font-medium text-slate-200">Decision trace ledger</span>
        <span
          aria-live="polite"
          className={`flex items-center gap-2 text-[13px] transition-colors duration-300 motion-reduce:transition-none ${
            complete ? 'text-emerald-400' : 'text-slate-400'
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              complete ? 'bg-emerald-400' : 'animate-pulse bg-slate-400 motion-reduce:animate-none'
            }`}
          />
          {complete ? 'Chain intact' : 'Verifying chain'}
        </span>
      </div>

      {/* Entries */}
      <ol className="px-5 py-6">
        {ledger.map((entry, i) => {
          const done = verified > i;
          const linkFilled = verified > i + 1;
          const isLast = i === ledger.length - 1;

          return (
            <li key={entry.hash} className={`relative pl-9 ${isLast ? '' : 'pb-7'}`}>
              {/* Connector to the next entry */}
              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute left-[9px] top-[22px] -bottom-0.5 w-[2px] rounded-full bg-white/10"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-[9px] top-[22px] -bottom-0.5 w-[2px] origin-top rounded-full bg-blue-400 transition-transform duration-500 ease-out motion-reduce:transition-none"
                    style={{ transform: `scaleY(${linkFilled ? 1 : 0})` }}
                  />
                </>
              )}

              {/* Node */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-300 motion-reduce:transition-none ${
                  done
                    ? 'border-blue-400 bg-blue-500/20 text-blue-300'
                    : 'border-white/20 bg-slate-900 text-transparent'
                }`}
              >
                <CheckIcon size={11} />
              </span>

              <p className="text-[15px] font-medium leading-6 text-white">{entry.action}</p>
              <p
                className={`mt-1 flex flex-wrap gap-x-5 gap-y-0.5 font-mono text-[12px] transition-colors duration-300 motion-reduce:transition-none ${
                  done ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                <span>hash {entry.hash}</span>
                <span>prev {entry.prev}</span>
              </p>
            </li>
          );
        })}
      </ol>

      {/* Footer: payoff once the chain is verified */}
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-3.5 text-[12.5px]">
        <span className="text-slate-400">Illustrative example</span>
        <span
          className={`flex items-center gap-1.5 font-medium text-emerald-400 transition-opacity duration-500 motion-reduce:transition-none ${
            complete ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={!complete}
        >
          <CheckIcon size={13} />
          Evidence package ready
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

export function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 py-20 lg:py-28"
      aria-labelledby="final-cta-title"
    >
      {/* Faint grid, echoes the hero's background language on a dark ground */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 70% 35%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 70% 35%, black 20%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy + actions */}
          <div>
            <h2
              id="final-cta-title"
              className="max-w-xl text-balance text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.25rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The next audit shouldn&apos;t become an emergency.
            </h2>

            <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-relaxed text-slate-400 sm:text-[1.15rem]">
              Know exactly what evidence you have before regulators ask. Start for free with 5,000
              monthly decision traces, or book an enterprise consultation.
            </p>

            {/* Each action carries the promises that belong to it */}
            <div className="mt-9 grid gap-x-5 gap-y-8 sm:grid-cols-2">
              <div>
                <Link
                  href="/get-started"
                  className={`inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-blue-500 ${focusRing}`}
                >
                  Start for Free
                </Link>
                <PromiseList items={freePromises} />
              </div>

              <div>
                <Link
                  href="https://calendly.com/founder-blocklogsecurity/audit-readiness-call-20-min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 ${focusRing}`}
                >
                  Book Compliance Call
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
                <PromiseList items={enterprisePromises} />
              </div>
            </div>
          </div>

          {/* Product moment */}
          <LedgerCard />
        </div>

        {/* Numbers */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-10 lg:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 first:pl-0 sm:px-8">
              <div
                className="text-[1.6rem] font-bold tracking-tight text-white sm:text-[2rem]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </div>
              <div className="mt-1 max-w-[16rem] text-[12.5px] leading-snug text-slate-400 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}