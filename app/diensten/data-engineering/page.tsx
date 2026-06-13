import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { dataEngineeringPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: dataEngineeringPage.metaTitle,
  description: dataEngineeringPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/data-engineering` },
  openGraph: {
    title: dataEngineeringPage.metaTitle,
    description: dataEngineeringPage.metaDescription,
    url: `${siteConfig.url}/diensten/data-engineering`,
    type: "website",
  },
};

export default function DataEngineeringPage() {
  return <ServicePageTemplate data={dataEngineeringPage} />;
}
