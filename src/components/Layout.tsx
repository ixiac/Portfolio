import { useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Lenis from "lenis";
import { Sidebar } from "@/components/Sidebar";
import { Profile } from "@/components/Profile";
import { Footer } from "@/components/Footer";
import { ScrollButton } from "@/components/scroll-button";
import App from "@/App";

export const Layout = () => {
  useScrollSpy(['hero', 'about', 'projects', 'resume', 'contact'], 150);

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
    <div className="min-h-screen flex flex-col dark:bg-neutral-900 bg-neutral-200 transition-all duration-600 ease-in-out">
      <div className="flex-1 lg:flex lg:justify-center lg:items-start lg:gap-10">
        <Sidebar />
        <Profile />
        <App />
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
};