import type { RoadmapPracticalItem } from "./types";

export function parsePracticalItem(item: RoadmapPracticalItem): {
  text: string;
  slug?: string;
} {
  if (typeof item === "string") {
    return { text: item };
  }
  return item;
}
