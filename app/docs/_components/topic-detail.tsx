import type { DocTopic } from "@/lib/docs/types";
import { topicColorStyle } from "@/lib/docs/styles";
import { TopicSection } from "./topic-section";

interface TopicDetailProps {
  topic: DocTopic;
  topics: DocTopic[];
  activeTopicId: string;
  onBack: () => void;
  onSelectTopic: (id: string) => void;
}

export function TopicDetail({
  topic,
  topics,
  activeTopicId,
  onBack,
  onSelectTopic,
}: TopicDetailProps) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-1.5">
        {topic.sections.map((section) => (
          <div
            key={section.heading}
            style={topicColorStyle(topic.color)}
            className="topic-pill rounded-full px-3 py-1 text-[11.5px] font-medium"
          >
            {section.heading}
          </div>
        ))}
      </div>

      {topic.sections.map((section) => (
        <TopicSection key={section.heading} section={section} accentColor={topic.color} />
      ))}

      <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-slate-700 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer rounded-[10px] border border-slate-600 bg-[#0a0e1a] px-[18px] py-2.5 text-[13.5px] font-medium text-roadmap-muted"
        >
          ← All Topics
        </button>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelectTopic(t.id)}
              style={topicColorStyle(t.color)}
              className={`cursor-pointer rounded-[10px] border px-3.5 py-2 text-[12.5px] font-medium transition-all ${
                t.id === activeTopicId
                  ? "topic-nav-btn--active"
                  : "border-slate-600 bg-[#0a0e1a] text-roadmap-muted"
              }`}
              title={t.title}
            >
              {t.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
