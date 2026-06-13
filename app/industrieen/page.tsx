import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { industriesPage, siteConfig } from "@/lib/site-content";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: industriesPage.metaTitle,
  description: industriesPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/industrieen` },
  openGraph: {
    title: industriesPage.metaTitle,
    description: industriesPage.metaDescription,
    url: `${siteConfig.url}/industrieen`,
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Industrieën", url: `${siteConfig.url}/industrieen` },
          ]}
        />

        <PageHero
          eyebrow={industriesPage.hero.eyebrow}
          heading={industriesPage.hero.heading}
          subheading={industriesPage.hero.intro}
          primaryCta={{ label: "Plan een gesprek", href: "/contact" }}
          secondaryCta={{ label: "Bekijk cases", href: "/cases" }}
        />

        <SectionShell variant="white">
          <div className="space-y-6">
            {industriesPage.industries.map((ind) => (
              <article
                key={ind.slug}
                id={ind.slug}
                className="p-8 md:p-10 rounded-3xl border border-gray-200 bg-gray-50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {ind.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{ind.summary}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                      Typische uitdagingen
                    </p>
                    <ul className="space-y-2">
                      {ind.challenges.map((ch) => (
                        <li key={ch} className="flex items-start gap-2 text-gray-700 text-sm">
                          <CheckCircle2
                            className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                      Ervaring met o.a.
                    </p>
                    <ul className="space-y-2">
                      {ind.experience.map((c) => (
                        <li key={c} className="text-gray-700 text-sm font-medium">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
