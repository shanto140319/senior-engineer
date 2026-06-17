"use client";

import { useState } from "react";
import { highlightJava } from "@/lib/docs/highlight-java";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="relative mt-2.5">
      <button
        type="button"
        onClick={copy}
        className={`absolute top-2.5 right-2.5 z-10 cursor-pointer rounded-md border border-slate-600 bg-slate-800 px-2.5 py-1 text-[11px] font-medium ${
          copied ? "text-emerald-400" : "text-roadmap-subtle"
        }`}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre
        className="m-0 overflow-x-auto rounded-[10px] border border-slate-700 bg-slate-900 px-[18px] py-4 font-mono text-[13px] leading-relaxed whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: highlightJava(code) }}
      />
    </div>
  );
}
