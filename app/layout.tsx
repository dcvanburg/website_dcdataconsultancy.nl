import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DC Data Consultancy | Data Analytics, Data Science & Dashboarding",
  description:
    "DC Data Consultancy — Dennis van Burg. Freelance data analytics consultant met meer dan 8 jaar ervaring. Specialisaties: data engineering, data analyse, dashboarding en AI/data science. Gevestigd in Goes, Nederland.",
  keywords:
    "data consultancy, data analytics, data science, dashboarding, data engineering, AI, Nederland, freelance, Goes",
  openGraph: {
    title: "DC Data Consultancy | Wil jij meer uit je data halen?",
    description:
      "Freelance data analytics consultant. Meer dan 8 jaar ervaring met logistiek, vastgoed, energie, banken en verzekeraars.",
    url: "https://www.dcdataconsultancy.nl",
    siteName: "DC Data Consultancy",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Data Consultancy | Data Analytics & Data Science",
    description:
      "Freelance data analytics consultant. Meer dan 8 jaar ervaring. Data engineering, analyse, dashboarding en AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dcdataconsultancy.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
