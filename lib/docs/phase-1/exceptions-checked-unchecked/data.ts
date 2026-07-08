import type { DocPageMeta, DocTopic, QuickReferenceItem } from "@/lib/docs/types";
import topics from "./topics.json";

export const exceptionsMeta: DocPageMeta = {
  phaseId: 1,
  phaseLabel: "PHASE 1 · BACKEND FOUNDATION",
  title: "Checked vs Unchecked Exceptions",
  description:
    "Master Java's exception hierarchy, know exactly when to use checked versus unchecked exceptions, and handle failures the way senior engineers do — cleanly, deliberately, and in one place.",
  slug: "exceptions-checked-unchecked",
};

export const exceptionsTopics = topics as DocTopic[];

export const exceptionsQuickRef: QuickReferenceItem[] = [
  {
    color: "#6366f1",
    title: "The defining rule",
    line: "Subclass of RuntimeException → unchecked. Subclass of Exception (but not Runtime) → checked.",
  },
  {
    color: "#0ea5e9",
    title: "Checked = recoverable",
    line: "Use for foreseeable, recoverable failures the caller must consciously handle (I/O, network).",
  },
  {
    color: "#f59e0b",
    title: "Unchecked = bug",
    line: "Use for programming errors and broken preconditions. Fix the code, don't catch the symptom.",
  },
  {
    color: "#10b981",
    title: "When unsure",
    line: "Modern Java leans unchecked by default. Checked is the deliberate exception, not the norm.",
  },
  {
    color: "#14b8a6",
    title: "Never swallow",
    line: "No empty catch blocks. Log with context, then handle or re-throw — always keep the cause.",
  },
  {
    color: "#22c55e",
    title: "Spring pattern",
    line: "Throw unchecked domain exceptions; map them to HTTP status in one @RestControllerAdvice.",
  },
];
