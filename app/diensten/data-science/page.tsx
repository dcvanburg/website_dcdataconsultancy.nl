import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { dataSciencePage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: dataSciencePage.metaTitle,
  description: dataSciencePage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/data-science` },
  openGraph: {
    title: dataSciencePage.metaTitle,
    description: dataSciencePage.metaDescription,
    url: `${siteConfig.url}/diensten/data-science`,
    type: "website",
  },
};

export default function DataSciencePage() {
  return <ServicePageTemplate data={dataSciencePage} />;
}
