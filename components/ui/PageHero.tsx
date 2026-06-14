import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";

type CTA = { label: string; href: string };

export default function PageHero({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  breadcrumbs?: { name: string; href?: string }[];
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-night-field text-night-ink">
      <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-brand absolute -top-24 right-0 w-[34rem] h-[28rem] opacity-50 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px rule-glow pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-20 md:pb-24">
        <div className={`max-w-4xl ${isCenter ? "mx-auto text-center" : ""}`}>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} tone="dark" /> : null}
          {eyebrow ? (
            <Reveal as="p" className="eyebrow text-brand-bright mb-6">{eyebrow}</Reveal>
          ) : null}
          <Reveal
            as="h1"
            delay={60}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-night-ink leading-[1.0] tracking-tight text-balance mb-7"
          >
            {heading}
          </Reveal>
          {subheading ? (
            <Reveal
              as="p"
              delay={120}
              className={`text-lg md:text-xl text-night-soft-ink leading-relaxed mb-9 max-w-3xl ${isCenter ? "mx-auto" : ""}`}
            >
              {subheading}
            </Reveal>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <Reveal
              delay={180}
              className={`flex flex-col sm:flex-row gap-4 ${isCenter ? "justify-center" : ""}`}
            >
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 font-display font-semibold text-base text-night-ink border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {secondaryCta.label}
                  <ArrowRight className="w-4 h-4 text-brand-bright group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : null}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
