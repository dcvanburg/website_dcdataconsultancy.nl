import { techStack } from "@/lib/site-content";
import SectionShell from "@/components/ui/SectionShell";

export default function TechStackSection() {
  return (
    <SectionShell
      id={techStack.sectionId}
      eyebrow={techStack.eyebrow}
      heading={techStack.heading}
      intro={techStack.intro}
      variant="dark-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.categories.map((cat) => (
          <div
            key={cat.name}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {cat.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] text-white/80 text-sm border border-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
