import { processSection } from "@/lib/site-content";
import SectionShell from "@/components/ui/SectionShell";

export default function ProcessSection() {
  return (
    <SectionShell
      id={processSection.sectionId}
      eyebrow={processSection.eyebrow}
      heading={processSection.heading}
      intro={processSection.intro}
      variant="light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSection.steps.map((step, i) => (
          <div key={step.number} className="relative">
            <div className="flex items-start gap-4 mb-3">
              <span className="font-mono text-blue-600 text-sm font-bold">
                {step.number}
              </span>
              {i < processSection.steps.length - 1 && (
                <div className="flex-1 h-px bg-gray-200 mt-3 hidden lg:block" />
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
