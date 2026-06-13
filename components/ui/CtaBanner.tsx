import Link from "next/link";
import { finalCta } from "@/lib/site-content";

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 section-dark-2 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent p-8 md:p-12">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.18) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 max-w-2xl leading-tight">
                {finalCta.heading}
              </h2>
              <p className="text-white/70 max-w-2xl">{finalCta.subheading}</p>
            </div>
            <Link
              href={finalCta.cta.href}
              className="shrink-0 px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25"
            >
              {finalCta.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
