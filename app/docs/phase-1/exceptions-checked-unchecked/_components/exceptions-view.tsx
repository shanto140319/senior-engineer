"use client";

import { Suspense } from "react";
import { ChapterDocView } from "@/app/docs/_components/chapter-doc-view";
import {
  exceptionsMeta,
  exceptionsQuickRef,
  exceptionsTopics,
} from "@/lib/docs/phase-1/exceptions-checked-unchecked/data";

export function ExceptionsView() {
  return (
    <ChapterDocView
      meta={exceptionsMeta}
      topics={exceptionsTopics}
      topicPhaseLabel={`PHASE ${exceptionsMeta.phaseId} · EXCEPTIONS`}
      quickReference={exceptionsQuickRef}
      quickReferenceTitle="Exception cheat sheet"
    />
  );
}

export function ExceptionsPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060911]" />}>
      <ExceptionsView />
    </Suspense>
  );
}
