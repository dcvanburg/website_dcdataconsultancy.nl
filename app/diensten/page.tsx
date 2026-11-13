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
    "Data engineering, analytics engineering, dbt, Azure data engineering en de AI-interface (MCP, semantic layer, context engineering) door een senior consultant uit Breda.",
  alternates: { canonical: `${siteConfig.url}/diensten` },
};

const services = [
  {
    title: "Data Engineering",
    slug: "data-engineering",
    tagline: "Hoofdspecialisatie",
    description: "Pipelines, datawarehousing en datamodellen: de fundering onder BI en AI.",
    primary: true,
  },
  {
    title: "Data Analytics",
    slug: "data-analytics",
    tagline: "Inzicht met onderbouwing",
    description: "Van losse rapporten naar dashboards op heldere, gedeelde metrics.",
  },
  {
    title: "Analytics Engineering",
    slug: "analytics-engineering",
    tagline: "Betrouwbare metrics",
    description: "Geteste datamodellen en een semantische laag als één bron van waarheid.",
  },
  {
    title: "AI-interface",
    slug: "ai-interface",
    tagline: "MCP & semantische laag",
    description: "MCP-servers en context waarmee AI-agents je data correct bevragen.",
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
          heading="Wat ik voor je kan doen."
          subheading="Vier diensten, één fundering: data die klopt, voor BI, analytics en AI."
          primaryCta={{ label: "Plan een kennismaking", href: "/#contact" }}
        />

        <SectionShell variant="white">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
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
          intro="Drie werkvormen die het vaakst voorkomen."
          variant="canvas"
        >
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            <WorkType
              title="Projectgebaseerd"
              description="Een afgebakend doel met een duidelijke oplevering, zoals een dbt-implementatie."
              duration="2 tot 6 maanden"
            />
            <WorkType
              title="Interim of lead rol"
              description="Senior of lead data engineer in je team, 3 tot 4 dagen per week."
              duration="3 tot 9 maanden"
            />
            <WorkType
              title="Strategisch advies"
              description="Kort en intensief: architectuurreview, technologiekeuze of dbt-audit."
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
