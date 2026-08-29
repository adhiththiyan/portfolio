import { Navigation, Footer } from "@/components/layout";
import type { NavLink } from "@/components/layout/navigation";
import { HeroSection, AboutSection, ExperienceSection, ProjectSection, ServicesSection } from "@/components/sections";

const SECTION_IDS = {
  home:       "home",
  about:      "about",
  experience: "experience",
  projects:   "projects",
  services:   "services",
} as const;

const navLinks: NavLink[] = [
  { name: "Home",       href: `#${SECTION_IDS.home}` },
  { name: "About",      href: `#${SECTION_IDS.about}` },
  { name: "Experience", href: `#${SECTION_IDS.experience}` },
  { name: "Projects",   href: `#${SECTION_IDS.projects}` },
  { name: "Services",   href: `#${SECTION_IDS.services}` },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <Navigation navLinks={navLinks} />
      <main className="grow">
        <HeroSection       id={SECTION_IDS.home} />
        <AboutSection      id={SECTION_IDS.about} />
        <ExperienceSection id={SECTION_IDS.experience} />
        <ProjectSection    id={SECTION_IDS.projects} />
        <ServicesSection   id={SECTION_IDS.services} />
      </main>
      <Footer />
    </div>
  );
}
