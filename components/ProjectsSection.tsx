import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsSection() {
  return (
    <section id={projects.sectionId} className="py-24 md:py-32 surface-white border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <Reveal as="p" className="eyebrow eyebrow-brand mb-6">{projects.eyebrow}</Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
            >
              {projects.heading}
            </Reveal>
            <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
              {projects.intro}
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              href={projects.cta.href}
              className="group inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors whitespace-nowrap"
            >
              {projects.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
            {projects.clients.map((c) => (
              <li
                key={c.name}
                className="bg-surface aspect-[3/2] flex items-center justify-center p-6"
              >
                <div className="relative w-full h-9 md:h-10">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    sizes="(max-width: 640px) 40vw, 180px"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
