import { quote } from "@/lib/site-content";
import Reveal from "@/components/ui/Reveal";

export default function QuoteSection() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-40 bg-night-field text-night-ink">
      <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-brand absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-70 pointer-events-none"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal
          as="span"
          className="block font-display text-7xl leading-none text-brand-bright/50 select-none mb-4"
        >
          &ldquo;
        </Reveal>
        <Reveal
          as="blockquote"
          delay={80}
          className="font-display font-bold text-3xl md:text-4xl lg:text-[2.9rem] text-night-ink leading-[1.18] tracking-tight text-balance mb-10"
        >
          {quote.text}
        </Reveal>
        <Reveal
          as="p"
          delay={160}
          className="font-mono text-xs md:text-sm tracking-[0.24em] uppercase text-night-soft-ink"
        >
          {quote.attribution}
        </Reveal>
      </div>
    </section>
  );
}
