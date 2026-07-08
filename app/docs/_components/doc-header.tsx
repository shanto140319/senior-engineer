import Link from "next/link";
import type { DocPageMeta, DocTopic } from "@/lib/docs/types";
import { topicColorStyle } from "@/lib/docs/styles";

interface DocHeaderProps {
  meta: DocPageMeta;
  activeTopic: DocTopic | null;
  roadmapHref: string;
  topicPhaseLabel: string;
  onBackToTopics: () => void;
  children?: React.ReactNode;
}

export function DocHeader({
  meta,
  activeTopic,
  roadmapHref,
  topicPhaseLabel,
  onBackToTopics,
  children,
}: DocHeaderProps) {
  return (
    <div className="docs-header-gradient border-b border-slate-700 px-6 pt-10 pb-8">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Link
            href={roadmapHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600 px-3 py-1.5 text-[13px] text-roadmap-muted transition-colors hover:text-roadmap-subtle"
          >
            ← Roadmap
          </Link>
          {activeTopic && (
            <button
              type="button"
              onClick={onBackToTopics}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-600 bg-transparent px-3 py-1.5 text-[13px] text-roadmap-muted transition-colors hover:text-roadmap-subtle"
            >
              ← All topics
            </button>
          )}
        </div>

        {!activeTopic && (
          <>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-[11.5px] font-semibold tracking-wide text-roadmap-indigo-light">
              {meta.phaseLabel}
            </div>
            <h1 className="docs-title-gradient mb-3.5 text-[clamp(28px,4vw,48px)] leading-[1.1] font-extrabold">
              {meta.title}
            </h1>
            <p className="mb-8 max-w-[580px] text-[15px] leading-relaxed text-roadmap-muted">
              {meta.description}
            </p>
            {children}
          </>
        )}

        {activeTopic && (
          <div
            style={topicColorStyle(activeTopic.color)}
            className="flex items-center gap-4"
          >
            <div className="topic-icon-box flex size-14 items-center justify-center rounded-2xl text-[28px]">
              {activeTopic.icon}
            </div>
            <div>
              <div className="topic-text mb-1 text-[11px] font-bold tracking-widest">
                {topicPhaseLabel}
              </div>
              <h1 className="docs-topic-title-gradient text-[clamp(20px,3vw,32px)] leading-tight font-extrabold">
                {activeTopic.title}
              </h1>
              <p className="text-[13.5px] text-roadmap-muted">{activeTopic.tagline}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
