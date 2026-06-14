import Link from "next/link";
import { footer, footerNav, siteConfig } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="surface-white border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-tight text-ink hover:text-brand transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <div className="mt-6 text-ink-muted text-sm leading-relaxed">
              <p>{siteConfig.city}, {siteConfig.country}</p>
              <p className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-xs hover:text-brand transition-colors"
                >
                  MAIL_:: {siteConfig.email}
                </a>
              </p>
            </div>
            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex items-center gap-2 text-ink-soft hover:text-brand transition-colors text-sm font-display font-semibold"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Volg op LinkedIn
            </a>
          </div>

          <FooterColumn title="Diensten" links={footerNav.diensten} />
          <FooterColumn title="Bedrijf" links={footerNav.bedrijf} />
        </div>

        <div className="mt-14 pt-8 border-t border-rule flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-ink-muted text-xs">
          <p className="font-mono">{footer.copyright}</p>
          <p className="font-mono">
            Sinds {siteConfig.foundedYear} · Ervaring sinds {siteConfig.experienceSince}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow mb-5">{title}</h3>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-ink-soft hover:text-brand text-sm transition-colors w-fit"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
