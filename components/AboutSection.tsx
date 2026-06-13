import Image from "next/image";
import { about } from "@/lib/site-content";

export default function AboutSection() {
  return (
    <section id={about.sectionId} className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden ring-4 ring-blue-500/20 shadow-2xl">
                <Image
                  src={about.profileImage}
                  alt={about.profileImageAlt}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white rounded-xl shadow-lg px-4 py-3 text-center">
                <p className="text-2xl font-bold leading-none">8+</p>
                <p className="text-xs mt-0.5 opacity-90">jaar ervaring</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
              {about.subheading}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {about.heading}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {about.bio}
            </p>

            {/* Industries */}
            <div className="mb-8">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-3">
                Sectoren
              </p>
              <div className="flex flex-wrap gap-2">
                {about.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-sm font-medium border border-white/10 hover:bg-white/15 transition-colors"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-white/50 text-sm mt-1">Jaar ervaring</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">9+</p>
                <p className="text-white/50 text-sm mt-1">Klanten</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4</p>
                <p className="text-white/50 text-sm mt-1">Specialisaties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
