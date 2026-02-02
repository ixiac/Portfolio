import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { Sidebar } from "@/components/Sidebar.tsx";
import { Profile } from "@/components/Profile.tsx";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col dark:bg-neutral-900 bg-neutral-200 transition-all duration-600">
        <div className="flex-1 lg:flex lg:justify-center lg:items-start lg:gap-10">
          <Sidebar />
          <Profile />
          <App />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  </StrictMode>,
);
