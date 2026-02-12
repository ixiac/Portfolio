import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { Layout } from "@/interface/Layout";
import { ThemeProvider } from "@/components/contents/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  </StrictMode>,
);