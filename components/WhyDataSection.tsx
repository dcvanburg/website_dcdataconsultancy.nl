import { problemSection } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function WhyDataSection() {
  return (
    <section id={problemSection.sectionId} className="py-24 md:py-32 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal as="p" className="eyebrow eyebrow-brand mb-6">
                {problemSection.eyebrow}
              </Reveal>
              <Reveal
                as="h2"
                delay={60}
                className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
              >
                {problemSection.heading}
              </Reveal>
              <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed max-w-md">
                {problemSection.intro}
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-10">
              {problemSection.problems.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={(i % 2) * 80}
                  className="border-t border-rule pt-6 pb-7"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs text-brand">::</span>
                    <h3 className="font-display font-semibold text-ink text-lg tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed pl-7">{p.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
