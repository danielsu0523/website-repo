import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import TeachingSection from "@/components/teaching-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <TeachingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
