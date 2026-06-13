import { aiUseCases } from "@/lib/site-content";
import {
  TrendingUp,
  Users,
  AlertTriangle,
  Star,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp,
  Users,
  AlertTriangle,
  Star,
  MessageSquare,
};

export default function AiUseCasesSection() {
  return (
    <section className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Artificial Intelligence
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {aiUseCases.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{aiUseCases.intro}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiUseCases.cases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-5 transition-colors">
                  {Icon && <Icon size={24} className="text-blue-500" />}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {useCase.description}
                </p>
              </div>
            );
          })}

          {/* "And more..." card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 flex flex-col justify-between text-white shadow-lg shadow-blue-500/25">
            <div>
              <h3 className="text-lg font-bold mb-2">En nog veel meer...</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                De mogelijkheden van AI zijn enorm. Benieuwd wat er mogelijk is voor jouw organisatie?
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center text-sm font-semibold text-white hover:text-blue-100 transition-colors"
            >
              Neem contact op →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
