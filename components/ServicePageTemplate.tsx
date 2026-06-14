import Link from "next/link";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
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
          items={breadcrumbs.map((b) => ({
            name: b.name,
            url: `${siteConfig.url}${b.href}`,
          }))}
        />
        <FaqSchema items={data.faqs.map((f) => ({ q: f.q, a: f.a }))} />

        <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 surface-canvas overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 text-ink grid-dot pointer-events-none"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="max-w-4xl">
              <p className="eyebrow eyebrow-brand mb-6">{data.hero.eyebrow}</p>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.0] tracking-tight text-balance mb-8">
                {data.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-ink-soft max-w-3xl leading-relaxed mb-10">
                {data.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-md shadow-brand/15 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 transition-all"
                >
                  Plan een kennismaking
                </Link>
                <Link
                  href="/cases"
                  className="group inline-flex items-center justify-center gap-2 px-2 py-3 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
                >
                  Bekijk cases
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Probleem"
          heading="Herken je dit?"
          intro="De volgende patronen kom ik in vrijwel iedere intake tegen. Niet omdat teams niet hard werken, wel omdat de fundering nooit goed is gelegd."
          variant="white"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
            {data.problems.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <AlertCircle
                  className="w-5 h-5 text-brand shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-ink-soft leading-relaxed">{p}</p>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="Oplossing"
          heading={data.solution.heading}
          variant="canvas"
        >
          <div className="max-w-3xl space-y-5 text-ink-soft text-lg leading-relaxed">
            {data.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Wat ik concreet doe"
          heading="Capabilities"
          variant="white"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {data.capabilities.map((c) => (
              <li key={c.title} className="border-t border-rule pt-5">
                <h3 className="font-display font-semibold text-ink text-lg mb-2">
                  {c.title}
                </h3>
                <p className="text-ink-soft leading-relaxed text-base">
                  {c.description}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Aanpak" heading="Hoe een opdracht eruitziet" variant="canvas">
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.process.map((step, i) => (
              <li key={step.title}>
                <p className="font-mono text-sm text-brand mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display font-bold text-xl text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </SectionShell>

        <SectionShell
          eyebrow="Resultaat"
          heading="Wat je eraan overhoudt"
          variant="white"
        >
          <ul className="max-w-3xl space-y-5">
            {data.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-ink-soft leading-relaxed text-lg">
                <Check
                  className="w-6 h-6 text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                {o}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="Stack"
          heading="Technologie waar ik in werk"
          variant="canvas"
        >
          <ul className="flex flex-wrap gap-2 max-w-4xl">
            {data.stack.map((t) => (
              <li
                key={t}
                className="font-mono text-sm px-3 py-1.5 bg-surface border border-rule text-ink-soft rounded"
              >
                {t}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="FAQ" heading="Veelgestelde vragen" variant="white">
          <div className="max-w-3xl">
            <FaqList items={data.faqs} />
          </div>
        </SectionShell>

        <SectionShell eyebrow="Verder lezen" heading="Andere diensten" variant="canvas">
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
    { slug: "data-analytics", title: "Data Analytics", desc: "Heldere business metrics en self service BI." },
    { slug: "data-science", title: "Data Science", desc: "Forecasting, churn en anomaly detection in productie." },
    { slug: "modern-data-stack", title: "Modern Data Stack", desc: "Coherente architectuur, geen verzameling losse tools." },
    { slug: "dbt-consultancy", title: "dbt Consultancy", desc: "Analytics engineering met dbt best practices." },
    { slug: "azure-data-engineering", title: "Azure Data Engineering", desc: "ADF, Synapse, Databricks en Fabric." },
  ];
  const others = all.filter((a) => a.slug !== currentSlug).slice(0, 3);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
      {others.map((s) => (
        <li key={s.slug} className="bg-surface">
          <Link
            href={`/diensten/${s.slug}`}
            className="block p-8 group h-full"
          >
            <h3 className="font-display font-bold text-xl text-ink mb-3 group-hover:text-brand transition-colors">
              {s.title}
            </h3>
            <p className="text-ink-soft leading-relaxed mb-6">{s.desc}</p>
            <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink group-hover:text-brand transition-colors">
              Bekijk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
