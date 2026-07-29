// LiveHashChainVisual.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, RefreshCw, CheckCircle, Database } from 'lucide-react';

interface Block {
  id: number;
  hash: string;
  prevHash: string;
  timestamp: string;
  eventType: string;
  payload: string;
  verified: boolean;
}

const initialBlocks: Block[] = [
  {
    id: 1048,
    hash: '8f2a3c8d1e0b9a7f5c4d3b2a1e0f9a8b',
    prevHash: '00000000000000000000000000000000',
    timestamp: '09:14:30.102 IST',
    eventType: 'CREDIT_DECISION_TRACE',
    payload: 'score=742 | limit=₹5,00,000 | approved=true',
    verified: true,
  },
  {
    id: 1049,
    hash: '3b2a1e0f9a8b7c6d5e4f3a2b1c0d9e8f',
    prevHash: '8f2a3c8d1e0b9a7f5c4d3b2a1e0f9a8b',
    timestamp: '09:14:31.488 IST',
    eventType: 'HUMAN_OVERRIDE_RECORD',
    payload: 'officer_id=usr_8821 | status=CONFIRMED',
    verified: true,
  },
  {
    id: 1050,
    hash: 'a1b2c3d4e5f67890123456789abcdef0',
    prevHash: '3b2a1e0f9a8b7c6d5e4f3a2b1c0d9e8f',
    timestamp: '09:14:32.910 IST',
    eventType: 'MERKLE_ROOT_ANCHOR',
    payload: 'root=sha256:e4f3a2b1c0d9e8f7a6b5c4d3',
    verified: true,
  },
];

export function LiveHashChainVisual() {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [isInjecting, setIsInjecting] = useState(false);

  const addLiveBlock = () => {
    setIsInjecting(true);
    setTimeout(() => {
      const lastBlock = blocks[blocks.length - 1];
      const nextId = lastBlock.id + 1;
      const randomHex = Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);
      const newBlock: Block = {
        id: nextId,
        hash: randomHex + 'a0b1c2d3e4f5',
        prevHash: lastBlock.hash.substring(0, 32),
        timestamp: new Date().toLocaleTimeString('en-IN', { hour12: false }) + '.' + Math.floor(Math.random() * 900 + 100) + ' IST',
        eventType: nextId % 2 === 0 ? 'DPDP_CONSENT_VERIFIED' : 'LOAN_APPROVAL_TRACE',
        payload: nextId % 2 === 0 ? 'consent_id=c_9921 | purpose=CREDIT_EVAL' : 'risk_index=0.04 | decision=APPROVED',
        verified: true,
      };
      setBlocks((prev) => [...prev.slice(1), newBlock]);
      setIsInjecting(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(addLiveBlock, 4000);
    return () => clearInterval(interval);
  }, [blocks]);

  return (
    // Outer white frame — matches the hero evidence panel & how-it-works
    // terminal cards, so the dark block reads as "nested content" rather
    // than a disconnected dark rectangle dropped on the light section.
    <div className="professional-card rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="rounded-xl border border-slate-800 bg-[#090d16] text-white p-4 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden">
        {/* Visual Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800/80 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3
                className="text-[14px] font-bold text-white leading-none tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LIVE HASH CHAIN SIMULATOR
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                SHA-256 Monotonic Sequence · Real-Time Ingestion
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/90 border border-emerald-700/80 text-emerald-300 text-[11px] font-semibold rounded-full shadow-sm">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Live Ingestion
            </div>
            <button
              onClick={addLiveBlock}
              disabled={isInjecting}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              title="Inject Live Audit Event"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isInjecting ? 'animate-spin text-blue-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Dynamic Animated Cards */}
        <div className="space-y-3.5 relative">
          <AnimatePresence initial={false}>
            {blocks.map((block, index) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  index === blocks.length - 1
                    ? 'bg-slate-800/90 border-blue-500/60 shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                    : 'bg-slate-900/80 border-slate-800/90'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                    <span
                      className="text-[11px] font-bold text-blue-300 px-2 py-0.5 bg-blue-950 border border-blue-800/80 rounded"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      BLOCK #{block.id}
                    </span>
                    <span className="truncate text-[12px] font-semibold text-slate-100">
                      {block.eventType}
                    </span>
                  </div>
                  <span className="shrink-0 text-[11.5px] text-slate-300 font-mono">
                    {block.timestamp}
                  </span>
                </div>

                {/* High Contrast Hash Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-mono my-2.5">
                  <div className="bg-[#050810] p-2.5 rounded-lg border border-slate-800 truncate">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      HASH (SHA-256):
                    </span>
                    <span className="text-emerald-300 font-semibold">{block.hash}</span>
                  </div>
                  <div className="bg-[#050810] p-2.5 rounded-lg border border-slate-800 truncate">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      PREV HASH:
                    </span>
                    <span className="text-slate-300">{block.prevHash}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-slate-800/80 text-[11.5px]">
                  <span className="min-w-0 text-slate-300 truncate sm:max-w-[280px]">
                    Payload: <code className="text-amber-300 font-mono font-medium">{block.payload}</code>
                  </span>
                  <div className="flex shrink-0 items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Banner */}
        <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-slate-300">
          <div className="flex min-w-0 items-center gap-2">
            <Database className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="truncate">Merkle Root: <code className="text-slate-100 font-mono text-[11px] font-bold">sha256:7f9a8b...3c2d1e</code></span>
          </div>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            Tamper-Proof Audit Trail
          </span>
        </div>
      </div>
    </div>
  );
}