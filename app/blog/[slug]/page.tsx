import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionShell from "@/components/ui/SectionShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaBanner from "@/components/ui/CtaBanner";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/site-content";
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  type BlogSection,
} from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Niet gevonden" };
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Dennis van Burg"],
      tags: [...post.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = getRelatedPosts(slug);

  return (
    <>
      <Header />
      <main>
        <ArticleSchema
          title={post.title}
          description={post.metaDescription}
          url={url}
          datePublished={post.publishedAt}
          dateModified={post.updatedAt}
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Insights", url: `${siteConfig.url}/blog` },
            { name: post.title, url },
          ]}
        />

        <article>
          <header className="relative isolate overflow-hidden bg-night-field text-night-ink">
            <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
            <div
              aria-hidden="true"
              className="glow-brand absolute -top-24 right-0 w-[34rem] h-[26rem] opacity-50 pointer-events-none"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px rule-glow pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-16 md:pb-20">
              <Breadcrumbs
                tone="dark"
                items={[
                  { name: "Home", href: "/" },
                  { name: "Insights", href: "/blog" },
                  { name: post.title, href: `/blog/${post.slug}` },
                ]}
              />
              <p className="eyebrow text-brand-bright mb-6">{post.category}</p>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-night-ink leading-[1.05] tracking-tight text-balance mb-7">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-night-soft-ink leading-relaxed mb-8 max-w-3xl">
                {post.intro}
              </p>
              <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-night-muted-ink">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingMinutes} min lezen
                </span>
                <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
                <span>Door Dennis van Burg</span>
              </div>
            </div>
          </header>

          <div className="surface-white py-20 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {post.sections.map((section, i) => (
                <RenderSection key={i} section={section} />
              ))}

              <div className="mt-16 pt-8 border-t border-rule">
                <p className="eyebrow mb-3">Tags</p>
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 bg-rule-soft text-ink-soft rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>

        <SectionShell
          eyebrow="VERDER LEZEN"
          heading="Gerelateerde artikelen"
          variant="canvas"
        >
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            {related.map((p) => (
              <li key={p.slug} className="bg-surface">
                <Link
                  href={`/blog/${p.slug}`}
                  className="block p-8 group h-full flex flex-col"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand mb-5">
                    {p.category}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug mb-6 group-hover:text-brand transition-colors flex-1">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink group-hover:text-brand transition-colors">
                    Lees artikel
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar alle artikelen
            </Link>
          </div>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return section.level === 3 ? (
        <h3 className="font-display font-bold text-xl md:text-2xl text-ink mt-12 mb-4">
          {section.text}
        </h3>
      ) : (
        <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mt-14 mb-6 tracking-tight">
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-ink-soft leading-relaxed text-lg my-5">
          {section.text}
        </p>
      );
    case "list":
      if (section.ordered) {
        return (
          <ol className="my-6 space-y-2 list-decimal pl-6 text-ink-soft">
            {section.items.map((it, i) => (
              <li key={i} className="leading-relaxed text-lg pl-1">
                {it}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="my-6 space-y-2 list-disc pl-6 text-ink-soft">
          {section.items.map((it, i) => (
            <li key={i} className="leading-relaxed text-lg pl-1">
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-brand pl-6 italic text-ink-soft text-lg">
          {section.text}
          {section.cite ? (
            <footer className="font-mono text-xs not-italic text-ink-muted mt-3 uppercase tracking-[0.18em]">
              {section.cite}
            </footer>
          ) : null}
        </blockquote>
      );
    case "callout":
      return (
        <div className="my-10 p-6 bg-brand-soft border-l-2 border-brand rounded">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand mb-2">
            {section.title}
          </p>
          <p className="text-ink leading-relaxed">{section.text}</p>
        </div>
      );
    case "code":
      return (
        <pre className="my-8 p-5 rounded surface-night overflow-x-auto text-sm leading-relaxed font-mono">
          <code className="text-night-ink">{section.text}</code>
        </pre>
      );
  }
}
