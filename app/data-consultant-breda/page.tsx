import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { bredaPage, siteConfig } from "@/lib/site-content";
import { MapPin, CheckCircle2 } from "lucide-react";

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
            { name: "Data Consultant Breda", url: `${siteConfig.url}/data-consultant-breda` },
          ]}
        />

        <PageHero
          eyebrow={bredaPage.hero.eyebrow}
          heading={bredaPage.hero.heading}
          subheading={bredaPage.hero.intro}
          primaryCta={{ label: "Plan een kennismaking", href: "/contact" }}
          secondaryCta={{ label: "Bekijk diensten", href: "/diensten" }}
        />

        <SectionShell heading={bredaPage.whyBreda.heading} variant="white">
          <div className="max-w-3xl space-y-5 text-gray-700 text-lg leading-relaxed">
            {bredaPage.whyBreda.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Diensten"
          heading={bredaPage.servicesInBreda.heading}
          variant="light"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {bredaPage.servicesInBreda.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200 text-gray-700"
              >
                <CheckCircle2
                  className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="Bereik"
          heading={bredaPage.regions.heading}
          intro="Vanuit Breda werk ik voor opdrachtgevers in heel Nederland. Onsite, hybride of remote — wat past bij jouw team en opdracht."
          variant="white"
        >
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {bredaPage.regions.items.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {r}
              </span>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Lokaal vertrouwen"
          heading={bredaPage.localTrust.heading}
          variant="dark"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {bredaPage.localTrust.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.04] border border-white/10 text-white/85"
              >
                <CheckCircle2
                  className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          heading="Veelgestelde vragen — data consultancy Breda"
          variant="light"
        >
          <div className="max-w-3xl space-y-6">
            <FAQ
              q="Werk je alleen voor opdrachtgevers in Breda?"
              a="Nee, vanuit Breda werk ik voor opdrachtgevers door heel Nederland. Veel werk gebeurt remote of hybride, met sessies op locatie waar dat zinvol is."
            />
            <FAQ
              q="Wat doet een data consultant precies?"
              a="Een data consultant helpt organisaties hun data slimmer in te zetten. In mijn geval ligt de focus op data engineering — pipelines, datawarehouses en dataplatforms — met daarbovenop analytics en data science."
            />
            <FAQ
              q="Welke type opdrachten neem je aan?"
              a="Project-gebaseerde opdrachten (2–6 maanden), interim/lead rollen (3–9 maanden) en kortere strategische trajecten zoals architectuur-reviews of dbt-audits (1–4 weken)."
            />
            <FAQ
              q="Kan ik ook een eerste vrijblijvend gesprek inplannen?"
              a="Ja, ik plan graag een vrijblijvende kennismaking van 30 minuten in. Geen verkooppraatje — wel een eerlijke read op waar je nu staat en wat haalbaar is."
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
    <div className="border-b border-gray-200 pb-6">
      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{q}</h3>
      <p className="text-gray-600 leading-relaxed">{a}</p>
    </div>
  );
}
