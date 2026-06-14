import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { industriesPage, siteConfig } from "@/lib/site-content";

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
          eyebrow={industriesPage.hero.eyebrow.toUpperCase()}
          heading={industriesPage.hero.heading}
          subheading={industriesPage.hero.intro}
          primaryCta={{ label: "Plan een kennismaking", href: "/contact" }}
          secondaryCta={{ label: "Bekijk cases", href: "/cases" }}
        />

        <SectionShell variant="white">
          <ul className="divide-y divide-rule border-y border-rule">
            {industriesPage.industries.map((ind) => (
              <li key={ind.slug} id={ind.slug} className="py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight mb-4">
                      {ind.name}
                    </h2>
                    <p className="text-ink-soft leading-relaxed">{ind.summary}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="eyebrow mb-4">Typische uitdagingen</p>
                    <ul className="space-y-2.5">
                      {ind.challenges.map((ch) => (
                        <li
                          key={ch}
                          className="flex items-start gap-3 text-ink-soft text-base leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="font-mono text-xs text-brand leading-6 shrink-0"
                          >
                            ::
                          </span>
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="eyebrow mb-4">Ervaring met o.a.</p>
                    <ul className="space-y-2">
                      {ind.experience.map((c) => (
                        <li
                          key={c}
                          className="font-display font-semibold text-ink text-base"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
