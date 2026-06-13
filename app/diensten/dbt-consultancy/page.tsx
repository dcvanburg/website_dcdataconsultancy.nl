import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { dbtConsultancyPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: dbtConsultancyPage.metaTitle,
  description: dbtConsultancyPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/dbt-consultancy` },
  openGraph: {
    title: dbtConsultancyPage.metaTitle,
    description: dbtConsultancyPage.metaDescription,
    url: `${siteConfig.url}/diensten/dbt-consultancy`,
    type: "website",
  },
};

export default function DbtConsultancyPage() {
  return <ServicePageTemplate data={dbtConsultancyPage} />;
}
