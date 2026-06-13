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
          eyebrow={casesPage.hero.eyebrow}
          heading={casesPage.hero.heading}
          subheading={casesPage.hero.intro}
          primaryCta={{ label: "Plan een gesprek", href: "/contact" }}
          secondaryCta={{ label: "Bekijk industrieën", href: "/industrieen" }}
        />

        <SectionShell variant="white">
          <div className="space-y-6">
            {casesPage.cases.map((c) => (
              <article
                key={c.slug}
                id={c.slug}
                className="p-7 md:p-10 rounded-3xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                      {c.industry}
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                      {c.role}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {c.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white text-gray-700 text-xs border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-8 space-y-4">
                    <CaseBlock label="Uitdaging" text={c.challenge} />
                    <CaseBlock label="Aanpak" text={c.approach} />
                    <CaseBlock label="Resultaat" text={c.outcome} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 text-sm text-gray-500 max-w-2xl">{casesPage.disclaimer}</p>
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
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
