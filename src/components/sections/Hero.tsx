import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { Badge } from '@/lib/utils';
import { AnimatedMonogram } from '../ui/AnimatedMonogram';

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center px-6 md:px-12 bg-noise overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[5%] w-[300px] h-[300px] bg-fruzty-green opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mt-16 flex flex-col items-start relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="flex items-center gap-6 mb-8"
        >
          <AnimatedMonogram className="text-5xl" />
          <Badge className="transform -rotate-2 border-brand/30">
            UI UX DESIGNER • PORTFOLIO 2026
          </Badge>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-[100px] font-bold uppercase leading-[0.85] tracking-[-0.04em]">
            PORTAFOLIO<br/>
            <span className="text-brand">2026</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="mt-8 md:mt-12 max-w-md text-gray-mid text-sm leading-relaxed border-l border-brand pl-6">
            Diseñadora Industrial & UI/UX. Interfaces claras para sistemas complejos. Especializada en software empresarial y entornos industriales críticos.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contacto" 
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-8 py-3.5 rounded-full bg-white text-carbon hover:bg-brand hover:text-white transition-all text-sm font-bold uppercase tracking-wider group"
            >
              Conversemos
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a 
              href="/SERVICIOS-DANIELA-PANTOJA.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-8 py-3.5 rounded-full bg-bg-sec border border-brand/30 text-white hover:bg-brand/10 hover:border-brand/50 transition-all text-sm font-bold uppercase tracking-wider group"
            >
              Ver mis Servicios
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
