import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(217,70,239,0.18),transparent),radial-gradient(600px_300px_at_20%_20%,rgba(99,102,241,0.2),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Observe. Analyze. Predict.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg md:text-xl text-white/70 max-w-xl"
            >
              PulseOps delivers real‑time server monitoring, anomaly detection and actionable insights—wrapped in a beautiful, glass‑morphic experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="h-12 px-5 rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_20px_60px_-20px_rgba(99,102,241,0.65)] hover:brightness-110 transition">Start Free Trial</button>
              <button className="h-12 px-5 rounded-xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-md hover:bg-white/10 transition">See Live Demo</button>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-white/60">
              <div className="flex -space-x-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 border border-white/20" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-400 to-pink-500 border border-white/20" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 border border-white/20" />
              </div>
              <p className="text-sm">Trusted by teams shipping at scale</p>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
            <div className="pointer-events-none absolute -inset-10 -z-[1] bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-blue-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
