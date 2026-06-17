"use client";

import { phases } from "@/lib/roadmap/data";
import type { TabId } from "@/lib/roadmap/types";
import { PhaseCard } from "./phase-card";

interface PhaseListProps {
  activePhase: number | null;
  expandedStep: string | null;
  activeTab: TabId;
  onActivePhaseChange: (phaseId: number | null) => void;
  onToggleStep: (key: string) => void;
}

export function PhaseList({
  activePhase,
  expandedStep,
  activeTab,
  onActivePhaseChange,
  onToggleStep,
}: PhaseListProps) {
  return (
    <div>
      {phases.map((phase) => (
        <PhaseCard
          key={phase.id}
          phase={phase}
          isOpen={activePhase === phase.id}
          isHighlighted={activePhase === phase.id}
          expandedStep={expandedStep}
          activeTab={activeTab}
          onTogglePhase={() =>
            onActivePhaseChange(activePhase === phase.id ? null : phase.id)
          }
          onToggleStep={onToggleStep}
        />
      ))}
    </div>
  );
}
