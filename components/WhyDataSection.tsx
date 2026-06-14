import { problemSection } from "@/lib/site-content";

export default function WhyDataSection() {
  return (
    <section id={problemSection.sectionId} className="py-28 md:py-36 surface-night relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 text-night-ink grid-dot pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-night-ink/60 mb-6">{problemSection.eyebrow}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-8">
              {problemSection.heading}
            </h2>
            <p className="text-night-ink/70 text-lg leading-relaxed max-w-md">
              {problemSection.intro}
            </p>
          </div>

          <ul className="lg:col-span-7 space-y-7">
            {problemSection.problems.map((p) => (
              <li key={p.title} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-brand text-base leading-7 shrink-0 mt-0.5"
                >
                  {"::"}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-night-ink text-xl mb-1">
                    {p.title}
                  </h3>
                  <p className="text-night-ink/70 text-base leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
