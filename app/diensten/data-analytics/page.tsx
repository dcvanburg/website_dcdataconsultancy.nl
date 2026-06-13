import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { dataAnalyticsPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: dataAnalyticsPage.metaTitle,
  description: dataAnalyticsPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/data-analytics` },
  openGraph: {
    title: dataAnalyticsPage.metaTitle,
    description: dataAnalyticsPage.metaDescription,
    url: `${siteConfig.url}/diensten/data-analytics`,
    type: "website",
  },
};

export default function DataAnalyticsPage() {
  return <ServicePageTemplate data={dataAnalyticsPage} />;
}
