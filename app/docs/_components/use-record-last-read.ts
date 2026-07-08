"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { DocPageMeta, DocTopic } from "@/lib/docs/types";
import { recordLastRead } from "@/lib/last-read/storage";

export function useRecordLastRead(meta: DocPageMeta, activeTopic: DocTopic | null) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeTopic) {
      params.set("topic", activeTopic.id);
    } else {
      params.delete("topic");
    }

    const query = params.toString();
    const base = `/docs/phase-${meta.phaseId}/${meta.slug}`;
    const href = query ? `${base}?${query}` : base;

    recordLastRead({
      phaseId: meta.phaseId,
      slug: meta.slug,
      chapterTitle: meta.title,
      topicId: activeTopic?.id ?? null,
      topicTitle: activeTopic?.title ?? null,
      topicIcon: activeTopic?.icon ?? null,
      topicColor: activeTopic?.color ?? null,
      href,
      readAt: Date.now(),
    });
  }, [meta, activeTopic, searchParams]);
}
