import Reveal from "@/components/ui/Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  variant?: "canvas" | "white" | "night";
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
};

const variantClass = {
  canvas: "surface-canvas",
  white: "surface-white",
  night: "bg-night-field text-night-ink",
} as const;

export default function SectionShell({
  id,
  eyebrow,
  heading,
  intro,
  variant = "white",
  align = "left",
  children,
  className = "",
}: Props) {
  const isNight = variant === "night";
  const headingClass = isNight ? "text-night-ink" : "text-ink";
  const introClass = isNight ? "text-night-soft-ink" : "text-ink-soft";
  const eyebrowClass = isNight ? "text-brand-bright" : "eyebrow-brand";
  const alignWrapper = align === "center" ? "text-center mx-auto" : "";

  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${variantClass[variant]} ${className}`}
    >
      {isNight ? (
        <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      ) : null}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading || intro) && (
          <div className={`max-w-3xl mb-14 md:mb-20 ${alignWrapper}`}>
            {eyebrow ? (
              <Reveal as="p" className={`eyebrow ${eyebrowClass} mb-6`}>{eyebrow}</Reveal>
            ) : null}
            {heading ? (
              <Reveal
                as="h2"
                delay={60}
                className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance mb-6 ${headingClass}`}
              >
                {heading}
              </Reveal>
            ) : null}
            {intro ? (
              <Reveal as="p" delay={120} className={`${introClass} text-lg leading-relaxed`}>{intro}</Reveal>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
