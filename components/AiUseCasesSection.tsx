import {
  BookOpen,
  MessageSquare,
  FileSearch,
  Bot,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { aiUseCases } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  MessageSquare,
  FileSearch,
  Bot,
  Sparkles,
};

export default function AiUseCasesSection() {
  return (
    <section id={aiUseCases.sectionId} className="py-24 md:py-32 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow eyebrow-brand mb-6">{aiUseCases.eyebrow}</Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
          >
            {aiUseCases.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
            {aiUseCases.intro}
          </Reveal>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {aiUseCases.cases.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Star;
            return (
              <Reveal as="li" key={c.title} delay={(i % 3) * 70} className="border-t border-rule pt-6">
                <div className="w-11 h-11 rounded-xl border border-rule bg-surface flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-2 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{c.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
