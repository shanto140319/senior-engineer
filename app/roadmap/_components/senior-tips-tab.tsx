import { seniorTips } from "@/lib/roadmap/data";
import { tipColorStyle } from "@/lib/roadmap/styles";

export function SeniorTipsTab() {
  return (
    <div>
      <div className="mb-7">
        <h2 className="mb-2 text-[22px] font-bold text-roadmap-text">
          Senior vs Mid-Level: The Real Gap
        </h2>
        <p className="text-sm text-roadmap-muted">
          Code quality is table stakes. These habits are what actually separate levels.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3.5">
        {seniorTips.map(({ icon, title, points, color }) => (
          <div
            key={title}
            className="rounded-[14px] border border-roadmap-border bg-roadmap-surface px-[22px] py-5"
          >
            <div className="mb-3.5 flex items-center gap-2.5">
              <span
                style={tipColorStyle(color)}
                className="tip-icon-box flex size-[38px] items-center justify-center rounded-[10px] text-lg"
              >
                {icon}
              </span>
              <span className="text-[14.5px] font-semibold text-roadmap-text">{title}</span>
            </div>
            {points.map((point, index) => (
              <div
                key={point}
                className={`flex items-start gap-2.5 ${index < points.length - 1 ? "mb-2.5" : ""}`}
              >
                <span
                  style={tipColorStyle(color)}
                  className="tip-bullet mt-[7px] size-[5px] shrink-0 rounded-full"
                />
                <span className="text-[13px] leading-relaxed text-roadmap-subtle">{point}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="roadmap-compounding-gradient mt-5 rounded-[14px] border border-indigo-500/30 px-7 py-6">
        <div className="mb-2.5 text-[13px] font-semibold tracking-widest text-roadmap-indigo-light">
          THE COMPOUNDING PRINCIPLE
        </div>
        <p className="max-w-[720px] text-[15px] leading-relaxed text-roadmap-text">
          AI can write a working endpoint in 10 seconds. It cannot decide whether that endpoint
          should exist, whether it&apos;s secure, how it&apos;ll behave under load, or whether it
          solves the right problem. Every hour you spend on fundamentals and judgment is an hour
          that compounds — it makes every AI tool you use dramatically more powerful, and makes
          you genuinely irreplaceable.
        </p>
      </div>
    </div>
  );
}
