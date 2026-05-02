import { Navigation, Footer } from "@/components/layout";
import { HeroSection, ProjectSection, TechStackSection, AboutSection, ContactSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <Navigation />
      <main className="grow">
        <HeroSection />
        <ProjectSection />
        <TechStackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
