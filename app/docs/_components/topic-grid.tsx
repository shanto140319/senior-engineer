import type { DocTopic } from "@/lib/docs/types";
import { topicColorStyle } from "@/lib/docs/styles";

interface TopicGridProps {
  topics: DocTopic[];
  onSelect: (id: string) => void;
}

export function TopicGrid({ topics, onSelect }: TopicGridProps) {
  return (
    <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-3.5">
      {topics.map((topic) => (
        <button
          key={topic.id}
          type="button"
          onClick={() => onSelect(topic.id)}
          style={topicColorStyle(topic.color)}
          className="topic-card cursor-pointer rounded-2xl border bg-[#0a0e1a] px-5 py-[22px] text-left transition-all duration-200 hover:brightness-110"
        >
          <div className="topic-card-icon mb-3.5 flex size-[46px] items-center justify-center rounded-xl text-[22px]">
            {topic.icon}
          </div>
          <div className="mb-1.5 text-base font-bold text-roadmap-text">{topic.title}</div>
          <div className="mb-3.5 text-[12.5px] leading-snug text-roadmap-muted">{topic.tagline}</div>
          <div className="topic-text text-xs font-medium">{topic.sections.length} sections →</div>
        </button>
      ))}
    </div>
  );
}
