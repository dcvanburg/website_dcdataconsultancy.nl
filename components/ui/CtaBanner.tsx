import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { finalCta, siteConfig } from "@/lib/site-content";

export default function CtaBanner() {
  return (
    <section className="py-32 md:py-40 surface-canvas border-t border-rule">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-ink mb-8">
          {finalCta.heading}
        </h2>
        <p className="text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed mb-12">
          {finalCta.subheading}
        </p>

        <div className="flex flex-col items-center gap-8">
          <Link
            href={finalCta.cta.href}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-brand text-brand-ink font-display font-semibold text-lg rounded-lg shadow-lg shadow-brand/15 hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-0.5 transition-all"
          >
            {finalCta.cta.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-sm text-ink-muted hover:text-brand transition-colors"
          >
            MAIL_:: {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
