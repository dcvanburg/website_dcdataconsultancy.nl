import {
  TrendingUp,
  Users,
  AlertTriangle,
  Star,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { aiUseCases } from "@/lib/site-content";

const ICONS: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  AlertTriangle,
  Star,
  MessageSquare,
};

export default function AiUseCasesSection() {
  return (
    <section id={aiUseCases.sectionId} className="py-28 md:py-36 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow eyebrow-brand mb-6">{aiUseCases.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
            {aiUseCases.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            {aiUseCases.intro}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {aiUseCases.cases.map((c) => {
            const Icon = ICONS[c.icon] ?? Star;
            return (
              <li key={c.title} className="border-t border-rule pt-6">
                <Icon className="w-5 h-5 text-brand mb-5" aria-hidden="true" />
                <h3 className="font-display font-bold text-xl text-ink mb-2">
                  {c.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{c.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
