import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(236,72,153,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
          Senior Engineer Journey · Documentation Hub
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-br from-slate-100 via-indigo-200 to-pink-300 bg-clip-text text-transparent">
            From Frontend Dev
          </span>
          <br />
          <span className="bg-gradient-to-br from-indigo-300 via-violet-300 to-pink-400 bg-clip-text text-transparent">
            to AI-Age Senior Engineer
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          A living documentation space for your engineering growth. Practical guides,
          system design notes, and hands-on lessons — built step by step, one chapter at
          a time.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/roadmap"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-indigo-500/40"
          >
            Explore the Roadmap
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <span className="text-sm text-slate-500">
            6 phases · 26 weeks · 100% practical
          </span>
        </div>
      </div>
    </section>
  );
}
