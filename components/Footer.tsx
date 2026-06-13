import Link from "next/link";
import { footer, siteConfig } from "@/lib/site-content";
// LinkedIn SVG rendered inline (not in lucide-react v1.x)

export default function Footer() {
  return (
    <footer className="section-dark-2 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-white/50 text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <p className="mt-1 text-white/40 text-sm">
              Freelance data analytics consultant, {siteConfig.location}.
            </p>

            {/* LinkedIn */}
            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-5 inline-flex items-center gap-2 text-white/50 hover:text-blue-400 transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigatie
            </h3>
            <nav className="flex flex-col gap-3">
              {footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-white/50 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-white/50 text-sm">{siteConfig.location}</p>
              <Link
                href="#contact"
                className="mt-4 inline-flex px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Aan de slag!
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>{footer.copyright}</p>
          <p>Gebouwd met Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
