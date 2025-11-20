import { Gauge, Activity, BellRing, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Real-time observability",
    desc: "Stream metrics, traces, and logs with <100ms ingest latency across regions.",
  },
  {
    icon: Activity,
    title: "Anomaly detection",
    desc: "Detect outliers and regressions with adaptive baselines and ML signals.",
  },
  {
    icon: BellRing,
    title: "Smart alerting",
    desc: "Route incidents to PagerDuty, Slack and email with noise‑reduced alerts.",
  },
  {
    icon: ShieldCheck,
    title: "Zero‑trust security",
    desc: "Least‑privilege agents, SSO/SAML, audit trails and encrypted at rest.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(99,102,241,0.12),transparent),radial-gradient(600px_300px_at_90%_20%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Everything you need to keep servers healthy</h2>
          <p className="mt-3 text-white/70">From node to cluster, get a unified view of performance with blazing‑fast analytics.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/[0.07] transition shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 border border-white/10 grid place-items-center text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
