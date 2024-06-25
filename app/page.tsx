import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skils";

export default function Home() {
  return (
    <div className=" h-full flex flex-col scroll-smooth items-center justify-center scrollbar-hide  w-full">
      <div className="flex  scrollbar-hide  flex-col gap-5">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
