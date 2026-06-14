"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqList({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-display font-semibold text-lg md:text-xl text-ink group-hover:text-brand transition-colors tracking-tight">
                {item.q}
              </span>
              <span
                className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 ${
                  isOpen
                    ? "rotate-45 border-brand bg-brand text-brand-ink"
                    : "border-rule text-ink-muted group-hover:border-brand/40"
                }`}
                aria-hidden="true"
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div
              id={`faq-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 -mt-1 text-ink-soft leading-relaxed text-base max-w-3xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
