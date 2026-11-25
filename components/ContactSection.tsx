import { contactSection, siteConfig } from "@/lib/site-content";
import { Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id={contactSection.sectionId} className="py-24 md:py-32 surface-canvas border-t border-rule scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow eyebrow-brand mb-6">{contactSection.eyebrow}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6">
          {contactSection.heading}
        </h2>
        <p className="text-ink-soft text-lg leading-relaxed mb-12">{contactSection.intro}</p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 text-left">
          <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 rounded-xl border border-rule bg-surface px-6 py-5 whitespace-nowrap hover:border-brand/40 transition-colors">
            <Mail className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
            <span className="font-mono text-sm text-ink-soft group-hover:text-brand transition-colors">{siteConfig.email}</span>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-rule bg-surface px-6 py-5 whitespace-nowrap hover:border-brand/40 transition-colors">
            <LinkedinIcon className="w-5 h-5 text-brand shrink-0" />
            <span className="text-sm text-ink-soft group-hover:text-brand transition-colors">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
