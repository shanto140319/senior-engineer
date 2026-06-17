"use client";

import { useState } from "react";
import type { DocSection } from "@/lib/docs/types";
import { DocBody } from "./doc-body";
import { CodeBlock } from "./code-block";

interface TopicSectionProps {
  section: DocSection;
  accentColor?: string;
}

export function TopicSection({ section, accentColor }: TopicSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-2.5 overflow-hidden rounded-xl border bg-[#0a0e1a] transition-colors duration-200"
      style={{
        borderColor: open && accentColor ? `${accentColor}40` : undefined,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent px-[18px] py-3.5 text-left"
      >
        <span
          className={`text-sm font-semibold ${open ? "text-roadmap-text-secondary" : "text-roadmap-subtle"}`}
        >
          {section.heading}
        </span>
        <span
          className="flex size-6 shrink-0 items-center justify-center rounded-md text-base transition-all duration-200"
          style={{
            background: open && accentColor ? `${accentColor}25` : "#1e293b",
            color: open && accentColor ? accentColor : "#475569",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-[18px] pb-[18px]">
          {section.type === "text" && (
            <div className="rounded-[10px] border border-slate-700 bg-slate-900 px-[18px] py-3.5 text-[13.5px] leading-[1.85] whitespace-pre-wrap text-roadmap-subtle">
              {section.body}
            </div>
          )}
          {section.type === "code" && <CodeBlock code={section.body} />}
          {!section.type && <DocBody body={section.body} />}
        </div>
      )}
    </div>
  );
}
