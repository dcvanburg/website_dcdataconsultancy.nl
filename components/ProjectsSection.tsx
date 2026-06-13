import Image from "next/image";
import { projects } from "@/lib/site-content";

export default function ProjectsSection() {
  return (
    <section id={projects.sectionId} className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Klanten
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {projects.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{projects.intro}</p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center">
          {projects.clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 md:p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 h-20 md:h-24"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="object-contain max-h-10 md:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
