import { LineChart, Activity, Cpu } from "lucide-react";

export default function Showcase() {
  return (
    <section id="metrics" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-white/80">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 grid place-items-center text-cyan-300 border border-white/10">
              <LineChart className="h-4 w-4" />
            </div>
            <p className="text-sm">Live query</p>
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="text-xs text-white/60">SELECT avg(cpu), p95(latency) FROM nodes GROUP BY cluster LIMIT 10</div>
            <div className="mt-3 h-48 rounded-lg bg-gradient-to-tr from-cyan-500/10 to-fuchsia-500/10 border border-white/10" />
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-white font-semibold tracking-tight">Query billions of datapoints in milliseconds</h3>
          <p className="mt-3 text-white/70">Columnar storage and vectorized execution let you slice and dice metrics instantly. Explore heatmaps, percentile bands and correlations without waiting.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Ingest / sec", value: "7.5M", icon: Activity },
              { label: "Clusters", value: "320", icon: Cpu },
              { label: "SLOs tracked", value: "2.1K", icon: LineChart },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="mx-auto h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 border border-white/10">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
