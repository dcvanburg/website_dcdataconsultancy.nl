import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { analyticsEngineeringPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: analyticsEngineeringPage.metaTitle,
  description: analyticsEngineeringPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/analytics-engineering` },
  openGraph: {
    title: analyticsEngineeringPage.metaTitle,
    description: analyticsEngineeringPage.metaDescription,
    url: `${siteConfig.url}/diensten/analytics-engineering`,
    type: "website",
  },
};

export default function AnalyticsEngineeringPage() {
  return <ServicePageTemplate data={analyticsEngineeringPage} />;
}
