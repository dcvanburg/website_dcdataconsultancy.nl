import Link from "next/link";
import { getAllPostsSortedByDate } from "@/lib/blog-posts";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const posts = getAllPostsSortedByDate().slice(0, 3);

  return (
    <section id="insights" className="py-20 md:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Insights
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Artikelen over data engineering, dbt en moderne dataplatforms.
            </h2>
            <p className="text-gray-600 text-lg">
              Praktische inzichten voor data leaders, engineering teams en consultants.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Alle artikelen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {post.category}
              </p>
              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{post.readingMinutes} min lezen</span>
                <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
