import Link from "next/link";
import { ArrowRight, Plug, Layers, Waypoints, type LucideIcon } from "lucide-react";
import { aiInterfaceSection } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

// One icon per layer, in the order the layers are defined in site-content.
const LAYER_ICONS: LucideIcon[] = [Plug, Layers, Waypoints];

export default function AiInterfaceSection() {
  return (
    <section
      id={aiInterfaceSection.sectionId}
      className="relative isolate overflow-hidden py-24 md:py-32 bg-night-field text-night-ink"
    >
      <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-brand absolute -top-32 left-1/3 w-[36rem] h-[30rem] opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow text-brand-bright mb-6">
            {aiInterfaceSection.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-night-ink mb-6"
          >
            {aiInterfaceSection.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-night-soft-ink text-lg leading-relaxed">
            {aiInterfaceSection.intro}
          </Reveal>
        </div>

        <ul className="grid md:grid-cols-3 gap-px bg-night-rule border border-night-rule rounded-xl overflow-hidden">
          {aiInterfaceSection.layers.map((layer, i) => {
            const Icon = LAYER_ICONS[i] ?? Plug;
            return (
              <Reveal as="li" key={layer.title} delay={i * 80} className="h-full">
                <Link
                  href={layer.href}
                  className="group flex h-full flex-col p-8 md:p-10 bg-night-soft/60 hover:bg-night-soft transition-colors"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-bright"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-sm text-night-muted-ink">{layer.number}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl tracking-tight text-night-ink mb-2 group-hover:text-brand-bright transition-colors">
                    {layer.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-bright mb-5">
                    {layer.subtitle}
                  </p>
                  <p className="text-night-soft-ink leading-relaxed mb-6">{layer.summary}</p>

                  <div className="mt-auto pt-6 border-t border-night-rule">
                    <p className="eyebrow text-night-muted-ink mb-3">Waarom data engineering</p>
                    <p className="text-night-soft-ink text-sm leading-relaxed">
                      {layer.whyDataEngineering}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120} className="mt-14 md:mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <p className="text-night-soft-ink text-lg leading-relaxed max-w-3xl flex-1">
            {aiInterfaceSection.closing}
          </p>
          <Link
            href={aiInterfaceSection.cta.href}
            className="group shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
          >
            {aiInterfaceSection.cta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
