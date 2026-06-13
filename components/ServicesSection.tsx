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

const iconMap: Record<string, LucideIcon> = { Database, BarChart2, Cpu, Layers };

export default function ServicesSection() {
  return (
    <section id={services.sectionId} className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Diensten
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {services.subheading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon];
            const isPrimary = "primary" in item && item.primary;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative p-7 rounded-2xl border transition-all hover:-translate-y-1 ${
                  isPrimary
                    ? "bg-blue-600/10 border-blue-500/40"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isPrimary
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 text-blue-300"
                    }`}
                  >
                    {Icon ? <Icon className="w-5 h-5" aria-hidden="true" /> : null}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-blue-300/90 text-sm">{item.tagline}</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-5">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300">
                  Bekijk dienst
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
