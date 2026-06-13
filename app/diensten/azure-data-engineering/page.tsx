import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { azureDataEngineeringPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: azureDataEngineeringPage.metaTitle,
  description: azureDataEngineeringPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/azure-data-engineering` },
  openGraph: {
    title: azureDataEngineeringPage.metaTitle,
    description: azureDataEngineeringPage.metaDescription,
    url: `${siteConfig.url}/diensten/azure-data-engineering`,
    type: "website",
  },
};

export default function AzureDataEngineeringPage() {
  return <ServicePageTemplate data={azureDataEngineeringPage} />;
}
