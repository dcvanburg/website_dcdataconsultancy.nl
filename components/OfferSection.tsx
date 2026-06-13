import { offer } from "@/lib/site-content";

export default function OfferSection() {
  return (
    <section id={offer.sectionId} className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Mijn aanpak
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {offer.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{offer.intro}</p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-500/30 via-blue-500 to-blue-500/30"
            aria-hidden="true"
          />

          {offer.items.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Step number */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/30 mb-6 z-10">
                {index + 1}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
