import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroPreloader from "./components/HeroPreloader";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ReelsSection from "./components/ReelsSection";
import PixelBreakoutSection from "./components/PixelBreakoutSection";
import ContactSection from "./components/ContactSection";
import { initScrollRefresh } from "./hooks/useSectionReveals";

export function App() {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    initScrollRefresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f2efe9] overflow-x-hidden selection:bg-[#e8b547] selection:text-[#050505]">
      {/* Main Content with Preloader Transition */}
      <main>
        {/* Hero Section with Decryption Ticker & Horizontal Split */}
        <HeroPreloader onPreloadComplete={() => setContentReady(true)} />

        {/* Remaining Sections Fade in */}
        {contentReady && (
          <>
            {/* Fixed Navigation Bar */}
            <Navbar />
            <div className="animate-fade-in-up">
              {/* Word-by-word Scrubbed About Section */}
              <AboutSection />

              {/* What We Can Do — Services We Offer */}
              <ServicesSection />

              {/* Featured Production AI Projects */}
              <ProjectsSection />

              {/* Reels, Shorts & thumbnail designs */}
              <ReelsSection />

              {/* Signature Interactive Pixel Breakout Arcade */}
              <PixelBreakoutSection />

              {/* Contact & Footer */}
              <ContactSection />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
