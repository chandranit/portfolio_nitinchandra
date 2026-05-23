import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import FooterInfo from "@/components/FooterInfo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <ScrollyCanvas />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <FooterInfo />
    </main>
  );
}
