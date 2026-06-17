import Link from "next/link";
import { phases } from "@/lib/roadmap/data";

export function DocChapters() {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
            Documentation Chapters
          </h2>
          <p className="mt-2 max-w-lg text-sm text-slate-500 sm:text-base">
            Each chapter will be filled with guides, notes, and walkthroughs as the
            journey progresses. Start with the roadmap — the rest is on the way.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => {
            const isLive = phase.id === 1;

            const card = (
              <div
                className="group relative flex h-full flex-col rounded-2xl border border-white/5 bg-[#0d0d1a] p-5 transition-all duration-200"
                style={{
                  borderColor: isLive ? `${phase.color}44` : undefined,
                }}
              >
                {!isLive && (
                  <span className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Soon
                  </span>
                )}

                {isLive && (
                  <span
                    className="absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: `${phase.color}18`,
                      color: phase.color,
                      border: `1px solid ${phase.color}33`,
                    }}
                  >
                    In progress
                  </span>
                )}

                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                  style={{
                    background: `${phase.color}18`,
                    border: `1px solid ${phase.color}33`,
                  }}
                >
                  {phase.icon}
                </div>

                <span
                  className="text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: phase.color }}
                >
                  Phase {phase.id}
                </span>

                <h3
                  className={`mt-1 text-base font-semibold ${isLive ? "text-slate-100 group-hover:text-white" : "text-slate-300"}`}
                >
                  {phase.title}
                </h3>

                <p className="mt-1 flex-1 text-sm text-slate-500">{phase.subtitle}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      background: `${phase.color}12`,
                      color: phase.color,
                    }}
                  >
                    {phase.duration}
                  </span>

                  {isLive && (
                    <span className="text-xs font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">
                      View roadmap →
                    </span>
                  )}
                </div>
              </div>
            );

            if (isLive) {
              return (
                <Link
                  key={phase.id}
                  href="/roadmap"
                  className="block rounded-2xl transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  {card}
                </Link>
              );
            }

            return (
              <div key={phase.id} className="opacity-60">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
