"use client";

import type { SolidQuickReferenceRow } from "@/lib/docs/types";
import { refColorStyle } from "@/lib/docs/styles";

interface SolidQuickReferenceProps {
  rows: SolidQuickReferenceRow[];
  onSelectTopic?: (id: string) => void;
}

export function SolidQuickReference({ rows, onSelectTopic }: SolidQuickReferenceProps) {
  return (
    <div className="mb-8 rounded-2xl border border-slate-700 bg-[#0a0e1a] p-6">
      <div className="mb-[18px] text-[11.5px] font-bold tracking-widest text-roadmap-faint">
        SOLID — ONE-LINE SUMMARY
      </div>
      <div className="flex flex-col">
        {rows.map((row, index) => (
          <div
            key={row.letter}
            className={`grid grid-cols-1 items-center gap-3 py-3.5 sm:grid-cols-[36px_200px_1fr] sm:gap-4 ${
              index < rows.length - 1 ? "border-b border-slate-800" : ""
            }`}
          >
        <div
          style={refColorStyle(row.color)}
          className="flex size-8 items-center justify-center rounded-lg text-sm font-extrabold"
        >
              {row.letter}
            </div>
            {onSelectTopic && row.topicId ? (
              <button
                type="button"
                onClick={() => onSelectTopic(row.topicId!)}
                className="cursor-pointer text-left text-[13px] font-semibold text-roadmap-subtle transition-colors hover:text-roadmap-text"
              >
                {row.rule}
              </button>
            ) : (
              <div className="text-[13px] font-semibold text-roadmap-subtle">{row.rule}</div>
            )}
            <div className="text-[13px] leading-relaxed text-roadmap-muted">{row.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
