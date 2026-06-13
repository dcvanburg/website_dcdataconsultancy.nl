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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-[#0d1117]/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-white font-bold text-lg md:text-xl tracking-tight hover:text-blue-400 transition-colors flex items-center gap-2"
            onClick={closeMobile}
          >
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-blue-500" aria-hidden="true" />
            {siteConfig.name}
          </Link>

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
                      className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[260px]">
                        <div className="bg-[#161b22] border border-white/10 rounded-xl shadow-2xl p-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-2.5 rounded-md text-white/70 hover:text-white hover:bg-white/5 text-sm transition-colors"
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
                  className="px-3 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-md"
            >
              Plan een gesprek
            </Link>
          </nav>

          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-[#0d1117] border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
            {topNav.map((item) => (
              <div key={item.href} className="border-b border-white/5">
                <Link
                  href={item.href}
                  className="block py-3 text-white/90 font-medium"
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
                        className="py-1.5 text-white/60 hover:text-white text-sm"
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
              className="mt-4 w-full text-center px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              onClick={closeMobile}
            >
              Plan een gesprek
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
