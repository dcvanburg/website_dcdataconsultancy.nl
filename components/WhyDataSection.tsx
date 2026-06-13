import { problemSection } from "@/lib/site-content";
import SectionShell from "@/components/ui/SectionShell";

export default function WhyDataSection() {
  return (
    <SectionShell
      id={problemSection.sectionId}
      eyebrow={problemSection.eyebrow}
      heading={problemSection.heading}
      intro={problemSection.intro}
      variant="light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {problemSection.problems.map((p) => (
          <div
            key={p.title}
            className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">{p.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
