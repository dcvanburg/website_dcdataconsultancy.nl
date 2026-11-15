import Link from "next/link";
import {
  ArrowRight,
  AlertCircle,
  BookOpen,
  MessageSquare,
  Bot,
  Plug,
  Star,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionShell from "@/components/ui/SectionShell";
import FaqList from "@/components/ui/FaqList";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { BreadcrumbSchema, ServiceSchema, FaqSchema } from "@/components/SchemaMarkup";
import { aiInterfacePage, siteConfig } from "@/lib/site-content";

const USE_CASE_ICONS: Record<string, LucideIcon> = {
  BookOpen,
  MessageSquare,
  Bot,
  Plug,
};

const data = aiInterfacePage;

export default function AiInterfacePageContent() {
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
              <Reveal as="p" className="eyebrow text-brand-bright mb-6">
                {data.hero.eyebrow}
              </Reveal>
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

              <Reveal delay={150} className="flex flex-wrap gap-2 mb-9">
                {data.pillars.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="chip border-white/15 bg-white/5 text-night-soft-ink hover:text-brand-bright hover:border-brand-bright/40 transition-colors"
                  >
                    {p.id === "mcp"
                      ? "MCP"
                      : p.id === "semantic-layer"
                      ? "Semantische laag"
                      : "Context engineering"}
                  </a>
                ))}
              </Reveal>

              <Reveal delay={180} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
                >
                  Plan een kennismaking
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diensten/data-engineering"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 font-display font-semibold text-base text-night-ink border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Bekijk data engineering
                  <ArrowRight className="w-4 h-4 text-brand-bright group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Problems */}
        <SectionShell
          eyebrow="Probleem"
          heading="Waar AI-initiatieven in de praktijk stuklopen"
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

        {/* The three pillars — the core of the page */}
        {data.pillars.map((pillar, index) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`scroll-mt-24 py-24 md:py-32 ${index % 2 === 0 ? "surface-white" : "surface-canvas"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
                <div className="lg:col-span-7">
                  <Reveal as="p" className="eyebrow eyebrow-brand mb-6">
                    {pillar.eyebrow}
                  </Reveal>
                  <Reveal
                    as="h2"
                    delay={60}
                    className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6"
                  >
                    {pillar.title}
                  </Reveal>
                  <Reveal as="p" delay={120} className="text-ink-soft text-lg leading-relaxed mb-6">
                    {pillar.lead}
                  </Reveal>
                  <div className="space-y-5 text-ink-soft leading-relaxed">
                    {pillar.body.map((p, i) => (
                      <Reveal as="p" key={i} delay={i * 60}>
                        {p}
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Why data/analytics engineering matters for this layer */}
                <Reveal delay={80} className="lg:col-span-5">
                  <div className="rounded-2xl border border-rule bg-surface p-8 md:p-9">
                    <h3 className="font-display font-bold text-xl text-ink tracking-tight mb-6">
                      {pillar.whyEngineering.heading}
                    </h3>
                    <ul className="space-y-5">
                      {pillar.whyEngineering.points.map((point, i) => (
                        <li key={point} className="flex items-start gap-4 border-t border-rule pt-5 first:border-t-0 first:pt-0">
                          <span
                            className="shrink-0 font-mono text-xs text-brand mt-0.5"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-ink-soft leading-relaxed text-[15px]">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}

        {/* Use cases */}
        <SectionShell
          eyebrow="Toepassingen"
          heading="Wat je hiermee bouwt"
                    variant="canvas"
        >
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {data.useCases.map((c, i) => {
              const Icon = USE_CASE_ICONS[c.icon] ?? Star;
              return (
                <Reveal as="li" key={c.title} delay={(i % 4) * 70} className="border-t border-rule pt-6">
                  <div className="w-11 h-11 rounded-xl border border-rule bg-surface flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-2 tracking-tight">{c.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{c.description}</p>
                </Reveal>
              );
            })}
          </ul>
        </SectionShell>

        {/* Process */}
        <SectionShell eyebrow="Aanpak" heading="Hoe een traject eruitziet" variant="white">
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

        <SectionShell eyebrow="FAQ" heading="Veelgestelde vragen" variant="canvas">
          <div className="max-w-3xl">
            <FaqList items={data.faqs} />
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Verder lezen"
          heading="De fundering hieronder"
                    variant="white"
        >
          <ul className="grid md:grid-cols-3 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
            {[
              {
                slug: "data-engineering",
                title: "Data Engineering",
                desc: "Betrouwbare pipelines en een lakehouse waar agents op kunnen bouwen.",
              },
              {
                slug: "analytics-engineering",
                title: "Analytics Engineering",
                desc: "Geteste marts en metrics: wat een LLM ervan weerhoudt definities te verzinnen.",
              },
              {
                slug: "data-analytics",
                title: "Data Analytics",
                desc: "Business metrics en dashboards op dezelfde definities die agents gebruiken.",
              },
            ].map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/diensten/${s.slug}`}
                  className="group flex flex-col h-full p-8 bg-surface hover:bg-canvas transition-colors"
                >
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
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
