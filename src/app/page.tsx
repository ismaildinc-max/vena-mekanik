import VMHero from "@/sections/VMHero";
import VMIntroServices from "@/sections/VMIntroServices";
import VMReferenceStrip from "@/sections/VMReferenceStrip";
import VMProjectsShowcase from "@/sections/VMProjectsShowcase";
import VMQualityStandards from "@/sections/VMQualityStandards";
import VMContactSection from "@/sections/VMContactSection";

export default function Home() {
  return (
    <main>
      <VMHero />

      <VMReferenceStrip
        compact
        className="block md:hidden"
        sectionId="referanslarimiz-mobile"
      />

      <VMIntroServices />

      <VMReferenceStrip className="hidden md:block" />

      <VMProjectsShowcase />
      <VMQualityStandards />
      <VMContactSection />
    </main>
  );
}