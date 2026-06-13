import { quote } from "@/lib/site-content";

export default function QuoteSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="mx-auto mb-8 text-blue-200"
          aria-hidden="true"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-snug italic mb-6">
          “{quote.text}”
        </blockquote>
        <p className="text-gray-500 text-sm uppercase tracking-widest">{quote.attribution}</p>
      </div>
    </section>
  );
}
