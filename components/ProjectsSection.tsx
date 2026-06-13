import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id={projects.sectionId} className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            {projects.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {projects.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{projects.intro}</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {projects.clients.map((c) => (
            <div
              key={c.name}
              className="aspect-[3/2] flex items-center justify-center p-6 bg-white grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <Image
                src={c.logo}
                alt={`${c.name} logo`}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={projects.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
          >
            {projects.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
