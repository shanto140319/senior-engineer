import type { LastReadEntry } from "./types";

const STORAGE_KEY = "senior-engineer:last-read";
const MAX_ENTRIES = 3;

function entryKey(entry: Pick<LastReadEntry, "phaseId" | "slug" | "topicId">): string {
  return `${entry.phaseId}/${entry.slug}/${entry.topicId ?? ""}`;
}

export function getLastRead(): LastReadEntry[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item): item is LastReadEntry =>
          typeof item === "object" &&
          item !== null &&
          typeof (item as LastReadEntry).phaseId === "number" &&
          typeof (item as LastReadEntry).slug === "string" &&
          typeof (item as LastReadEntry).href === "string" &&
          typeof (item as LastReadEntry).readAt === "number",
      )
      .sort((a, b) => b.readAt - a.readAt)
      .slice(0, MAX_ENTRIES);
  } catch {
    return [];
  }
}

export function recordLastRead(entry: LastReadEntry): void {
  if (typeof window === "undefined") return;

  const key = entryKey(entry);
  const next = [entry, ...getLastRead().filter((item) => entryKey(item) !== key)].slice(
    0,
    MAX_ENTRIES,
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("last-read-updated"));
}
