# 🌐 Personal Web Portfolio

A modern, responsive personal portfolio website built to showcase my projects, skills, and experience.

Designed with performance, accessibility, and clean UI in mind.

## ✨ Portfolio Preview

<p align="center">
  <strong>Desktop View</strong><br /><br />
  <img 
    src="./public/preview/Portfolio%20Hero.png"
    width="1000"
    alt="Portfolio Desktop Preview"
  />
</p>

<p align="center">
  <strong>Mobile View</strong><br /><br />
  <img 
    src="./public/preview/mobile-1.png"
    width="400"
    alt="Portfolio Mobile Preview 1"
    style="margin-right: 20px;"
  />
  <img 
    src="./public/preview/mobile-2.png"
    width="400"
    alt="Portfolio Mobile Preview 2"
  />
</p>

## 🚀 Tech Stack

- **React** – Component-based UI
- **TypeScript** – Type safety and better DX
- **Vite** – Fast dev server and optimized builds
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible, customizable UI components

## ✨ Features

- Responsive design (mobile-first)
- Clean and minimal UI
- Reusable component architecture
- Accessible components via shadcn/ui
- Fast load times with Vite
- Easy to customize and extend

## 📁 Project Structure
Layout.tsx:
```tsx
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
```

App.tsx:
```tsx
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About.tsx";
import { Projects } from "@/components/Projects.tsx";
import { Resume } from "@/components/Resume.tsx";
import { Contact } from "@/components/Contact.tsx";
import Lenis from "lenis";

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
```
