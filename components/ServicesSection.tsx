import Link from "next/link";
import {
  Database,
  BarChart2,
  Cpu,
  Layers,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  Database,
  BarChart2,
  Cpu,
  Layers,
};

export default function ServicesSection() {
  return (
    <section id={services.sectionId} className="py-24 md:py-32 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow eyebrow-brand mb-6">Diensten</Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
          >
            {services.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
            {services.subheading}
          </Reveal>
        </div>

        <ul className="grid md:grid-cols-2 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
          {services.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Database;
            const isPrimary = "primary" in item && item.primary;
            return (
              <Reveal as="li" key={item.title} delay={(i % 2) * 80} className="h-full">
                <Link href={item.href} className="group flex h-full flex-col bg-surface p-8 md:p-10 hover:bg-canvas transition-colors">
                  <div className="flex items-start gap-5 mb-5">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${
                        isPrimary
                          ? "bg-brand text-brand-ink border-brand"
                          : "bg-rule-soft text-ink-soft border-rule"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-1 ${isPrimary ? "text-brand" : "text-ink-muted"}`}>
                        {item.tagline}
                      </p>
                      <h3 className="font-display font-bold text-2xl text-ink tracking-tight group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-ink-soft leading-relaxed mb-6 flex-1">{item.description}</p>
                  <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink group-hover:text-brand transition-colors">
                    Bekijk dienst
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
