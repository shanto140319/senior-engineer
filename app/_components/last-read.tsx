"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatLastReadTime } from "@/lib/last-read/format-time";
import { getLastRead } from "@/lib/last-read/storage";
import type { LastReadEntry } from "@/lib/last-read/types";

export function LastRead() {
  const [entries, setEntries] = useState<LastReadEntry[]>([]);

  useEffect(() => {
    const load = () => setEntries(getLastRead());
    load();

    window.addEventListener("last-read-updated", load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener("last-read-updated", load);
      window.removeEventListener("storage", load);
    };
  }, []);

  if (entries.length === 0) return null;

  return (
    <section className="px-6 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">Last Read</h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Pick up where you left off — your three most recent guides.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {entries.map((entry) => {
            const color = entry.topicColor ?? "#6366f1";
            const title = entry.topicTitle ?? entry.chapterTitle;
            const subtitle = entry.topicTitle ? entry.chapterTitle : `Phase ${entry.phaseId}`;

            return (
              <Link
                key={`${entry.phaseId}-${entry.slug}-${entry.topicId ?? "chapter"}`}
                href={entry.href}
                className="group flex flex-col rounded-2xl border border-white/5 bg-[#0d0d1a] p-4 transition-all duration-200 hover:scale-[1.02] hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/10"
                style={{ borderColor: `${color}33` }}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{
                      background: `${color}18`,
                      border: `1px solid ${color}33`,
                    }}
                  >
                    {entry.topicIcon ?? "📖"}
                  </div>
                  <span className="shrink-0 text-[11px] font-medium text-slate-500">
                    {formatLastReadTime(entry.readAt)}
                  </span>
                </div>

                <h3 className="text-sm font-semibold leading-snug text-slate-100 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-1 flex-1 text-xs text-slate-500">{subtitle}</p>

                <span
                  className="mt-3 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color }}
                >
                  Continue reading →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
