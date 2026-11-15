import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-content";
import { OrganizationSchema, WebsiteSchema, PersonSchema } from "@/components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "DC Data Consultancy | Senior Data Engineering Consultancy Nederland",
    template: "%s | DC Data Consultancy",
  },
  description:
    "Senior data engineering consultancy voor heel Nederland. Schaalbare pipelines en cloud dataplatforms als fundering voor BI, analytics en AI. Zonder betrouwbare data en vaste metrics hallucineren LLM's. Door Dennis van Burg, sinds 2016 in data.",
  keywords: [
    "data engineering consultancy",
    "data engineer Nederland",
    "freelance data engineer",
    "interim data engineer Nederland",
    "data consultancy Nederland",
    "modern data stack consultant",
    "data platform consultant",
    "data analytics consultancy",
    "analytics engineering consultant",
    "AI data engineering",
    "LLM dataplatform",
    "MCP consultant Nederland",
    "semantic layer AI",
    "AI readiness data",
  ],
  authors: [{ name: "Dennis van Burg", url: siteConfig.linkedin }],
  creator: "Dennis van Burg",
  publisher: "DC Data Consultancy",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "DC Data Consultancy | Senior Data Engineering Consultancy Nederland",
    description:
      "Senior data engineering consultancy voor heel Nederland. Dataplatforms waar BI, analytics en AI op kunnen vertrouwen, omdat pipelines en metrics kloppen.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "DC Data Consultancy. Senior Data Engineering Consultancy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Data Consultancy | Senior Data Engineering Consultancy",
    description:
      "Senior data engineering consultancy voor heel Nederland. Schaalbare dataplatforms als fundering voor BI, analytics en betrouwbare AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: { "nl-NL": siteConfig.url },
  },
  category: "Technology",
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${manrope.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        <OrganizationSchema />
        <WebsiteSchema />
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
