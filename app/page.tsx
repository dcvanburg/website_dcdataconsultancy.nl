import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyDataSection from "@/components/WhyDataSection";
import OfferSection from "@/components/OfferSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import QuoteSection from "@/components/QuoteSection";
import AiUseCasesSection from "@/components/AiUseCasesSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/ui/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyDataSection />
        <OfferSection />
        <AboutSection />
        <ProcessSection />
        <QuoteSection />
        <ServicesSection />
        <TechStackSection />
        <AiUseCasesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
