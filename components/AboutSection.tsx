import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id={aboutSection.sectionId} className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] max-w-md">
              <Image
                src={aboutSection.profileImage}
                alt={aboutSection.profileImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
              {aboutSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              {aboutSection.heading}
            </h2>
            <p className="text-blue-300/90 mb-6 font-medium">{aboutSection.role}</p>

            <div className="space-y-4 text-white/75 leading-relaxed mb-8">
              {aboutSection.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8 py-6 border-y border-white/10">
              {aboutSection.highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-2xl md:text-3xl font-bold text-white">{h.value}</p>
                  <p className="text-xs text-white/50 mt-1 leading-tight">{h.label}</p>
                </div>
              ))}
            </div>

            <Link
              href={aboutSection.cta.href}
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold transition-colors"
            >
              {aboutSection.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
