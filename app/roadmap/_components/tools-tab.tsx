import { allTools, catColors, learningOrder } from "@/lib/roadmap/data";
import { catColorStyle, topicColorStyle } from "@/lib/roadmap/styles";

const catColorValues = Object.values(catColors);

export function ToolsTab() {
  return (
    <div>
      <div className="mb-7">
        <h2 className="mb-2 text-[22px] font-bold text-roadmap-text">Your Full Stack</h2>
        <p className="text-sm text-roadmap-muted">
          Every tool here has a practical reason. Master each category in the order shown.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
        {allTools.map(({ cat, items }) => (
          <div
            key={cat}
            className="rounded-[14px] border border-roadmap-border bg-roadmap-surface px-5 py-[18px]"
          >
            <div
              style={catColorStyle(catColors[cat])}
              className="cat-themed-badge mb-3.5 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-0.5 text-[11px] font-semibold tracking-wide"
            >
              {cat}
            </div>
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span
                    style={catColorStyle(catColors[cat])}
                    className="cat-themed-dot size-1.5 shrink-0 rounded-full"
                  />
                  <span className="text-[13.5px] text-roadmap-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-[14px] border border-roadmap-border bg-roadmap-surface px-6 py-[22px]">
        <h3 className="mb-4 text-base font-semibold text-roadmap-text">
          Learning order that compounds
        </h3>
        <div className="flex flex-wrap gap-0">
          {learningOrder.map((topic, index) => (
            <div key={topic} className="mb-2.5 flex items-center">
              <div
                style={topicColorStyle(catColorValues[index % catColorValues.length])}
                className="topic-pill rounded-lg px-3 py-1.5 text-[12.5px] font-medium whitespace-nowrap"
              >
                {topic}
              </div>
              {index < learningOrder.length - 1 && (
                <span className="px-1 text-sm text-roadmap-border-muted">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
