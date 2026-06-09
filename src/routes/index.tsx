import { AboutSection } from "#/components/sections/about-section";
import { CtaSection } from "#/components/sections/cta-section";
import { FaqSection } from "#/components/sections/faq-section";
import { HeroSection } from "#/components/sections/hero-section";
import { ServicesSection } from "#/components/sections/services-section";
import { TeamSection } from "#/components/sections/team-section"
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <FaqSection />
      <CtaSection /> 
    </main>
  );
}