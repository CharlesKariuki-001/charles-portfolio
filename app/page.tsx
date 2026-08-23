import Contact from "@/components/Contact";
import Ecosystem from "@/components/Ecosystem";
import Hero from "@/components/Hero";
import LiveProof from "@/components/LiveProof";
import Services from "@/components/Services";
import Story from "@/components/Story";
import WorkCaseStudies from "@/components/WorkCaseStudies";

export default function Home() {
  return (
    <main>
      <Hero />

      <Ecosystem />

      <LiveProof />

      <Services />

      <Story />

      <WorkCaseStudies />

      <Contact />
    </main>
  );
}