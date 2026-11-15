import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutSection } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function AboutSection() {
  return (
    <section id={aboutSection.sectionId} className="py-24 md:py-32 surface-white border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-rule bg-canvas">
                <Image
                  src={aboutSection.profileImage}
                  alt={aboutSection.profileImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute left-4 bottom-4 right-4 rounded-xl border border-rule bg-surface/90 backdrop-blur px-4 py-3">
                <p className="font-display font-bold text-ink text-sm tracking-tight">Dennis van Burg</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">{aboutSection.role}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal as="p" className="eyebrow eyebrow-brand mb-6">{aboutSection.eyebrow}</Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-8"
            >
              {aboutSection.heading}
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-ink-soft text-lg leading-relaxed mb-12">
              {aboutSection.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            <Link
              href={aboutSection.cta.href}
              className="group inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
            >
              {aboutSection.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
