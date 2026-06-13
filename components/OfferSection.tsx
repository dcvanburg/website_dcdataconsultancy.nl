import Link from "next/link";
import { offer } from "@/lib/site-content";

export default function OfferSection() {
  return (
    <section id={offer.sectionId} className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Mijn aanpak
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {offer.heading}
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-10">
            {offer.intro}
          </p>
          <Link
            href="#contact"
            className="inline-flex px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Aan de slag!
          </Link>
        </div>
      </div>
    </section>
  );
}
