import Link from "next/link";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionShell from "@/components/ui/SectionShell";
import FaqList from "@/components/ui/FaqList";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
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
          items={breadcrumbs.map((b) => ({ name: b.name, url: `${siteConfig.url}${b.href}` }))}
        />
        <FaqSchema items={data.faqs.map((f) => ({ q: f.q, a: f.a }))} />

        {/* Dark hero */}
        <section className="relative isolate overflow-hidden bg-night-field text-night-ink">
          <div aria-hidden="true" className="absolute inset-0 text-night-ink grid-lines pointer-events-none" />
          <div
            aria-hidden="true"
            className="glow-brand absolute -top-24 right-0 w-[34rem] h-[28rem] opacity-50 pointer-events-none"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px rule-glow pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-20 md:pb-24">
            <Breadcrumbs items={breadcrumbs} tone="dark" />
            <div className="max-w-4xl">
              <Reveal as="p" className="eyebrow text-brand-bright mb-6">{data.hero.eyebrow}</Reveal>
              <Reveal
                as="h1"
                delay={60}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-night-ink leading-[1.0] tracking-tight text-balance mb-7"
              >
                {data.hero.heading}
              </Reveal>
              <Reveal as="p" delay={120} className="text-lg md:text-xl text-night-soft-ink max-w-3xl leading-relaxed mb-9">
                {data.hero.subheading}
              </Reveal>
              <Reveal delay={180} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
                >
                  Plan een kennismaking
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/cases"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 font-display font-semibold text-base text-night-ink border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Bekijk cases
                  <ArrowRight className="w-4 h-4 text-brand-bright group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Probleem"
          heading="Herken je dit?"
          intro="Deze patronen kom ik in vrijwel iedere intake tegen. Zelden door gebrek aan inzet, vaak doordat de fundering nooit goed is gelegd."
          variant="canvas"
        >
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            {data.problems.map((p) => (
              <Reveal as="li" key={p} className="flex items-start gap-4 border-t border-rule pt-5">
                <AlertCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-ink-soft leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Oplossing" heading={data.solution.heading} variant="white">
          <div className="max-w-3xl space-y-5 text-ink-soft text-lg leading-relaxed">
            {data.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Wat ik concreet doe" heading="Waar ik mee help" variant="canvas">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {data.capabilities.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 3) * 60} className="border-t border-rule pt-5">
                <h3 className="font-display font-semibold text-ink text-lg mb-2 tracking-tight">{c.title}</h3>
                <p className="text-ink-soft leading-relaxed text-base">{c.description}</p>
              </Reveal>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Aanpak" heading="Hoe een opdracht eruitziet" variant="white">
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80}>
                <div className="w-11 h-11 rounded-xl border border-rule bg-canvas flex items-center justify-center font-mono text-sm text-brand mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-2 tracking-tight">{step.title}</h3>
                <p className="text-ink-soft leading-relaxed">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </SectionShell>

        <SectionShell eyebrow="Resultaat" heading="Wat je eraan overhoudt" variant="canvas">
          <ul className="max-w-3xl space-y-4">
            {data.outcomes.map((o) => (
              <Reveal as="li" key={o} className="flex items-start gap-3 text-ink-soft leading-relaxed text-lg">
                <span className="shrink-0 mt-1 flex items-center justify-center w-5 h-5 rounded-md bg-brand/10">
                  <Check className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                </span>
                {o}
              </Reveal>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Stack" heading="Technologie waar ik in werk" variant="white">
          <ul className="flex flex-wrap gap-2 max-w-4xl">
            {data.stack.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="FAQ" heading="Veelgestelde vragen" variant="canvas">
          <div className="max-w-3xl">
            <FaqList items={data.faqs} />
          </div>
        </SectionShell>

        <SectionShell eyebrow="Verder lezen" heading="Andere diensten" variant="white">
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
    { slug: "analytics-engineering", title: "Analytics Engineering", desc: "Geteste marts, metrics en semantic layers voor BI." },
    { slug: "modern-data-stack", title: "Modern Data Stack", desc: "Coherente architectuur, geen verzameling losse tools." },
    { slug: "dbt-consultancy", title: "dbt Consultancy", desc: "Analytics engineering met dbt best practices." },
    { slug: "azure-data-engineering", title: "Azure Data Engineering", desc: "ADF, Synapse, Databricks en Fabric." },
  ];
  const others = all.filter((a) => a.slug !== currentSlug).slice(0, 3);
  return (
    <ul className="grid md:grid-cols-3 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
      {others.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={i * 80} className="h-full">
          <Link href={`/diensten/${s.slug}`} className="group flex flex-col h-full p-8 bg-surface hover:bg-canvas transition-colors">
            <h3 className="font-display font-bold text-xl text-ink mb-3 tracking-tight group-hover:text-brand transition-colors">
              {s.title}
            </h3>
            <p className="text-ink-soft leading-relaxed mb-6 flex-1">{s.desc}</p>
            <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-ink group-hover:text-brand transition-colors">
              Bekijk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
