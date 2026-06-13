import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten | Senior Data Engineering Consultancy",
  description:
    "Data engineering, analytics, data science, dbt en Azure data engineering — door een senior consultant uit Breda. Bekijk alle diensten van DC Data Consultancy.",
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
    bullets: ["Power BI, Tableau, Looker", "Semantic layer in dbt", "Self-service enablement"],
  },
  {
    title: "Data Science",
    slug: "data-science",
    tagline: "AI in productie",
    description:
      "Forecasting, churn prediction, anomaly detection — productie-modellen, geen losse notebooks.",
    bullets: ["Forecasting & demand planning", "Churn & customer scoring", "MLOps fundamenten"],
  },
  {
    title: "Modern Data Stack",
    slug: "modern-data-stack",
    tagline: "Architectuur voor schaal",
    description:
      "Coherente architectuur op Snowflake/Databricks, dbt, Airflow en BI — niet een verzameling losse onderdelen.",
    bullets: ["End-to-end architectuur", "Tool-selectie", "Cost & governance"],
  },
  {
    title: "dbt Consultancy",
    slug: "dbt-consultancy",
    tagline: "Analytics engineering",
    description:
      "dbt-projecten met structuur, tests, documentation en CI/CD. Schaalbaar van 20 naar 500 models.",
    bullets: ["Project-structuur en naming", "Testing & CI/CD", "Macros & packages"],
  },
  {
    title: "Azure Data Engineering",
    slug: "azure-data-engineering",
    tagline: "Azure specialisme",
    description:
      "ADF, Synapse, Databricks, Microsoft Fabric en moderne lakehouse-architectuur op Azure.",
    bullets: ["Azure Data Factory pipelines", "Databricks lakehouse", "Microsoft Fabric & Purview"],
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
          eyebrow="Diensten"
          heading="Senior data engineering, analytics en science vanuit één consultancy."
          subheading="Mijn focus ligt op data engineering — analytics en data science werken alleen als die fundering klopt. Hieronder de zes specialismen waarin ik werk."
          primaryCta={{ label: "Plan een gesprek", href: "/contact" }}
          secondaryCta={{ label: "Bekijk cases", href: "/cases" }}
        />

        <SectionShell variant="white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className={`group p-7 rounded-2xl border transition-all hover:-translate-y-1 ${
                  s.primary
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-xl shadow-blue-500/20"
                    : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-lg"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                    s.primary ? "text-blue-200" : "text-blue-600"
                  }`}
                >
                  {s.tagline}
                </p>
                <h2
                  className={`text-2xl font-bold mb-3 ${
                    s.primary ? "text-white" : "text-gray-900"
                  }`}
                >
                  {s.title}
                </h2>
                <p
                  className={`leading-relaxed mb-5 ${
                    s.primary ? "text-white/85" : "text-gray-600"
                  }`}
                >
                  {s.description}
                </p>
                <ul
                  className={`space-y-1.5 text-sm mb-5 ${
                    s.primary ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                          s.primary ? "bg-blue-200" : "bg-blue-500"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                    s.primary ? "text-white" : "text-blue-600"
                  }`}
                >
                  Lees meer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Werkvormen"
          heading="Hoe ik samenwerk"
          intro="Iedere opdracht is anders, maar in de praktijk komen drie werkvormen het meest voor."
          variant="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WorkType
              title="Project-gebaseerd"
              description="Strak afgebakend doel met een duidelijke deliverable. Bijvoorbeeld: architectuur-review, dbt-implementatie of een eerste forecasting-model in productie."
              duration="2–6 maanden"
            />
            <WorkType
              title="Interim / lead rol"
              description="Senior data engineer of lead data engineer rol bij jouw team, 3–4 dagen per week. Hands-on bouwen plus coaching van het interne team."
              duration="3–9 maanden"
            />
            <WorkType
              title="Strategisch advies"
              description="Korte intensieve trajecten: architectuur op één A4, technologie-keuze, vendor-selectie of dbt-audit. Geen consultancy-rapporten van 80 pagina's."
              duration="1–4 weken"
            />
          </div>
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
    <div className="p-7 rounded-2xl bg-white border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-5">{description}</p>
      <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
        Typische doorlooptijd: {duration}
      </p>
    </div>
  );
}
