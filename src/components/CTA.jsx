export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-2xl text-center shadow-[0_40px_120px_-40px_rgba(34,211,238,0.35)]">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Start monitoring in minutes</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Install our lightweight agent and unlock full‑stack visibility. No credit card required for the first 14 days.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="h-12 px-6 rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white font-medium hover:brightness-110 transition">Create Account</button>
            <button className="h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-md hover:bg-white/10 transition">Book a demo</button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">SOC 2 Type II • GDPR • HIPAA • ISO 27001</p>
      </div>
    </section>
  )
}
