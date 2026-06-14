import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPostsSortedByDate } from "@/lib/blog-posts";
import Reveal from "@/components/ui/Reveal";

export default function BlogSection() {
  const posts = getAllPostsSortedByDate().slice(0, 3);

  return (
    <section id="insights" className="py-24 md:py-32 surface-white border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <Reveal as="p" className="eyebrow eyebrow-brand mb-6">Insights</Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
            >
              Praktische notities over data engineering, dbt en moderne dataplatforms.
            </Reveal>
            <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed">
              Voor data leaders, engineering teams en consultants die met dezelfde vraagstukken worstelen.
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors whitespace-nowrap"
            >
              Alle artikelen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <ul className="grid md:grid-cols-3 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 80} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col p-8 md:p-10 bg-surface hover:bg-canvas transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand mb-6">
                  {post.category}
                </p>
                <h3 className="font-display font-bold text-xl text-ink leading-snug mb-4 tracking-tight group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-soft leading-relaxed mb-8 flex-1">{post.description}</p>
                <div className="flex items-center justify-between font-mono text-[11px] text-ink-muted pt-5 border-t border-rule">
                  <span>{post.readingMinutes} min lezen</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("nl-NL", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
