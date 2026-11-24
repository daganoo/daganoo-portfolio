import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { useSkipRevisitAnimations } from "./hooks/useSkipRevisitAnimations";
import { useGlassVariation } from "./hooks/useGlassVariation";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

function App() {
  useSkipRevisitAnimations();
  useGlassVariation();
  return (
    <LazyMotion features={domAnimation} strict>
    <div className="min-h-screen overflow-x-clip text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
    </LazyMotion>
  );
}

export default App;
