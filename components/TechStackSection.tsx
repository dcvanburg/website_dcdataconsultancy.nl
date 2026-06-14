import { techStack } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function TechStackSection() {
  return (
    <section
      id={techStack.sectionId}
      className="relative isolate overflow-hidden py-24 md:py-32 bg-night-field text-night-ink"
    >
      <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-brand absolute -right-32 top-0 w-[34rem] h-[34rem] opacity-60 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal as="p" className="eyebrow text-brand-bright mb-6">{techStack.eyebrow}</Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-night-ink mb-6"
          >
            {techStack.heading}
          </Reveal>
          <Reveal as="p" delay={120} className="text-night-soft-ink text-lg leading-relaxed">
            {techStack.intro}
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 border border-white/10 rounded-xl overflow-hidden">
          {techStack.categories.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 3) * 70} className="h-full">
              <div className="h-full bg-night-soft/80 p-7 md:p-8">
                <h3 className="font-mono text-[10px] tracking-[0.22em] text-brand-bright uppercase mb-5">
                  {cat.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-night-elevated border border-white/8 text-night-soft-ink"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
