import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-content";
import { OrganizationSchema, WebsiteSchema, PersonSchema } from "@/components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "DC Data Consultancy | Senior Data Engineering Consultancy Breda",
    template: "%s | DC Data Consultancy",
  },
  description:
    "Senior data engineering consultancy uit Breda. Schaalbare data pipelines, dbt-implementaties en cloud dataplatforms voor organisaties die meer uit data willen halen. Dennis van Burg — sinds 2016 in data, sinds 2021 zelfstandig.",
  keywords: [
    "data engineering consultancy",
    "data engineer Breda",
    "freelance data engineer",
    "interim data engineer Nederland",
    "data consultancy Breda",
    "dbt consultant Nederland",
    "Azure data engineer",
    "modern data stack consultant",
    "data platform consultant",
    "Snowflake consultant",
    "Databricks consultant",
    "data analytics consultancy",
    "Power BI consultant",
    "data science consultant",
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
      "DC Data Consultancy | Senior Data Engineering Consultancy Breda",
    description:
      "Schaalbare, betrouwbare en business-driven dataplatforms. Senior data engineering consultancy uit Breda voor opdrachtgevers in heel Nederland.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "DC Data Consultancy — Senior Data Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Data Consultancy | Senior Data Engineering Consultancy",
    description:
      "Senior data engineering consultancy uit Breda. Schaalbare dataplatforms voor enterprise opdrachtgevers.",
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
    <html lang="nl" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <OrganizationSchema />
        <WebsiteSchema />
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
