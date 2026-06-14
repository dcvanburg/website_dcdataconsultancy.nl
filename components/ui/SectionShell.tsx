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
  night: "surface-night",
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
  const introClass = isNight ? "text-night-ink/70" : "text-ink-soft";
  const eyebrowExtra = isNight ? "text-night-ink/60" : "eyebrow-brand";
  const alignWrapper = align === "center" ? "text-center mx-auto" : "";

  return (
    <section id={id} className={`py-28 md:py-36 ${variantClass[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading || intro) && (
          <div className={`max-w-3xl mb-16 md:mb-20 ${alignWrapper}`}>
            {eyebrow ? (
              <p className={`eyebrow ${eyebrowExtra} mb-6`}>{eyebrow}</p>
            ) : null}
            {heading ? (
              <h2
                className={`font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6 ${headingClass}`}
              >
                {heading}
              </h2>
            ) : null}
            {intro ? (
              <p className={`${introClass} text-lg leading-relaxed`}>{intro}</p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
