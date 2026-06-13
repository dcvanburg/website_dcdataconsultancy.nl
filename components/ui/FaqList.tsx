"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.q}
              </span>
              <ChevronDown
                className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-600" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div id={`faq-${i}`} className="pb-5 -mt-1 text-gray-600 leading-relaxed">
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
