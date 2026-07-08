"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { DocPageMeta, DocTopic, QuickReferenceItem } from "@/lib/docs/types";
import { getRoadmapReturnHref } from "@/lib/docs/paths";
import { DocHeader } from "./doc-header";
import { QuickReference } from "./quick-reference";
import { TopicDetail } from "./topic-detail";
import { TopicGrid } from "./topic-grid";
import { useRecordLastRead } from "./use-record-last-read";

function initialTopicId(topics: DocTopic[], topicParam: string | null): string | null {
  if (!topicParam) return null;
  return topics.some((topic) => topic.id === topicParam) ? topicParam : null;
}

interface ChapterDocViewProps {
  meta: DocPageMeta;
  topics: DocTopic[];
  topicPhaseLabel: string;
  quickReference?: QuickReferenceItem[];
  quickReferenceTitle?: string;
  headerExtra?: React.ReactNode;
  footerExtra?: React.ReactNode;
}

export function ChapterDocView({
  meta,
  topics,
  topicPhaseLabel,
  quickReference,
  quickReferenceTitle,
  headerExtra,
  footerExtra,
}: ChapterDocViewProps) {
  const searchParams = useSearchParams();
  const roadmapHref = useMemo(() => getRoadmapReturnHref(searchParams), [searchParams]);

  const [activeTopicId, setActiveTopicId] = useState<string | null>(() =>
    initialTopicId(topics, searchParams.get("topic")),
  );
  const activeTopic = topics.find((t) => t.id === activeTopicId) ?? null;

  useRecordLastRead(meta, activeTopic);

  return (
    <>
      <DocHeader
        meta={meta}
        activeTopic={activeTopic}
        roadmapHref={roadmapHref}
        topicPhaseLabel={topicPhaseLabel}
        onBackToTopics={() => setActiveTopicId(null)}
      >
        {headerExtra}
      </DocHeader>

      <div className="mx-auto max-w-[960px] px-6 py-8">
        {!activeTopicId && (
          <>
            <TopicGrid topics={topics} onSelect={setActiveTopicId} />
            {quickReference && (
              <QuickReference items={quickReference} title={quickReferenceTitle} />
            )}
            {footerExtra}
          </>
        )}

        {activeTopic && activeTopicId && (
          <TopicDetail
            topic={activeTopic}
            topics={topics}
            activeTopicId={activeTopicId}
            onBack={() => setActiveTopicId(null)}
            onSelectTopic={setActiveTopicId}
          />
        )}
      </div>
    </>
  );
}
