import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPostsSortedByDate } from "@/lib/blog-posts";

export default function BlogSection() {
  const posts = getAllPostsSortedByDate().slice(0, 3);

  return (
    <section id="insights" className="py-28 md:py-36 surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-brand mb-6">Insights</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
              Praktische notities over data engineering, dbt en moderne dataplatforms.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Voor data leaders, engineering teams en consultants die met dezelfde vraagstukken worstelen.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
          >
            Alle artikelen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          {posts.map((post) => (
            <li key={post.slug} className="bg-surface">
              <Link
                href={`/blog/${post.slug}`}
                className="block p-8 md:p-10 h-full group"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand mb-6">
                  {post.category}
                </p>
                <h3 className="font-display font-bold text-xl text-ink leading-snug mb-4 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-soft leading-relaxed mb-6">
                  {post.description}
                </p>
                <div className="flex items-center justify-between font-mono text-[11px] text-ink-muted">
                  <span>{post.readingMinutes} min lezen</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
