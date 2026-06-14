import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTA = { label: string; href: string };

export default function PageHero({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 surface-canvas overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 text-ink grid-dot pointer-events-none"
      />
      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${alignment}`}>
        {eyebrow ? (
          <p className="eyebrow eyebrow-brand mb-6">{eyebrow}</p>
        ) : null}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.0] tracking-tight text-balance mb-8">
          {heading}
        </h1>
        {subheading ? (
          <p className="text-lg sm:text-xl text-ink-soft max-w-3xl leading-relaxed mb-10">
            {subheading}
          </p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-md shadow-brand/15 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 transition-all"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="group inline-flex items-center justify-center gap-2 px-2 py-3 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
              >
                {secondaryCta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
