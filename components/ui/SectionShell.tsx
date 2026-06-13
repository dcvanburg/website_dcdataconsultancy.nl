type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  variant?: "light" | "dark" | "dark-2" | "white";
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
};

const variantClass = {
  light: "section-light",
  dark: "section-dark",
  "dark-2": "section-dark-2",
  white: "bg-white text-gray-900",
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
  const isDark = variant === "dark" || variant === "dark-2";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const introClass = isDark ? "text-white/70" : "text-gray-600";
  const eyebrowClass = isDark ? "text-blue-300" : "text-blue-600";
  const alignWrapper = align === "center" ? "text-center mx-auto" : "";

  return (
    <section id={id} className={`py-20 md:py-28 ${variantClass[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading || intro) && (
          <div className={`max-w-3xl mb-12 md:mb-16 ${alignWrapper}`}>
            {eyebrow ? (
              <p
                className={`${eyebrowClass} font-semibold text-sm uppercase tracking-widest mb-3`}
              >
                {eyebrow}
              </p>
            ) : null}
            {heading ? (
              <h2
                className={`${headingClass} text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5`}
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
