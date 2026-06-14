import { processSection } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function ProcessSection() {
  return (
    <section id={processSection.sectionId} className="py-24 md:py-32 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow eyebrow-brand mb-6">{processSection.eyebrow}</Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
          >
            {processSection.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
            {processSection.intro}
          </Reveal>
        </div>

        <ol className="relative grid md:grid-cols-4 gap-10 md:gap-6">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-12 right-12 h-px bg-rule"
          />
          {processSection.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <div
                className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-mono font-semibold text-sm mb-6 border ${
                  i === 0
                    ? "bg-brand text-brand-ink border-brand shadow-lg shadow-brand/25"
                    : "bg-surface text-ink-muted border-rule"
                }`}
              >
                {step.number}
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
