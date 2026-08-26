import type { Metadata } from "next";
import AiInterfacePageContent from "@/components/AiInterfacePageContent";
import { aiInterfacePage, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: aiInterfacePage.metaTitle,
  description: aiInterfacePage.metaDescription,
  alternates: { canonical: `${siteConfig.url}/diensten/ai-interface` },
  openGraph: {
    title: aiInterfacePage.metaTitle,
    description: aiInterfacePage.metaDescription,
    url: `${siteConfig.url}/diensten/ai-interface`,
    type: "website",
  },
};

export default function AiInterfacePage() {
  return <AiInterfacePageContent />;
}
