import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offerSection } from "@/lib/site-content";

export default function OfferSection() {
  return (
    <section id={offerSection.sectionId} className="py-28 md:py-36 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow eyebrow-brand mb-6">{offerSection.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
            {offerSection.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            {offerSection.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-rule">
          {offerSection.pillars.map((p, i) => {
            const isLast = i === offerSection.pillars.length - 1;
            return (
              <div
                key={p.title}
                className={`py-10 md:py-12 ${i > 0 ? "md:pl-10" : ""} ${
                  !isLast ? "md:pr-10 md:border-r border-rule" : ""
                } relative`}
              >
                <p
                  className={`font-mono text-xs uppercase tracking-[0.2em] mb-6 ${
                    p.primary ? "text-brand" : "text-ink-muted"
                  }`}
                >
                  {p.number} / {p.title}
                </p>
                <h3 className="font-display font-bold text-2xl md:text-[1.65rem] tracking-tight text-ink mb-3">
                  {p.tagline}
                </h3>
                <p className="text-ink-soft leading-relaxed mb-6">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink hover:text-brand transition-colors"
                >
                  Lees meer
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {p.primary && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-10 md:top-12 h-8 w-0.5 bg-brand"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
