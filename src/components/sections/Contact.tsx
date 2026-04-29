import React from 'react';
import { Reveal } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedMonogram } from '../ui/AnimatedMonogram';

export const Contact = () => {
  return (
    <section id="contacto" className="py-32 md:py-48 px-6 md:px-12 bg-bg-main relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <div className="mb-12 flex items-center justify-center">
            <AnimatedMonogram className="text-6xl" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-[80px] font-display font-medium tracking-tight mb-8 leading-[0.9]">
            Diseñemos experiencias <br className="hidden md:block"/> 
            <span className="text-brand-light italic">claras</span> para sistemas <br className="hidden md:block"/> 
            <span className="text-gray-mid">complejos.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-light leading-relaxed mb-16">
            Disponible para proyectos de UI/UX, productos digitales, dashboards, software empresarial y experiencias centradas en el usuario.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a href="mailto:daniela.pantojacal@gmail.com" className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white text-carbon hover:bg-brand hover:text-white transition-all text-base font-semibold uppercase tracking-wider group shadow-xl">
            Conversemos
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </Reveal>
      </div>

      <Footer />
    </section>
  );
};

const Footer = () => (
  <footer className="mt-32 md:mt-48 max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-mid">
    <div className="flex items-center gap-6">
      <span className="text-white">Daniela Pantoja</span>
      <span>UI/UX Designer</span>
      <span>Colombia</span>
    </div>
    
    <div className="flex items-center gap-6">
      <span>Portfolio 2026</span>
      <a href="mailto:daniela.pantojacal@gmail.com" className="hover:text-white transition-colors">Email</a>
      <div className="font-display text-sm font-bold text-white/20">DP</div>
    </div>
  </footer>
);
