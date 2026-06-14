import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { name: string; href?: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  const base = isDark ? "text-night-muted-ink" : "text-ink-muted";
  const hover = isDark ? "hover:text-night-ink" : "hover:text-ink";
  const active = isDark ? "text-night-ink" : "text-ink";
  const sep = isDark ? "text-night-rule" : "text-ink-faint";

  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className={`flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] ${base}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className={`${hover} transition-colors`}>
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? active : ""}>{item.name}</span>
              )}
              {!isLast && <ChevronRight className={`w-3.5 h-3.5 ${sep}`} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
