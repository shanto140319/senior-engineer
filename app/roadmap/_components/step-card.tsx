import Link from "next/link";
import { getDocHref } from "@/lib/docs/paths";
import { parsePracticalItem } from "@/lib/roadmap/practical";
import type { RoadmapPhase, RoadmapStep, TabId } from "@/lib/roadmap/types";
import { phaseColorStyle } from "@/lib/roadmap/styles";

interface StepCardProps {
  id: string;
  step: RoadmapStep;
  stepIndex: number;
  phase: RoadmapPhase;
  activeTab: TabId;
  isExpanded: boolean;
  onToggle: () => void;
}

export function StepCard({
  id,
  step,
  stepIndex,
  phase,
  activeTab,
  isExpanded,
  onToggle,
}: StepCardProps) {
  const returnTo = {
    tab: activeTab,
    phase: phase.id,
    step: stepIndex,
  };

  return (
    <div
      id={id}
      style={phaseColorStyle(phase.color)}
      className={`overflow-hidden rounded-xl border bg-roadmap-elevated transition-colors duration-200 ${
        isExpanded ? "step-card--expanded" : "border-roadmap-border"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center gap-3 border-none bg-transparent px-4 py-3.5 text-left"
      >
        <div className="phase-step-index flex size-[26px] shrink-0 items-center justify-center rounded-lg text-[11px] font-bold">
          {String(stepIndex + 1).padStart(2, "0")}
        </div>
        <span className="flex-1 text-sm font-semibold text-roadmap-text-secondary">
          {step.title}
        </span>
        <span className="text-[13px] text-roadmap-faint">{isExpanded ? "−" : "+"}</span>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="border-t border-roadmap-border pt-3.5">
            {step.practical.map((item, index) => {
              const { text, slug } = parsePracticalItem(item);
              const docHref = slug ? getDocHref(phase.id, slug, returnTo) : null;
              const isPractice = text.startsWith("Practice");

              return (
                <div
                  key={text}
                  className={`flex items-start gap-2.5 ${index < step.practical.length - 1 ? "mb-2.5" : ""}`}
                >
                  <span className="phase-step-index mt-px flex size-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold">
                    →
                  </span>

                  {docHref ? (
                    <Link
                      href={docHref}
                      className={`text-[13px] leading-relaxed transition-colors hover:text-roadmap-indigo-light ${
                        isPractice ? "font-medium text-roadmap-practice" : "font-normal text-roadmap-subtle"
                      }`}
                    >
                      {text}
                      <span className="ml-1.5 text-xs font-semibold text-roadmap-indigo-light">
                        Read guide →
                      </span>
                    </Link>
                  ) : (
                    <span
                      className={`text-[13px] leading-relaxed ${
                        isPractice
                          ? "font-medium text-roadmap-practice"
                          : "font-normal text-roadmap-subtle"
                      }`}
                    >
                      {text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
