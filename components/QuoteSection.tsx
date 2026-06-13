import { quote } from "@/lib/site-content";

export default function QuoteSection() {
  return (
    <section className="py-20 md:py-28 section-dark-2 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large decorative quote mark */}
        <div
          className="text-blue-500/20 text-[10rem] leading-none font-serif select-none mb-4 -mt-8"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight italic -mt-16">
            {quote.text}
          </p>
          {quote.attribution && (
            <footer className="mt-8 text-white/50 text-lg">
              — {quote.attribution}
            </footer>
          )}
        </blockquote>
      </div>
    </section>
  );
}
