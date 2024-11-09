import Camp from "@/components/sections/Camp";
import Features from "@/components/sections/Features";
import GetApp from "@/components/sections/GetApp";
import Guide from "@/components/sections/Guide";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Services />
      <Projects />
      <Features />
      <GetApp />
    </>
  );
}
