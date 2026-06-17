"use client";

import { phases } from "@/lib/roadmap/data";
import { phaseColorStyle } from "@/lib/roadmap/styles";
import type { TabId } from "@/lib/roadmap/types";

interface RoadmapHeaderProps {
  activePhase: number | null;
  onPhaseSelect: (phaseId: number | null) => void;
  onTabChange: (tab: TabId) => void;
}

export function RoadmapHeader({ activePhase, onPhaseSelect, onTabChange }: RoadmapHeaderProps) {
  return (
    <div className="roadmap-header-gradient border-b border-roadmap-border px-6 pt-12 pb-9">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/15 px-3.5 py-1 text-xs font-medium text-roadmap-indigo-light">
          <span>🤖</span> AI-Age Senior Engineer Roadmap · Spring Boot Track
        </div>

        <h1 className="roadmap-title-gradient mb-4 text-[clamp(28px,4vw,48px)] leading-[1.1] font-extrabold">
          From Frontend Dev
          <br />
          to AI-Age Senior Engineer
        </h1>

        <p className="max-w-[600px] text-base leading-relaxed text-roadmap-subtle">
          100% practical. Every step is an action, not a concept. Spring Boot backend, system
          design fundamentals, and AI-native engineering — in 26 weeks.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {phases.map((phase) => {
            const isActive = activePhase === phase.id;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => {
                  onTabChange("roadmap");
                  onPhaseSelect(isActive ? null : phase.id);
                }}
                style={phaseColorStyle(phase.color)}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-200 ${
                  isActive
                    ? "phase-pill--active"
                    : "border-white/10 bg-transparent text-roadmap-subtle"
                }`}
              >
                {phase.icon} {phase.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
