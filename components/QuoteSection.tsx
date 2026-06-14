import { quote } from "@/lib/site-content";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 surface-brand">
      <div
        aria-hidden="true"
        className="absolute inset-0 text-brand-ink grid-dot-dense pointer-events-none"
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span aria-hidden="true" className="font-display text-7xl leading-none text-brand-ink/30 select-none block mb-6">
          &ldquo;
        </span>
        <p className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-ink leading-[1.15] tracking-tight text-balance mb-10">
          {quote.text}
        </p>
        <p className="font-mono text-xs md:text-sm tracking-[0.22em] uppercase text-brand-ink/70">
          {quote.attribution}
        </p>
      </div>
    </section>
  );
}
