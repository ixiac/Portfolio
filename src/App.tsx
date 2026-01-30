import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About.tsx";
import { Projects } from "@/components/Projects.tsx";
import { Resume } from "@/components/Resume.tsx";


function App() {
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-0 lg:pl-0 lg:max-w-6xl">
      <Hero />
      <About />
      <Projects />
      <Resume />
    </main>
  );
}

export default App;
