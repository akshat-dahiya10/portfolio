"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  LoadingScreen,
  CustomCursor,
  ScrollProgress,
  Navbar,
  CommandMenu,
  BackToTop,
  TechMarquee,
  AIAssistant,
  Footer,
} from "@/components/ui/shared";
import { AuroraBackground, NoiseOverlay, GridBackground, ParticleCanvas } from "@/components/ui/backgrounds";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import { Education, Experience } from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import {
  Testimonials,
  Blog,
  GitHubContributions,
  VisitorCounter,
} from "@/components/sections/Extras";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track spotlight cursor
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Fixed overlays */}
      <AuroraBackground />
      <GridBackground />
      <NoiseOverlay />
      <ScrollProgress />
      <CustomCursor />

      {/* Loading */}
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />

        <main id="home" className="relative">
          <div className="relative">
            <ParticleCanvas />
            <Hero />
          </div>

          <About />
          <Skills />
          <TechMarquee />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <GitHubContributions />
          <Testimonials />
          <Blog />

          <section className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <VisitorCounter />
            </div>
          </section>

          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating UI */}
      <CommandMenu />
      <BackToTop />
      <AIAssistant />
    </>
  );
}
