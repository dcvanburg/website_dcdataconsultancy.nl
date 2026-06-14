import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionShell from "@/components/ui/SectionShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { aboutPage, aboutSection, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/over-dennis` },
  openGraph: {
    title: aboutPage.metaTitle,
    description: aboutPage.metaDescription,
    url: `${siteConfig.url}/over-dennis`,
    type: "profile",
  },
};

export default function OverDennisPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Over Dennis", url: `${siteConfig.url}/over-dennis` },
          ]}
        />

        <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 surface-canvas overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 text-ink grid-dot pointer-events-none"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Over Dennis", href: "/over-dennis" },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden border border-rule aspect-[4/5] max-w-md bg-rule-soft">
                  <Image
                    src={aboutSection.profileImage}
                    alt={aboutSection.profileImageAlt}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="eyebrow eyebrow-brand mb-6">{aboutPage.hero.eyebrow}</p>
                <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.0] tracking-tight text-balance mb-8">
                  {aboutPage.hero.heading}
                </h1>
                <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-10">
                  {aboutPage.hero.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-md shadow-brand/15 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 transition-all"
                  >
                    Plan een kennismaking
                  </Link>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-2 py-3 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
                  >
                    Bekijk LinkedIn
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell variant="white">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 max-w-4xl">
            {aboutSection.highlights.map((h) => (
              <li key={h.label}>
                <p className="font-display font-extrabold text-5xl md:text-6xl text-ink leading-none tracking-tight mb-3">
                  {h.value}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted leading-relaxed">
                  {h.label}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell variant="canvas">
          <div className="max-w-3xl space-y-14">
            {aboutPage.story.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-5 tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-ink-soft leading-relaxed text-lg">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="EXPERTISE"
          heading="Waar ik in werk"
          intro="Een overzicht van de gebieden waarin ik in de afgelopen jaren expertise heb opgebouwd."
          variant="white"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {aboutPage.expertise.map((e) => (
              <li key={e.area} className="border-t border-rule pt-6">
                <h3 className="font-display font-bold text-xl text-ink mb-4">
                  {e.area}
                </h3>
                <ul className="space-y-1.5">
                  {e.items.map((item) => (
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
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow="SECTOREN"
          heading="Sectoren waar ik in heb gewerkt"
          intro="Iedere sector heeft zijn eigen data uitdagingen. Dit is waar mijn ervaring zit."
          variant="canvas"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
            {aboutPage.industries.map((ind) => (
              <li
                key={ind}
                className="flex items-start gap-3 text-ink-soft text-base leading-relaxed border-b border-rule pb-3"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-brand leading-6 shrink-0"
                >
                  ::
                </span>
                {ind}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link
              href="/industrieen"
              className="inline-flex items-center gap-2 font-display font-semibold text-base text-ink hover:text-brand transition-colors"
            >
              Bekijk per sector
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="WERKPRINCIPES"
          heading="Waar ik voor sta"
          variant="white"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {aboutPage.values.map((v) => (
              <li key={v.title} className="border-t border-rule pt-6">
                <h3 className="font-display font-bold text-xl text-ink mb-3">
                  {v.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{v.description}</p>
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
