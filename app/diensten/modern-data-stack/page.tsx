import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { modernDataStackPage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: modernDataStackPage.metaTitle,
  description: modernDataStackPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/modern-data-stack` },
  openGraph: {
    title: modernDataStackPage.metaTitle,
    description: modernDataStackPage.metaDescription,
    url: `${siteConfig.url}/diensten/modern-data-stack`,
    type: "website",
  },
};

export default function ModernDataStackPage() {
  return <ServicePageTemplate data={modernDataStackPage} />;
}
