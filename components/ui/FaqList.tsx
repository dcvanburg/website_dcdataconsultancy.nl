"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
              <span className="font-display font-semibold text-lg md:text-xl text-ink group-hover:text-brand transition-colors">
                {item.q}
              </span>
              <ChevronDown
                className={`shrink-0 w-5 h-5 text-ink-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-brand" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div
                id={`faq-${i}`}
                className="pb-6 -mt-1 text-ink-soft leading-relaxed text-base"
              >
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
