import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-content";

export default function ProjectsSection() {
  return (
    <section id={projects.sectionId} className="py-28 md:py-36 surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-brand mb-6">{projects.eyebrow}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
              {projects.heading}
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              {projects.intro}
            </p>
          </div>
          <Link
            href={projects.cta.href}
            className="inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
          >
            {projects.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-rule border border-rule">
          {projects.clients.map((c) => (
            <li
              key={c.name}
              className="bg-surface aspect-[3/2] flex items-center justify-center p-6"
            >
              <span className="font-display font-semibold text-ink-soft text-sm md:text-base tracking-tight">
                {c.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
