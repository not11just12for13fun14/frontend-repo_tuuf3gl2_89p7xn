import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_70%,rgba(2,6,23,1)_100%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />

      <footer className="relative border-t border-white/10/10">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} PulseOps, Inc.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
