import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Diensten | Senior Data Engineering Consultancy",
  description:
    "Data engineering, analytics engineering, dbt en Azure data engineering door een senior consultant uit Breda. Bekijk alle diensten van DC Data Consultancy.",
  alternates: { canonical: `${siteConfig.url}/diensten` },
};

const services = [
  {
    title: "Data Engineering",
    slug: "data-engineering",
    tagline: "Hoofdspecialisatie",
    description:
      "Schaalbare data pipelines, cloud datawarehousing en data modelling. De fundering waar alles boven op staat.",
    bullets: [
      "ELT/ETL met dbt en Airflow",
      "Snowflake, Databricks en Synapse",
      "Data quality, testing en CI/CD",
    ],
    primary: true,
  },
  {
    title: "Data Analytics",
    slug: "data-analytics",
    tagline: "Inzicht met onderbouwing",
    description:
      "Van losse rapporten naar één gemodelleerde semantische laag met heldere business metrics.",
    bullets: [
      "Power BI, Tableau, Looker",
      "Semantic layer in dbt",
      "Self service enablement",
    ],
  },
  {
    title: "Analytics Engineering",
    slug: "analytics-engineering",
    tagline: "Betrouwbare metrics",
    description:
      "Gelaagde modellering, dbt marts en semantic layers. Eén bron van waarheid waar BI op vertrouwt.",
    bullets: [
      "Metric & KPI modellering",
      "Staging → intermediate → marts",
      "Testing, docs en CI/CD",
    ],
  },
  {
    title: "Modern Data Stack",
    slug: "modern-data-stack",
    tagline: "Architectuur voor schaal",
    description:
      "Coherente architectuur op Snowflake, Databricks, dbt, Airflow en BI. Niet een verzameling losse onderdelen.",
    bullets: [
      "End to end architectuur",
      "Tool selectie",
      "Cost en governance",
    ],
  },
  {
    title: "dbt Consultancy",
    slug: "dbt-consultancy",
    tagline: "Analytics engineering",
    description:
      "dbt projecten met structuur, tests, documentation en CI/CD. Schaalbaar van 20 naar 500 models.",
    bullets: [
      "Project structuur en naming",
      "Testing en CI/CD",
      "Macros en packages",
    ],
  },
  {
    title: "Azure Data Engineering",
    slug: "azure-data-engineering",
    tagline: "Azure specialisme",
    description:
      "ADF, Synapse, Databricks, Microsoft Fabric en moderne lakehouse architectuur op Azure.",
    bullets: [
      "Azure Data Factory pipelines",
      "Databricks lakehouse",
      "Microsoft Fabric en Purview",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Diensten", url: `${siteConfig.url}/diensten` },
          ]}
        />

        <PageHero
          eyebrow="DIENSTEN"
          heading="Senior data engineering en analytics engineering vanuit één consultancy."
          subheading="Mijn focus ligt op data engineering. Analytics engineering werkt alleen als die fundering klopt. Hieronder de zes specialismen waarin ik werk."
          primaryCta={{ label: "Plan een kennismaking", href: "/contact" }}
          secondaryCta={{ label: "Bekijk cases", href: "/cases" }}
        />

        <SectionShell variant="white">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {services.map((s) => (
              <li
                key={s.slug}
                className={`${
                  s.primary ? "surface-brand" : "bg-surface"
                } relative`}
              >
                <Link
                  href={`/diensten/${s.slug}`}
                  className="group block p-8 md:p-10 h-full"
                >
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-5 ${
                      s.primary ? "text-brand-ink/70" : "text-brand"
                    }`}
                  >
                    {s.tagline}
                  </p>
                  <h2
                    className={`font-display font-bold text-2xl mb-3 tracking-tight ${
                      s.primary ? "text-brand-ink" : "text-ink"
                    }`}
                  >
                    {s.title}
                  </h2>
                  <p
                    className={`leading-relaxed mb-6 ${
                      s.primary ? "text-brand-ink/85" : "text-ink-soft"
                    }`}
                  >
                    {s.description}
                  </p>
                  <ul
                    className={`space-y-2 text-sm mb-6 ${
                      s.primary ? "text-brand-ink/80" : "text-ink-muted"
                    }`}
                  >
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span
                          className={`font-mono text-xs leading-5 shrink-0 ${
                            s.primary ? "text-brand-ink/70" : "text-brand"
                          }`}
                          aria-hidden="true"
                        >
                          ::
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`inline-flex items-center gap-1.5 font-display font-semibold text-sm ${
                      s.primary ? "text-brand-ink" : "text-ink group-hover:text-brand"
                    } transition-colors`}
                  >
                    Lees meer
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="WERKVORMEN"
          heading="Hoe ik samenwerk"
          intro="Iedere opdracht is anders, maar in de praktijk komen drie werkvormen het meest voor."
          variant="canvas"
        >
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            <WorkType
              title="Projectgebaseerd"
              description="Strak afgebakend doel met een duidelijke deliverable. Bijvoorbeeld een architectuur review, dbt implementatie of een eerste forecasting model in productie."
              duration="2 tot 6 maanden"
            />
            <WorkType
              title="Interim of lead rol"
              description="Senior data engineer of lead data engineer rol bij jouw team, 3 tot 4 dagen per week. Hands on bouwen plus coaching van het interne team."
              duration="3 tot 9 maanden"
            />
            <WorkType
              title="Strategisch advies"
              description="Korte intensieve trajecten. Architectuur op één A4, technologiekeuze, vendor selectie of dbt audit. Geen consultancy rapporten van 80 paginas."
              duration="1 tot 4 weken"
            />
          </ul>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

function WorkType({
  title,
  description,
  duration,
}: {
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <li className="border-t border-rule pt-6">
      <h3 className="font-display font-bold text-xl text-ink mb-3">{title}</h3>
      <p className="text-ink-soft leading-relaxed mb-5">{description}</p>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
        Typische doorlooptijd: {duration}
      </p>
    </li>
  );
}
