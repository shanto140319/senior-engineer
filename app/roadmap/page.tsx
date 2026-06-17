import type { Metadata } from "next";
import { Suspense } from "react";
import { RoadmapView } from "./_components/roadmap-view";
import "./roadmap.css";

export const metadata: Metadata = {
  title: "AI-Age Senior Engineer Roadmap",
  description:
    "A practical 26-week roadmap from frontend developer to AI-age senior engineer — Spring Boot, system design, and AI-native engineering.",
};

export default function RoadmapPage() {
  return (
    <div className="roadmap-page">
      <Suspense fallback={<div className="min-h-screen bg-roadmap-bg" />}>
        <RoadmapView />
      </Suspense>
    </div>
  );
}
