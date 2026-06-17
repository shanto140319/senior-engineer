import type { QuickReferenceItem } from "@/lib/docs/types";
import { refColorStyle } from "@/lib/docs/styles";

interface QuickReferenceProps {
  items: QuickReferenceItem[];
  title?: string;
}

export function QuickReference({ items, title = "QUICK REFERENCE" }: QuickReferenceProps) {
  return (
    <div className="mb-8 rounded-2xl border border-slate-700 bg-[#0a0e1a] p-6">
      <div className="mb-[18px] text-[11.5px] font-bold tracking-widest text-roadmap-faint">
        {title}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3.5">
        {items.map(({ color, title: itemTitle, line }) => (
          <div
            key={itemTitle}
            style={refColorStyle(color)}
            className="ref-card rounded-[10px] border bg-slate-900 px-4 py-3.5"
          >
            <div className="ref-card-title mb-1.5 text-[13px] font-semibold">{itemTitle}</div>
            <div className="text-[13px] leading-relaxed text-roadmap-muted">{line}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
