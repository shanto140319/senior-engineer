"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SiteHeader } from "@/app/_components/site-header";
import {
  expandedStepKey,
  buildRoadmapPath,
  parseRoadmapParams,
  type RoadmapParams,
} from "@/lib/roadmap/params";
import type { TabId } from "@/lib/roadmap/types";
import { PhaseList } from "./phase-list";
import { RoadmapFooter } from "./roadmap-footer";
import { RoadmapHeader } from "./roadmap-header";
import { RoadmapNav } from "./roadmap-nav";
import { SeniorTipsTab } from "./senior-tips-tab";
import { ToolsTab } from "./tools-tab";

export function RoadmapView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(() => parseRoadmapParams(searchParams), [searchParams]);

  const activePhase = params.phase ?? null;
  const expandedStep = expandedStepKey(params);
  const activeTab = params.tab;

  const updateUrl = useCallback(
    (patch: Partial<RoadmapParams>) => {
      const next: RoadmapParams = { ...params, ...patch };

      if (patch.phase === undefined && "phase" in patch) {
        delete next.phase;
        delete next.step;
      }
      if (patch.step === undefined && "step" in patch) {
        delete next.step;
      }

      router.replace(buildRoadmapPath(next), { scroll: false });
    },
    [params, router],
  );

  const handlePhaseChange = useCallback(
    (phaseId: number | null) => {
      if (phaseId === null) {
        updateUrl({ phase: undefined, step: undefined });
        return;
      }
      if (activePhase === phaseId) {
        updateUrl({ phase: undefined, step: undefined });
      } else {
        updateUrl({ phase: phaseId, step: undefined, tab: "roadmap" });
      }
    },
    [activePhase, updateUrl],
  );

  const handleStepChange = useCallback(
    (key: string | null) => {
      if (key === null) {
        updateUrl({ phase: params.phase, step: undefined });
        return;
      }
      const [phaseStr, stepStr] = key.split("-");
      updateUrl({
        phase: Number(phaseStr),
        step: Number(stepStr),
        tab: "roadmap",
      });
    },
    [params.phase, updateUrl],
  );

  const handleTabChange = useCallback(
    (tab: TabId) => {
      updateUrl({ tab });
    },
    [updateUrl],
  );

  const toggleStep = useCallback(
    (key: string) => {
      handleStepChange(expandedStep === key ? null : key);
    },
    [expandedStep, handleStepChange],
  );

  useEffect(() => {
    if (params.step !== undefined && params.phase !== undefined) {
      document
        .getElementById(`step-${params.phase}-${params.step}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (params.phase !== undefined) {
      document
        .getElementById(`phase-${params.phase}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [params.phase, params.step]);

  return (
    <div className="min-h-screen text-roadmap-text">
      <SiteHeader />
      <RoadmapHeader
        activePhase={activePhase}
        onPhaseSelect={handlePhaseChange}
        onTabChange={handleTabChange}
      />

      <RoadmapNav activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mx-auto max-w-[1100px] px-6 py-8">
        {activeTab === "roadmap" && (
          <PhaseList
            activePhase={activePhase}
            expandedStep={expandedStep}
            activeTab={activeTab}
            onActivePhaseChange={handlePhaseChange}
            onToggleStep={toggleStep}
          />
        )}

        {activeTab === "tools" && <ToolsTab />}
        {activeTab === "tips" && <SeniorTipsTab />}
      </div>

      <RoadmapFooter />
    </div>
  );
}
