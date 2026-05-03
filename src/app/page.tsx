import { Navigation, Footer } from "@/components/layout";
import type { NavLink } from "@/components/layout/navigation";
import { HeroSection, ProjectSection, TechStackSection, AboutSection, ContactSection } from "@/components/sections";

const SECTION_IDS = {
  home: "home",
  projects: "projects",
  techStack: "tech-stack",
  about: "about",
  contact: "contact",
} as const;

const navLinks: NavLink[] = [
  { name: "Home",       href: `#${SECTION_IDS.home}` },
  { name: "Projects",   href: `#${SECTION_IDS.projects}` },
  { name: "Tech Stack", href: `#${SECTION_IDS.techStack}` },
  { name: "About",      href: `#${SECTION_IDS.about}` },
  { name: "Contact",    href: `#${SECTION_IDS.contact}` },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <Navigation navLinks={navLinks} />
      <main className="grow">
        <HeroSection    id={SECTION_IDS.home} />
        <ProjectSection id={SECTION_IDS.projects} />
        <TechStackSection id={SECTION_IDS.techStack} />
        <AboutSection   id={SECTION_IDS.about} />
        <ContactSection id={SECTION_IDS.contact} />
      </main>
      <Footer />
    </div>
  );
}
