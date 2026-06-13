export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28 section-light border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Blog
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Artikelen &amp; Inzichten
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Binnenkort verschijnen hier artikelen over data analytics, data engineering, dashboarding en AI. Volg mij op LinkedIn om op de hoogte te blijven.
          </p>
          <a
            href="https://www.linkedin.com/in/dennisvanburg/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Volg op LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
