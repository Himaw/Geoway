import Camp from "@/components/sections/Camp";
import Features from "@/components/sections/Features";
import GetApp from "@/components/sections/GetApp";
import Guide from "@/components/sections/Guide";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import ThematicFocus from "@/components/sections/ThematicFocus";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Services />
      <ThematicFocus />
      <Projects />
      <Features />
      <GetApp />
    </>
  );
}
