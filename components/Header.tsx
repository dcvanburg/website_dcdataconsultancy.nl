"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerNav } from "@/lib/site-content";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const topNav = [
  { label: "Diensten", href: "/diensten", dropdown: footerNav.diensten },
  { label: "Over Dennis", href: "/over-dennis" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  // "solid" = light header on canvas. Otherwise transparent over the dark hero.
  const solid = isScrolled || isMobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-canvas/85 backdrop-blur-xl border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              onClick={closeMobile}
            >
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={56}
                height={56}
                className="w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 object-contain"
                priority
              />
              <span className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors ${
                solid ? "text-ink hover:text-brand" : "text-night-ink hover:text-brand-bright"
              }`}>
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {topNav.map((item) => {
              const linkColor = solid
                ? "text-ink-soft hover:text-ink"
                : "text-night-soft-ink hover:text-night-ink";
              if ("dropdown" in item) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${linkColor}`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                        <div className="bg-surface border border-rule rounded-xl shadow-2xl shadow-ink/10 p-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-2.5 rounded-lg text-ink-soft hover:text-brand hover:bg-rule-soft text-sm transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${linkColor}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className={`group ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all ${
                solid
                  ? "bg-brand text-brand-ink hover:shadow-lg hover:shadow-brand/25"
                  : "bg-white/10 text-night-ink border border-white/15 hover:bg-white/15"
              }`}
            >
              Plan kennismaking
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </nav>

          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              solid ? "text-ink hover:bg-rule-soft" : "text-night-ink hover:bg-white/10"
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-canvas border-t border-rule max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
            {topNav.map((item) => (
              <div key={item.href} className="border-b border-rule-soft">
                <Link
                  href={item.href}
                  className="block py-3 text-ink font-display font-semibold"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
                {"dropdown" in item && (
                  <div className="pb-2 pl-3 flex flex-col gap-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="py-1.5 text-ink-soft hover:text-brand text-sm"
                        onClick={closeMobile}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              className="mt-4 w-full text-center px-5 py-3 bg-brand text-brand-ink font-display font-semibold rounded-lg"
              onClick={closeMobile}
            >
              Plan een kennismaking
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
