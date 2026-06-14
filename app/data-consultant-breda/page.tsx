import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { bredaPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: bredaPage.metaTitle,
  description: bredaPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/data-consultant-breda` },
  openGraph: {
    title: bredaPage.metaTitle,
    description: bredaPage.metaDescription,
    url: `${siteConfig.url}/data-consultant-breda`,
    type: "website",
  },
};

export default function BredaPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            {
              name: "Data Consultant Breda",
              url: `${siteConfig.url}/data-consultant-breda`,
            },
          ]}
        />

        <PageHero
          eyebrow={bredaPage.hero.eyebrow.toUpperCase()}
          heading={bredaPage.hero.heading}
          subheading={bredaPage.hero.intro}
          primaryCta={{ label: "Plan een kennismaking", href: "/contact" }}
          secondaryCta={{ label: "Bekijk diensten", href: "/diensten" }}
        />

        <SectionShell heading={bredaPage.whyBreda.heading} variant="white">
          <div className="max-w-3xl space-y-5 text-ink-soft text-lg leading-relaxed">
            {bredaPage.whyBreda.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="DIENSTEN"
          heading={bredaPage.servicesInBreda.heading}
          variant="canvas"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
            {bredaPage.servicesInBreda.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-ink-soft text-base leading-relaxed border-b border-rule pb-3"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-brand leading-6 shrink-0"
                >
                  ::
                </span>
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="BEREIK"
          heading={bredaPage.regions.heading}
          intro="Vanuit Breda werk ik voor opdrachtgevers in heel Nederland. Onsite, hybride of remote, wat past bij jouw team en opdracht."
          variant="white"
        >
          <ul className="flex flex-wrap gap-2 max-w-4xl">
            {bredaPage.regions.items.map((r) => (
              <li
                key={r}
                className="font-mono text-xs px-3 py-1.5 bg-rule-soft text-ink-soft rounded"
              >
                {r}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="LOKAAL VERTROUWEN"
          heading={bredaPage.localTrust.heading}
          variant="canvas"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl">
            {bredaPage.localTrust.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-ink-soft text-base leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-brand leading-6 shrink-0"
                >
                  ::
                </span>
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          heading="Veelgestelde vragen, data consultancy Breda"
          variant="white"
        >
          <div className="max-w-3xl space-y-6">
            <FAQ
              q="Werk je alleen voor opdrachtgevers in Breda?"
              a="Nee, vanuit Breda werk ik voor opdrachtgevers door heel Nederland. Veel werk gebeurt remote of hybride, met sessies op locatie waar dat zinvol is."
            />
            <FAQ
              q="Wat doet een data consultant precies?"
              a="Een data consultant helpt organisaties hun data slimmer in te zetten. In mijn geval ligt de focus op data engineering, pipelines, datawarehouses en dataplatforms, met daarbovenop analytics en data science."
            />
            <FAQ
              q="Welk type opdrachten neem je aan?"
              a="Projectgebaseerde opdrachten van 2 tot 6 maanden, interim of lead rollen van 3 tot 9 maanden en kortere strategische trajecten zoals architectuur reviews of dbt audits van 1 tot 4 weken."
            />
            <FAQ
              q="Kan ik ook een eerste vrijblijvend gesprek inplannen?"
              a="Ja, ik plan graag een vrijblijvende kennismaking van 30 minuten in. Geen verkooppraatje, wel een eerlijke read op waar je nu staat en wat haalbaar is."
            />
          </div>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-rule pb-6">
      <h3 className="font-display font-semibold text-ink mb-2 text-lg">{q}</h3>
      <p className="text-ink-soft leading-relaxed">{a}</p>
    </div>
  );
}
