import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/SectionShell";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { contactSection, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | DC Data Consultancy",
  description:
    "Neem contact op met Dennis van Burg voor een vrijblijvende kennismaking. Senior data engineering consultancy uit Breda, voor opdrachtgevers in heel Nederland.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact | DC Data Consultancy",
    description:
      "Neem contact op met Dennis van Burg voor een vrijblijvende kennismaking. Senior data engineering consultancy uit Breda.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url: `${siteConfig.url}/contact` },
          ]}
        />

        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
          eyebrow="Contact"
          heading={contactSection.heading}
          subheading="Geen verkooppraatjes. Een korte kennismaking, een eerlijke read op waar je staat, en de mogelijkheid om binnen weken een eerste resultaat te leveren."
        />

        <ContactSection bare />

        <SectionShell
          eyebrow="WAT VERWACHT JE"
          heading="Hoe een eerste gesprek eruitziet"
          intro="Geen verkooppraatje, wel een eerlijke read op waar je nu staat en wat haalbaar is."
          variant="canvas"
        >
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl">
            <Step
              number="01"
              title="Korte intake, 30 minuten"
              description="Je vertelt over je dataomgeving, het probleem en het gewenste resultaat. Ik luister vooral."
            />
            <Step
              number="02"
              title="Eerste read"
              description="Ik deel mijn eerste observaties. Waar zit denk ik de échte bottleneck, en wat zijn realistische opties."
            />
            <Step
              number="03"
              title="Vervolgvoorstel"
              description="Mocht het matchen, dan stuur ik een concreet voorstel met aanpak, doorlooptijd en tarief."
            />
          </ol>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <li>
      <p className="font-mono text-sm text-brand mb-4">{number}</p>
      <h3 className="font-display font-bold text-xl text-ink mb-2">{title}</h3>
      <p className="text-ink-soft leading-relaxed">{description}</p>
    </li>
  );
}
