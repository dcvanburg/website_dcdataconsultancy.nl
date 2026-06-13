import type { Metadata } from "next";
import Link from "next/link";
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
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — data engineering, dbt & modern data stack",
  description:
    "Praktische artikelen over data engineering, dbt, analytics engineering, Azure en de Modern Data Stack — door senior data engineering consultant Dennis van Burg.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Insights | DC Data Consultancy",
    description:
      "Praktische artikelen over data engineering, dbt en moderne dataplatforms — door senior consultant Dennis van Burg uit Breda.",
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
          eyebrow="Insights"
          heading="Praktische artikelen over data engineering en moderne dataplatforms."
          subheading="Geen marketing — wel inzichten die ik in opdrachten heb opgedaan. Geschreven voor data leaders, engineering teams en consultants."
        />

        {featured ? (
          <SectionShell variant="white">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-3">
                Uitgelicht · {featured.category}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight max-w-4xl">
                {featured.title}
              </h2>
              <p className="text-blue-100 leading-relaxed max-w-3xl mb-6">
                {featured.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-blue-200">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readingMinutes} min lezen
                </span>
                <span>{new Date(featured.publishedAt).toLocaleDateString("nl-NL")}</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                  Lees artikel
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </SectionShell>
        ) : null}

        <SectionShell
          eyebrow="Categorieën"
          heading="Per onderwerp"
          variant="light"
        >
          <div className="flex flex-wrap gap-3 mb-12">
            {blogCategories.map((cat) => {
              const count = getPostsByCategory(cat).length;
              if (count === 0) return null;
              return (
                <span
                  key={cat}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700"
                >
                  {cat}
                  <span className="text-xs text-gray-400">{count}</span>
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all flex flex-col"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                  {post.category}
                </p>
                <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readingMinutes} min
                  </span>
                  <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
                </div>
              </Link>
            ))}
          </div>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
