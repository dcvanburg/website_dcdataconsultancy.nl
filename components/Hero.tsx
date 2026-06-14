import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/site-content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-36 md:pt-44 pb-24 md:pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none text-ink grid-dot"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow eyebrow-brand mb-6 md:mb-8">{hero.badge}</p>

          <h1 className="font-display font-extrabold tracking-tight text-ink text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-balance">
            {hero.heading}
          </h1>

          <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl mb-10">
            {hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-brand text-brand-ink font-display font-semibold text-base rounded-lg shadow-md shadow-brand/15 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 transition-all"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 px-2 py-3 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:block opacity-40 select-none pointer-events-none"
      >
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 400 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 100 L150 200 L250 200 L350 300"
            stroke="#0B5FFF"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
          <path
            d="M50 300 L150 300 L250 400"
            stroke="#0B5FFF"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
          <path
            d="M50 500 L250 400 L350 500"
            stroke="#0B5FFF"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="100" r="4" fill="#0A0A0B" />
          <circle cx="50" cy="300" r="4" fill="#0A0A0B" />
          <circle cx="50" cy="500" r="4" fill="#0A0A0B" />
          <circle cx="350" cy="300" r="6" fill="#FFB347" className="animate-pulse" />
          <circle cx="350" cy="500" r="4" fill="#0A0A0B" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <p className="eyebrow mb-6">{hero.trustBar.label}</p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {hero.trustBar.clients.map((c) => (
            <span
              key={c}
              className="font-display font-medium text-ink-muted text-sm sm:text-base tracking-tight"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
