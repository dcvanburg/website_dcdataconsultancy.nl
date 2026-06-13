import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyDataSection from "@/components/WhyDataSection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import QuoteSection from "@/components/QuoteSection";
import AiUseCasesSection from "@/components/AiUseCasesSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyDataSection />
        <AboutSection />
        <OfferSection />
        <QuoteSection />
        <AiUseCasesSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
