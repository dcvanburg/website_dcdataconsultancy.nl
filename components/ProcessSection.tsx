import { processSection } from "@/lib/site-content";

export default function ProcessSection() {
  return (
    <section id={processSection.sectionId} className="py-28 md:py-36 surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow eyebrow-brand mb-6">{processSection.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
            {processSection.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            {processSection.intro}
          </p>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-12 right-12 h-px bg-rule"
          />
          {processSection.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-semibold text-base mb-6 border ${
                  i === 0
                    ? "bg-brand text-brand-ink border-brand"
                    : "bg-surface text-ink-muted border-rule"
                }`}
              >
                {step.number}
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
