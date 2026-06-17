const stats = [
  { value: "6", label: "Learning Phases", color: "#6366f1" },
  { value: "26", label: "Weeks Planned", color: "#0ea5e9" },
  { value: "30+", label: "Practical Steps", color: "#10b981" },
  { value: "∞", label: "Docs to Come", color: "#ec4899" },
];

export function JourneyStats() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-6 py-10 sm:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map(({ value, label, color }) => (
          <div key={label} className="text-center sm:text-left">
            <div
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color }}
            >
              {value}
            </div>
            <div className="mt-1 text-sm text-slate-500">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
