import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";

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
          <header className="relative pt-28 pb-12 md:pt-36 md:pb-16 section-dark overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: "Insights", href: "/blog" },
                  { name: post.title, href: `/blog/${post.slug}` },
                ]}
              />
              <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mt-6 mb-4">
                {post.category}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                {post.title}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-3xl">
                {post.intro}
              </p>
              <div className="flex items-center gap-6 text-sm text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingMinutes} min lezen
                </span>
                <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
                <span>Door Dennis van Burg</span>
              </div>
            </div>
          </header>

          <div className="bg-white py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-content">
              {post.sections.map((section, i) => (
                <RenderSection key={i} section={section} />
              ))}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <SectionShell
          eyebrow="Verder lezen"
          heading="Gerelateerde artikelen"
          variant="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all flex flex-col"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                  {p.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors flex-1">
                  {p.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Lees artikel
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4">
          {section.text}
        </h3>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-5">
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-gray-700 leading-relaxed text-lg my-4">{section.text}</p>
      );
    case "list":
      if (section.ordered) {
        return (
          <ol className="my-5 space-y-2 list-decimal pl-6 text-gray-700">
            {section.items.map((it, i) => (
              <li key={i} className="leading-relaxed text-lg pl-1">
                {it}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="my-5 space-y-2 list-disc pl-6 text-gray-700">
          {section.items.map((it, i) => (
            <li key={i} className="leading-relaxed text-lg pl-1">
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-blue-500 pl-6 italic text-gray-700 text-lg">
          {section.text}
          {section.cite ? (
            <footer className="text-sm text-gray-500 mt-2 not-italic">— {section.cite}</footer>
          ) : null}
        </blockquote>
      );
    case "callout":
      return (
        <div className="my-8 p-6 rounded-2xl bg-blue-50 border-l-4 border-blue-500">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">
            {section.title}
          </p>
          <p className="text-gray-800 leading-relaxed">{section.text}</p>
        </div>
      );
    case "code":
      return (
        <pre className="my-6 p-5 rounded-xl bg-gray-900 text-gray-100 overflow-x-auto text-sm leading-relaxed">
          <code>{section.text}</code>
        </pre>
      );
  }
}
