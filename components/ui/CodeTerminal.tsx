'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeTerminalProps {
  title?: string;
  language?: string;
  code: string;
  formattedCode?: React.ReactNode;
}

export function CodeTerminal({ title = 'terminal', language = 'ts', code, formattedCode }: CodeTerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-w-0 max-w-full rounded-xl border border-slate-800 bg-[#090d16] overflow-hidden shadow-xl">
      {/* Terminal Window Header */}
      <div className="px-4 py-2.5 bg-[#0e1422] border-b border-slate-800/80 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
          </div>
          <span className="min-w-0 truncate text-[11px] font-mono text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-blue-400" />
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto">
        <pre className="w-max min-w-full text-[12.5px] leading-relaxed font-mono font-normal tracking-normal text-slate-200">
          <code>{formattedCode || code}</code>
        </pre>
      </div>
    </div>
  );
}
