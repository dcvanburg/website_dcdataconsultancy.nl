import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionShell from "@/components/ui/SectionShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaBanner from "@/components/ui/CtaBanner";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { aboutPage, aboutSection, siteConfig } from "@/lib/site-content";
import { CheckCircle2, ArrowRight } from "lucide-react";

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

        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 section-dark overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Over Dennis", href: "/over-dennis" },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] max-w-md">
                  <Image
                    src={aboutSection.profileImage}
                    alt={aboutSection.profileImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  {aboutPage.hero.eyebrow}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                  {aboutPage.hero.heading}
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {aboutPage.hero.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 text-center"
                  >
                    Plan een gesprek
                  </Link>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium rounded-xl transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Bekijk LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell variant="white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl">
            {aboutSection.highlights.map((h) => (
              <div
                key={h.label}
                className="p-6 rounded-2xl border border-gray-200 bg-gray-50"
              >
                <p className="text-3xl font-bold text-gray-900">{h.value}</p>
                <p className="text-sm text-gray-600 mt-1 leading-tight">{h.label}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell variant="light">
          <div className="max-w-3xl space-y-10">
            {aboutPage.story.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Expertise"
          heading="Waar ik in werk"
          intro="Een overzicht van de gebieden waarin ik in de afgelopen jaren expertise heb opgebouwd."
          variant="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutPage.expertise.map((e) => (
              <div
                key={e.area}
                className="p-7 rounded-2xl bg-gray-50 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{e.area}</h3>
                <ul className="space-y-2">
                  {e.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2
                        className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Sectoren"
          heading="Sectoren waar ik in heb gewerkt"
          intro="Iedere sector heeft zijn eigen data-uitdagingen. Dit is waar mijn ervaring zit."
          variant="dark-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {aboutPage.industries.map((ind) => (
              <div
                key={ind}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 text-white/80"
              >
                {ind}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/industrieen"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold transition-colors"
            >
              Bekijk per sector
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Werkprincipes"
          heading="Waar ik voor sta"
          variant="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutPage.values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
