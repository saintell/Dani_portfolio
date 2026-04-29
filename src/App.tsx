import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Profile } from './components/sections/Profile';
import { FruztyIntro } from './components/sections/FruztyIntro';
import { FruztyProblem } from './components/sections/FruztyProblem';
import { FruztyPersonas } from './components/sections/FruztyPersonas';
import { FruztyArchitecture } from './components/sections/FruztyArchitecture';
import { FruztyWireframes } from './components/sections/FruztyWireframes';
import { FruztyUI } from './components/sections/FruztyUI';
import { Glimmo } from './components/sections/Glimmo';
import { PCA } from './components/sections/PCA';
import { Contact } from './components/sections/Contact';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-10%" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-bg-main min-h-screen text-white selection:bg-brand selection:text-white relative">
      {/* Editorial Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[33%] w-px bg-white/5 hidden md:block"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden md:block"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SectionWrapper>
          <Profile />
        </SectionWrapper>
        <div id="proyectos">
          <SectionWrapper>
            <FruztyIntro />
          </SectionWrapper>
          <SectionWrapper>
            <FruztyProblem />
          </SectionWrapper>
          <SectionWrapper>
            <FruztyPersonas />
          </SectionWrapper>
          <SectionWrapper>
            <FruztyArchitecture />
          </SectionWrapper>
          <SectionWrapper>
            <FruztyWireframes />
          </SectionWrapper>
          <SectionWrapper>
            <FruztyUI />
          </SectionWrapper>
          <SectionWrapper>
            <Glimmo />
          </SectionWrapper>
          <SectionWrapper>
            <PCA />
          </SectionWrapper>
        </div>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </div>
    </main>
  );
}


