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
              <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between rounded-xl border border-rule bg-surface/90 backdrop-blur px-4 py-3">
                <div>
                  <p className="font-display font-bold text-ink text-sm tracking-tight">Dennis van Burg</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">{aboutSection.role}</p>
                </div>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">Beschikbaar</span>
                </span>
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

            <Reveal delay={160} className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule border border-rule rounded-xl overflow-hidden mb-10">
              {aboutSection.highlights.map((h) => (
                <div key={h.label} className="bg-surface p-5">
                  <p className="font-display font-extrabold text-3xl md:text-4xl text-ink leading-none tracking-tight mb-2">
                    {h.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted leading-relaxed">
                    {h.label}
                  </p>
                </div>
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
