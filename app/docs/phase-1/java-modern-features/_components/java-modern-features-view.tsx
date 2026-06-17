"use client";

import { Suspense } from "react";
import { ChapterDocView } from "@/app/docs/_components/chapter-doc-view";
import {
  javaModernFeaturesMeta,
  javaModernFeaturesQuickRef,
  javaModernFeaturesTopics,
} from "@/lib/docs/phase-1/java-modern-features/data";

export function JavaModernFeaturesView() {
  return (
    <ChapterDocView
      meta={javaModernFeaturesMeta}
      topics={javaModernFeaturesTopics}
      topicPhaseLabel={`PHASE ${javaModernFeaturesMeta.phaseId} · MODERN JAVA`}
      quickReference={javaModernFeaturesQuickRef}
    />
  );
}

export function JavaModernFeaturesPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060911]" />}>
      <JavaModernFeaturesView />
    </Suspense>
  );
}
