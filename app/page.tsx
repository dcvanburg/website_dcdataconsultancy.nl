import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import AiInterfaceSection from "@/components/AiInterfaceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfferSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <AiInterfaceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
