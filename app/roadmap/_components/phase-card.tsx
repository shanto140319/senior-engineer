"use client";

import type { RoadmapPhase, TabId } from "@/lib/roadmap/types";
import { phaseColorStyle } from "@/lib/roadmap/styles";
import { StepCard } from "./step-card";

interface PhaseCardProps {
  phase: RoadmapPhase;
  isOpen: boolean;
  isHighlighted: boolean;
  expandedStep: string | null;
  activeTab: TabId;
  onTogglePhase: () => void;
  onToggleStep: (key: string) => void;
}

export function PhaseCard({
  phase,
  isOpen,
  isHighlighted,
  expandedStep,
  activeTab,
  onTogglePhase,
  onToggleStep,
}: PhaseCardProps) {
  return (
    <div
      id={`phase-${phase.id}`}
      style={phaseColorStyle(phase.color)}
      className={`mb-4 overflow-hidden rounded-2xl border bg-roadmap-surface transition-colors duration-200 ${
        isHighlighted ? "phase-card--active" : "border-roadmap-border"
      }`}
    >
      <button
        type="button"
        onClick={onTogglePhase}
        className="flex w-full cursor-pointer items-center gap-4 border-none bg-transparent px-6 py-[22px] text-left"
      >
        <div className="phase-icon-box flex size-12 shrink-0 items-center justify-center rounded-xl text-[22px]">
          {phase.icon}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="phase-text text-[11px] font-semibold tracking-widest">
              PHASE {phase.id}
            </span>
            <span className="phase-badge rounded-full px-2.5 py-0.5 text-[11px] font-medium">
              {phase.duration}
            </span>
          </div>
          <div className="mt-0.5 text-lg font-bold text-roadmap-text">{phase.title}</div>
          <div className="mt-0.5 text-[13px] text-roadmap-muted">{phase.subtitle}</div>
        </div>

        <div
          className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-roadmap-border text-sm text-roadmap-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▾
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3">
            {phase.steps.map((step, stepIndex) => {
              const key = `${phase.id}-${stepIndex}`;
              return (
                <StepCard
                  key={key}
                  id={`step-${phase.id}-${stepIndex}`}
                  step={step}
                  stepIndex={stepIndex}
                  phase={phase}
                  activeTab={activeTab}
                  isExpanded={expandedStep === key}
                  onToggle={() => onToggleStep(key)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
