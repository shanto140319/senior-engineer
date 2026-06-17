"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DocHeader } from "@/app/docs/_components/doc-header";
import { TopicDetail } from "@/app/docs/_components/topic-detail";
import { TopicGrid } from "@/app/docs/_components/topic-grid";
import {
  oopSolidMeta,
  oopSolidTopics,
  solidBadges,
  solidQuickReference,
} from "@/lib/docs/phase-1/oop-solid-composition/data";
import { getRoadmapReturnHref } from "@/lib/docs/paths";
import { topicColorStyle } from "@/lib/docs/styles";
import { SolidQuickReference } from "./solid-quick-reference";

export function OopSolidView() {
  const searchParams = useSearchParams();
  const roadmapHref = useMemo(() => getRoadmapReturnHref(searchParams), [searchParams]);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const activeTopic = oopSolidTopics.find((t) => t.id === activeTopicId) ?? null;

  return (
    <>
      <DocHeader
        meta={oopSolidMeta}
        activeTopic={activeTopic}
        roadmapHref={roadmapHref}
        topicPhaseLabel={`PHASE ${oopSolidMeta.phaseId} · OOP DEEP DIVE`}
        onBackToTopics={() => setActiveTopicId(null)}
      >
        <div className="flex flex-wrap gap-1.5">
          {solidBadges.map(({ letter, label, color, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTopicId(id)}
              style={topicColorStyle(color)}
              className="topic-card flex min-w-[72px] cursor-pointer flex-col items-center rounded-xl border px-5 py-3.5 transition-all hover:brightness-110"
            >
              <span className="topic-text text-[28px] leading-none font-extrabold">{letter}</span>
              <span className="mt-1.5 text-center text-[10px] leading-tight text-roadmap-muted">
                {label}
              </span>
            </button>
          ))}
        </div>
      </DocHeader>

      <div className="mx-auto max-w-[960px] px-6 py-8">
        {!activeTopicId && (
          <>
            <TopicGrid topics={oopSolidTopics} onSelect={setActiveTopicId} />
            <SolidQuickReference rows={solidQuickReference} onSelectTopic={setActiveTopicId} />
          </>
        )}

        {activeTopic && activeTopicId && (
          <TopicDetail
            topic={activeTopic}
            topics={oopSolidTopics}
            activeTopicId={activeTopicId}
            onBack={() => setActiveTopicId(null)}
            onSelectTopic={setActiveTopicId}
          />
        )}
      </div>
    </>
  );
}
