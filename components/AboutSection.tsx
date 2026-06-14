import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutSection } from "@/lib/site-content";

export default function AboutSection() {
  return (
    <section id={aboutSection.sectionId} className="py-28 md:py-36 surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="order-2 lg:order-1">
            <p className="eyebrow eyebrow-brand mb-6">{aboutSection.eyebrow}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-10">
              {aboutSection.heading}
            </h2>
            <div className="space-y-5 text-ink-soft text-lg leading-relaxed mb-12">
              {aboutSection.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href={aboutSection.cta.href}
              className="inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
            >
              {aboutSection.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 max-w-md">
              {aboutSection.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-display font-extrabold text-5xl md:text-6xl text-ink leading-none tracking-tight mb-3">
                    {h.value}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted leading-relaxed">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-rule">
              <p className="eyebrow mb-4">Sectoren</p>
              <ul className="space-y-2">
                {aboutSection.industries.map((s) => (
                  <li key={s} className="text-ink-soft text-base leading-relaxed">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
