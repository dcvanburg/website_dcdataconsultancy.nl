import Link from "next/link";

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
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className={`relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 ${alignment}`}>
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {eyebrow}
          </div>
        ) : null}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
          {heading}
        </h1>
        {subheading ? (
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            {subheading}
          </p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className={`flex flex-col sm:flex-row gap-4 ${align === "center" ? "justify-center" : ""}`}>
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="px-7 py-3.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium rounded-xl transition-all"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
