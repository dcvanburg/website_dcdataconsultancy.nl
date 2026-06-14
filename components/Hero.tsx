import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";
import LineageDiagram from "@/components/ui/LineageDiagram";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night-field text-night-ink">
      <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-brand drift-slow absolute -top-24 -left-24 w-[36rem] h-[36rem] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px rule-glow pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal as="p" className="chip border-white/10 bg-white/5 text-night-soft-ink mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
              {hero.badge}
            </Reveal>

            <Reveal
              as="h1"
              delay={60}
              className="font-display font-extrabold tracking-tight text-night-ink text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[0.98] mb-7 text-balance"
            >
              {hero.heading}
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="text-lg md:text-xl text-night-soft-ink leading-relaxed max-w-2xl mb-9"
            >
              {hero.subheading}
            </Reveal>

            <Reveal delay={220} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-brand-ink font-display font-semibold text-base rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
              >
                {hero.primaryCta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 font-display font-semibold text-base text-night-ink border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="w-4 h-4 text-brand-bright group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={260} className="lg:col-span-5">
            <LineageDiagram />
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16 md:mt-24 border-t border-white/8 pt-8">
          <p className="eyebrow text-night-muted-ink mb-5">{hero.trustBar.label}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {hero.trustBar.clients.map((c) => (
              <span
                key={c}
                className="font-display font-medium text-night-soft-ink/80 text-sm sm:text-base tracking-tight"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
