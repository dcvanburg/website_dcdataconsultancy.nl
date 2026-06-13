import {
  TrendingUp,
  Users,
  AlertTriangle,
  Star,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { aiUseCases } from "@/lib/site-content";
import SectionShell from "@/components/ui/SectionShell";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  AlertTriangle,
  Star,
  MessageSquare,
};

export default function AiUseCasesSection() {
  return (
    <SectionShell
      id={aiUseCases.sectionId}
      eyebrow={aiUseCases.eyebrow}
      heading={aiUseCases.heading}
      intro={aiUseCases.intro}
      variant="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {aiUseCases.cases.map((c) => {
          const Icon = iconMap[c.icon];
          return (
            <div
              key={c.title}
              className="p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all bg-white"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {Icon ? <Icon className="w-5 h-5" aria-hidden="true" /> : null}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{c.description}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
