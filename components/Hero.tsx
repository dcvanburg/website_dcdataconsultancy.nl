import Link from "next/link";
import { hero } from "@/lib/site-content";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden section-dark pt-24">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.20) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {hero.heading}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mb-10 leading-relaxed">
            {hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={hero.primaryCta.href}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-center"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="px-8 py-4 text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium text-base rounded-xl transition-all text-center"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
              {hero.trustBar.label}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {hero.trustBar.clients.map((c) => (
                <span
                  key={c}
                  className="text-white/60 text-sm font-medium tracking-tight"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
