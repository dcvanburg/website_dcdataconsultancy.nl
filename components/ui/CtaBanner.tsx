import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { finalCta, siteConfig } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-36 bg-night-field text-night-ink">
      <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-brand absolute left-1/2 -top-20 -translate-x-1/2 w-[44rem] h-[30rem] opacity-70 pointer-events-none"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal
          as="h2"
          className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-night-ink mb-7"
        >
          {finalCta.heading}
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="text-lg md:text-xl text-night-soft-ink max-w-2xl mx-auto leading-relaxed mb-11"
        >
          {finalCta.subheading}
        </Reveal>

        <Reveal delay={160} className="flex flex-col items-center gap-7">
          <Link
            href={finalCta.cta.href}
            className="group inline-flex items-center justify-center gap-2 px-9 py-4 bg-brand text-brand-ink font-display font-semibold text-lg rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/45 hover:-translate-y-0.5 transition-all"
          >
            {finalCta.cta.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-sm text-night-muted-ink hover:text-brand-bright transition-colors"
          >
            {siteConfig.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
