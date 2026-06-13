// JSON-LD structured data components.
// Renders inline <script type="application/ld+json"> tags for SEO.

import { siteConfig } from "@/lib/site-content";

type SchemaProps<T> = { data: T };

function JsonLd<T>({ data }: SchemaProps<T>) {
  return (
    <script
      type="application/ld+json"
      // Schema content is generated server-side, fully trusted.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "DC Data",
    description:
      "Senior data engineering consultancy gevestigd in Breda. Schaalbare data pipelines, cloud dataplatforms en analytics engineering voor enterprise opdrachtgevers.",
    url: siteConfig.url,
    email: siteConfig.email,
    foundingDate: `${siteConfig.foundedYear}-01-01`,
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#dennis`,
      name: "Dennis van Burg",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: "NL",
    },
    areaServed: [
      { "@type": "Country", name: "Netherlands" },
      { "@type": "City", name: "Breda" },
      { "@type": "City", name: "Tilburg" },
      { "@type": "City", name: "Eindhoven" },
      { "@type": "City", name: "Rotterdam" },
      { "@type": "City", name: "Amsterdam" },
      { "@type": "City", name: "Utrecht" },
    ],
    knowsAbout: [
      "Data Engineering",
      "Data Analytics",
      "Data Science",
      "Modern Data Stack",
      "dbt",
      "Snowflake",
      "Databricks",
      "Azure Data Engineering",
      "Power BI",
      "Apache Airflow",
      "Analytics Engineering",
    ],
    serviceType: [
      "Data Engineering Consultancy",
      "Data Analytics Consultancy",
      "Data Science Consultancy",
      "dbt Consultancy",
      "Azure Data Engineering",
    ],
    sameAs: [siteConfig.linkedin],
  };
  return <JsonLd data={data} />;
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description:
      "Senior data engineering consultancy uit Breda — schaalbare, betrouwbare en business-driven dataplatforms.",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "nl-NL",
  };
  return <JsonLd data={data} />;
}

export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#dennis`,
    name: "Dennis van Burg",
    jobTitle: "Senior Data Engineering Consultant",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    url: `${siteConfig.url}/over-dennis`,
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      "Data Engineering",
      "Analytics Engineering",
      "dbt",
      "Snowflake",
      "Databricks",
      "Microsoft Azure",
      "Apache Airflow",
      "Power BI",
      "Data Science",
      "Modern Data Stack",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: "NL",
    },
  };
  return <JsonLd data={data} />;
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "Netherlands" },
    serviceType: name,
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLd data={data} />;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@id": `${siteConfig.url}/#dennis` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "nl-NL",
  };
  return <JsonLd data={data} />;
}

export function FaqSchema({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <JsonLd data={data} />;
}
