import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/site-content";
import {
  blogCategories,
  getAllPostsSortedByDate,
  getPostsByCategory,
} from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Insights. Data engineering, dbt en modern data stack.",
  description:
    "Praktische artikelen over data engineering, dbt, analytics engineering, Azure en de Modern Data Stack door senior data engineering consultant Dennis van Burg.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Insights | DC Data Consultancy",
    description:
      "Praktische artikelen over data engineering, dbt en moderne dataplatforms door senior consultant Dennis van Burg uit Breda.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsSortedByDate();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Insights", url: `${siteConfig.url}/blog` },
          ]}
        />

        <PageHero
          eyebrow="INSIGHTS"
          heading="Praktische notities over data engineering en moderne dataplatforms."
          subheading="Geen marketing. Wel inzichten die ik in opdrachten heb opgedaan. Geschreven voor data leaders, engineering teams en consultants."
        />

        {featured ? (
          <SectionShell variant="white">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block surface-brand p-10 md:p-14 relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 text-brand-ink grid-dot-dense pointer-events-none"
              />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-ink/70 mb-6">
                  UITGELICHT :: {featured.category}
                </p>
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-ink leading-[1.05] tracking-tight text-balance mb-6 max-w-4xl">
                  {featured.title}
                </h2>
                <p className="text-brand-ink/85 leading-relaxed max-w-3xl mb-8 text-lg">
                  {featured.description}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-brand-ink/80">
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readingMinutes} min lezen
                  </span>
                  <span className="font-mono">
                    {new Date(featured.publishedAt).toLocaleDateString("nl-NL")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-display font-semibold text-brand-ink">
                    Lees artikel
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </SectionShell>
        ) : null}

        <SectionShell
          eyebrow="CATEGORIEËN"
          heading="Per onderwerp"
          variant="canvas"
        >
          <ul className="flex flex-wrap gap-2 mb-14">
            {blogCategories.map((cat) => {
              const count = getPostsByCategory(cat).length;
              if (count === 0) return null;
              return (
                <li
                  key={cat}
                  className="font-mono text-xs px-3 py-1.5 bg-surface border border-rule text-ink-soft rounded"
                >
                  {cat}
                  <span className="text-ink-muted ml-2">{count}</span>
                </li>
              );
            })}
          </ul>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {rest.map((post) => (
              <li key={post.slug} className="bg-surface">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-8 group h-full flex flex-col"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand mb-5">
                    {post.category}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug mb-3 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-ink-soft text-base leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between font-mono text-[11px] text-ink-muted pt-4 border-t border-rule">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readingMinutes} min
                    </span>
                    <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
