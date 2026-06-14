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

const ICONS: Record<string, LucideIcon> = {
  Database,
  BarChart2,
  Cpu,
  Layers,
};

export default function ServicesSection() {
  return (
    <section id={services.sectionId} className="py-28 md:py-36 surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow eyebrow-brand mb-6">Diensten</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
            {services.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            {services.subheading}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          {services.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Database;
            return (
              <li key={item.title} className="bg-surface p-8 md:p-10">
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className={`shrink-0 w-11 h-11 rounded-md flex items-center justify-center ${
                      "primary" in item && item.primary
                        ? "bg-brand text-brand-ink"
                        : "bg-rule-soft text-ink-soft"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-1 ${
                        "primary" in item && item.primary ? "text-brand" : "text-ink-muted"
                      }`}
                    >
                      {item.tagline}
                    </p>
                    <h3 className="font-display font-bold text-2xl text-ink tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-ink-soft leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink hover:text-brand transition-colors"
                >
                  Bekijk dienst
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
