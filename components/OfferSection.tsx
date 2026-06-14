import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offerSection } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function OfferSection() {
  return (
    <section id={offerSection.sectionId} className="py-24 md:py-32 surface-white border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow eyebrow-brand mb-6">{offerSection.eyebrow}</Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
          >
            {offerSection.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
            {offerSection.intro}
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
          {offerSection.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link
                href={p.href}
                className={`group relative flex h-full flex-col p-8 md:p-10 bg-surface transition-colors hover:bg-canvas ${
                  p.primary ? "md:bg-canvas" : ""
                }`}
              >
                {p.primary && (
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-brand" />
                )}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm text-ink-faint">{p.number}</span>
                  {p.primary && (
                    <span className="chip border-brand/30 bg-brand-soft text-brand">
                      hoofdspecialisatie
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-ink mb-2">
                  {p.title}
                </h3>
                <p className={`text-sm font-medium mb-5 ${p.primary ? "text-brand" : "text-ink-muted"}`}>
                  {p.tagline}
                </p>
                <p className="text-ink-soft leading-relaxed mb-8 flex-1">{p.description}</p>
                <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink group-hover:text-brand transition-colors">
                  Lees meer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
