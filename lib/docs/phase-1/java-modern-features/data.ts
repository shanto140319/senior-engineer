import type { DocPageMeta, DocTopic, QuickReferenceItem } from "@/lib/docs/types";
import topics from "./topics.json";

export const javaModernFeaturesMeta: DocPageMeta = {
  phaseId: 1,
  phaseLabel: "PHASE 1 · BACKEND FOUNDATION",
  title: "Modern Java Essentials",
  description:
    "Four features that make your code type-safe, readable, and null-safe. Master these and Spring Boot code will make immediate sense.",
  slug: "java-modern-features",
};

export const javaModernFeaturesTopics = topics as DocTopic[];

export const javaModernFeaturesQuickRef: QuickReferenceItem[] = [
  {
    color: "#6366f1",
    title: "Generics rule",
    line: "Never use raw types — always parameterize List<String>, Map<K,V>",
  },
  {
    color: "#0ea5e9",
    title: "Lambda rule",
    line: "If it's one expression, skip braces and return. (x, y) -> x + y",
  },
  {
    color: "#10b981",
    title: "Streams rule",
    line: "SOURCE → intermediate ops (lazy) → terminal op (executes)",
  },
  {
    color: "#f59e0b",
    title: "Optional rule",
    line: "Never call .get() blindly. Always use .orElse() or .orElseThrow()",
  },
];
