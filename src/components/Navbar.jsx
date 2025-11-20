import { Menu, Server, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 blur-2xl" />
      <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md grid place-items-center text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            <Server className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">PulseOps</p>
            <p className="text-xs text-white/60 -mt-0.5">Monitoring & Analytics</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#metrics" className="text-white/70 hover:text-white transition">Metrics</a>
          <a href="#integrations" className="text-white/70 hover:text-white transition">Integrations</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-white/80 backdrop-blur-md hover:bg-white/10 transition">
            <BarChart3 className="h-4 w-4" /> Demo
          </button>
          <button className="inline-flex h-10 items-center rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 px-4 text-white font-medium shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] hover:brightness-110 transition">
            Start Free Trial
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80"><Menu className="h-5 w-5"/></button>
        </div>
      </header>
    </div>
  );
}
