import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { Layout } from "@/components/Layout";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  </StrictMode>,
);