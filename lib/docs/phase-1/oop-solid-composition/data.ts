import type { DocPageMeta, DocTopic, SolidQuickReferenceRow } from "@/lib/docs/types";
import { enrichOopTopics } from "./enrich-oop-theory";
import topics from "./topics.json";

export const oopSolidMeta: DocPageMeta = {
  phaseId: 1,
  phaseLabel: "PHASE 1 · BACKEND FOUNDATION",
  title: "OOP Deep Dive",
  description:
    "Master the 4 OOP pillars, all 5 SOLID principles, and composition over inheritance — with beginner-to-advanced Spring Boot examples.",
  slug: "oop-solid-composition",
};

export const oopSolidTopics = enrichOopTopics(topics as DocTopic[]);

export const solidBadges = [
  { letter: "S", label: "Single Responsibility", color: "#6366f1", id: "srp" },
  { letter: "O", label: "Open/Closed", color: "#0ea5e9", id: "ocp" },
  { letter: "L", label: "Liskov Substitution", color: "#10b981", id: "lsp" },
  { letter: "I", label: "Interface Segregation", color: "#f59e0b", id: "isp" },
  { letter: "D", label: "Dependency Inversion", color: "#ec4899", id: "dip" },
];

export const solidQuickReference: SolidQuickReferenceRow[] = [
  {
    letter: "S",
    color: "#6366f1",
    rule: "Single Responsibility",
    summary: "One class = one reason to change",
    topicId: "srp",
  },
  {
    letter: "O",
    color: "#0ea5e9",
    rule: "Open / Closed",
    summary: "Add new behaviour without editing existing code",
    topicId: "ocp",
  },
  {
    letter: "L",
    color: "#10b981",
    rule: "Liskov Substitution",
    summary: "Subclasses must not break what the base class promises",
    topicId: "lsp",
  },
  {
    letter: "I",
    color: "#f59e0b",
    rule: "Interface Segregation",
    summary: "Many small interfaces beat one fat interface",
    topicId: "isp",
  },
  {
    letter: "D",
    color: "#ec4899",
    rule: "Dependency Inversion",
    summary: "Depend on abstractions (interfaces), not concretions",
    topicId: "dip",
  },
  {
    letter: "⊕",
    color: "#8b5cf6",
    rule: "Composition > Inheritance",
    summary: "HAS-A beats IS-A — build by combining small pieces",
    topicId: "coi",
  },
];
