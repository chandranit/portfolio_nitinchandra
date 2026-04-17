import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import FooterInfo from "@/components/FooterInfo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <ScrollyCanvas />
      <Experience />
      <Projects />
      <FooterInfo />
    </main>
  );
}
