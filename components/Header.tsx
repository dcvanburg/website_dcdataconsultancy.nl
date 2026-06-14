"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, footerNav } from "@/lib/site-content";
import { Menu, X, ChevronDown } from "lucide-react";

const topNav = [
  { label: "Diensten", href: "/diensten", dropdown: footerNav.diensten },
  { label: "Cases", href: "/cases" },
  { label: "Industrieën", href: "/industrieen" },
  { label: "Over Dennis", href: "/over-dennis" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-rule"
          : "bg-canvas/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-5 min-w-0">
            <Link
              href="/"
              className="font-display font-bold text-base md:text-lg tracking-tight text-ink hover:text-brand transition-colors"
              onClick={closeMobile}
            >
              {siteConfig.name}
            </Link>
            <span className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700">
                Beschikbaar voor nieuwe opdrachten
              </span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {topNav.map((item) => {
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
                      className="flex items-center gap-1 px-3 py-2 text-ink-soft hover:text-ink text-sm font-medium transition-colors"
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[260px]">
                        <div className="bg-surface border border-rule rounded-lg shadow-xl p-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-2.5 rounded-md text-ink-soft hover:text-ink hover:bg-rule-soft text-sm transition-colors"
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
                  className="px-3 py-2 text-ink-soft hover:text-ink text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 text-brand font-display font-semibold text-sm hover:bg-brand-soft rounded-md transition-colors"
            >
              Plan kennismaking
            </Link>
          </nav>

          <button
            className="lg:hidden text-ink p-2 rounded-md hover:bg-rule-soft transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
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
                        className="py-1.5 text-ink-soft hover:text-ink text-sm"
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
              href="/contact"
              className="mt-4 w-full text-center px-5 py-3 bg-brand text-brand-ink font-display font-semibold rounded-lg transition-colors"
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
