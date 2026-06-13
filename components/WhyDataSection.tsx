import { whyData } from "@/lib/site-content";
import { CheckCircle } from "lucide-react";

export default function WhyDataSection() {
  return (
    <section id={whyData.sectionId} className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
              Data belang
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {whyData.heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {whyData.intro}
            </p>

            <ul className="space-y-4">
              {whyData.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-blue-500 mt-0.5 shrink-0"
                    size={22}
                  />
                  <span className="text-gray-700 text-base leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d1117] to-[#1c2333] p-8 md:p-10 shadow-2xl">
              {/* Decorative data visualization mockup */}
              <div className="space-y-5">
                {/* Bars */}
                {[85, 62, 91, 48, 74].map((width, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-white/40 text-xs w-6 text-right">{String.fromCharCode(65 + i)}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-3">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                    <span className="text-white/60 text-xs w-8">{width}%</span>
                  </div>
                ))}
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-1">Data punten</p>
                  <p className="text-white font-bold text-2xl">2.4M</p>
                  <p className="text-green-400 text-xs mt-1">+18% ↑</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-1">Nauwkeurigheid</p>
                  <p className="text-white font-bold text-2xl">97%</p>
                  <p className="text-green-400 text-xs mt-1">+4% ↑</p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-0.5">Data-driven beslissingen</p>
              <p className="text-gray-900 font-bold text-sm">3x sneller groei</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
