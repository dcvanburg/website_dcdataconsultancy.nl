import { testimonialsSection } from "@/lib/site-content";
import SectionShell from "@/components/ui/SectionShell";

export default function TestimonialsSection() {
  return (
    <SectionShell
      eyebrow={testimonialsSection.eyebrow}
      heading={testimonialsSection.heading}
      intro={testimonialsSection.intro}
      variant="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsSection.quotes.map((q, i) => (
          <figure
            key={i}
            className="p-7 rounded-2xl bg-gray-50 border border-gray-200"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-blue-200 mb-5"
              aria-hidden="true"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <blockquote className="text-gray-800 leading-relaxed mb-5 text-[15px]">
              “{q.text}”
            </blockquote>
            <figcaption className="text-sm text-gray-500 border-t border-gray-200 pt-3">
              {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
