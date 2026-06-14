import { testimonialsSection } from "@/lib/site-content";

export default function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36 surface-canvas border-y border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow eyebrow-brand mb-6">{testimonialsSection.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
            {testimonialsSection.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            {testimonialsSection.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonialsSection.quotes.map((q, i) => (
            <figure
              key={i}
              className={`pl-6 border-l-2 ${i === 0 ? "border-brand" : "border-rule"}`}
            >
              <blockquote className="text-ink-soft text-lg leading-relaxed mb-6 text-balance">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
