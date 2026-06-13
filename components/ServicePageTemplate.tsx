import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionShell from "@/components/ui/SectionShell";
import FaqList from "@/components/ui/FaqList";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FaqSchema,
} from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/site-content";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type ServicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; heading: string; subheading: string };
  problems: readonly string[];
  solution: { heading: string; paragraphs: readonly string[] };
  capabilities: readonly { title: string; description: string }[];
  process: readonly { title: string; description: string }[];
  outcomes: readonly string[];
  stack: readonly string[];
  faqs: readonly { q: string; a: string }[];
};

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const url = `${siteConfig.url}/diensten/${data.slug}`;
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: data.title, href: `/diensten/${data.slug}` },
  ];

  return (
    <>
      <Header />
      <main>
        <ServiceSchema name={data.title} description={data.metaDescription} url={url} />
        <BreadcrumbSchema
          items={breadcrumbs.map((b) => ({ name: b.name, url: `${siteConfig.url}${b.href}` }))}
        />
        <FaqSchema items={data.faqs.map((f) => ({ q: f.q, a: f.a }))} />

        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 section-dark overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="max-w-4xl mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {data.hero.eyebrow}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                {data.hero.heading}
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
                {data.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-center"
                >
                  Plan een gesprek
                </Link>
                <Link
                  href="/cases"
                  className="px-7 py-3.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium rounded-xl transition-all text-center"
                >
                  Bekijk cases
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Probleem"
          heading="Herken je dit?"
          intro="De volgende patronen kom ik in vrijwel iedere intake tegen. Niet omdat teams niet hard werken — wel omdat de fundering nooit goed is gelegd."
          variant="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {data.problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200"
              >
                <AlertCircle
                  className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-gray-700 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Oplossing"
          heading={data.solution.heading}
          variant="white"
        >
          <div className="max-w-3xl space-y-5 text-gray-700 text-lg leading-relaxed">
            {data.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Wat ik concreet doe"
          heading="Capabilities"
          variant="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.capabilities.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Aanpak" heading="Hoe een opdracht eruitziet" variant="dark">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, i) => (
              <div key={step.title} className="relative">
                <p className="font-mono text-blue-300 text-sm font-bold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Resultaat" heading="Wat je eraan overhoudt" variant="white">
          <ul className="max-w-3xl space-y-4">
            {data.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-gray-700 leading-relaxed text-lg">
                <CheckCircle2
                  className="w-6 h-6 text-blue-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                {o}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Stack" heading="Technologie waar ik in werk" variant="dark-2">
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {data.stack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white/80 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          heading="Veelgestelde vragen"
          variant="white"
        >
          <div className="max-w-3xl">
            <FaqList items={data.faqs} />
          </div>
        </SectionShell>

        <SectionShell eyebrow="Verder lezen" heading="Andere diensten" variant="light">
          <RelatedServices currentSlug={data.slug} />
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const all = [
    { slug: "data-engineering", title: "Data Engineering", desc: "Schaalbare pipelines en cloud datawarehousing." },
    { slug: "data-analytics", title: "Data Analytics", desc: "Heldere business metrics en self-service BI." },
    { slug: "data-science", title: "Data Science", desc: "Forecasting, churn en anomaly detection in productie." },
    { slug: "modern-data-stack", title: "Modern Data Stack", desc: "Coherente architectuur, geen verzameling losse tools." },
    { slug: "dbt-consultancy", title: "dbt Consultancy", desc: "Analytics engineering met dbt best practices." },
    { slug: "azure-data-engineering", title: "Azure Data Engineering", desc: "ADF, Synapse, Databricks en Fabric." },
  ];
  const others = all.filter((a) => a.slug !== currentSlug).slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {others.map((s) => (
        <Link
          key={s.slug}
          href={`/diensten/${s.slug}`}
          className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
        >
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {s.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
            Bekijk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      ))}
    </div>
  );
}
