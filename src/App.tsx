import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About.tsx";
import { Projects } from "@/components/Projects.tsx";
import { Resume } from "@/components/Resume.tsx";
import { Contact } from "@/components/Contact.tsx";
import Lenis  from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    (window as any).lenis = lenis;
    
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);
  
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-0 lg:pl-0 lg:max-w-6xl">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
export default App;