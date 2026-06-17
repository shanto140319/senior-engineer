import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-sm">
            ⚡
          </span>
          <span className="text-sm font-semibold text-slate-200">
            Senior Engineer
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/roadmap"
            className="rounded-lg bg-indigo-500/15 px-3 py-1.5 text-sm font-medium text-indigo-300 transition-colors hover:bg-indigo-500/25 hover:text-indigo-200"
          >
            Roadmap
          </Link>
        </nav>
      </div>
    </header>
  );
}
