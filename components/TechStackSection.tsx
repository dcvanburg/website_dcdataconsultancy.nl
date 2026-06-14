import { techStack } from "@/lib/site-content";

export default function TechStackSection() {
  return (
    <section id={techStack.sectionId} className="py-28 md:py-36 surface-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow eyebrow-brand mb-6">{techStack.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
            {techStack.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            {techStack.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {techStack.categories.map((cat) => (
            <div key={cat.name} className="bg-surface p-8 md:p-10">
              <h4 className="font-mono text-[10px] tracking-[0.22em] text-ink-muted uppercase mb-6">
                {cat.name}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <li
                    key={it}
                    className="font-mono text-xs px-2.5 py-1 bg-rule-soft text-ink-soft rounded"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
