"use client";

import type { TabId } from "@/lib/roadmap/types";

const tabs: { id: TabId; label: string }[] = [
  { id: "roadmap", label: "📋 Roadmap" },
  { id: "tools", label: "🛠 Stack" },
  { id: "tips", label: "⚡ Senior Tips" },
];

interface RoadmapNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function RoadmapNav({ activeTab, onTabChange }: RoadmapNavProps) {
  return (
    <div className="border-b border-roadmap-border bg-roadmap-surface">
      <div className="mx-auto flex max-w-[1100px] gap-0 px-6">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => onTabChange(id)}
            className={`cursor-pointer border-none bg-transparent px-5 py-3.5 text-[13.5px] font-medium transition-all duration-200 ${
              activeTab === id
                ? "border-b-2 border-roadmap-indigo text-roadmap-indigo-light"
                : "border-b-2 border-transparent text-roadmap-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
