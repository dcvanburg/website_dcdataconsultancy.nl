import Link from "next/link";
import { offerSection } from "@/lib/site-content";
import SectionShell from "@/components/ui/SectionShell";
import { ArrowRight } from "lucide-react";

export default function OfferSection() {
  return (
    <SectionShell
      id={offerSection.sectionId}
      eyebrow={offerSection.eyebrow}
      heading={offerSection.heading}
      intro={offerSection.intro}
      variant="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {offerSection.pillars.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className={`group relative p-8 rounded-2xl border transition-all hover:-translate-y-1 ${
              p.primary
                ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-xl shadow-blue-500/20"
                : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-lg"
            }`}
          >
            <p
              className={`text-xs font-mono mb-4 ${
                p.primary ? "text-blue-200" : "text-gray-400"
              }`}
            >
              {p.number}
            </p>
            <h3
              className={`text-2xl font-bold mb-1 ${
                p.primary ? "text-white" : "text-gray-900"
              }`}
            >
              {p.title}
            </h3>
            <p
              className={`text-sm font-medium mb-4 ${
                p.primary ? "text-blue-100" : "text-blue-600"
              }`}
            >
              {p.tagline}
            </p>
            <p
              className={`leading-relaxed mb-6 ${
                p.primary ? "text-white/85" : "text-gray-600"
              }`}
            >
              {p.description}
            </p>
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                p.primary ? "text-white" : "text-blue-600"
              }`}
            >
              Lees meer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
