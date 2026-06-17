import type { TabId } from "./types";

export interface RoadmapParams {
  tab: TabId;
  phase?: number;
  step?: number;
}

const TABS: TabId[] = ["roadmap", "tools", "tips"];

function parseNumber(value: string | null): number | undefined {
  if (value === null || value === "") return undefined;
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined;
}

export function parseRoadmapParams(searchParams: URLSearchParams): RoadmapParams {
  const tabParam = searchParams.get("tab");
  const tab = TABS.includes(tabParam as TabId) ? (tabParam as TabId) : "roadmap";

  return {
    tab,
    phase: parseNumber(searchParams.get("phase")),
    step: parseNumber(searchParams.get("step")),
  };
}

export function buildRoadmapPath(params: RoadmapParams): string {
  const search = new URLSearchParams();

  if (params.tab !== "roadmap") {
    search.set("tab", params.tab);
  }
  if (params.phase !== undefined) {
    search.set("phase", String(params.phase));
  }
  if (params.step !== undefined) {
    search.set("step", String(params.step));
  }

  const query = search.toString();
  return query ? `/roadmap?${query}` : "/roadmap";
}

export function expandedStepKey(params: RoadmapParams): string | null {
  if (params.phase === undefined || params.step === undefined) {
    return null;
  }
  return `${params.phase}-${params.step}`;
}

export function roadmapReturnQuery(params: Pick<RoadmapParams, "tab" | "phase" | "step">): string {
  const search = new URLSearchParams();

  if (params.tab && params.tab !== "roadmap") {
    search.set("tab", params.tab);
  }
  if (params.phase !== undefined) {
    search.set("phase", String(params.phase));
  }
  if (params.step !== undefined) {
    search.set("step", String(params.step));
  }

  return search.toString();
}
