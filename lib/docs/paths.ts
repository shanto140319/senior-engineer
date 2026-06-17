import {
  buildRoadmapPath,
  parseRoadmapParams,
  type RoadmapParams,
  roadmapReturnQuery,
} from "@/lib/roadmap/params";

export function getDocHref(
  phaseId: number,
  slug: string,
  returnTo?: Pick<RoadmapParams, "tab" | "phase" | "step">,
): string {
  const base = `/docs/phase-${phaseId}/${slug}`;
  if (!returnTo) return base;

  const query = roadmapReturnQuery(returnTo);
  return query ? `${base}?${query}` : base;
}

export function getRoadmapReturnHref(searchParams: URLSearchParams): string {
  return buildRoadmapPath(parseRoadmapParams(searchParams));
}
