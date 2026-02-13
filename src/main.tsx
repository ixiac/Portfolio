import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { Layout } from "@/interface/Layout";
import { ThemeProvider } from "@/components/contents/theme-provider";
import { Intro } from "@/components/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />;
  }

  return <Layout />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
);