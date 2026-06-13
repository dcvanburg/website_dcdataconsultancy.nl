import { services } from "@/lib/site-content";
import { Database, BarChart2, PieChart, Cpu } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Database,
  BarChart2,
  PieChart,
  Cpu,
};

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            {services.subheading}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {services.heading}
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 p-6 md:p-8 transition-all duration-200 hover:border-blue-500/30"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center mb-6 transition-colors border border-blue-500/20">
                  {Icon && <Icon size={28} className="text-blue-400" />}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-blue-400 text-sm font-medium mb-3">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-white/60 leading-relaxed">{service.description}</p>

                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
