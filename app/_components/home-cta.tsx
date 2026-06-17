import Link from "next/link";

export function HomeCta() {
  return (
    <section className="px-6 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-2xl border border-indigo-500/20 px-8 py-12 text-center sm:px-12 sm:py-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(236,72,153,0.06) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.2) 0%, transparent 50%)",
            }}
          />

          <div className="relative">
            <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
              Ready to begin?
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-100 sm:text-3xl">
              Your senior engineer journey starts here
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-slate-400 sm:text-base">
              Open the full roadmap to see every phase, step, and practical exercise.
              New documentation chapters will appear here as you progress.
            </p>
            <Link
              href="/roadmap"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-8 py-3.5 text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/20 hover:text-indigo-200"
            >
              Open Full Roadmap
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
