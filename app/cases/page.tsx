import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { casesPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: casesPage.metaTitle,
  description: casesPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/cases` },
  openGraph: {
    title: casesPage.metaTitle,
    description: casesPage.metaDescription,
    url: `${siteConfig.url}/cases`,
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Cases", url: `${siteConfig.url}/cases` },
          ]}
        />

        <PageHero
          eyebrow={casesPage.hero.eyebrow.toUpperCase()}
          heading={casesPage.hero.heading}
          subheading={casesPage.hero.intro}
          primaryCta={{ label: "Plan een kennismaking", href: "/contact" }}
          secondaryCta={{ label: "Bekijk industrieën", href: "/industrieen" }}
        />

        <SectionShell variant="white">
          <ul className="divide-y divide-rule border-y border-rule">
            {casesPage.cases.map((c) => (
              <li key={c.slug} id={c.slug} className="py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand mb-3">
                      {c.industry}
                    </p>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink leading-snug tracking-tight mb-6">
                      {c.role}
                    </h2>
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {c.tech.map((t) => (
                        <li
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 bg-rule-soft text-ink-soft rounded"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-8 space-y-6">
                    <CaseBlock label="Uitdaging" text={c.challenge} />
                    <CaseBlock label="Aanpak" text={c.approach} />
                    <CaseBlock label="Resultaat" text={c.outcome} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-ink-muted max-w-2xl">
            {casesPage.disclaimer}
          </p>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-ink-soft leading-relaxed text-base">{text}</p>
    </div>
  );
}
