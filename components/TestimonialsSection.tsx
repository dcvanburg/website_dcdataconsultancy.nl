import { testimonialsSection } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 surface-canvas border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow eyebrow-brand mb-6">{testimonialsSection.eyebrow}</Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
          >
            {testimonialsSection.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
            {testimonialsSection.intro}
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
          {testimonialsSection.quotes.map((q, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={i * 80}
              className={`h-full p-8 md:p-10 ${i === 0 ? "bg-brand text-brand-ink" : "bg-surface"}`}
            >
              <span
                aria-hidden="true"
                className={`block font-display text-5xl leading-none mb-4 ${i === 0 ? "text-brand-ink/40" : "text-brand/30"}`}
              >
                &ldquo;
              </span>
              <blockquote
                className={`text-lg leading-relaxed mb-8 text-balance ${i === 0 ? "text-brand-ink" : "text-ink-soft"}`}
              >
                {q.text}
              </blockquote>
              <figcaption
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${i === 0 ? "text-brand-ink/80" : "text-ink-muted"}`}
              >
                {q.role}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
